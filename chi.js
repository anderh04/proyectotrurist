document.getElementById('readMoreBtn').addEventListener('click', function() {
  var extraContent = document.getElementById('extraContent');
  
  if (extraContent.style.display === "none") {
    extraContent.style.display = "block";
  } else {
    extraContent.style.display = "none";
  }
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.client__prev');
  const nextButton = document.querySelector('.client__next');
  const clientGrid = document.querySelector('.client__grid');
  const clientCards = document.querySelectorAll('.client__card');
  const cardWidth = clientCards[0].offsetWidth;
  let currentIndex = 0;

  function updateCarousel() {
    clientGrid.style.transform = `translateX(-${currentIndex * (cardWidth + 16)}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < clientCards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
});


ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 500,
});


// Seleccionamos los botones y los paneles
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

// Agregamos el evento de clic a cada botón
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Removemos la clase 'active' de todos los botones y paneles
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Activamos el botón y el panel correspondiente
    button.classList.add('active');
    tabPanels[index].classList.add('active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab__btn1');
  const panels = document.querySelectorAll('.panel1');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPanel = document.querySelector(`.panel1[data-panel="${tab.dataset.tab}"]`);

      tabs.forEach(t => t.classList.remove('active1'));
      tab.classList.add('active1');

      panels.forEach(panel => {
        panel.classList.remove('active1');
        if (panel === targetPanel) {
          panel.classList.add('active1');
        }
      });
    });
  });
});
