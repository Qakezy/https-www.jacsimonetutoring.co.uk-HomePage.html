document.getElementById('language-toggle').addEventListener('change', function() {
  if (this.checked) {
    // Switch to English
    document.getElementById('main-title').textContent = 'Jac Simone Math Tutoring';
    document.getElementById('1').textContent = "I offer private tutoring...";
    document.getElementById('2').textContent = "I'm a private tutor focused in the Gwynedd area. I offer flexible maths and physics tutoring services up to and inclduing A-level.";
    document.getElementById('3').textContent = "Reviews";
    document.getElementById('4').textContent = "Home";
    document.getElementById('5').textContent = "About me";
    document.getElementById('6').textContent = "Prices and Services";
    document.getElementById('7').textContent = "FAQ's";
    document.getElementById('a1').textContent = "A little bit about me...";



    // Add more translations as needed
  } else {
    // Switch to Welsh
    document.getElementById('main-title').textContent = 'Jac Simone Math Tutoring';
    document.getElementById('1').textContent = "Rwy'n cynnig tiwtora preifat...";
    document.getElementById('2').textContent = "Dwi'n tiwtor preifat sy'n canolbwyntio ar ardal Gwynedd. Dwi'n cynnig gwasanaethau tiwtora mathemateg a ffiseg hyblyg hyd at ac yn cynnwys lefel A.";
    document.getElementById('3').textContent = "Adolygiadau";
    document.getElementById('4').textContent = "Cartref";
    document.getElementById('5').textContent = "Amdanaf fi";
    document.getElementById('6').textContent = "Prisiayau a Gwasanaethau";
    document.getElementById('7').textContent = "FAQ's";
    document.getElementById('a1').textContent = "Ychydig amdanat fi...";









    // Add more translations as needed
  }
});

function setLanguage(isEnglish) {
  if (isEnglish) {
    document.getElementById('language-toggle').checked = true;
    document.getElementById('main-title').textContent = 'Jac Simone Math Tutoring';
    document.getElementById('1').textContent = "I offer private tutoring...";
    document.getElementById('2').textContent = "I’m an A-Level graduate in Maths, Physics, and Further Maths, offering personalised tutoring in both Welsh and English. Whether you prefer learning online, at home, or in a public setting, I provide flexible, one-on-one support tailored to your needs. From exam prep to building confidence in tricky topics, I’m here to help you succeed—wherever you’re most comfortable.";
    document.getElementById('3').textContent = "Reviews";
    document.getElementById('4').textContent = "Home";
    document.getElementById('5').textContent = "About me";
    document.getElementById('6').textContent = "Prices and Services";
    document.getElementById('7').textContent = "FAQ's";
    document.getElementById('a1').textContent = "A little bit about me...";
  } else {
    document.getElementById('language-toggle').checked = false;
    document.getElementById('main-title').textContent = 'Jac Simone Math Tutoring';
    document.getElementById('1').textContent = "Rwy'n cynnig tiwtora preifat...";
    document.getElementById('2').textContent = "Dwi'n tiwtor preifat sy'n canolbwyntio ar ardal Gwynedd. Dwi'n cynnig gwasanaethau tiwtora mathemateg a ffiseg hyblyg hyd at ac yn cynnwys lefel A.";
    document.getElementById('3').textContent = "Adolygiadau";
    document.getElementById('4').textContent = "Cartref";
    document.getElementById('5').textContent = "Amdanaf fi";
    document.getElementById('6').textContent = "Prisiayau a Gwasanaethau";
    document.getElementById('7').textContent = "FAQ's";
    document.getElementById('a1').textContent = "Ychydig amdanat fi...";
  }
}

// On page load, set language from localStorage (default to English)
window.addEventListener('DOMContentLoaded', function() {
  const lang = localStorage.getItem('language');
  setLanguage(lang === 'english');
});

// On toggle, save preference and update language
document.getElementById('language-toggle').addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem('language', 'english');
    setLanguage(true);
  } else {
    localStorage.setItem('language', 'welsh');
    setLanguage(false);
  }
});