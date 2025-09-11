import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Ajoutez ici la logique d'envoi (API, email, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white via-palette-beige/10 to-palette-turquoise/10 dark:from-palette-bleuFonce dark:via-palette-bleu/60 dark:to-palette-bleuClair/20 rounded-xl shadow-lg p-8 max-w-lg mx-auto mt-8 border border-palette-turquoise/30 dark:border-palette-bleuClair/40 backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-palette-bleu to-palette-bleuClair bg-clip-text text-transparent">Contactez-moi</h2>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-palette-turquoise/40 dark:border-palette-bleuClair/40 rounded-lg bg-palette-beige/10 dark:bg-palette-bleuFonce/50 text-palette-bleuFonce dark:text-palette-beige placeholder-palette-bleu/60 dark:placeholder-palette-turquoise/60 focus:outline-none focus:ring-2 focus:ring-palette-bleuClair focus:border-palette-bleuClair transition-all"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-palette-turquoise/40 dark:border-palette-bleuClair/40 rounded-lg bg-palette-beige/10 dark:bg-palette-bleuFonce/50 text-palette-bleuFonce dark:text-palette-beige placeholder-palette-bleu/60 dark:placeholder-palette-turquoise/60 focus:outline-none focus:ring-2 focus:ring-palette-bleuClair focus:border-palette-bleuClair transition-all"
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={form.message}
        onChange={handleChange}
        className="w-full mb-4 px-4 py-2 border border-palette-turquoise/40 dark:border-palette-bleuClair/40 rounded-lg bg-palette-beige/10 dark:bg-palette-bleuFonce/50 text-palette-bleuFonce dark:text-palette-beige placeholder-palette-bleu/60 dark:placeholder-palette-turquoise/60 focus:outline-none focus:ring-2 focus:ring-palette-bleuClair focus:border-palette-bleuClair transition-all resize-none"
        rows={5}
        required
      />
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-palette-bleu to-palette-bleuClair text-white py-2 rounded-lg hover:from-palette-bleuClair hover:to-palette-turquoise hover:scale-105 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
      >
        Envoyer
      </button>
      {sent && <p className="mt-4 text-palette-turquoise dark:text-palette-jaune font-medium">Message envoyé !</p>}
    </form>
  );
};

export default ContactForm;
