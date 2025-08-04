// Language translations for English and Welsh
const translations = {
  en: {
    'about-link': 'About',
    'services-link': 'Services',
    'contact-link': 'Contact',
    'main-title': 'Jac Simone Tutoring',
    'main-tagline': 'Private tutoring for maths and physics, online or in person!',
    'about-title': 'About Me',
    'about-desc': 'I’m a passionate mathematics tutor with over 8 years of experience helping students from KS2 to A-Level. My goal is to make maths approachable and enjoyable, building strong foundations and boosting exam confidence.',
    'services-title': 'Services',
    'services-desc': 'I offer one-on-one sessions, group classes, and online support in the following areas:',
    'services-1': 'KS2 & KS3 Maths',
    'services-2': 'GCSE & IGCSE Maths',
    'services-3': 'A-Level Maths',
    'services-4': 'Entrance Exam Preparation',
    'services-5': 'Homework & Revision Help',
    'contact-title': 'Contact Me',
    'contact-name': 'Your Name',
    'contact-email': 'Your Email',
    'contact-message': 'Your Message',
    'contact-send': 'Send Message',
    'footer': '© 2025 Jac Simone Tutoring. All rights reserved.',
    'language-btn': 'Language',
    'language-en': 'English',
    'language-cy': 'Cymraeg'
  },
  cy: {
    'about-link': 'Amdanaf i',
    'services-link': 'Gwasanaethau',
    'contact-link': 'Cysylltu',
    'main-title': 'Tiwtora Jac Simone',
    'main-tagline': 'Tiwtora preifat ar gyfer mathemateg a ffiseg, ar-lein neu yn bersonol!',
    'about-title': 'Amdanaf i',
    'about-desc': "Rwy'n diwtor mathemateg brwd gyda dros 8 mlynedd o brofiad yn helpu myfyrwyr o KS2 i Lefel A. Fy nod yw gwneud mathemateg yn hawdd ac yn bleserus, gan adeiladu sylfeini cryfion a hyder mewn arholiadau.",
    'services-title': 'Gwasanaethau',
    'services-desc': "Rwy'n cynnig sesiynau un-i-un, dosbarthiadau grŵp, a chefnogaeth ar-lein yn y meysydd canlynol:",
    'services-1': 'Mathemateg CA2 & CA3',
    'services-2': 'Mathemateg TGAU & IGCSE',
    'services-3': 'Mathemateg Lefel A',
    'services-4': 'Paratoi ar gyfer Arholiadau Mynediad',
    'services-5': 'Cymorth Gwaith Cartref ac Adolygu',
    'contact-title': 'Cysylltu',
    'contact-name': 'Eich Enw',
    'contact-email': 'Eich E-bost',
    'contact-message': 'Eich Neges',
    'contact-send': 'Anfon Neges',
    'footer': '© 2025 Tiwtora Jac Simone. Cedwir pob hawl.',
    'language-btn': 'Iaith',
    'language-en': 'Saesneg',
    'language-cy': 'Cymraeg'
  }
};

// Set language and update all relevant elements
function setLanguage(lang) {
  localStorage.setItem('language', lang);

  // Update nav links
  document.querySelector('a.about').textContent = translations[lang]['about-link'];
  document.querySelector('a[href="#services"]').textContent = translations[lang]['services-link'];
  document.querySelector('a[href="#contact"]').textContent = translations[lang]['contact-link'];

  // Header
  document.querySelector('header h1').textContent = translations[lang]['main-title'];
  document.querySelector('header p').textContent = translations[lang]['main-tagline'];

  // About section
  document.querySelector('#about h2').textContent = translations[lang]['about-title'];
  document.querySelector('#about p').textContent = translations[lang]['about-desc'];

  // Services section
  document.querySelector('#services h2').textContent = translations[lang]['services-title'];
  document.querySelector('#services p').textContent = translations[lang]['services-desc'];
  document.querySelectorAll('#services ul li')[0].textContent = translations[lang]['services-1'];
  document.querySelectorAll('#services ul li')[1].textContent = translations[lang]['services-2'];
  document.querySelectorAll('#services ul li')[2].textContent = translations[lang]['services-3'];
  document.querySelectorAll('#services ul li')[3].textContent = translations[lang]['services-4'];
  document.querySelectorAll('#services ul li')[4].textContent = translations[lang]['services-5'];

  // Contact section
  document.querySelector('#contact h2').textContent = translations[lang]['contact-title'];
  document.querySelector('#contact input[type="text"]').placeholder = translations[lang]['contact-name'];
  document.querySelector('#contact input[type="email"]').placeholder = translations[lang]['contact-email'];
  document.querySelector('#contact textarea').placeholder = translations[lang]['contact-message'];
  document.querySelector('#contact button[type="submit"]').textContent = translations[lang]['contact-send'];

  // Footer
  document.querySelector('footer p').textContent = translations[lang]['footer'];

  // Language dropdown text (optional)
  document.querySelector('.language-switcher > button').textContent = translations[lang]['language-btn'];
  document.querySelectorAll('.language-dropdown button')[0].textContent = translations[lang]['language-en'];
  document.querySelectorAll('.language-dropdown button')[1].textContent = translations[lang]['language-cy'];
}

// On page load, set language from localStorage or default to English
window.addEventListener('DOMContentLoaded', function() {
  let lang = localStorage.getItem('language') || 'en';
  setLanguage(lang);

  // Add event listeners for dropdown buttons
  document.querySelectorAll('.language-dropdown button').forEach(btn => {
    btn.addEventListener('click', function() {
      const langCode = this.textContent.toLowerCase().startsWith('cym') ? 'cy' : 'en';
      setLanguage(langCode);
    });
  });
});

// Make toggleLanguage available globally for inline onclick handlers
window.toggleLanguage = function(lang) {
  setLanguage(lang);
};