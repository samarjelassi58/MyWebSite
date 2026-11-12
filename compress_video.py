#!/usr/bin/env python3
"""
Compress video for web using moviepy
Reduces from 21MB to ~4-5MB with acceptable quality
"""

import os
from moviepy.editor import VideoFileClip
import sys

input_file = "public/assets/Talan_demo.mp4"
output_file = "public/assets/Talan_demo_compressed.mp4"

print(f"📹 Compressing video: {input_file}")
print(f"   Original size: {os.path.getsize(input_file) / 1024 / 1024:.1f} MB")

try:
    # Load the video
    video = VideoFileClip(input_file)
    
    # Resize to reduce quality/size (keep aspect ratio)
    # Original probably 1920x1080 or similar, reduce to 1280x720
    video_resized = video.resize(width=1280)
    
    # Write with reduced bitrate for web
    print("🔧 Encoding with optimized settings...")
    video_resized.write_videofile(
        output_file,
        codec='libx264',
        audio_codec='aac',
        verbose=False,
        logger=None,
        bitrate="2000k"  # Reduced bitrate
    )
    
    output_size = os.path.getsize(output_file) / 1024 / 1024
    input_size = os.path.getsize(input_file) / 1024 / 1024
    reduction = ((input_size - output_size) / input_size) * 100
    
    print(f"✅ Compression complete!")
    print(f"   Original: {input_size:.1f} MB")
    print(f"   Compressed: {output_size:.1f} MB")
    print(f"   Reduction: {reduction:.1f}%")
    print(f"   File: {output_file}")
    
except Exception as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
