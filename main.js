
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.indicators ul li');
const numberDisplay = document.querySelector('.indicators .number');
const list = document.querySelector('.list');

let currentIndex = 0;

// Função principal - atualiza o carrossel
function updateCarousel() {
    // Remove 'active' de todos
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adiciona 'active' no atual
    items[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    
    // Atualiza o número (01, 02, 03...)
    numberDisplay.textContent = String(currentIndex + 1).padStart(2, '0');
}

// Próximo slide
document.getElementById('next').addEventListener('click', () => {
    list.style.setProperty('--calculation', 1);
    currentIndex = (currentIndex + 1) % items.length; // Loop circular
    updateCarousel();
});

// Slide anterior
document.getElementById('prev').addEventListener('click', () => {
    list.style.setProperty('--calculation', -1);
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop circular
    updateCarousel();
});

// Inicializa o carrossel
updateCarousel();



// // ===== VERSÃO ULTRA-MINIMALISTA GERADA PELA IA CLAUDE =====
// const carousel = {
//     items: document.querySelectorAll('.item'),
//     dots: document.querySelectorAll('.indicators ul li'),
//     number: document.querySelector('.indicators .number'),
//     list: document.querySelector('.list'),
//     current: 0,
    
//     update() {
//         // Remove todas as classes 'active'
//         this.items.forEach((el, i) => {
//             el.classList.toggle('active', i === this.current);
//         });
//         this.dots.forEach((el, i) => {
//             el.classList.toggle('active', i === this.current);
//         });
        
//         // Atualiza número
//         this.number.textContent = String(this.current + 1).padStart(2, '0');
//     },
    
//     next() {
//         this.list.style.setProperty('--calculation', 1);
//         this.current = (this.current + 1) % this.items.length;
//         this.update();
//     },
    
//     prev() {
//         this.list.style.setProperty('--calculation', -1);
//         this.current = (this.current - 1 + this.items.length) % this.items.length;
//         this.update();
//     }
// };

// // Event listeners
// document.getElementById('next').onclick = () => carousel.next();
// document.getElementById('prev').onclick = () => carousel.prev();

// // Inicializa
// carousel.update();
