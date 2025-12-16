
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
