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
      splash.innerHTML = "";
      logoContainer.innerHTML = "";
      logoElements.innerHTML = "";
    }, 3500);

  });
});

const openNav = () => {
  if(mySidenav.style.width == '18%') {
    document.getElementById('mySidenav').style.width = "0px"
  } else {
    document.getElementById('mySidenav').style.width = "18%";
  }
}

const closeNav = () => {
  document.getElementById('mySidenav').style.width = "0px";
}