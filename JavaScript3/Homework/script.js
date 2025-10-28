const bar = document.querySelector('.fa-bars');
const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const find = document.querySelector('.find');
const sidebar = document.querySelector('.sidebar');
const findbar = document.querySelector('.findbar');
const lang = document.querySelector('.lang');
const langbox = document.querySelector('.langbox');
const eye = document.querySelector('.eye');
const filter = document.querySelector('.filterbox');
const body = document.querySelector('body');
const light = document.querySelector('.L');
const dark = document.querySelector('.D');

// Slider elementlari
const sliderImage = document.querySelector('.img1');
const leftBtn = document.querySelector('.fa-caret-left');
const rightBtn = document.querySelector('.fa-caret-right');
const dots = document.querySelectorAll('.dot');

// Slider rasmlari
const images = ['img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
let currentIndex = 0;

// Rasmni yangilash funksiyasi
function updateSlider() {
  sliderImage.style.opacity = '0';

  setTimeout(() => {
    sliderImage.src = images[currentIndex];
    sliderImage.style.opacity = '1';
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('checked');
      } else {
        dot.classList.remove('checked');
      }
    });

    // Dotlarni yangilash
  }, 250);
}

// O'ng tugma
rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateSlider();
});

// Chap tugma
leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateSlider();
});

// Dotlarga click event
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

// Avtomatik slider (5 soniyada bir marta)
// setInterval(() => {
//   currentIndex++;
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   updateSlider();
// }, 5000);

bar.addEventListener('click', () => {
  if (langbox.classList.contains('block')) {
    langbox.classList.remove('block');
  } else if (eye.classList.contains('fa-eye-slash')) {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
    filter.classList.remove('block');
  } else if (findbar.classList.contains('block')) {
    findbar.classList.remove('block');
  }
  sidebar.classList.add('block');
});

find.addEventListener('click', () => {
  if (langbox.classList.contains('block')) {
    langbox.classList.remove('block');
  } else if (eye.classList.contains('fa-eye-slash')) {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
    filter.classList.remove('block');
  } else if (sidebar.classList.contains('block')) {
    sidebar.classList.remove('block');
  }
  findbar.classList.add('block');
});

x1.addEventListener('click', () => {
  sidebar.classList.remove('block');
});
x2.addEventListener('click', () => {
  findbar.classList.remove('block');
});

lang.addEventListener('click', () => {
  if (langbox.classList.contains('block')) {
    langbox.classList.remove('block');
  } else {
    langbox.classList.add('block');
  }
  if (eye.classList.contains('fa-eye-slash')) {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
    filter.classList.remove('block');
    langbox.classList.add('block');
  }
});

eye.addEventListener('click', () => {
  if (eye.classList.contains('fa-eye')) {
    eye.classList.add('fa-eye-slash');
    eye.classList.remove('fa-eye');
    filter.classList.add('block');
  } else {
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
    filter.classList.remove('block');
  }
  if (langbox.classList.contains('block')) {
    langbox.classList.remove('block');
  }
});

dark.addEventListener('click', () => {
  body.classList.add('gray');
});

light.addEventListener('click', () => {
  body.classList.remove('gray');
});
