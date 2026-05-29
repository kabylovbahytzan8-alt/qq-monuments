import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ru: {
    nav: { home: 'Главная', monuments: 'Памятники', map: 'Карта', news: 'Новости', about: 'О нас', contact: 'Связаться' },
    hero: {
      title: 'Историческое наследие Каракалпакстана',
      subtitle: 'Древние крепости, мавзолеи, музеи и священные места Каракалпакстана',
      cta: 'Исследовать памятники',
    },
    stats: {
      monuments: 'памятников', fortresses: 'древних крепостей', years: 'лет истории',
      museums: 'музеев', sacred: 'священных комплексов', archaeological: 'археологических объектов',
    },
    sections: {
      popular: 'Популярные памятники', categories: 'Категории памятников',
      wonders: '7 чудес Каракалпакстана', routes: 'Туристические маршруты',
      history: 'История Каракалпакстана', latestNews: 'Последние новости',
      interactiveMap: 'Интерактивная карта',
    },
    monument: {
      search: 'Поиск памятников...', allCategories: 'Все категории',
      founded: 'Основан', location: 'Местоположение', buildRoute: 'Построить маршрут',
      similarMonuments: 'Похожие памятники', historicalFacts: 'Исторические факты',
      culturalSignificance: 'Культурное значение', interestingFacts: 'Интересные факты',
      description: 'Описание', history: 'История', gallery: 'Галерея',
    },
    about: {
      title: 'О проекте', mission: 'Наша миссия', team: 'Команда', goals: 'Цели',
      missionText: 'Сайт создан преподавателями Нукусского Государственного технического университета кафедры Социально гуманитарных наук кандидатом исторических наук Есбергеновой Светланы Хожакметовной и Торемуратовой Айсылыу Калбаеаной, для тех кто интересуется традиционно бытовой культурой народов Южного Приаралья',
    },
    contact: {
      title: 'Связаться с нами', name: 'Имя', email: 'Email', message: 'Сообщение', send: 'Отправить',
      address: 'Адрес', phone: 'Телефон',
      messagePlaceholder: 'Ваше сообщение...',
      thankYou: 'Спасибо!', thankYouText: 'Мы свяжемся с вами в ближайшее время.',
      sendAnother: 'Отправить ещё одно сообщение',
      fillFields: 'Пожалуйста, заполните все поля',
      sentSuccess: 'Сообщение успешно отправлено!',
    },
    footer: {
  rights: 'Все права защищены', navigation: 'Навигация', contact: 'Контакты',
},
    common: {
      readMore: 'Подробнее', viewAll: 'Смотреть все', back: 'Назад', loading: 'Загрузка...',
      dayMonument: 'Памятник дня',
    },
  },
  en: {
    nav: { home: 'Home', monuments: 'Monuments', map: 'Map', news: 'News', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Historical Heritage of Karakalpakstan',
      subtitle: 'Ancient fortresses, mausoleums, museums and sacred sites of Karakalpakstan',
      cta: 'Explore Monuments',
    },
    stats: {
      monuments: 'monuments', fortresses: 'ancient fortresses', years: 'years of history',
      museums: 'museums', sacred: 'sacred complexes', archaeological: 'archaeological sites',
    },
    sections: {
      popular: 'Popular Monuments', categories: 'Monument Categories',
      wonders: '7 Wonders of Karakalpakstan', routes: 'Tourist Routes',
      history: 'History of Karakalpakstan', latestNews: 'Latest News',
      interactiveMap: 'Interactive Map',
    },
    monument: {
      search: 'Search monuments...', allCategories: 'All categories',
      founded: 'Founded', location: 'Location', buildRoute: 'Build Route',
      similarMonuments: 'Similar Monuments', historicalFacts: 'Historical Facts',
      culturalSignificance: 'Cultural Significance', interestingFacts: 'Interesting Facts',
      description: 'Description', history: 'History', gallery: 'Gallery',
    },
    about: {
      title: 'About the Project', mission: 'Our Mission', team: 'Team', goals: 'Goals',
      missionText: 'The website was created by the teachers of the Department of Social and Humanitarian Sciences of Nukus State Technical University — Candidate of Historical Sciences Svetlana Khozhakmetovna Esbergenova and Aisylu Kalbaevna Toremuratova — for those who are interested in the traditional everyday culture of the peoples of the Southern Aral Sea region.',
    },
    contact: {
      title: 'Contact Us', name: 'Name', email: 'Email', message: 'Message', send: 'Send',
      address: 'Address', phone: 'Phone',
      messagePlaceholder: 'Your message...',
      thankYou: 'Thank you!', thankYouText: "We'll get back to you soon.",
      sendAnother: 'Send another message',
      fillFields: 'Please fill in all fields',
      sentSuccess: 'Message sent successfully!',
    },
    footer: {
  rights: 'All rights reserved',
  madeWith: 'For those who feel the soul of the ancient peoples of the Southern Aral region',
  navigation: 'Navigation', contact: 'Contact',
},
    common: {
      readMore: 'Read More', viewAll: 'View All', back: 'Back', loading: 'Loading...',
      dayMonument: 'Monument of the Day',
    },
  },
  uz: {
    nav: { home: 'Bosh sahifa', monuments: 'Yodgorliklar', map: 'Xarita', news: 'Yangiliklar', about: 'Biz haqimizda', contact: 'Aloqa' },
    hero: {
      title: 'Qoraqalpogʻiston tarixiy merosi',
      subtitle: 'Qadimiy qalʼalar, maqbaralar, muzeylar va muqaddas joylar',
      cta: 'Yodgorliklarni kashf eting',
    },
    stats: {
      monuments: 'yodgorliklar', fortresses: 'qadimiy qalʼalar', years: 'yillik tarix',
      museums: 'muzeylar', sacred: 'muqaddas majmualar', archaeological: 'arxeologik obyektlar',
    },
    sections: {
      popular: 'Mashhur yodgorliklar', categories: 'Yodgorlik turlari',
      wonders: 'Qoraqalpogʻistonning 7 moʻjizasi', routes: 'Turistik marshrutlar',
      history: 'Qoraqalpogʻiston tarixi', latestNews: 'Soʻnggi yangiliklar',
      interactiveMap: 'Interaktiv xarita',
    },
    monument: {
      search: 'Yodgorliklarni qidirish...', allCategories: 'Barcha turkumlar',
      founded: 'Tashkil etilgan', location: 'Joylashuv', buildRoute: 'Marshrut yaratish',
      similarMonuments: 'Oʻxshash yodgorliklar', historicalFacts: 'Tarixiy faktlar',
      culturalSignificance: 'Madaniy ahamiyati', interestingFacts: 'Qiziqarli faktlar',
      description: 'Tavsif', history: 'Tarix', gallery: 'Galereya',
    },
    about: {
      title: 'Loyiha haqida', mission: 'Bizning vazifamiz', team: 'Jamoa', goals: 'Maqsadlar',
      missionText: 'Sayt Nukus Davlat Texnika Universiteti Ijtimoiy-gumanitar fanlar kafedrasi oqituvchilari — tarix fanlari nomzodi Svetlana Xojakmetovna Esbergenova hamda Aysilu Kalbaevna Toremuratova tomonidan Janubiy Orolboyi xalqlarining ananaviy maishiy madaniyatiga qiziquvchilar uchun yaratilgan.',
    },
    contact: {
      title: 'Biz bilan bogʻlaning', name: 'Ism', email: 'Email', message: 'Xabar', send: 'Yuborish',
      address: 'Manzil', phone: 'Telefon',
      messagePlaceholder: 'Xabaringiz...',
      thankYou: 'Rahmat!', thankYouText: "Tez orada siz bilan bog'lanamiz.",
      sendAnother: 'Yana xabar yuborish',
      fillFields: "Iltimos, barcha maydonlarni to'ldiring",
      sentSuccess: 'Xabar muvaffaqiyatli yuborildi!',
    },
    footer: {
  rights: 'Barcha huquqlar himoyalangan',
  madeWith: 'Janubiy Orolboʻyi xalqlarining qadimiy ruhini his etuvchilar uchun',
  navigation: 'Navigatsiya', contact: 'Aloqa',
},
    common: {
      readMore: 'Batafsil', viewAll: 'Hammasini koʻrish', back: 'Orqaga', loading: 'Yuklanmoqda...',
      dayMonument: 'Kunning yodgorligi',
    },
  },
  qq: {
    nav: { home: 'Bas bet', monuments: 'Yadgorliklar', map: 'Karta', news: 'Jańalıqlar', about: 'Biz haqqımızda', contact: 'Baylanıs' },
    hero: {
      title: 'Qaraqalpaqstannıń tariyxıy mirası',
      subtitle: 'Gadimgi qalalar, mavzoleyler, muzeyler hám muqaddes orınlar',
      cta: 'Yadgorliklardı izlew',
    },
    stats: {
      monuments: 'yadgorliklar', fortresses: 'gadimgi qalalar', years: 'jıllıq tariyx',
      museums: 'muzeyler', sacred: 'muqaddes kompleksler', archaeological: 'arxeologiyalıq obyektler',
    },
    sections: {
      popular: 'Belgili yadgorliklar', categories: 'Yadgorlik kategoriyaları',
      wonders: 'Qaraqalpaqstannıń 7 mojizası', routes: 'Turistlik marshrutlar',
      history: 'Qaraqalpaqstan tariyxı', latestNews: 'Soŋǵı jańalıqlar',
      interactiveMap: 'İnteraktiv karta',
    },
    monument: {
      search: 'Yadgorliklardı izlew...', allCategories: 'Barlıq kategoriyalar',
      founded: 'Qurılǵan', location: 'Ornalasqan jerí', buildRoute: 'Marshrut jasaw',
      similarMonuments: 'Uksas yadgorliklar', historicalFacts: 'Tariyxıy faktler',
      culturalSignificance: 'Mádeniyet áhmiyeti', interestingFacts: 'Qızıqlı faktler',
      description: 'Sıpatlaw', history: 'Tariyxı', gallery: 'Galereya',
    },
    about: {
      title: 'Proyekt haqqında', mission: 'Bizdiń wazıypamız', team: 'Komanda', goals: 'Maqsetler',
      missionText: 'Sayt Nókis Mámleketlik Texnika Universitetiniń Sociallıq-gumanitarlıq páńler kafedrası oqıtıwshıları — tariyx ilimleriniń kandidatı Svetlana Xojakmetovna Esbergenova hám Aysıluw Kalbaevna Toremuratova tárepinen Aral mańınıń qubla xalıqlarınıń dástúriy turmıs mádeniyatına qızıǵıwshılar ushın jaratılǵan.',
    },
    contact: {
      title: 'Biz benen baylanısıń', name: 'Atıńız', email: 'Email', message: 'Xabar', send: 'Jiberiw',
      address: 'Mánzil', phone: 'Telefon',
      messagePlaceholder: 'Xabarıńız...',
      thankYou: 'Rahmet!', thankYouText: 'Jaqın waqıtta siz benen baylanısamız.',
      sendAnother: 'Basqa xabar jiberiw',
      fillFields: 'Barlıq orınlardı tolтırıń',
      sentSuccess: 'Xabar sátti jiberildi!',
    },
    footer: {
  rights: 'Barlıq huqıqlar qorǵalǵan',
  madeWith: 'Araldıń qubla boyı xalıqlarınıń tariyxı hám mádeniyetin súyiwshiler uchun',
  navigation: 'Navigatsiya', contact: 'Baylanıs',
},
    common: {
      readMore: 'Tolıǵıraq', viewAll: 'Barlıǵın kóriw', back: 'Artqa', loading: 'Júklenip atır...',
      dayMonument: 'Kún yadgorligi',
    },
  },
};

const langLabels = {
  ru: { flag: '🇷🇺', label: 'Русский' },
  en: { flag: '🇬🇧', label: 'English' },
  uz: { flag: '🇺🇿', label: "O'zbekcha" },
  qq: { flag: 'qq', label: 'Qaraqalpaqsha' },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('kk_lang') || 'ru');

  useEffect(() => {
    localStorage.setItem('kk_lang', lang);
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
      result = result?.[key];
    }
    return result || path;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, langLabels, languages: Object.keys(translations) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}