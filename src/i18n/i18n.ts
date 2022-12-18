import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "about.hello": "Hello,",
        "about.im.franco": "I'm Franco",
        "about.im.frontend.webdev":
          "I'm a full stack web developer based in Argentina.",
        "about.focused.on": "With proficiency using modern",
        "about.reactive": "front-end",
        "about.frameworks": "frameworks",
        "about.aswell": ", as well as back-end services.",

        "navbar.home": "Home",
        "navbar.webapps": "Web Apps",
        "navbar.work": "Work",
        "navbar.contact": "Contact",

        "webapps.titleBakery": 'Premium Bakery',
        "webapps.subBakery": "React Project",
        "webapps.descBakery": "An online bakery store app, made with React for a group project.",
      },
    },
    es: {
      translation: {
        "about.hello": "Hola,",
        "about.im.franco": "soy Franco",
        "about.im.frontend.webdev":
          "Soy un desarrollador web full stack basado en Argentina.",
        "about.focused.on": "con experiencia usando",
        "about.frameworks": "front-end",
        "about.reactive": "frameworks",
        "about.aswell": " modernos, como también servicios de back-end.",

        "navbar.home": "Inicio",
        "navbar.webapps": "Web Apps",
        "navbar.work": "Trabajo",
        "navbar.contact": "Contacto",
        
        "webapps.titleBakery": 'Premium Bakery',
        "webapps.subBakery": "Proyecto de React",
        "webapps.descBakery": "Tienda online con temática de panadería, desarrollada para un trabajo grupal.",
      },
    },
  },
  lng: navigator.language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
