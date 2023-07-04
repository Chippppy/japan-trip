let splash = document.querySelector('.splash-screen');
let logoContainer = document.querySelector('.splash-header');
let logoElements = document.querySelectorAll('.logo-splash');
let mainContent = document.querySelector('.main-content');

window.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {
    
    logoElements.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 700);
    });

    setTimeout(() => {
      logoElements.forEach((span, idx) => {

        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 2000);

    setTimeout(() => {
      splash.style.opacity = 0;
      splash.style.width = "10px";
      splash.style.height = "10px";
      splash.style.top = "50%";
      splash.style.left = "50%";
    }, 2200);

    setTimeout(() => {
      mainContent.classList.add('active');
    }, 3500);

  });
});