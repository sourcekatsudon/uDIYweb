function changeLanguage(lang) {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    const langIndex = pathParts.findIndex(part => ['jp', 'en', 'zh', 'es'].includes(part));
    
    if (langIndex !== -1) {
        pathParts[langIndex] = lang;
    } else {
        pathParts.splice(1, 0, lang);
    }
    
    window.location.href = pathParts.join('/');
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        console.log('検索クエリ:', query);
        alert('検索機能は現在開発中です。');
    }
}