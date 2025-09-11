import React from "react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-palette-bleuFonce via-palette-bleu to-palette-bleuFonce text-palette-beige py-6 px-8 mt-12 text-center rounded-t-xl shadow-lg border-t border-palette-turquoise/30 relative overflow-hidden">
    {/* Decorative overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-palette-turquoise/10 via-transparent to-palette-turquoise/10"></div>
    <div className="relative z-10">
      <p className="font-medium">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      <div className="mt-2 h-px bg-gradient-to-r from-transparent via-palette-turquoise/50 to-transparent"></div>
    </div>
  </footer>
);

export default Footer;
