// public/scripts/theme-enhancements.js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
      easing: 'ease-in-out',
    });
  } else {
    console.error('AOS library not loaded from theme-enhancements.js.');
  }
});