// 多言語設定
const i18nConfig = {
    defaultLanguage: 'ja',
    languages: {
        ja: {
            code: 'ja',
            name: '日本語',
            flag: '🇯🇵',
            dir: 'ltr',
            hreflang: 'ja',
            domain: '/ja/'
        },
        en: {
            code: 'en',
            name: 'English',
            flag: '🇺🇸',
            dir: 'ltr',
            hreflang: 'en',
            domain: '/en/'
        },
        zh: {
            code: 'zh',
            name: '中文',
            flag: '🇨🇳',
            dir: 'ltr',
            hreflang: 'zh',
            domain: '/zh/'
        },
        es: {
            code: 'es',
            name: 'Español',
            flag: '🇪🇸',
            dir: 'ltr',
            hreflang: 'es',
            domain: '/es/'
        }
    }
};

// 翻訳データ
const translations = {
    ja: {
        site: {
            title: '水中ドローンDIY',
            subtitle: 'UnderwaterROV Research Blog',
            tagline: '水中ドローン作って採って食べたい',
            description: '水中ドローンの作り方、機材データベース、実験レポートなどを提供する研究ブログです。'
        },
        nav: {
            howto: 'How-to / チュートリアル',
            database: '水中機材データベース',
            casestudy: 'ケーススタディ',
            experiment: '実験レポート',
            store: 'ストア',
            support: 'サポート',
            contact: '問い合わせ'
        },
        sections: {
            recommended: 'おすすめ記事'
        },
        footer: {
            sitemap: 'サイトマップ',
            services: 'サービス',
            follow: 'フォローする',
            copyright: '© 2024 水中ドローンDIY. All rights reserved.'
        },
        articles: {
            basicROV: {
                title: '基本的なROVの作り方',
                description: '初心者向けの水中ドローン製作ガイド'
            },
            motorGuide: {
                title: '推進モーター選定ガイド',
                description: '用途別モーターの比較と選び方'
            },
            deepSeaROV: {
                title: '深海探査ROVプロジェクト',
                description: '1000m級深海ROVの開発事例'
            },
            waterproofTest: {
                title: '防水技術の実験レポート',
                description: '各種防水手法の比較実験結果'
            }
        }
    },
    en: {
        site: {
            title: 'Underwater Drone DIY',
            subtitle: 'UnderwaterROV Research Blog',
            tagline: 'Build, Catch, and Eat with Underwater Drones',
            description: 'Research blog providing underwater drone tutorials, equipment database, and experiment reports.'
        },
        nav: {
            howto: 'How-to / Tutorials',
            database: 'Underwater Equipment Database',
            casestudy: 'Case Studies',
            experiment: 'Experiment Reports',
            store: 'Store',
            support: 'Support',
            contact: 'Contact'
        },
        sections: {
            recommended: 'RECOMMENDED ARTICLES'
        },
        footer: {
            sitemap: 'Sitemap',
            services: 'Services',
            follow: 'Follow Us',
            copyright: '© 2024 Underwater Drone DIY. All rights reserved.'
        },
        articles: {
            basicROV: {
                title: 'Basic ROV Building Guide',
                description: 'Beginner-friendly underwater drone construction guide'
            },
            motorGuide: {
                title: 'Propulsion Motor Selection Guide',
                description: 'Motor comparison and selection by application'
            },
            deepSeaROV: {
                title: 'Deep Sea ROV Project',
                description: '1000m-class deep sea ROV development case'
            },
            waterproofTest: {
                title: 'Waterproofing Technology Report',
                description: 'Comparative test results of waterproofing methods'
            }
        }
    },
    zh: {
        site: {
            title: '水下无人机DIY',
            subtitle: 'UnderwaterROV Research Blog',
            tagline: '制作、捕获、品尝水下无人机',
            description: '提供水下无人机教程、设备数据库和实验报告的研究博客。'
        },
        nav: {
            howto: '教程',
            database: '水下设备数据库',
            casestudy: '案例研究',
            experiment: '实验报告',
            store: '商店',
            support: '支持',
            contact: '联系我们'
        },
        sections: {
            recommended: '推荐文章'
        },
        footer: {
            sitemap: '网站地图',
            services: '服务',
            follow: '关注我们',
            copyright: '© 2024 水下无人机DIY. 版权所有。'
        },
        articles: {
            basicROV: {
                title: '基础ROV制作指南',
                description: '初学者友好的水下无人机制作指南'
            },
            motorGuide: {
                title: '推进电机选择指南',
                description: '按应用分类的电机比较和选择'
            },
            deepSeaROV: {
                title: '深海ROV项目',
                description: '1000米级深海ROV开发案例'
            },
            waterproofTest: {
                title: '防水技术报告',
                description: '防水方法的比较测试结果'
            }
        }
    },
    es: {
        site: {
            title: 'Dron Submarino DIY',
            subtitle: 'UnderwaterROV Research Blog',
            tagline: 'Construir, Capturar y Comer con Drones Submarinos',
            description: 'Blog de investigación que proporciona tutoriales de drones submarinos, base de datos de equipos e informes de experimentos.'
        },
        nav: {
            howto: 'Tutoriales',
            database: 'Base de Datos de Equipos Submarinos',
            casestudy: 'Estudios de Caso',
            experiment: 'Informes de Experimentos',
            store: 'Tienda',
            support: 'Soporte',
            contact: 'Contacto'
        },
        sections: {
            recommended: 'ARTÍCULOS RECOMENDADOS'
        },
        footer: {
            sitemap: 'Mapa del Sitio',
            services: 'Servicios',
            follow: 'Síguenos',
            copyright: '© 2024 Dron Submarino DIY. Todos los derechos reservados.'
        },
        articles: {
            basicROV: {
                title: 'Guía Básica de Construcción de ROV',
                description: 'Guía de construcción de drones submarinos para principiantes'
            },
            motorGuide: {
                title: 'Guía de Selección de Motores de Propulsión',
                description: 'Comparación y selección de motores por aplicación'
            },
            deepSeaROV: {
                title: 'Proyecto ROV de Aguas Profundas',
                description: 'Caso de desarrollo de ROV de aguas profundas de clase 1000m'
            },
            waterproofTest: {
                title: 'Informe de Tecnología de Impermeabilización',
                description: 'Resultados de pruebas comparativas de métodos de impermeabilización'
            }
        }
    }
};

// ユーティリティ関数
function getTranslation(lang, key) {
    const keys = key.split('.');
    let result = translations[lang];
    
    for (const k of keys) {
        result = result?.[k];
    }
    
    return result || key;
}

function getCurrentLanguage() {
    const path = window.location.pathname;
    const langCode = path.split('/')[1];
    return i18nConfig.languages[langCode] ? langCode : i18nConfig.defaultLanguage;
}

function getLanguageUrls(currentPath) {
    const urls = {};
    const pathParts = currentPath.split('/');
    
    // 言語コードを除いたパスを取得
    const cleanPath = pathParts.slice(2).join('/');
    
    Object.keys(i18nConfig.languages).forEach(lang => {
        urls[lang] = `/${lang}/${cleanPath}`;
    });
    
    return urls;
}

// グローバルに公開
if (typeof window !== 'undefined') {
    window.i18nConfig = i18nConfig;
    window.translations = translations;
    window.getTranslation = getTranslation;
    window.getCurrentLanguage = getCurrentLanguage;
    window.getLanguageUrls = getLanguageUrls;
}

// Node.js環境での exports
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        i18nConfig,
        translations,
        getTranslation,
        getCurrentLanguage,
        getLanguageUrls
    };
}