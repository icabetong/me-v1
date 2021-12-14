import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "me": "Isaiah Collins",
        "me_complete": "Isaiah Collins Abetong",
        "position": "developer",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "twitter": "Twitter",
        "navigation": {
          "about": "About",
          "works": "Works",
          "contact": "Contact",
        },
        "home": {
          "header_greet": "Hi, I'm <focus>{{me}}</focus>",
          "header_field": "I'm a mobile app <focus>{{position}}</focus>",
          "header_basic": "Currently a student in Central Luzon State University, I specialize in creating mobile apps with both native and cross-platform solutions; with also some proficiency with web frameworks.",
          "read_my_resume": "Read my Resume",
          "lets_connect": "Let's Connect:",
        },
        "about": {
          "skills": "Skills",
          "introduction": "Introduction",
          "info": "I currently am being proficient in native Android development, developed some apps as sideprojects. You can check them out on my GitHub profile.\n\nHowever, I am also acquainted in web development, being done my thesis project using web technologies such as React and NodeJS.\n\nCurrently I am exploring the world of cross platforms development using the relatively new Flutter framework; and I currently enjoy it.",
        },
        "footer": {
          "copyright": "© 2021 <focus>{{me}}</focus>. All rights reserved.",
        },
        "skill": {
          "android": "Android",
          "kotlin": "Kotlin",
          "java": "Java",
          "flutter": "Flutter",
          "sql": "SQL",
          "mongodb": "MongoDB",
          "javascript": "JavaScript",
          "typescript": "TypeScript",
          "nodejs": "Node.JS",
          "reactjs": "React.JS",
          "expressjs": "Express.JS"
        },
        "contact": {
          "get_in_touch": "Get in Touch",
          "get_in_touch_body": "Interested in working together? We should queue up a chat.",
          "say_hello": "Say Hello"
        }
      }
    },
    de: {
      translation: {
        "me": "Isaiah Collins",
        "me_complete": "Isaiah Collins Abetong",
        "position": "Entwickler",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "twitter": "Twitter",
        "navigation": {
          "about": "Über",
          "works": "Werke",
          "contact": "Kontakt",
        },
        "home": {
          "header_greet": "Hallo, ich bin <focus>{{me}}</focus>",
          "header_field": "Ich bin ein <focus>{{position}}</focus> für mobile Anwendungen",
          "header_basic": "Zurzeit bin ich Studentin an der Central Luzon State University und habe mich auf die Entwicklung mobiler Anwendungen mit nativen und plattformübergreifenden Lösungen spezialisiert; außerdem besitze ich einige Kenntnisse in Web-Frameworks.",
          "read_my_resume": "Meinen Lebenslauf lesen",
          "lets_connect": "Verbinden wir uns:",
        },
        "about": {
          "skills": "Fertigkeiten",
          "introduction": "Einführungen",
          "info": "Derzeit bin ich in der nativen Android-Entwicklung bewandert und habe einige Apps als Nebenprojekte entwickelt. Du kannst sie auf meinem GitHub-Profil sehen.\n\nAllerdings bin ich auch mit der Webentwicklung vertraut, da ich mein Diplomarbeitsprojekt mit Webtechnologien wie React und NodeJS durchgeführt habe.\n\nZurzeit erforsche ich die Welt der plattformübergreifenden Entwicklung mit dem relativ neuen Flutter-Framework; und ich genieße es derzeit.",
        },
        "footer": {
          "copyright": "© 2021 <focus>{{me}}</focus>. Alle Rechte vorbehalten.",
        },
        "skill": {
          "android": "Android",
          "kotlin": "Kotlin",
          "java": "Java",
          "flutter": "Flutter",
          "sql": "SQL",
          "mongodb": "MongoDB",
          "javascript": "JavaScript",
          "typescript": "TypeScript",
          "nodejs": "Node.JS",
          "reactjs": "React.JS",
          "expressjs": "Express.JS"
        },
        "contact": {
          "get_in_touch": "Kontakt aufnehmen",
          "get_in_touch_body": "Sind Sie an einer Zusammenarbeit interessiert? Wir sollten uns zu einem Gespräch verabreden.",
          "say_hello": "Hallo sagen"
        }
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: true
  }
});

export default i18n;