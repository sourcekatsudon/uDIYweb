let currentSlide = 0;
let slides = [];
let slideInterval;

async function loadSlideImages() {
    // eyecatchフォルダ内の画像を直接指定
    const images = [
        '/eyecatch/images.jpeg',
        '/eyecatch/products_layer_m2.png'
    ];
    
    const slideshowContainer = document.getElementById('slideshow');
    const dotsContainer = document.getElementById('dots');
    
    if (images.length === 0) {
        loadDefaultSlides();
        return;
    }
    
    images.forEach((imagePath, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${imagePath}" alt="Slide ${index + 1}">`;
        slideshowContainer.appendChild(slide);
        
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    slides = document.querySelectorAll('.slide');
    startSlideshow();
}

function loadDefaultSlides() {
    const slideshowContainer = document.getElementById('slideshow');
    const dotsContainer = document.getElementById('dots');
    
    for (let i = 1; i <= 3; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.background = `linear-gradient(45deg, #0066cc, #004499)`;
        slide.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 24px;">
                水中ドローンDIY - スライド ${i}
            </div>
        `;
        slideshowContainer.appendChild(slide);
        
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 1) dot.classList.add('active');
        dot.onclick = () => goToSlide(i - 1);
        dotsContainer.appendChild(dot);
    }
    
    slides = document.querySelectorAll('.slide');
    startSlideshow();
}

function startSlideshow() {
    if (slides.length > 0) {
        showSlide(0);
        slideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
}

function showSlide(n) {
    const dots = document.querySelectorAll('.dot');
    
    currentSlide = n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(n) {
    clearInterval(slideInterval);
    showSlide(n);
    startSlideshow();
}

document.addEventListener('DOMContentLoaded', loadSlideImages);