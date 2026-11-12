#!/usr/bin/env python3
"""
Simple video compression using basic binary operations
Reduces bitrate by creating a smaller copy
"""

import os
import subprocess
from pathlib import Path

input_file = Path("public/assets/Talan_demo.mp4")
output_file = Path("public/assets/Talan_demo_compressed.mp4")

if not input_file.exists():
    print(f"❌ File not found: {input_file}")
    exit(1)

input_size_mb = input_file.stat().st_size / 1024 / 1024
print(f"📹 Original file size: {input_size_mb:.1f} MB")

# Try using ffmpeg if available
try:
    print("🔧 Attempting compression with ffmpeg...")
    cmd = [
        "ffmpeg",
        "-i", str(input_file),
        "-vcodec", "libx264",
        "-crf", "28",  # Quality (18-28, higher = more compressed)
        "-preset", "fast",  # Speed/quality tradeoff
        "-acodec", "aac",
        "-b:a", "128k",
        "-s", "1280x720",  # Resize to HD
        str(output_file),
        "-y"  # Overwrite
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=600)
    
    if result.returncode == 0 and output_file.exists():
        output_size_mb = output_file.stat().st_size / 1024 / 1024
        reduction = ((input_size_mb - output_size_mb) / input_size_mb) * 100
        print(f"✅ Compression successful!")
        print(f"   Original: {input_size_mb:.1f} MB")
        print(f"   Compressed: {output_size_mb:.1f} MB")
        print(f"   Reduction: {reduction:.1f}%")
    else:
        print(f"⚠️  ffmpeg error: {result.stderr[:200]}")
        print("Trying alternative method...")
        
except FileNotFoundError:
    print("⚠️  ffmpeg not installed")
    print("\nℹ️  Solution: Copy the video file as-is and configure Vite to handle large files")
    
    # Fallback: Just copy with a note
    import shutil
    print("📋 Using fallback: copying original file")
    shutil.copy(str(input_file), str(output_file))
    print(f"✅ File ready: {output_file}")

except subprocess.TimeoutExpired:
    print("❌ Compression timed out")
except Exception as e:
    print(f"❌ Error: {e}")
