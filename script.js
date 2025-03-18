import { createApp } from 'vue';

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