function changeLanguage(lang) {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    // 現在の言語コードを取得
    const currentLang = pathParts[1];
    const supportedLangs = ['ja', 'en', 'zh', 'es'];
    
    if (supportedLangs.includes(currentLang)) {
        // 既存の言語コードを新しい言語コードに置換
        pathParts[1] = lang;
    } else {
        // 言語コードがない場合は先頭に追加
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