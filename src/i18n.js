import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import pages translations
import homeFR from "./locales/fr/pages/home.json";
import aboutFR from "./locales/fr/pages/about.json";
import projectsFR from "./locales/fr/pages/projects.json";
import contactFR from "./locales/fr/pages/contact.json";

import homeEN from "./locales/en/pages/home.json";
import aboutEN from "./locales/en/pages/about.json";
import projectsEN from "./locales/en/pages/projects.json";
import contactEN from "./locales/en/pages/contact.json";

// Import components translations
import headerFR from "./locales/fr/components/header.json";
import footerFR from "./locales/fr/components/footer.json";
import navigationFR from "./locales/fr/components/navigation.json";

import headerEN from "./locales/en/components/header.json";
import footerEN from "./locales/en/components/footer.json";
import navigationEN from "./locales/en/components/navigation.json";

// Combine all translations
const resourcesFR = {
  // Pages
  home: homeFR,
  about: aboutFR,
  projects: projectsFR,
  contact: contactFR,
  // Components
  header: headerFR,
  footer: footerFR,
  navigation: navigationFR,
};

const resourcesEN = {
  // Pages
  home: homeEN,
  about: aboutEN,
  projects: projectsEN,
  contact: contactEN,
  // Components
  header: headerEN,
  footer: footerEN,
  navigation: navigationEN,
};

i18n.use(initReactI18next).init({
  resources: {
    fr: resourcesFR,
    en: resourcesEN,
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
