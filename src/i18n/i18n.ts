import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "about.hello": "Hello,",
        "about.im.franco": "I'm Franco",
        "about.im.frontend.webdev":
          "I'm a frontend web developer based in Argentina.",
        "about.focused.on": "focused on",
        "about.frameworks": "frameworks.",
        "about.reactive": "reactive",

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
          "Soy un desarrollador web de frontend basado en Argentina.",
        "about.focused.on": "enfocado en frameworks",
        "about.frameworks": "",
        "about.reactive": "reactivos",

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
