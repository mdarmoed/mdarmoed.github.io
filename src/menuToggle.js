document.addEventListener('DOMContentLoaded', function() {
    const checkboxToggle = document.getElementById('checkbox_toggle');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('show');
    });
  
    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('show');
      });
    });
  
    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show');
      }
    });
  
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        menu.classList.remove('show');
        checkboxToggle.checked = false;
      }
    });
  });
  