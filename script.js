import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
            hours: 12,
            minutes: 0,
            seconds: 0,
            flashDeals: [
                {
                    id: 1,
                    name: 'Vestido Floral Verão',
                    price: 79.90,
                    oldPrice: 129.90,
                    discount: 38,
                    bgColor: '#f5e6e0'
                },
                {
                    id: 2,
                    name: 'Camisa Social Slim',
                    price: 89.90,
                    oldPrice: 139.90,
                    discount: 35,
                    bgColor: '#e0f0e9'
                },
                {
                    id: 3,
                    name: 'Tênis Casual',
                    price: 119.90,
                    oldPrice: 199.90,
                    discount: 40,
                    bgColor: '#e6f0f5'
                },
                {
                    id: 4,
                    name: 'Conjunto Infantil',
                    price: 69.90,
                    oldPrice: 99.90,
                    discount: 30,
                    bgColor: '#f0e6f5'
                }
            ],
            bestSellers: [
                {
                    id: 1,
                    name: 'Vestido Midi Elegante',
                    price: 129.90,
                    oldPrice: 189.90,
                    discount: 30,
                    bgColor: '#f5e6e0'
                },
                {
                    id: 2,
                    name: 'Calça Jeans Skinny',
                    price: 99.90,
                    oldPrice: 149.90,
                    discount: 33,
                    bgColor: '#e0f0e9'
                },
                {
                    id: 3,
                    name: 'Camisa Estampada',
                    price: 79.90,
                    oldPrice: null,
                    discount: null,
                    bgColor: '#e6f0f5'
                },
                {
                    id: 4,
                    name: 'Tênis Esportivo',
                    price: 149.90,
                    oldPrice: 199.90,
                    discount: 25,
                    bgColor: '#f0e6f5'
                },
                {
                    id: 5,
                    name: 'Conjunto Infantil Verão',
                    price: 59.90,
                    oldPrice: null,
                    discount: null,
                    bgColor: '#e6f5f0'
                },
                {
                    id: 6,
                    name: 'Blusa Feminina Manga Longa',
                    price: 69.90,
                    oldPrice: 99.90,
                    discount: 30,
                    bgColor: '#f5f0e6'
                },
                {
                    id: 7,
                    name: 'Shorts Jeans',
                    price: 59.90,
                    oldPrice: 89.90,
                    discount: 33,
                    bgColor: '#f0e6e6'
                },
                {
                    id: 8,
                    name: 'Sandália Feminina',
                    price: 79.90,
                    oldPrice: null,
                    discount: null,
                    bgColor: '#e6e6f5'
                }
            ]
        }
    },
    mounted() {
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            const countdownInterval = setInterval(() => {
                this.seconds--;
                
                if (this.seconds < 0) {
                    this.seconds = 59;
                    this.minutes--;
                }
                
                if (this.minutes < 0) {
                    this.minutes = 59;
                    this.hours--;
                }
                
                if (this.hours < 0) {
                    clearInterval(countdownInterval);
                    this.hours = 0;
                    this.minutes = 0;
                    this.seconds = 0;
                }
            }, 1000);
        }
    }
});

app.mount('#app');

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-bar');
    const searchInput = searchForm.querySelector('input');
    const searchButton = searchForm.querySelector('button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            // Store search term in sessionStorage for use on search results page
            sessionStorage.setItem('searchTerm', searchTerm);
            
            // For demonstration, redirect to relevant category pages based on search terms
            if (searchTerm.includes('bolsa') || searchTerm.includes('mochila') || searchTerm.includes('carteira')) {
                window.location.href = 'bolsas.html';
            } else if (searchTerm.includes('feminino') || searchTerm.includes('vestido') || searchTerm.includes('blusa')) {
                window.location.href = 'feminino.html';
            } else if (searchTerm.includes('masculino') || searchTerm.includes('camisa') || searchTerm.includes('bermuda')) {
                window.location.href = 'masculino.html';
            } else if (searchTerm.includes('infantil') || searchTerm.includes('criança') || searchTerm.includes('menino') || searchTerm.includes('menina')) {
                window.location.href = 'infantil.html';
            } else if (searchTerm.includes('tênis') || searchTerm.includes('sapato') || searchTerm.includes('calçado')) {
                window.location.href = 'calcados.html';
            } else {
                // Default search results (for demonstration, go to home page)
                alert('Procurando por: ' + searchTerm);
            }
        }
    }
    
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
});