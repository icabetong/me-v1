import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "me": "Isaiah Collins",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "twitter": "Twitter",
        "navigation": {
          "about": "About",
          "works": "Works",
          "contact": "Contact",
        },
        "home": {
          "header_greet": "Hi, I'm ",
          "header_field": "I'm a mobile app ",
          "header_position": "developer",
          "header_basic": "Currently a student in Central Luzon State University, I specialize in creating mobile apps with both native and cross-platform solutions; with also some proficiency with web frameworks.",
          "read_my_resume": "Read my Resume",
          "lets_connect": "Let's Connect:",
        },
        "about": {
          "skills": "Skills",
          "introduction": "Introduction",
          "info": "I currently am being proficient in native Android development, developed some apps as sideprojects. You can check them out on my GitHub profile.\n\nHowever, I am also acquainted in web development, being done my thesis project using web technologies such as React and NodeJS.\n\nCurrently I am exploring the world of cross platforms development using the relatively new Flutter framework; and I currently enjoys it.",
        },
        "footer": {
          "copyright": "© 2021 ",
          "rights": ". All rights reserved."
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
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: true
  }
});

export default i18n;