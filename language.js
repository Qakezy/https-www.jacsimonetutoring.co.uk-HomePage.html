// Language translations for English and Welsh
const translations = {
  en: {
    'about-link': 'About',
    'services-link': 'Services',
    'contact-link': 'Contact',
    'main-title': 'Jac Simone Tutoring',
    'main-tagline': 'Private tutoring for maths and physics, online or in person!',
    'about-title': 'About Me',
    'about-desc': 'Hey, I\'m Jac. After finishing A-levels in Maths, Physics, and Further Maths, I decided to start offering personalised tutoring for Maths and Physics, in both Welsh and English. Whether you prefer learning online, at home, or in a public setting, I provide flexible support tailored to your needs. From exam preparation to building confidence in tricky topics, I’m here to help — wherever and however you’re most comfortable.',
    'services-title': 'Services',
    'services-desc': 'I offer one-on-one sessions in the following areas:',
    'services-1': 'KS2 & KS3 Maths and Physics',
    'services-2': 'GCSE Maths and Physics',
    'services-3': 'A-Level Maths and Physics',
    'service1-title': 'KS2 & KS3',
    'service1-desc': 'Fun, interactive lessons that build core maths skills and boost confidence, preparing students for GCSE learning.<br><br>£25/h',
    'service2-title': 'GCSE',
    'service2-desc': 'Focused support on tricky topics, past paper practice, and strategies to maximise grades and performance.<br><br>£30/h',
    'service3-title': 'A-Level',
    'service3-desc': 'Challenging yet supportive sessions that develop problem-solving skills, exam technique, and a solid grasp of complex concepts.<br><br>£35/h',
    'contact-title': 'Contact Me',
    'contact-desc': 'If you have any questions or would like to book a session, feel free to contact me. I\'m more than happy to do a free video consultation to discuss your needs before sessions are booked!',
    'contact-name': 'Your Name',
    'contact-email': 'Your Email',
    'contact-message': 'Your Message',
    'contact-send': 'Send Message',
    'footer': '© 2025 Jac Simone Tutoring. All rights reserved.',
    'language-btn': 'Language',
    'language-en': 'English',
    'language-cy': 'Cymraeg',
    'call-text': 'Call: 07598 359576',
    'contact-form-title': 'Send an Email',
    'contact-label-name': 'Name',
    'contact-label-email': 'Email',
    'contact-label-message': 'Message'
  },
  cy: {
    'about-link': 'Amdanaf i',
    'services-link': 'Gwasanaethau',
    'contact-link': 'Cysylltu',
    'main-title': 'Tiwtora Jac Simone',
    'main-tagline': 'Tiwtora preifat ar gyfer mathemateg a ffiseg, ar-lein neu yn bersonol!',
    'about-title': 'Amdanaf i',
    'about-desc': "Helo, Jac dwi. Ar ôl cwblhau fy ngwrsiau Lefel A mewn Mathemateg, Ffiseg, a Mathemateg Bellach, penderfynais ddechrau cynnig tiwtora personol ar gyfer Mathemateg a Ffiseg, yn Gymraeg ac yn Saesneg. P'un a ydych chi'n well gennych ddysgu ar-lein, gartref, neu mewn lle cyhoeddus, rwy'n darparu cefnogaeth hyblyg wedi'i theilwra i'ch anghenion. O baratoi ar gyfer arholiadau i adeiladu hyder mewn pynciau anodd, rwyf yma i'ch helpu — ble bynnag a sut bynnag rydych chi'n teimlo'n gyfforddus.",
    'services-title': 'Gwasanaethau',
    'services-desc': " Rwy'n cynnig sesiynau un-i-un yn y meysydd canlynol:",
    'services-1': 'Mathemateg a Ffiseg CA2 & CA3',
    'services-2': 'Mathemateg a Ffiseg TGAU',
    'services-3': 'Mathemateg a Ffiseg Lefel A',
    'service1-title': 'CA2 & CA3',
    'service1-desc': 'Gwersi hwylus ac rhyngweithiol sy\'n adeiladu sgiliau craidd mathemateg a chodi hyder, gan baratoi myfyrwyr ar gyfer dysgu TGAU.<br><br>£25/h',
    'service2-title': 'TGAU',
    'service2-desc': 'Cefnogaeth benodol ar gyfer pynciau anodd, ymarfer papurau blaenorol, a strategaethau i gynyddu graddau a pherfformiad.<br><br>£30/h',
    'service3-title': 'Lefel A',
    'service3-desc': 'Sesiynau heriol ond cefnogol sy\'n datblygu sgiliau datrys problemau, techneg arholiad, a dealltwriaeth gadarn o gysyniadau cymhleth.<br><br>£35/h',
    'contact-title': 'Cysylltu',
    'contact-desc': 'Os oes gennych unrhyw gwestiynau neu os hoffech drefnu sesiwn, mae croeso i chi gysylltu â mi. Rwy\'n fwy na hapus i wneud ymgynghoriad fideo am ddim i drafod eich anghenion cyn i sesiynau gael eu trefnu!',
    'contact-name': 'Eich Enw',
    'contact-email': 'Eich E-bost',
    'contact-message': 'Eich Neges',
    'contact-send': 'Anfon Neges',
    'footer': '© 2025 Tiwtora Jac Simone. Cedwir pob hawl.',
    'language-btn': 'Iaith',
    'language-en': 'Saesneg',
    'language-cy': 'Cymraeg',
    'call-text': 'Ffoniwch: 07598 359576',
    'contact-form-title': 'Anfon E-bost',
    'contact-label-name': 'Enw',
    'contact-label-email': 'E-bost',
    'contact-label-message': 'Neges'
  }
};

// Helper: update text content safely
function setText(selector, key, lang) {
  const el = document.querySelector(selector);
  if (el && translations[lang][key]) {
    el.textContent = translations[lang][key];
  }
}

// Helper: update placeholder safely
function setPlaceholder(selector, key, lang) {
  const el = document.querySelector(selector);
  if (el && translations[lang][key]) {
    el.placeholder = translations[lang][key];
  }
}

// Helper: update HTML content safely
function setHTML(selector, key, lang) {
  const el = document.querySelector(selector);
  if (el && translations[lang][key]) {
    el.innerHTML = translations[lang][key];
  }
}

// Set language and update all relevant elements
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;

  // Nav links
  setText('a.about', 'about-link', lang);
  setText('a[href="#services"]', 'services-link', lang);
  setText('a[href="#contact"]', 'contact-link', lang);

  // Header
  setText('header h1', 'main-title', lang);
  setText('header p', 'main-tagline', lang);

  // About
  setText('#about h2', 'about-title', lang);
  setText('#about p', 'about-desc', lang);

  setText('#call-text', 'call-text', lang);

  // Services
  setText('#services h2', 'services-title', lang);
  setText('#services p', 'services-desc', lang);
  const servicesList = document.querySelectorAll('#services ul li');
  ['services-1', 'services-2', 'services-3'].forEach((key, i) => {
    if (servicesList[i]) servicesList[i].textContent = translations[lang][key];
  });

  // Service card titles and descriptions
  const serviceTitles = document.querySelectorAll('.service-box .service-title');
  const serviceDescs = document.querySelectorAll('.service-box .service-desc');
  ['service1', 'service2', 'service3'].forEach((key, i) => {
    if (serviceTitles[i]) {
      serviceTitles[i].textContent = translations[lang][`${key}-title`];
    }
    if (serviceDescs[i]) {
  serviceDescs[i].innerHTML = translations[lang][`${key}-desc`];
}
  });

  // Contact
  setText('#contact h2', 'contact-title', lang);
  setText('.contact-desc', 'contact-desc', lang);
  setPlaceholder('#contact input[type="text"]', 'contact-name', lang);
  setPlaceholder('#contact input[type="email"]', 'contact-email', lang);
  setPlaceholder('#contact textarea', 'contact-message', lang);
  setText('#contact button[type="submit"]', 'contact-send', lang);

  // Footer
  setText('footer p', 'footer', lang);

  // Language menu
  setText('.language-switcher > button', 'language-btn', lang);
  const langButtons = document.querySelectorAll('.language-dropdown button');
  if (langButtons[0]) langButtons[0].textContent = translations[lang]['language-en'];
  if (langButtons[1]) langButtons[1].textContent = translations[lang]['language-cy'];
  setText('#contact-form-title', 'contact-form-title', lang);
  setText('#contact-label-name', 'contact-label-name', lang);
  setText('#contact-label-email', 'contact-label-email', lang);
  setText('#contact-label-message', 'contact-label-message', lang);
}

// On page load, set language from localStorage or default to English
window.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);

  // Add event listeners using data-lang attributes
  document.querySelectorAll('.language-dropdown button').forEach(btn => {
    btn.addEventListener('click', function () {
      const langCode = this.getAttribute('data-lang');
      if (langCode) setLanguage(langCode);
    });
  });
});

// Optional: Expose toggleLanguage globally
window.toggleLanguage = function (lang) {
  setLanguage(lang);
};