// Инициализация Telegram Web App
(function() {
    'use strict';
    
    console.log('=== НАЧАЛО ЗАГРУЗКИ ПРИЛОЖЕНИЯ ===');
    console.log('Время загрузки:', new Date().toISOString());
    
    // Простой тест - создаем глобальную переменную для проверки
    window.appLoaded = true;
    console.log('✓ Скрипт загружен, window.appLoaded =', window.appLoaded);
    
    // Временные заглушки для всех функций, чтобы onclick не падал
    window.switchSection = function(sectionName) {
        console.log('switchSection вызвана (заглушка):', sectionName);
        // Показываем секцию напрямую
        try {
            let section;
            if (sectionName === 'casePageSection') {
                section = document.getElementById('casePageSection');
            } else {
                section = document.getElementById(sectionName + 'Section');
            }
            if (section) {
                document.querySelectorAll('.section').forEach(s => {
                    s.classList.remove('active');
                    s.style.display = 'none';
                });
                section.classList.add('active');
                section.style.display = 'flex';
                
                // Обновляем навигацию
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                const navItem = document.querySelector(`[data-section="${sectionName}"]`);
                if (navItem) {
                    navItem.classList.add('active');
                }
            }
        } catch (e) {
            console.error('Ошибка в switchSection заглушке:', e);
        }
        // Пытаемся вызвать реальную функцию если она загрузилась
        setTimeout(function() {
            if (window._realSwitchSection && window._realSwitchSection !== window.switchSection) {
                window._realSwitchSection(sectionName);
            }
        }, 100);
    };
    
    window.showWalletMenu = function() {
        console.log('showWalletMenu вызвана (заглушка)');
        setTimeout(function() {
            if (window._realShowWalletMenu) {
                window._realShowWalletMenu();
            }
        }, 100);
    };
    
    window.openCasePage = function(caseType) {
        console.log('openCasePage вызвана (заглушка):', caseType);
        // Показываем страницу кейса напрямую
        try {
            const casePageSection = document.getElementById('casePageSection');
            if (casePageSection) {
                document.querySelectorAll('.section').forEach(s => {
                    s.classList.remove('active');
                    s.style.display = 'none';
                });
                casePageSection.classList.add('active');
                casePageSection.style.display = 'flex';
            }
        } catch (e) {
            console.error('Ошибка в openCasePage заглушке:', e);
        }
        // Пытаемся вызвать реальную функцию если она загрузилась
        setTimeout(function() {
            if (window._realOpenCasePage && window._realOpenCasePage !== window.openCasePage) {
                window._realOpenCasePage(caseType);
            }
        }, 100);
    };
    
    window.spinCase = function() {
        console.log('spinCase вызвана (заглушка)');
        setTimeout(function() {
            if (window._realSpinCase) {
                window._realSpinCase();
            }
        }, 100);
    };
    
    window.backToCases = function() {
        console.log('backToCases вызвана (заглушка)');
        setTimeout(function() {
            if (window._realBackToCases) {
                window._realBackToCases();
            }
        }, 100);
    };
    
    window.updateBalance = function() {
        console.log('updateBalance вызвана (заглушка)');
        setTimeout(function() {
            if (window._realUpdateBalance) {
                window._realUpdateBalance();
            }
        }, 100);
    };
    
    window.diceAddStars = function() {
        console.log('diceAddStars вызвана (заглушка)');
        setTimeout(function() {
            if (window._realDiceAddStars) {
                window._realDiceAddStars();
            }
        }, 100);
    };
    
    window.startLadderGameFromInput = function() {
        console.log('startLadderGameFromInput вызвана (заглушка)');
        setTimeout(function() {
            if (window._realStartLadderGameFromInput) {
                window._realStartLadderGameFromInput();
            }
        }, 100);
    };
    
    window.wheelAddStars = function() {
        console.log('wheelAddStars вызвана (заглушка)');
        setTimeout(function() {
            if (window._realWheelAddStars) {
                window._realWheelAddStars();
            }
        }, 100);
    };
    
    window.wheelAddGift = function() {
        console.log('wheelAddGift вызвана (заглушка)');
        setTimeout(function() {
            if (window._realWheelAddGift) {
                window._realWheelAddGift();
            }
        }, 100);
    };
    
    window.wheelSubmitBet = function() {
        console.log('wheelSubmitBet вызвана (заглушка)');
        setTimeout(function() {
            if (window._realWheelSubmitBet) {
                window._realWheelSubmitBet();
            }
        }, 100);
    };
    
    window.mineboomAddStars = function() {
        console.log('mineboomAddStars вызвана (заглушка)');
        setTimeout(function() {
            if (window._realMineboomAddStars) {
                window._realMineboomAddStars();
            }
        }, 100);
    };
    
    window.mineboomAddGift = function() {
        console.log('mineboomAddGift вызвана (заглушка)');
        setTimeout(function() {
            if (window._realMineboomAddGift) {
                window._realMineboomAddGift();
            }
        }, 100);
    };
    
    window.stopLadderGame = function() {
        console.log('stopLadderGame вызвана (заглушка)');
        setTimeout(function() {
            if (window._realStopLadderGame) {
                window._realStopLadderGame();
            }
        }, 100);
    };
    
    window.switchBattlesMode = function(mode) {
        console.log('switchBattlesMode вызвана (заглушка):', mode);
        setTimeout(function() {
            if (window._realSwitchBattlesMode) {
                window._realSwitchBattlesMode(mode);
            }
        }, 100);
    };

    window.arenaAddStars = function() {
    console.log("arenaAddStars заглушка");
}
    
    // Инициализация Telegram Web App (с проверкой)
    let tg;
    try {
        tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : {
            ready: function() {},
            expand: function() {},
            setHeaderColor: function() {},
            setBackgroundColor: function() {},
            showAlert: function(msg) { alert(msg); },
            sendData: function() {}
        };
        console.log('✓ Telegram WebApp инициализирован');
    } catch (e) {
        console.error('Ошибка инициализации Telegram WebApp:', e);
        tg = {
            ready: function() {},
            expand: function() {},
            setHeaderColor: function() {},
            setBackgroundColor: function() {},
            showAlert: function(msg) { alert(msg); },
            sendData: function() {}
        };
    }
    
    // Синхронизация баланса с бэкендом
    async function syncBalanceWithBackend() {
        try {
            const botBackendUrl = localStorage.getItem('botBackendUrl');
            if (!botBackendUrl) return null;
            
            // Получаем user_id из Telegram
            let user_id = null;
            if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
                user_id = tg.initDataUnsafe.user.id;
            }
            
            if (!user_id) return null;
            
            const response = await fetch(`${botBackendUrl}/api/user/balance?user_id=${user_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.balance !== undefined) {
                    state.balance = data.balance;
                    localStorage.setItem('balance', data.balance.toString());
                    updateBalance();
                    console.log('Баланс синхронизирован с бэкендом:', data.balance);
                    return data.balance;
                }
            }
        } catch (error) {
            console.error('Ошибка синхронизации баланса:', error);
        }
        return null;
    }
    
    // Синхронизация подарков с бэкендом
    async function syncGiftsWithBackend() {
        try {
            const botBackendUrl = localStorage.getItem('botBackendUrl');
            if (!botBackendUrl) return;
            
            let user_id = null;
            if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
                user_id = tg.initDataUnsafe.user.id;
            }
            
            if (!user_id) return;
            
            const response = await fetch(`${botBackendUrl}/api/user/gifts?user_id=${user_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.gifts && Array.isArray(data.gifts)) {
                    // Объединяем подарки из бэкенда с локальными
                    const backendGifts = data.gifts.map(g => ({
                        name: g.name,
                        price: g.price,
                        rarity: g.rarity || 'common'
                    }));
                    
                    // Добавляем новые подарки из бэкенда
                    backendGifts.forEach(gift => {
                        const exists = state.inventory.find(item => item.name === gift.name);
                        if (!exists) {
                            state.inventory.push(gift);
                        }
                    });
                    
                    localStorage.setItem('inventory', JSON.stringify(state.inventory));
                    updateInventory();
                    console.log('Подарки синхронизированы с бэкендом:', backendGifts.length);
                }
            }
        } catch (error) {
            console.error('Ошибка синхронизации подарков:', error);
        }
    }
    
    // Инициализация баланса сразу
    function initBalanceSync() {
        try {
            const savedBalance = localStorage.getItem('balance');
            let balance = 1000; // По умолчанию 1000
            
            if (savedBalance && savedBalance !== '' && savedBalance !== 'null' && savedBalance !== 'undefined') {
                const parsedBalance = parseInt(savedBalance, 10);
                if (!isNaN(parsedBalance) && parsedBalance > 0) {
                    balance = parsedBalance;
                } else {
                    // Если баланс 0, отрицательный или невалидный - устанавливаем 1000
                    balance = 1000;
                }
            }
            
            // Убеждаемся что баланс валидный и больше 0
            if (balance <= 0 || isNaN(balance) || balance === null || balance === undefined) {
                balance = 1000;
            }
            
            // Всегда сохраняем валидный баланс
            localStorage.setItem('balance', balance.toString());
            console.log('Баланс инициализирован:', balance);
            
            // Пытаемся синхронизировать с бэкендом
            syncBalanceWithBackend().then(backendBalance => {
                if (backendBalance !== null) {
                    console.log('Баланс обновлен из бэкенда:', backendBalance);
                }
            });
            
            return balance;
        } catch (error) {
            console.error('Ошибка инициализации баланса:', error);
            localStorage.setItem('balance', '1000');
            return 1000;
        }
    }
    
    // Состояние приложения
    const state = {
        balance: initBalanceSync(), // Инициализируем сразу
        inventory: (function() {
            try {
                const inv = localStorage.getItem('inventory');
                return inv ? JSON.parse(inv) : [];
            } catch (e) {
                return [];
            }
        })(),
        currentSection: 'inventory',
        currentCase: null,
        lastFreeCaseTime: (function() {
            try {
                return parseInt(localStorage.getItem('lastFreeCaseTime'), 10) || 0;
            } catch (e) {
                return 0;
            }
        })()
    };
    
    // Немедленно обновляем баланс в UI если DOM уже загружен
    function updateBalanceImmediate() {
        try {
            const balanceEl = document.getElementById('balanceAmount');
            if (balanceEl) {
                balanceEl.textContent = state.balance.toLocaleString() + ' ⭐';
            }
        } catch (e) {
            // Игнорируем ошибки, DOM может быть еще не готов
        }
    }
    
    // Пробуем обновить баланс сразу
    if (typeof document !== 'undefined') {
        if (document.readyState !== 'loading') {
            setTimeout(updateBalanceImmediate, 0);
        } else {
            document.addEventListener('DOMContentLoaded', updateBalanceImmediate);
        }
    }
    
    // Онлайн в приложении (приблизительное значение для UI)
    const onlineState = {
        base: 1200 + Math.floor(Math.random() * 800),
        current: 0
    };
    
    // Инициализация падающих новогодних элементов
    function initFallingElements() {
        const container = document.body;
        if (!container) return;
        
        const elements = ['❄️', '🎁', '🎄', '❄️', '🎁', '🎄', '❄️', '🎁'];
        const speeds = [8, 10, 12, 9, 11, 13, 8.5, 10.5];
        
        function createFallingElement() {
            const element = document.createElement('div');
            const randomIndex = Math.floor(Math.random() * elements.length);
            element.textContent = elements[randomIndex];
            element.style.position = 'fixed';
            element.style.left = Math.random() * 100 + '%';
            element.style.top = '-50px';
            element.style.fontSize = (15 + Math.random() * 15) + 'px';
            element.style.opacity = 0.3 + Math.random() * 0.3;
            element.style.pointerEvents = 'none';
            element.style.zIndex = '1';
            element.style.userSelect = 'none';
            element.style.animation = `fallDown ${speeds[randomIndex]}s linear forwards`;
            element.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            container.appendChild(element);
            
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, speeds[randomIndex] * 1000);
        }
        
        // Создаем элементы каждые 800ms
        setInterval(createFallingElement, 800);
        
        // Создаем несколько сразу
        for (let i = 0; i < 5; i++) {
            setTimeout(createFallingElement, i * 200);
        }
    }

    function initOnlineIndicator() {
        const el = document.getElementById('appOnlineText');
        if (!el) return;

        function update() {
            // Небольшие случайные колебания вокруг базового значения
            const delta = Math.floor(Math.random() * 80) - 40;
            onlineState.current = Math.max(50, onlineState.base + delta);
            el.textContent = 'Online: ' + onlineState.current.toLocaleString();
        }

        update();
        setInterval(update, 7000);
    }
    
    // Цены кейсов
    const casePrices = {
        free: 0,
        newyear: 50,
        crypto: 100,
        onlynft: 200,
        genesis: 500,
        elite: 1000
    };
    
    // База данных реальных подарков Telegram с ценами в звёздах
    // Цены обновляются автоматически при изменении на рынке
    const telegramGiftsDatabase = {
        // Редкие подарки Telegram (ограниченный тираж)
        'Heart Locket': { basePrice: 5000, rarity: 'mythic', minPrice: 4000, maxPrice: 8000, volatility: 0.4 }, // 1,973 шт.
        'Plush Pepe': { basePrice: 3500, rarity: 'mythic', minPrice: 2800, maxPrice: 6000, volatility: 0.38 }, // 2,861 шт.
        'Heroic Helmet': { basePrice: 2500, rarity: 'legendary', minPrice: 2000, maxPrice: 4000, volatility: 0.35 }, // 3,794 шт.
        'Mighty Arm': { basePrice: 2200, rarity: 'legendary', minPrice: 1800, maxPrice: 3500, volatility: 0.33 }, // 4,123 шт.
        'Ion Gem': { basePrice: 2000, rarity: 'legendary', minPrice: 1600, maxPrice: 3200, volatility: 0.32 }, // 4,692 шт.
        'Durov\'s Cap': { basePrice: 4500, rarity: 'mythic', minPrice: 3500, maxPrice: 7000, volatility: 0.4 }, // 4,774 шт.
        'Nail Bracelet': { basePrice: 1800, rarity: 'legendary', minPrice: 1500, maxPrice: 3000, volatility: 0.3 }, // 4,818 шт.
        'Perfume Bottle': { basePrice: 1600, rarity: 'legendary', minPrice: 1300, maxPrice: 2800, volatility: 0.28 }, // 4,848 шт.
        'Magic Potion': { basePrice: 1500, rarity: 'legendary', minPrice: 1200, maxPrice: 2500, volatility: 0.3 }, // 4,871 шт.
        'Mini Oscar': { basePrice: 1200, rarity: 'epic', minPrice: 1000, maxPrice: 2000, volatility: 0.25 }, // 5,614 шт.
        'Astral Shard': { basePrice: 1000, rarity: 'epic', minPrice: 800, maxPrice: 1800, volatility: 0.24 }, // 6,196 шт.
        'Artisan Brick': { basePrice: 800, rarity: 'epic', minPrice: 650, maxPrice: 1500, volatility: 0.22 }, // 6,852 шт.
        'Gem Signet': { basePrice: 900, rarity: 'epic', minPrice: 700, maxPrice: 1600, volatility: 0.23 }, // 6,962 шт.
        'Sharp Tongue': { basePrice: 700, rarity: 'epic', minPrice: 550, maxPrice: 1200, volatility: 0.21 }, // 8,546 шт.
        
        // Средние подарки Telegram
        'Moon Pendant': { basePrice: 150, rarity: 'rare', minPrice: 100, maxPrice: 300, volatility: 0.18 }, // 111,080 шт.
        'Lunar Snake': { basePrice: 100, rarity: 'rare', minPrice: 70, maxPrice: 200, volatility: 0.15 }, // 259,346 шт.
        'Holiday Drink': { basePrice: 120, rarity: 'rare', minPrice: 80, maxPrice: 250, volatility: 0.16 }, // 120,989 шт.
        'Record Player': { basePrice: 200, rarity: 'rare', minPrice: 150, maxPrice: 350, volatility: 0.2 }, // 46,888 шт.
        'Joyful Bundle': { basePrice: 110, rarity: 'rare', minPrice: 75, maxPrice: 220, volatility: 0.15 }, // 114,092 шт.
        'Restless Jar': { basePrice: 130, rarity: 'rare', minPrice: 90, maxPrice: 270, volatility: 0.17 }, // 120,184 шт.
        'Big Year': { basePrice: 140, rarity: 'rare', minPrice: 100, maxPrice: 280, volatility: 0.18 }, // 101,415 шт.
        'Light Sword': { basePrice: 160, rarity: 'rare', minPrice: 120, maxPrice: 320, volatility: 0.19 }, // 131,222 шт.
        'Jingle Bells': { basePrice: 125, rarity: 'rare', minPrice: 85, maxPrice: 260, volatility: 0.16 }, // 124,593 шт.
        'Eternal Candle': { basePrice: 180, rarity: 'rare', minPrice: 140, maxPrice: 340, volatility: 0.2 }, // 46,590 шт.
        'Skull Flower': { basePrice: 300, rarity: 'epic', minPrice: 250, maxPrice: 500, volatility: 0.25 }, // 24,126 шт.
        'Sakura Flower': { basePrice: 400, rarity: 'epic', minPrice: 350, maxPrice: 600, volatility: 0.26 } // 20,000 шт.
    };
    
    // Текущие актуальные цены (обновляются автоматически)
    let currentGiftPrices = {};
    
    // Функция для получения пути к изображению подарка
    function getGiftImagePath(giftName) {
        // Преобразуем название подарка в имя файла
        // Убираем специальные символы, заменяем пробелы на подчеркивания
        const fileName = giftName
            .replace(/'/g, '') // Убираем апострофы
            .replace(/\s+/g, '_') // Заменяем пробелы на подчеркивания
            .toLowerCase();
        
        // Сначала пробуем локальный файл
        const localPath = `images/gifts/${fileName}.png`;
        
        // Если локального файла нет, пробуем загрузить из внешних источников
        // Можно использовать CDN или API для получения изображений
        const externalSources = [
            `https://giftsgram.com/gifts/${fileName}.png`,
            `https://tgsupergift.com/images/${fileName}.png`,
            // Добавьте другие источники по необходимости
        ];
        
        // Возвращаем локальный путь (если файл не найден, будет использован fallback)
        return localPath;
    }
    
    // Функция для предзагрузки изображений подарков
    async function preloadGiftImages() {
        const giftNames = Object.keys(telegramGiftsDatabase);
        const imagePromises = giftNames.map(giftName => {
            return new Promise((resolve) => {
                const img = new Image();
                const imagePath = getGiftImagePath(giftName);
                
                img.onload = () => {
                    console.log(`Image loaded: ${giftName}`);
                    resolve({ giftName, imagePath, loaded: true });
                };
                
                img.onerror = () => {
                    // Если локальное изображение не найдено, пробуем внешние источники
                    const fileName = giftName
                        .replace(/'/g, '')
                        .replace(/\s+/g, '_')
                        .toLowerCase();
                    
                    // Пробуем загрузить из внешних источников
                    const externalImg = new Image();
                    externalImg.crossOrigin = 'anonymous';
                    
                    // Пробуем разные источники
                    const sources = [
                        `https://giftsgram.com/gifts/${fileName}.png`,
                        `https://tgsupergift.com/images/${fileName}.png`
                    ];
                    
                    let sourceIndex = 0;
                    const tryNextSource = () => {
                        if (sourceIndex >= sources.length) {
                            resolve({ giftName, imagePath, loaded: false });
                            return;
                        }
                        
                        externalImg.onload = () => {
                            console.log(`External image loaded: ${giftName} from ${sources[sourceIndex]}`);
                            // Можно сохранить изображение в localStorage или IndexedDB
                            resolve({ giftName, imagePath: sources[sourceIndex], loaded: true });
                        };
                        
                        externalImg.onerror = () => {
                            sourceIndex++;
                            tryNextSource();
                        };
                        
                        externalImg.src = sources[sourceIndex];
                    };
                    
                    tryNextSource();
                };
                
                img.src = imagePath;
            });
        });
        
        const results = await Promise.all(imagePromises);
        console.log('Gift images preload results:', results);
        return results;
    }
    
    // Функция для получения иконки подарка (fallback)
    function getGiftIcon(giftName) {
        // Маппинг названий подарков на эмодзи иконки
        const iconMap = {
            'Heart Locket': '💝',
            'Plush Pepe': '🐸',
            'Heroic Helmet': '🛡️',
            'Mighty Arm': '💪',
            'Ion Gem': '💎',
            'Durov\'s Cap': '🧢',
            'Nail Bracelet': '💍',
            'Perfume Bottle': '🧴',
            'Magic Potion': '🧪',
            'Mini Oscar': '🏆',
            'Astral Shard': '⭐',
            'Artisan Brick': '🧱',
            'Gem Signet': '💎',
            'Sharp Tongue': '👅',
            'Moon Pendant': '🌙',
            'Lunar Snake': '🐍',
            'Holiday Drink': '🍹',
            'Record Player': '💿',
            'Joyful Bundle': '🎁',
            'Restless Jar': '🫙',
            'Big Year': '📅',
            'Light Sword': '⚔️',
            'Jingle Bells': '🔔',
            'Eternal Candle': '🕯️',
            'Skull Flower': '💀',
            'Sakura Flower': '🌸'
        };
        
        return iconMap[giftName] || '🎁';
    }
    
    // Инициализация цен подарков
    async function initGiftPrices() {
        // Сначала пытаемся загрузить подарки из Telegram
        await loadTelegramGifts();
        
        // Затем инициализируем цены из базы данных
        Object.keys(telegramGiftsDatabase).forEach(giftName => {
            const gift = telegramGiftsDatabase[giftName];
            if (!currentGiftPrices[giftName]) {
                currentGiftPrices[giftName] = gift.basePrice;
            }
        });
        
        // Загружаем сохранённые цены из localStorage (если есть)
        try {
            const savedPrices = localStorage.getItem('giftPrices');
            if (savedPrices) {
                const parsed = JSON.parse(savedPrices);
                Object.keys(parsed).forEach(name => {
                    if (currentGiftPrices[name] !== undefined) {
                        currentGiftPrices[name] = parsed[name];
                    }
                });
            }
        } catch (e) {
            console.error('Error loading saved prices:', e);
        }
        
        // Запускаем автоматическое обновление цен
        startPriceUpdateInterval();
    }
    
    // Загрузка подарков из Telegram через Bot API или WebApp API
    async function loadTelegramGifts() {
        try {
            // Вариант 1: Через Telegram WebApp API (если доступен)
            if (window.Telegram && window.Telegram.WebApp) {
                const webApp = window.Telegram.WebApp;
                
                // Пытаемся получить информацию о подарках через WebApp
                // Telegram WebApp API не предоставляет прямой доступ к маркетплейсу,
                // но можно использовать initData для получения информации о пользователе
                const initData = webApp.initData;
                if (initData) {
                    console.log('Telegram WebApp initData available');
                }
            }
            
            // Вариант 2: Через бэкенд бота (если настроен)
            // Нужно указать URL вашего бэкенда
            const botBackendUrl = localStorage.getItem('botBackendUrl') || '';
            if (botBackendUrl) {
                try {
                    const response = await fetch(`${botBackendUrl}/api/gifts`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        const giftsData = await response.json();
                        if (giftsData && Array.isArray(giftsData)) {
                            // Обновляем базу данных подарков из ответа бота
                            giftsData.forEach(gift => {
                                if (gift.name && gift.price) {
                                    if (!telegramGiftsDatabase[gift.name]) {
                                        // Добавляем новый подарок в базу
                                        telegramGiftsDatabase[gift.name] = {
                                            basePrice: gift.price,
                                            rarity: gift.rarity || 'common',
                                            minPrice: gift.minPrice || gift.price * 0.7,
                                            maxPrice: gift.maxPrice || gift.price * 1.5,
                                            volatility: gift.volatility || 0.15
                                        };
                                    }
                                    // Обновляем текущую цену
                                    currentGiftPrices[gift.name] = gift.price;
                                }
                            });
                            
                            // Сохраняем обновленные цены
                            localStorage.setItem('giftPrices', JSON.stringify(currentGiftPrices));
                            console.log('Gifts loaded from bot backend:', giftsData.length);
                        }
                    }
                } catch (error) {
                    console.warn('Failed to load gifts from bot backend:', error);
                }
            }
            
            // Вариант 3: Через Telegram Bot API напрямую (требует токен бота)
            // ВАЖНО: Не храните токен бота в клиентском коде!
            // Это должно быть на бэкенде
            const botToken = localStorage.getItem('botToken');
            if (botToken && !botBackendUrl) {
                console.warn('Bot token found in localStorage. For security, use backend instead.');
                // Не используем токен напрямую в клиенте - это небезопасно!
            }
            
        } catch (error) {
            console.error('Error loading Telegram gifts:', error);
        }
    }
    
    // Функция для настройки URL бэкенда бота
    function configureBotBackend(url) {
        if (url) {
            localStorage.setItem('botBackendUrl', url);
            console.log('Bot backend URL configured:', url);
            // Перезагружаем подарки
            loadTelegramGifts();
        }
    }
    
    // Экспортируем функцию настройки
    window.configureBotBackend = configureBotBackend;
    
    // Настройки для внешнего API (если нужно подключить)
    const giftPricesAPI = {
        enabled: false, // Включить/выключить использование внешнего API
        url: '', // URL вашего API или стороннего сервиса
        apiKey: '', // API ключ (если нужен)
        updateInterval: 5 * 60 * 1000, // Интервал обновления (5 минут)
        fallbackToLocal: true // Использовать локальные цены, если API недоступен
    };
    
    // Получение цен из внешнего API (если настроено)
    async function fetchGiftPricesFromAPI() {
        if (!giftPricesAPI.enabled || !giftPricesAPI.url) {
            return null;
        }
        
        try {
            const response = await fetch(giftPricesAPI.url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...(giftPricesAPI.apiKey ? { 'Authorization': `Bearer ${giftPricesAPI.apiKey}` } : {})
                }
            });
            
            if (!response.ok) {
                throw new Error(`API response: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Ожидаемый формат ответа: { "Gift Name": price, ... }
            if (data && typeof data === 'object') {
                return data;
            }
            
            return null;
        } catch (error) {
            console.error('Ошибка получения цен из API:', error);
            return null;
        }
    }
    
    // Автоматическое обновление цен подарков
    async function updateGiftPrices() {
        let pricesChanged = false;
        
        // Пытаемся получить цены из внешнего API
        let apiPrices = null;
        if (giftPricesAPI.enabled) {
            apiPrices = await fetchGiftPricesFromAPI();
        }
        
        Object.keys(telegramGiftsDatabase).forEach(giftName => {
            const gift = telegramGiftsDatabase[giftName];
            const currentPrice = currentGiftPrices[giftName] || gift.basePrice;
            let newPrice = currentPrice;
            
            // Если есть цены из API, используем их
            if (apiPrices && apiPrices[giftName] !== undefined) {
                const apiPrice = parseInt(apiPrices[giftName], 10);
                if (!isNaN(apiPrice) && apiPrice > 0) {
                    // Ограничиваем цену минимальными и максимальными значениями
                    newPrice = Math.max(gift.minPrice, Math.min(gift.maxPrice, apiPrice));
                }
            } else {
                // Используем локальную имитацию рынка
                if (giftPricesAPI.fallbackToLocal || !giftPricesAPI.enabled) {
                    // Генерируем случайное изменение цены в пределах волатильности
                    const changePercent = (Math.random() - 0.5) * 2 * gift.volatility * 100; // -volatility% до +volatility%
                    newPrice = Math.round(currentPrice * (1 + changePercent / 100));
                    
                    // Ограничиваем цену минимальными и максимальными значениями
                    newPrice = Math.max(gift.minPrice, Math.min(gift.maxPrice, newPrice));
                } else {
                    // Если API недоступен и fallback отключен, не обновляем цену
                    return;
                }
            }
            
            if (newPrice !== currentPrice) {
                currentGiftPrices[giftName] = newPrice;
                pricesChanged = true;
            }
        });
        
        // Сохраняем обновлённые цены
        if (pricesChanged) {
            localStorage.setItem('giftPrices', JSON.stringify(currentGiftPrices));
            localStorage.setItem('giftPricesUpdated', Date.now().toString());
            localStorage.setItem('giftPricesSource', apiPrices ? 'api' : 'local');
            
            // Обновляем отображение цен в UI (если нужно)
            updateGiftPricesInUI();
        }
    }
    
    // Интервал для автоматического обновления цен
    let priceUpdateInterval = null;
    function startPriceUpdateInterval() {
        if (priceUpdateInterval) clearInterval(priceUpdateInterval);
        
        // Обновляем сразу при загрузке
        updateGiftPrices();
        
        // Затем с заданным интервалом
        priceUpdateInterval = setInterval(() => {
            updateGiftPrices();
        }, giftPricesAPI.updateInterval);
        
        // Автоматическая синхронизация с бэкендом каждые 30 секунд
        setInterval(() => {
            syncBalanceWithBackend();
            syncGiftsWithBackend();
        }, 30000); // 30 секунд
    }
    
    // Функция для настройки внешнего API (можно вызвать из консоли или настроек)
    function configureGiftPricesAPI(config) {
        if (config.enabled !== undefined) giftPricesAPI.enabled = config.enabled;
        if (config.url) giftPricesAPI.url = config.url;
        if (config.apiKey !== undefined) giftPricesAPI.apiKey = config.apiKey;
        if (config.updateInterval) giftPricesAPI.updateInterval = config.updateInterval;
        if (config.fallbackToLocal !== undefined) giftPricesAPI.fallbackToLocal = config.fallbackToLocal;
        
        // Перезапускаем интервал обновления
        startPriceUpdateInterval();
        
        console.log('Настройки API обновлены:', giftPricesAPI);
    }
    
    // Экспортируем функцию для настройки API
    window.configureGiftPricesAPI = configureGiftPricesAPI;
    
    // Получение актуальной цены подарка
    function getGiftPrice(giftName) {
        return currentGiftPrices[giftName] || telegramGiftsDatabase[giftName]?.basePrice || 100;
    }
    
    // Получение информации о подарке
    function getGiftInfo(giftName) {
        const price = getGiftPrice(giftName);
        const gift = telegramGiftsDatabase[giftName];
        if (!gift) return { price, rarity: 'common' };
        
        return {
            price: price,
            rarity: gift.rarity,
            basePrice: gift.basePrice,
            minPrice: gift.minPrice,
            maxPrice: gift.maxPrice,
            priceChange: price - gift.basePrice,
            priceChangePercent: ((price - gift.basePrice) / gift.basePrice * 100).toFixed(1)
        };
    }
    
    // Обновление цен в UI (если есть элементы, отображающие цены)
    function updateGiftPricesInUI() {
        // Обновляем цены в инвентаре
        if (state.currentSection === 'inventory') {
            updateInventory();
        }
        
        // Можно добавить обновление в других местах, где отображаются цены
    }
    
    // Подарки для каждого кейса (реальные подарки Telegram, цены обновляются автоматически)
    const caseRewards = {
        free: [
            // Rare (50% шанс) - обычные подарки
            { icon: '🌙', name: 'Moon Pendant', chance: '16.67%', getPrice: () => getGiftPrice('Moon Pendant') },
            { icon: '🐍', name: 'Lunar Snake', chance: '16.67%', getPrice: () => getGiftPrice('Lunar Snake') },
            { icon: '🍹', name: 'Holiday Drink', chance: '16.67%', getPrice: () => getGiftPrice('Holiday Drink') },
            // Epic (30% шанс) - средние подарки
            { icon: '💿', name: 'Record Player', chance: '10%', getPrice: () => getGiftPrice('Record Player') },
            { icon: '🎁', name: 'Joyful Bundle', chance: '10%', getPrice: () => getGiftPrice('Joyful Bundle') },
            { icon: '🕯️', name: 'Eternal Candle', chance: '10%', getPrice: () => getGiftPrice('Eternal Candle') },
            // Legendary (15% шанс) - редкие подарки
            { icon: '⚔️', name: 'Light Sword', chance: '5%', getPrice: () => getGiftPrice('Light Sword') },
            { icon: '🔔', name: 'Jingle Bells', chance: '5%', getPrice: () => getGiftPrice('Jingle Bells') },
            { icon: '💀', name: 'Skull Flower', chance: '5%', getPrice: () => getGiftPrice('Skull Flower') },
            // Mythic (5% шанс) - очень редкие
            { icon: '🌸', name: 'Sakura Flower', chance: '2.5%', getPrice: () => getGiftPrice('Sakura Flower') },
            { icon: '🏆', name: 'Mini Oscar', chance: '2.5%', getPrice: () => getGiftPrice('Mini Oscar') }
        ],
        newyear: [
            // Rare (40% шанс) - новогодние подарки
            { icon: '🌙', name: 'Moon Pendant', chance: '13.33%', getPrice: () => getGiftPrice('Moon Pendant') },
            { icon: '🎁', name: 'Joyful Bundle', chance: '13.33%', getPrice: () => getGiftPrice('Joyful Bundle') },
            { icon: '🔔', name: 'Jingle Bells', chance: '13.33%', getPrice: () => getGiftPrice('Jingle Bells') },
            // Epic (35% шанс) - средние новогодние
            { icon: '🕯️', name: 'Eternal Candle', chance: '11.67%', getPrice: () => getGiftPrice('Eternal Candle') },
            { icon: '💿', name: 'Record Player', chance: '11.67%', getPrice: () => getGiftPrice('Record Player') },
            { icon: '🍹', name: 'Holiday Drink', chance: '11.67%', getPrice: () => getGiftPrice('Holiday Drink') },
            // Legendary (20% шанс) - редкие новогодние
            { icon: '⚔️', name: 'Light Sword', chance: '6.67%', getPrice: () => getGiftPrice('Light Sword') },
            { icon: '💀', name: 'Skull Flower', chance: '6.67%', getPrice: () => getGiftPrice('Skull Flower') },
            { icon: '🌸', name: 'Sakura Flower', chance: '6.67%', getPrice: () => getGiftPrice('Sakura Flower') },
            // Mythic (5% шанс) - очень редкие
            { icon: '🏆', name: 'Mini Oscar', chance: '1.67%', getPrice: () => getGiftPrice('Mini Oscar') },
            { icon: '💎', name: 'Gem Signet', chance: '1.67%', getPrice: () => getGiftPrice('Gem Signet') },
            { icon: '⭐', name: 'Astral Shard', chance: '1.67%', getPrice: () => getGiftPrice('Astral Shard') }
        ],
        crypto: [
            // Rare (45% шанс) - обычные подарки
            { icon: '🌙', name: 'Moon Pendant', chance: '15%', getPrice: () => getGiftPrice('Moon Pendant') },
            { icon: '🐍', name: 'Lunar Snake', chance: '15%', getPrice: () => getGiftPrice('Lunar Snake') },
            { icon: '🎁', name: 'Big Year', chance: '15%', getPrice: () => getGiftPrice('Big Year') },
            // Epic (30% шанс) - средние подарки
            { icon: '💿', name: 'Record Player', chance: '10%', getPrice: () => getGiftPrice('Record Player') },
            { icon: '🕯️', name: 'Eternal Candle', chance: '10%', getPrice: () => getGiftPrice('Eternal Candle') },
            { icon: '⚔️', name: 'Light Sword', chance: '10%', getPrice: () => getGiftPrice('Light Sword') },
            // Legendary (15% шанс) - редкие подарки
            { icon: '💀', name: 'Skull Flower', chance: '5%', getPrice: () => getGiftPrice('Skull Flower') },
            { icon: '🌸', name: 'Sakura Flower', chance: '5%', getPrice: () => getGiftPrice('Sakura Flower') },
            { icon: '🏆', name: 'Mini Oscar', chance: '5%', getPrice: () => getGiftPrice('Mini Oscar') },
            // Mythic (10% шанс) - очень редкие
            { icon: '💎', name: 'Gem Signet', chance: '3.33%', getPrice: () => getGiftPrice('Gem Signet') },
            { icon: '⭐', name: 'Astral Shard', chance: '3.33%', getPrice: () => getGiftPrice('Astral Shard') },
            { icon: '🧱', name: 'Artisan Brick', chance: '3.33%', getPrice: () => getGiftPrice('Artisan Brick') }
        ],
        onlynft: [
            // Epic (50% шанс)
            { icon: '💎', name: 'Gem Signet', chance: '50%', getPrice: () => getGiftPrice('Gem Signet') },
            // Legendary (30% шанс)
            { icon: '⭐', name: 'Astral Shard', chance: '30%', getPrice: () => getGiftPrice('Astral Shard') },
            // Mythic (20% шанс)
            { icon: '🏆', name: 'Mini Oscar', chance: '20%', getPrice: () => getGiftPrice('Mini Oscar') }
        ],
        genesis: [
            // Epic (40% шанс) - средние редкие
            { icon: '💎', name: 'Gem Signet', chance: '13.33%', getPrice: () => getGiftPrice('Gem Signet') },
            { icon: '⭐', name: 'Astral Shard', chance: '13.33%', getPrice: () => getGiftPrice('Astral Shard') },
            { icon: '🧱', name: 'Artisan Brick', chance: '13.33%', getPrice: () => getGiftPrice('Artisan Brick') },
            // Legendary (35% шанс) - редкие
            { icon: '🏆', name: 'Mini Oscar', chance: '11.67%', getPrice: () => getGiftPrice('Mini Oscar') },
            { icon: '👅', name: 'Sharp Tongue', chance: '11.67%', getPrice: () => getGiftPrice('Sharp Tongue') },
            { icon: '🧪', name: 'Magic Potion', chance: '11.67%', getPrice: () => getGiftPrice('Magic Potion') },
            // Mythic (20% шанс) - очень редкие
            { icon: '💍', name: 'Nail Bracelet', chance: '6.67%', getPrice: () => getGiftPrice('Nail Bracelet') },
            { icon: '💎', name: 'Ion Gem', chance: '6.67%', getPrice: () => getGiftPrice('Ion Gem') },
            { icon: '💪', name: 'Mighty Arm', chance: '6.67%', getPrice: () => getGiftPrice('Mighty Arm') },
            // Ultra Mythic (5% шанс) - эксклюзивные
            { icon: '🛡️', name: 'Heroic Helmet', chance: '1.67%', getPrice: () => getGiftPrice('Heroic Helmet') },
            { icon: '🐸', name: 'Plush Pepe', chance: '1.67%', getPrice: () => getGiftPrice('Plush Pepe') },
            { icon: '💝', name: 'Heart Locket', chance: '1.67%', getPrice: () => getGiftPrice('Heart Locket') }
        ],
        elite: [
            // Legendary (40% шанс) - редкие подарки
            { icon: '💍', name: 'Nail Bracelet', chance: '13.33%', getPrice: () => getGiftPrice('Nail Bracelet') },
            { icon: '💎', name: 'Ion Gem', chance: '13.33%', getPrice: () => getGiftPrice('Ion Gem') },
            { icon: '💪', name: 'Mighty Arm', chance: '13.33%', getPrice: () => getGiftPrice('Mighty Arm') },
            // Mythic (35% шанс) - очень редкие
            { icon: '🛡️', name: 'Heroic Helmet', chance: '11.67%', getPrice: () => getGiftPrice('Heroic Helmet') },
            { icon: '🐸', name: 'Plush Pepe', chance: '11.67%', getPrice: () => getGiftPrice('Plush Pepe') },
            { icon: '💝', name: 'Heart Locket', chance: '11.67%', getPrice: () => getGiftPrice('Heart Locket') },
            // Ultra Mythic (20% шанс) - эксклюзивные
            { icon: '🧢', name: 'Durov\'s Cap', chance: '6.67%', getPrice: () => getGiftPrice('Durov\'s Cap') },
            { icon: '💍', name: 'Perfume Bottle', chance: '6.67%', getPrice: () => getGiftPrice('Perfume Bottle') },
            { icon: '🧪', name: 'Magic Potion', chance: '6.67%', getPrice: () => getGiftPrice('Magic Potion') },
            // Unique (5% шанс) - уникальные
            { icon: '💎', name: 'Ion Gem', chance: '1.67%', getPrice: () => getGiftPrice('Ion Gem') },
            { icon: '💝', name: 'Heart Locket', chance: '1.67%', getPrice: () => getGiftPrice('Heart Locket') },
            { icon: '🧢', name: 'Durov\'s Cap', chance: '1.67%', getPrice: () => getGiftPrice('Durov\'s Cap') }
        ]
    };
    
    // Последние выигрыши
    const recentWins = [
        { icon: '🎁', name: 'NFT #1234', user: 'User1', case: 'genesis' },
        { icon: '💎', name: 'Diamond', user: 'User2', case: 'elite' },
        { icon: '⭐', name: 'Star', user: 'User3', case: 'crypto' },
        { icon: '👑', name: 'Crown', user: 'User4', case: 'elite' },
        { icon: '🎨', name: 'Art NFT', user: 'User5', case: 'onlynft' }
    ];
    
    // Функция для удаления всех нежелательных элементов
    function removeAllUnwantedElements() {
        document.querySelectorAll('form').forEach(el => {
                if (!el.closest('.app-container')) {
                    el.remove();
            }
        });
        
        const unwantedTexts = [
            'Marketplace', 'Above.com', 'Make an Offer', 'First Name', 
            'Surname', 'Submit Offer', 'Terms of Service', 'Buy', 'Sell',
            'Price', 'Offer', 'Contact', 'Email', 'Phone'
        ];
        
        document.querySelectorAll('*').forEach(el => {
            const text = (el.textContent || '').trim();
            // Проверяем что className это строка (для SVG это может быть объект)
            let className = '';
            if (el.className) {
                if (typeof el.className === 'string') {
                    className = el.className.toLowerCase();
                } else if (el.className.baseVal) {
                    // SVG элемент
                    className = el.className.baseVal.toLowerCase();
                } else {
                    className = String(el.className).toLowerCase();
                }
            }
            const id = (el.id || '').toLowerCase();
            
            if (unwantedTexts.some(unwanted => 
                (text.includes(unwanted) || className.includes(unwanted.toLowerCase()) || id.includes(unwanted.toLowerCase())) &&
                !el.closest('.app-container')
            )) {
                if (el.tagName !== 'BODY' && el.tagName !== 'SCRIPT' && el.tagName !== 'HTML') {
                        el.remove();
                }
            }
            
            if ((className.includes('marketplace') || className.includes('offer') || 
                className.includes('form') || className.includes('shop') ||
                id.includes('marketplace') || id.includes('offer') || 
                id.includes('form') || id.includes('shop')) &&
                !el.closest('.app-container')) {
                if (el.tagName !== 'BODY' && el.tagName !== 'SCRIPT' && el.tagName !== 'HTML') {
                    el.remove();
                }
            }
        });
    }
    
    // Обновление баланса
    function updateBalance() {
        try {
            // Защита от отрицательного баланса, нуля и невалидных значений
            if (state.balance <= 0 || isNaN(state.balance) || state.balance === null || state.balance === undefined) {
                // Если баланс стал отрицательным, нулевым или невалидным - устанавливаем начальный
                console.log('Баланс невалидный или 0, сбрасываем на 1000');
                state.balance = 1000;
                localStorage.setItem('balance', '1000');
            }
            
            const balanceEl = document.getElementById('balanceAmount');
            if (balanceEl) {
                balanceEl.textContent = state.balance.toLocaleString() + ' ⭐';
                console.log('Баланс обновлен в UI:', state.balance);
            } else {
                console.warn('Элемент balanceAmount не найден при обновлении баланса');
            }
            localStorage.setItem('balance', state.balance.toString());
            
            // Синхронизируем с бэкендом (асинхронно, не блокируем UI)
            const botBackendUrl = localStorage.getItem('botBackendUrl');
            if (botBackendUrl) {
                let user_id = null;
                if (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) {
                    user_id = tg.initDataUnsafe.user.id;
                }
                
                if (user_id) {
                    fetch(`${botBackendUrl}/api/user/balance`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: user_id,
                            balance: state.balance
                        })
                    }).catch(err => console.error('Ошибка синхронизации баланса:', err));
                }
            }
            
            // Обновляем кнопку прокрутки если открыта страница кейса
            if (state.currentCase && typeof updateSpinButton === 'function') {
                updateSpinButton();
            }
        } catch (e) {
            console.error('Ошибка в updateBalance:', e);
        }
    }
    
    // Показать меню кошелька
    function showWalletMenu() {
        const modal = document.getElementById('walletModal');
        modal.classList.add('active');
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    // Экспортируем showWalletMenu сразу после определения
    window.showWalletMenu = showWalletMenu;
    
    // Закрыть модальное окно кошелька
    function closeWalletModal() {
        const modal = document.getElementById('walletModal');
        modal.classList.remove('active');
    }
    
    // Пополнение баланса
    function topUpBalance(method) {
        closeWalletModal();
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        let amount = 0;
        switch(method) {
            case 'stars':
                // Пополнение через Telegram Stars - отправка звезд боту
                if (tg && tg.invoiceStars) {
                    // Используем invoiceStars для отправки звезд боту
                    tg.invoiceStars({
                        title: 'Пополнение баланса',
                        description: 'Отправьте звезды боту для пополнения баланса',
                        payload: JSON.stringify({
                            action: 'topup_stars',
                            user_id: tg.initDataUnsafe?.user?.id
                        }),
                        prices: [{
                            label: 'Пополнение баланса',
                            amount: 100 // Количество звезд
                        }]
                    }, (status) => {
                        if (status === 'paid') {
                            amount = 100;
                            state.balance += amount;
                            updateBalance();
                            
                            // Уведомляем бэкенд о получении звезд
                            const botBackendUrl = localStorage.getItem('botBackendUrl');
                            if (botBackendUrl && tg.initDataUnsafe?.user?.id) {
                                fetch(`${botBackendUrl}/api/stars/received`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        user_id: tg.initDataUnsafe.user.id,
                                        amount: amount
                                    })
                                }).catch(err => console.error('Ошибка уведомления бэкенда:', err));
                            }
                            
                            if (tg && tg.showAlert) {
                                tg.showAlert(`Баланс пополнен на ${amount} ⭐!`);
                            }
                        }
                    });
                    return;
                } else if (tg && tg.openInvoice) {
                    // Альтернативный способ через openInvoice
                    tg.openInvoice({
                        currency: 'XTR',
                        prices: [{
                            label: 'Пополнение баланса',
                            amount: 10000 // 100 звезд в минимальных единицах
                        }]
                    }, (status) => {
                        if (status === 'paid') {
                            amount = 100;
                            state.balance += amount;
                            updateBalance();
                            if (tg && tg.showAlert) {
                                tg.showAlert(`Баланс пополнен на ${amount} ⭐!`);
                            }
                        }
                    });
                    return;
                } else {
                    // Если Telegram API недоступен, просто добавляем для тестирования
                    amount = 100;
                }
                break;
            case 'ton':
                // Пополнение через TON кошелек
                if (tg && tg.openInvoice) {
                    // Получаем адрес TON кошелька из бэкенда
                    const botBackendUrl = localStorage.getItem('botBackendUrl');
                    if (botBackendUrl) {
                        fetch(`${botBackendUrl}/api/ton/wallet_address`)
                            .then(res => res.json())
                            .then(data => {
                                if (data.address) {
                                    if (tg.showAlert) {
                                        tg.showAlert(
                                            `Для пополнения через TON отправьте TON на адрес:\n\n` +
                                            `${data.address}\n\n` +
                                            `После подтверждения транзакции отправьте команду боту:\n` +
                                            `/confirm_ton <сумма> <hash_транзакции>\n\n` +
                                            `Курс: 1 TON = 100 ⭐`
                                        );
                                    }
                                }
                            })
                            .catch(() => {
                                if (tg.showAlert) {
                                    tg.showAlert('Ошибка получения адреса кошелька. Обратитесь к администратору.');
                                }
                            });
                    } else {
                        if (tg.showAlert) {
                            tg.showAlert('Бэкенд не настроен. Обратитесь к администратору.');
                        }
                    }
                    return;
                } else {
                    // Для тестирования
                    amount = 500;
                }
                break;
            case 'gifts':
                amount = 200;
                break;
        }
        
        // Если не использовали Telegram API, добавляем напрямую
        if (amount > 0) {
            state.balance += amount;
            updateBalance();
            localStorage.setItem('balance', state.balance.toString());
            
            if (tg && tg.showAlert) {
                tg.showAlert(`Баланс пополнен на ${amount} ⭐!`);
            }
        }
        
        if (tg && tg.sendData) {
            tg.sendData(JSON.stringify({
                action: 'topUp',
                method: method,
                amount: amount
            }));
        }
    }
    
    // Обновление инвентаря
    // Отправка подарка боту
    async function sendGiftToBot(giftName, giftPrice) {
        try {
            if (!tg || !tg.sendData) {
                console.warn('Telegram API недоступен для отправки подарка');
                return false;
            }
            
            // Отправляем данные боту через sendData
            const data = {
                action: 'send_gift',
                gift_name: giftName,
                gift_price: giftPrice,
                user_id: tg.initDataUnsafe?.user?.id
            };
            
            tg.sendData(JSON.stringify(data));
            
            // Также уведомляем бэкенд
            const botBackendUrl = localStorage.getItem('botBackendUrl');
            if (botBackendUrl) {
                fetch(`${botBackendUrl}/api/gifts/send`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).catch(err => console.error('Ошибка отправки подарка:', err));
            }
            
            return true;
        } catch (error) {
            console.error('Ошибка отправки подарка боту:', error);
            return false;
        }
    }
    
    function updateInventory() {
        const inventoryEl = document.getElementById('inventoryItems');
        if (!inventoryEl) return;
        
        if (state.inventory.length === 0) {
            inventoryEl.innerHTML = `
                <div class="empty-inventory">
                    <div class="empty-icon">📭</div>
                    <p>Ваш инвентарь пуст</p>
                </div>
            `;
        } else {
            inventoryEl.innerHTML = state.inventory.map((item, index) => {
                // Получаем актуальную цену подарка
                const currentPrice = item.price || getGiftPrice(item.name);
                const giftInfo = getGiftInfo(item.name);
                const priceChange = giftInfo.priceChange || 0;
                const priceChangePercent = giftInfo.priceChangePercent || '0.0';
                const priceClass = priceChange > 0 ? 'price-up' : priceChange < 0 ? 'price-down' : 'price-neutral';
                const priceIcon = priceChange > 0 ? '📈' : priceChange < 0 ? '📉' : '➡️';
                
                const giftIcon = item.icon || getGiftIcon(item.name);
                const giftImagePath = getGiftImagePath(item.name);
                
                return `
                <div class="inventory-item">
                    <div class="inventory-item-main" data-inventory-index="${index}">
                        <div class="inventory-item-icon">
                            <img src="${giftImagePath}" alt="${item.name}" class="gift-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <span class="gift-icon-fallback" style="display: none;">${giftIcon}</span>
                        </div>
                        <div class="inventory-item-info">
                            <div class="inventory-item-name">${item.name}</div>
                            <div class="inventory-item-source">Из кейса: ${item.case || 'unknown'}</div>
                            <div class="inventory-item-price ${priceClass}">
                                <span class="price-value">${currentPrice} ⭐</span>
                                ${priceChange !== 0 ? `<span class="price-change">${priceIcon} ${priceChangePercent}%</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="inventory-item-actions">
                        <button class="action-btn withdraw-btn" onclick="withdrawItem(${index})">Вывести</button>
                        <button class="action-btn sell-btn" onclick="sellItem(${index})">Продать</button>
                        <button class="action-btn upgrade-btn" onclick="upgradeItem(${index})">Апгрейд</button>
                    </div>
                </div>
            `;
            }).join('');
        }
    }
    
    // Вывести предмет (отправить подарок боту)
    function withdrawItem(index) {
        const item = state.inventory[index];
        if (!item) return;
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Отправляем подарок боту через Telegram API
        if (tg && tg.sendData) {
            const data = {
                action: 'send_gift_to_bot',
                gift_name: item.name,
                gift_price: item.price || getGiftPrice(item.name),
                gift_rarity: item.rarity || 'common',
                user_id: tg.initDataUnsafe?.user?.id
            };
            
            tg.sendData(JSON.stringify(data));
            
            // Уведомляем бэкенд
            const botBackendUrl = localStorage.getItem('botBackendUrl');
            if (botBackendUrl) {
                fetch(`${botBackendUrl}/api/gifts/send`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(() => {
                    // Удаляем из инвентаря только после успешной отправки
                    state.inventory.splice(index, 1);
                    localStorage.setItem('inventory', JSON.stringify(state.inventory));
                    updateInventory();
                    
                    if (tg && tg.showAlert) {
                        tg.showAlert(`Подарок "${item.name}" отправлен боту!`);
                    }
                }).catch(err => {
                    console.error('Ошибка отправки подарка:', err);
                    if (tg && tg.showAlert) {
                        tg.showAlert('Ошибка отправки подарка. Попробуйте позже.');
                    }
                });
            } else {
                // Если бэкенд не настроен, просто удаляем из инвентаря
                state.inventory.splice(index, 1);
                localStorage.setItem('inventory', JSON.stringify(state.inventory));
                updateInventory();
                
                if (tg && tg.showAlert) {
                    tg.showAlert(`Подарок "${item.name}" выведен`);
                }
            }
        } else {
            // Если Telegram API недоступен
            state.inventory.splice(index, 1);
            localStorage.setItem('inventory', JSON.stringify(state.inventory));
            updateInventory();
            
            if (tg && tg.showAlert) {
                tg.showAlert(`Подарок "${item.name}" выведен`);
            }
        }
    }
    
    // Продать предмет
    function sellItem(index) {
        const item = state.inventory[index];
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Используем актуальную цену подарка (90% от рыночной для учёта комиссии)
        const marketPrice = item.price || getGiftPrice(item.name);
        const sellPrice = Math.floor(marketPrice * 0.9); // 90% от рыночной цены (10% комиссия)
        
        state.balance += sellPrice;
        state.inventory.splice(index, 1);
        localStorage.setItem('inventory', JSON.stringify(state.inventory));
        updateInventory();
        updateBalance();
        
        if (tg && tg.showAlert) {
            tg.showAlert(`Подарок "${item.name}" продан за ${sellPrice} ⭐`);
        }
        
        if (tg && tg.sendData) {
            tg.sendData(JSON.stringify({
                action: 'sell',
                itemIndex: index,
                item: item,
                price: sellPrice,
                marketPrice: marketPrice
            }));
        }
    }
    
    // Апгрейд предмета
    function upgradeItem(index) {
        const item = state.inventory[index];
        if (!item) return;
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Переключаемся на раздел апгрейд
        switchSection('upgrade');
        
        // Автоматически выбираем этот предмет в первый свободный слот
        for (let i = 0; i < 3; i++) {
            if (upgradeState.selectedItems[i] === null) {
                upgradeState.selectedItems[i] = item;
                const slotEl = document.getElementById(`slot${i}`);
                if (slotEl) {
                    slotEl.innerHTML = `
                        <div class="slot-item">
                            <div class="slot-item-icon">${item.icon || getGiftIcon(item.name)}</div>
                            <div class="slot-item-name">${item.name}</div>
                        </div>
                    `;
                }
                updateUpgradeWheel();
                checkUpgradeReady();
                break;
            }
        }
    }
    
    
    // Полосочка с выигрышами
    function updateWinsBar() {
        const winsTrack = document.getElementById('winsTrack');
        if (!winsTrack) return;
        
        winsTrack.innerHTML = recentWins.map(win => `
            <div class="win-item" onclick="goToWin('${win.case}')">
                <span class="win-item-icon">${win.icon}</span>
                <span>${win.user} выиграл ${win.name}</span>
            </div>
        `).join('');
    }
    
    // Переход к выигрышу
    function goToWin(caseType) {
        if (caseType) {
            openCasePage(caseType);
        }
    }
    
    // Добавить новый выигрыш в полосочку
    function addWinToBar(win) {
        recentWins.unshift(win);
        if (recentWins.length > 10) {
            recentWins.pop();
        }
        updateWinsBar();
    }
    
    // Переключение между секциями
    function switchSection(sectionName) {
        // Экспортируем сразу после определения
        window.switchSection = switchSection;
        
        // Скрываем все секции
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Убираем активность с навигации
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Если это страница кейса, не ищем по шаблону
        let section;
        if (sectionName === 'casePageSection') {
            section = document.getElementById('casePageSection');
        } else {
            section = document.getElementById(`${sectionName}Section`);
        }
        
        if (section) {
            section.classList.add('active');
            section.style.display = 'flex';
        } else {
            console.warn('switchSection: section not found for', sectionName);
        }
        
        // Активируем навигацию только для основных секций
        if (sectionName !== 'casePageSection') {
        const navItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (navItem) {
            navItem.classList.add('active');
            }
        }
        
        state.currentSection = sectionName;
        if (sectionName !== 'casePageSection') {
        localStorage.setItem('lastSection', sectionName);
        }
        
        // Если переключились на лесенку - проверяем состояние игры
        if (sectionName === 'ladder') {
            checkLadderGameState();
            // НЕ инициализируем анимацию дракона - используем ракету
            // Отключаем дракона если он активен
            if (dragonAnimation && dragonAnimation.isActive) {
                dragonAnimation.isActive = false;
                if (dragonAnimation.animationId) {
                    cancelAnimationFrame(dragonAnimation.animationId);
                }
            }
            const birdCanvas = document.getElementById('birdAnimationCanvas');
            if (birdCanvas) {
                birdCanvas.style.display = 'none';
            }
        }
        
        // Если переключились на апгрейд - проверяем состояние кнопки
        if (sectionName === 'upgrade') {
            setTimeout(function() {
                if (typeof checkUpgradeReady === 'function') {
                    checkUpgradeReady();
                }
                if (typeof updateUpgradeWheel === 'function') {
                    updateUpgradeWheel();
                }
            }, 100);
        }
        
        // Если переключились на битвы - инициализируем игру
        if (sectionName === 'battles') {
            setTimeout(function() {
                if (typeof initBattlesGame === 'function') {
                    initBattlesGame();
                }
            }, 300);
        }

        // Если открыли отдельную игру Dice - запускаем её цикл и выбор числа
        if (sectionName === 'battlesDice') {
            setTimeout(function() {
                if (typeof initDiceGame === 'function') {
                    initDiceGame();
                }
                if (typeof initDiceChooseHandlers === 'function') {
                    initDiceChooseHandlers();
                }
            }, 200);
        }
        
        // Если открыли отдельную игру Arena - запускаем её цикл
        if (sectionName === 'battlesMineBoom') {
            setTimeout(function() {
                if (typeof initMineBoomGame === 'function') {
                    initMineBoomGame();
                }
            }, 200);
        }
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    // Проверка состояния игры лесенки при входе
    function checkLadderGameState() {
        // При каждом входе в лесенку аккуратно сбрасываем "подвисшие" состояния,
        // чтобы после долгого AFK не было сломанных таймеров/моментальных взрывов.
        
        // Очищаем все интервалы игры
        if (ladderGame.gameLoop) {
            clearInterval(ladderGame.gameLoop);
            ladderGame.gameLoop = null;
        }
        if (ladderGame.timeLoop) {
            clearInterval(ladderGame.timeLoop);
            ladderGame.timeLoop = null;
        }
        if (ladderGame.autoStartInterval) {
            clearInterval(ladderGame.autoStartInterval);
            ladderGame.autoStartInterval = null;
        }
        
        // Сбрасываем состояние
        ladderGame.isPlaying = false;
        ladderGame.stopped = true;
        ladderGame.multiplier = 0.00;
        ladderGame.timeElapsed = 0;
        
        // Прячем ракету до начала следующей игры
        const rocketEl = document.getElementById('ladderRocket');
        if (rocketEl) {
            // Ракета остается видимой всегда
            rocketEl.style.display = 'block';
            rocketEl.style.visibility = 'visible';
            rocketEl.style.opacity = '1';
            rocketEl.classList.remove('rocket-fall');
        }
        
        // Показываем игровое поле и поле ввода
        const betSelection = document.getElementById('ladderBetSelection');
        const gameField = document.getElementById('ladderGameField');
        const result = document.getElementById('ladderResult');
        const countdown = document.getElementById('ladderCountdown');
        const explosion = document.getElementById('ladderExplosion');
        
        if (gameField) gameField.style.display = 'block';
        if (betSelection) betSelection.style.display = 'block';
        if (result) result.style.display = 'none';
        if (countdown) countdown.style.display = 'none';
        if (explosion) explosion.style.display = 'none';
        
        // Создаем красивый фон
        createLadderPatterns();
        
        // Устанавливаем фоновое изображение
        updateLadderBackground();

        // Если никто не играет и нет активного отсчёта — показываем демо-игру,
        // чтобы новый пользователь сразу видел живую ракету и текущий множитель.
        const hasCountdown =
            countdown && countdown.style.display !== 'none' && countdown.style.display !== '';
        if (!ladderGame.isPlaying && !hasCountdown) {
            if (typeof startLadderGameDemo === 'function') {
                startLadderGameDemo();
            }
        }
    }
    
    // Открыть страницу кейса
    function openCasePage(caseType) {
        state.currentCase = caseType;
        
        // Переключаемся на страницу кейса
        switchSection('casePageSection');
        
        // Обновляем информацию о кейсе
        const caseNames = {
            free: 'Free case',
            newyear: 'NewYear case',
            crypto: 'Crypto case',
            onlynft: 'ONLY NFT case',
            genesis: 'Genesis case',
            elite: 'Elite case'
        };
        
        const caseIcons = {
            free: '📦',
            newyear: '🎄',
            crypto: '₿',
            onlynft: '🎨',
            genesis: '⭐',
            elite: '👑'
        };
        
        document.getElementById('casePageIcon').textContent = caseIcons[caseType];
        document.getElementById('casePageTitle').textContent = caseNames[caseType];
        
        const price = casePrices[caseType];
        document.getElementById('casePagePrice').textContent = price === 0 ? 'Бесплатно' : price + ' ⭐';
        
        // Обновляем список подарков
        const rewards = caseRewards[caseType] || [];
        const rewardsList = document.getElementById('rewardsList');
            rewardsList.innerHTML = rewards.map(reward => {
                const giftIcon = reward.icon || getGiftIcon(reward.name);
                const giftImagePath = getGiftImagePath(reward.name);
                return `
                <div class="reward-item">
                    <div class="reward-icon">
                        <img src="${giftImagePath}" alt="${reward.name}" class="gift-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <span class="gift-icon-fallback" style="display: none;">${giftIcon}</span>
                    </div>
                    <div class="reward-name">${reward.name}</div>
                    <div class="reward-chance">${reward.chance}</div>
                </div>
            `;
            }).join('');
        
        // Инициализируем линию прокрутки (показываем все подарки)
        const spinnerItems = document.getElementById('caseSpinnerItems');
        if (spinnerItems) {
            const allRewards = [];
            for (let i = 0; i < 3; i++) {
                allRewards.push(...rewards);
            }
            
            spinnerItems.innerHTML = allRewards.map((reward, index) => {
                const giftIcon = reward.icon || getGiftIcon(reward.name);
                const giftImagePath = getGiftImagePath(reward.name);
                return `
                <div class="spinner-line-item" data-index="${index}">
                    <div class="spinner-line-icon">
                        <img src="${giftImagePath}" alt="${reward.name}" class="gift-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <span class="gift-icon-fallback" style="display: none;">${giftIcon}</span>
                    </div>
                    <div class="spinner-line-name">${reward.name}</div>
                </div>
            `;
            }).join('');
            
            spinnerItems.style.transition = 'none';
            spinnerItems.style.transform = 'translateX(0)';
        }
        
        // Обновляем кнопку прокрутки после небольшой задержки
        setTimeout(() => {
            updateSpinButton();
        }, 100);
    }
    
    // Обновить кнопку прокрутки
    function updateSpinButton() {
        const spinBtn = document.getElementById('spinBtn');
        const spinBtnText = spinBtn.querySelector('.spin-btn-text');
        
        if (state.currentCase === 'free') {
            const now = Date.now();
            const timeSinceLastFree = now - state.lastFreeCaseTime;
            const hours24 = 24 * 60 * 60 * 1000;
            
            if (timeSinceLastFree < hours24) {
                const hoursLeft = Math.floor((hours24 - timeSinceLastFree) / (60 * 60 * 1000));
                const minutesLeft = Math.floor(((hours24 - timeSinceLastFree) % (60 * 60 * 1000)) / (60 * 1000));
                spinBtn.disabled = true;
                spinBtnText.textContent = `Доступно через ${hoursLeft}ч ${minutesLeft}м`;
            } else {
                spinBtn.disabled = false;
                spinBtnText.textContent = 'Прокрутить';
            }
        } else {
            const price = casePrices[state.currentCase];
            if (state.balance < price) {
                spinBtn.disabled = true;
                spinBtnText.textContent = 'Недостаточно звезд';
            } else {
                spinBtn.disabled = false;
                spinBtnText.textContent = 'Прокрутить';
            }
        }
    }
    
    // Вернуться к кейсам
    function backToCases() {
        switchSection('cases');
        state.currentCase = null;
    }
    
    // Прокрутить кейс
    function spinCase() {
        if (!state.currentCase) return;
        
        const caseType = state.currentCase;
        const price = casePrices[caseType];
        
        // Проверка для бесплатного кейса
        if (caseType === 'free') {
            const now = Date.now();
            const timeSinceLastFree = now - state.lastFreeCaseTime;
            const hours24 = 24 * 60 * 60 * 1000;
            
            if (timeSinceLastFree < hours24) {
                const hoursLeft = Math.floor((hours24 - timeSinceLastFree) / (60 * 60 * 1000));
                const minutesLeft = Math.floor(((hours24 - timeSinceLastFree) % (60 * 60 * 1000)) / (60 * 1000));
                const spinBtnText = spinBtn.querySelector('.spin-btn-text');
                spinBtnText.textContent = `Доступно через ${hoursLeft}ч ${minutesLeft}м`;
                return;
            }
            
            state.lastFreeCaseTime = now;
            localStorage.setItem('lastFreeCaseTime', now.toString());
        } else {
            // Проверка баланса
            if (state.balance < price) {
                const spinBtnText = spinBtn.querySelector('.spin-btn-text');
                spinBtnText.textContent = 'Недостаточно звезд';
                setTimeout(() => {
                    updateSpinButton();
                }, 2000);
                return;
            }
            
            // Списываем баланс
            state.balance -= price;
            updateBalance();
        }
        
        // Вибрация
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        // Блокируем кнопку
        const spinBtn = document.getElementById('spinBtn');
        spinBtn.disabled = true;
        
        // Получаем все подарки из кейса
        const rewards = caseRewards[caseType] || [];
        
        // Выбираем случайный выигрыш
        const randomIndex = Math.floor(Math.random() * rewards.length);
        const selectedReward = rewards[randomIndex];
        
        // Открываем модальное окно ДО начала прокрутки
        const caseModal = document.getElementById('caseModal');
        const caseSpinner = document.getElementById('caseSpinner');
        const caseResult = document.getElementById('caseResult');
        
        if (caseModal && caseSpinner) {
            // Показываем модальное окно
            caseModal.classList.add('active');
            // Показываем спиннер, скрываем результат
            caseSpinner.style.display = 'flex';
            if (caseResult) caseResult.style.display = 'none';
        }
        
        // Создаем элементы для прокрутки - дублируем подарки много раз для эффекта прокрутки
        const rewardsForSpin = [];
        // Добавляем подарки несколько раз для видимой прокрутки
        for (let i = 0; i < 30; i++) {
            rewardsForSpin.push(...rewards);
        }
        
        // Вставляем выбранный подарок (не в самый конец, а где-то в середине последней части)
        const insertPosition = rewardsForSpin.length - Math.floor(rewards.length * 0.3);
        rewardsForSpin.splice(insertPosition, 0, selectedReward);
        
        // Добавляем еще подарки ПОСЛЕ выбранного для азарта (чтобы казалось, что могло остановиться дальше)
        const additionalRewards = Math.floor(Math.random() * 5) + 3; // 3-7 подарков после
        for (let i = 0; i < additionalRewards; i++) {
            const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
            rewardsForSpin.push(randomReward);
        }
        
        // Заполняем спиннер в модальном окне
        if (caseSpinner) {
            caseSpinner.innerHTML = rewardsForSpin.map((reward, index) => {
            const giftIcon = reward.icon || getGiftIcon(reward.name);
            const giftImagePath = getGiftImagePath(reward.name);
            return `
                <div class="case-spinner-item" data-index="${index}">
                    <div class="case-spinner-item-image" style="background-image: url('${giftImagePath}');">
                        <span class="gift-icon-fallback" style="display: ${giftImagePath ? 'none' : 'block'}; font-size: 48px;">${giftIcon}</span>
                </div>
                    <div class="case-spinner-item-name">${reward.name}</div>
            </div>
        `;
        }).join('');
        }
        
        // Вычисляем позицию для остановки (на выбранном подарке)
        const itemWidth = 136; // Ширина одного элемента (120px + 16px gap)
        const containerWidth = caseSpinner ? (caseSpinner.parentElement.offsetWidth || 500) : 500;
        const centerOffset = containerWidth / 2 - itemWidth / 2; // Центрируем подарок
        const targetPosition = insertPosition * itemWidth - centerOffset;
        
        // Устанавливаем начальную позицию (подарки видны справа)
        if (caseSpinner) {
            caseSpinner.style.transition = 'none';
            caseSpinner.style.transform = 'translateX(0)';
        
        // Принудительный reflow для применения начальной позиции
            void caseSpinner.offsetHeight;
        }
        
        // Азартная прокрутка: быстрое начало -> постепенное замедление -> медленное завершение
        setTimeout(() => {
            if (caseSpinner) {
                // Используем cubic-bezier для правильной кривой:
                // 0.4, 0.0 - быстрое начало
                // 0.2, 1.0 - плавное замедление и медленное завершение
                // Длительность 6 секунд для более плавной анимации
                caseSpinner.style.transition = 'transform 6s cubic-bezier(0.4, 0.0, 0.2, 1.0)';
                caseSpinner.style.transform = `translateX(-${targetPosition}px)`;
            }
        }, 100);
        
        // Останавливаем через 6.2 секунды (6s + небольшая задержка для завершения анимации)
        setTimeout(() => {
            // Выделяем выигранный подарок в спиннере
            if (caseSpinner) {
                const selectedItem = caseSpinner.querySelector(`[data-index="${insertPosition}"]`);
            if (selectedItem) {
                    selectedItem.classList.add('selected');
                }
            }
            
            // Показываем результат в модальном окне кейса
            const resultIcon = document.getElementById('resultIcon');
            const resultName = document.getElementById('resultName');
            
            if (caseSpinner && caseResult) {
                // Скрываем спиннер
                caseSpinner.style.display = 'none';
            
            // Показываем результат
                caseResult.style.display = 'block';
                if (resultIcon) resultIcon.textContent = selectedReward.icon || '🎁';
                if (resultName) resultName.textContent = selectedReward.name;
            } else {
                // Fallback - создаем модальное окно если не найдено
                const resultDiv = document.createElement('div');
                resultDiv.className = 'case-result-modal';
                resultDiv.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 3000; display: flex; align-items: center; justify-content: center;';
                resultDiv.innerHTML = `
                    <div style="background: #1a1a2e; padding: 30px; border-radius: 20px; text-align: center; max-width: 400px;">
                        <div style="font-size: 64px; margin-bottom: 20px;">${selectedReward.icon || '🎁'}</div>
                        <h3 style="font-size: 24px; color: #fff; margin-bottom: 10px;">${selectedReward.name}</h3>
                        <p style="color: #FFD700; font-size: 18px; margin-bottom: 20px;">Вы выиграли!</p>
                        <button onclick="this.parentElement.parentElement.remove(); updateInventory();" style="padding: 12px 24px; background: #667eea; border: none; border-radius: 12px; color: #fff; font-size: 16px; cursor: pointer;">Закрыть</button>
                    </div>
                `;
                document.body.appendChild(resultDiv);
                
                // Автоматически закрываем через 5 секунд
                setTimeout(() => {
                    if (resultDiv.parentNode) {
                        resultDiv.remove();
                    }
                }, 5000);
            }
            
            // Добавляем в инвентарь с актуальной ценой и уникальным ID
            const giftPrice = selectedReward.getPrice ? selectedReward.getPrice() : getGiftPrice(selectedReward.name);
            state.inventory.push({
                icon: selectedReward.icon,
                name: selectedReward.name,
                case: caseType,
                price: giftPrice,
                rarity: getGiftInfo(selectedReward.name).rarity,
                uniqueId: `${selectedReward.icon}_${selectedReward.name}_${Date.now()}_${Math.random()}`
            });
            localStorage.setItem('inventory', JSON.stringify(state.inventory));
            updateInventory();
            
            // Добавляем в полосочку выигрышей
            const user = tg.initDataUnsafe?.user?.first_name || 'Вы';
            addWinToBar({
                icon: selectedReward.icon,
                name: selectedReward.name,
                user: user,
                case: caseType
            });
            
            // Разблокируем кнопку
            spinBtn.disabled = false;
            updateSpinButton();
            
            // Вибрация успеха
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100, 50, 200]);
            }
        }, 5200);
        
        // Отправляем данные в Telegram
        if (tg && tg.sendData) {
            tg.sendData(JSON.stringify({
                action: 'openCase',
                caseType: caseType,
                price: price
            }));
        }
    }
    
    // Закрыть модальное окно кейса
    function closeCaseModal() {
        const modal = document.getElementById('caseModal');
        const caseSpinner = document.getElementById('caseSpinner');
        const caseResult = document.getElementById('caseResult');
        
        if (modal) {
        modal.classList.remove('active');
        }
        
        // Сбрасываем состояние модального окна
        if (caseSpinner) {
            caseSpinner.style.display = 'flex';
        }
        if (caseResult) {
            caseResult.style.display = 'none';
        }
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    // Состояние апгрейда
    const upgradeState = {
        selectedItems: [null, null, null],
        targetItem: null,
        currentSlot: null
    };
    
    // Выбор предмета для слота апгрейда
    function selectUpgradeItem(slotIndex) {
        // Если предмет уже выбран, убираем его
        if (upgradeState.selectedItems[slotIndex] !== null) {
            upgradeState.selectedItems[slotIndex] = null;
            const slotEl = document.getElementById(`slot${slotIndex}`);
            slotEl.innerHTML = '<div class="slot-placeholder">+</div>';
            updateUpgradeWheel();
            checkUpgradeReady();
            return;
        }
        
        upgradeState.currentSlot = slotIndex;
        showItemSelectModal('slot');
    }
    
    // Выбор целевого предмета
    function selectTargetItem() {
        // Если предмет уже выбран, убираем его
        if (upgradeState.targetItem !== null) {
            upgradeState.targetItem = null;
            const targetSlot = document.getElementById('targetSlot');
            targetSlot.innerHTML = '<div class="slot-placeholder">Выберите подарок</div>';
            updateUpgradeWheel();
            checkUpgradeReady();
            return;
        }
        
        upgradeState.currentSlot = 'target';
        showItemSelectModal('target');
    }
    
    // Показать модальное окно выбора предмета
    function showItemSelectModal(type) {
        const modal = document.getElementById('itemSelectModal');
        const list = document.getElementById('itemSelectList');
        
        if (type === 'slot') {
            // Для слотов - только из инвентаря
        if (state.inventory.length === 0) {
            if (tg && tg.showAlert) {
                tg.showAlert('Ваш инвентарь пуст!');
            }
            return;
        }
            
            list.innerHTML = state.inventory.map((item, index) => {
                // Проверяем, не выбран ли уже этот предмет (по уникальному ID или по комбинации icon+name+index)
                const itemId = item.uniqueId || `${item.icon}_${item.name}_${index}`;
                const isSelected = upgradeState.selectedItems.some(selected => {
                    if (!selected) return false;
                    const selectedId = selected.uniqueId || `${selected.icon}_${selected.name}_${state.inventory.findIndex(i => i === selected)}`;
                    return selectedId === itemId;
                });
                
                return `
                    <div class="item-select-item ${isSelected ? 'item-selected' : ''}" onclick="confirmItemSelection(${index}, '${type}')" ${isSelected ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        <div class="item-select-icon">
                            <img src="${getGiftImagePath(item.name)}" alt="${item.name}" class="gift-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <span class="gift-icon-fallback" style="display: none;">${item.icon || getGiftIcon(item.name)}</span>
                        </div>
                        <div class="item-select-name">${item.name}</div>
                        ${isSelected ? '<div class="item-selected-badge">Уже выбрано</div>' : ''}
                    </div>
                `;
            }).join('');
        } else if (type === 'target') {
            // Для целевого подарка - все подарки из всех кейсов
            const allRewards = [];
            Object.keys(caseRewards).forEach(caseType => {
                caseRewards[caseType].forEach(reward => {
                    // Проверяем, нет ли уже такого подарка
                    if (!allRewards.some(r => r.icon === reward.icon && r.name === reward.name)) {
                        allRewards.push(reward);
                    }
                });
            });
            
            list.innerHTML = allRewards.map((reward, index) => {
                const giftIcon = reward.icon || getGiftIcon(reward.name);
                const giftImagePath = getGiftImagePath(reward.name);
                const giftPrice = getGiftPrice(reward.name);
                return `
                <div class="item-select-item" onclick="confirmTargetSelection(${index}, '${type}')">
                    <div class="item-select-icon">
                        <img src="${giftImagePath}" alt="${reward.name}" class="gift-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <span class="gift-icon-fallback" style="display: none;">${giftIcon}</span>
                    </div>
                    <div class="item-select-name">${reward.name}</div>
                    <div class="item-select-price" style="color: #FFD700; font-size: 12px; margin-top: 4px;">${giftPrice} ⭐</div>
                </div>
            `;
            }).join('');
            
            // Сохраняем список всех подарков для использования
            window.allRewardsList = allRewards;
        }
        
        modal.classList.add('active');
    }
    
    // Подтвердить выбор предмета для слота
    function confirmItemSelection(itemIndex, type) {
        const item = state.inventory[itemIndex];
        
        // Проверяем, не выбран ли уже этот предмет
        const itemId = item.uniqueId || `${item.icon}_${item.name}_${itemIndex}`;
        const isAlreadySelected = upgradeState.selectedItems.some(selected => {
            if (!selected) return false;
            const selectedId = selected.uniqueId || `${selected.icon}_${selected.name}_${state.inventory.findIndex(i => i === selected)}`;
            return selectedId === itemId;
        });
        
        if (isAlreadySelected) {
            if (tg && tg.showAlert) {
                tg.showAlert('Этот предмет уже выбран!');
            }
            return;
        }
        
        // Создаем копию предмета с уникальным ID
        const itemCopy = {
            ...item,
            uniqueId: item.uniqueId || `${item.icon}_${item.name}_${Date.now()}_${Math.random()}`
        };
        
        const modal = document.getElementById('itemSelectModal');
        modal.classList.remove('active');
        
        const slotIndex = upgradeState.currentSlot;
        upgradeState.selectedItems[slotIndex] = itemCopy;
        
        const slotEl = document.getElementById(`slot${slotIndex}`);
        slotEl.innerHTML = `
            <div class="slot-item">
                <div class="slot-item-icon">${item.icon}</div>
                <div class="slot-item-name">${item.name}</div>
            </div>
        `;
        
        updateUpgradeWheel();
        checkUpgradeReady();
    }
    
    // Подтвердить выбор целевого подарка
    function confirmTargetSelection(itemIndex, type) {
        const allRewards = window.allRewardsList || [];
        const item = allRewards[itemIndex];
        const modal = document.getElementById('itemSelectModal');
        modal.classList.remove('active');
        
        upgradeState.targetItem = item;
        
        const targetSlot = document.getElementById('targetSlot');
        targetSlot.innerHTML = `
            <div class="slot-item">
                <div class="slot-item-icon">${item.icon}</div>
                <div class="slot-item-name">${item.name}</div>
            </div>
        `;
        
        updateUpgradeWheel();
        checkUpgradeReady();
    }
    
    // Закрыть модальное окно выбора предмета
    function closeItemSelectModal() {
        const modal = document.getElementById('itemSelectModal');
        modal.classList.remove('active');
    }
    
    // Обновить колесо шансов
    function updateUpgradeWheel() {
        const selectedCount = upgradeState.selectedItems.filter(item => item !== null).length;
        const hasTarget = upgradeState.targetItem !== null;
        
        if (selectedCount === 0 || !hasTarget) {
            document.getElementById('wheelChance').textContent = '0%';
            updateWheelVisual(0);
            return;
        }
        
        // Расчет шанса: базовый шанс зависит от количества предметов
        let baseChance = 0;
        if (selectedCount === 1) baseChance = 10;
        else if (selectedCount === 2) baseChance = 25;
        else if (selectedCount === 3) baseChance = 45;
        
        // Добавляем случайную вариацию с десятичными
        const variation = Math.random() * 30; // 0-30
        const chance = baseChance + variation;
        const finalChance = Math.min(chance, 99.9);
        
        // Округляем до 1 знака после запятой
        const roundedChance = Math.round(finalChance * 10) / 10;
        
        document.getElementById('wheelChance').textContent = roundedChance.toFixed(1) + '%';
        
        // Обновляем колесо визуально
        updateWheelVisual(roundedChance);
    }
    
    // Обновить визуал колеса
    function updateWheelVisual(chance) {
        const wheel = document.getElementById('wheelContent');
        const winPercent = chance;
        const winDegrees = winPercent * 3.6;
        
        // Создаем круговую диаграмму
        wheel.innerHTML = '';
        
        // Создаем один круг с двумя секторами
        const wheelCircle = document.createElement('div');
        wheelCircle.className = 'wheel-circle';
        wheelCircle.style.width = '100%';
        wheelCircle.style.height = '100%';
        wheelCircle.style.borderRadius = '50%';
        wheelCircle.style.position = 'absolute';
        wheelCircle.style.top = '0';
        wheelCircle.style.left = '0';
        
        // Создаем градиент с зеленым и красным
        if (winPercent > 0) {
            wheelCircle.style.background = `conic-gradient(
                from 0deg,
                #4ade80 0deg ${winDegrees}deg,
                #f87171 ${winDegrees}deg 360deg
            )`;
        } else {
            wheelCircle.style.background = '#f87171';
        }
        
        wheel.appendChild(wheelCircle);
        
        // Центральный круг (чтобы было видно границу)
        const centerCircle = document.createElement('div');
        centerCircle.style.width = '60%';
        centerCircle.style.height = '60%';
        centerCircle.style.borderRadius = '50%';
        centerCircle.style.background = '#1a1a1a';
        centerCircle.style.position = 'absolute';
        centerCircle.style.top = '50%';
        centerCircle.style.left = '50%';
        centerCircle.style.transform = 'translate(-50%, -50%)';
        centerCircle.style.border = '2px solid rgba(255, 255, 255, 0.2)';
        centerCircle.style.zIndex = '10';
        wheel.appendChild(centerCircle);
    }
    
    // Проверить готовность к апгрейду
    function checkUpgradeReady() {
        const selectedCount = upgradeState.selectedItems.filter(item => item !== null).length;
        const hasTarget = upgradeState.targetItem !== null;
        const spinBtn = document.getElementById('upgradeSpinBtn');
        
        if (!spinBtn) return;
        
        if (selectedCount > 0 && hasTarget) {
            spinBtn.disabled = false;
            spinBtn.style.opacity = '1';
            spinBtn.style.cursor = 'pointer';
        } else {
            spinBtn.disabled = true;
            spinBtn.style.opacity = '0.5';
            spinBtn.style.cursor = 'not-allowed';
        }
    }
    
    // Прокрутить апгрейд
    function spinUpgrade() {
        const selectedCount = upgradeState.selectedItems.filter(item => item !== null).length;
        if (selectedCount === 0 || !upgradeState.targetItem) {
            return;
        }
        
        // Вибрация
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        // Расчет шанса (тот же, что показывается на колесе)
        let baseChance = 0;
        if (selectedCount === 1) baseChance = 10;
        else if (selectedCount === 2) baseChance = 25;
        else if (selectedCount === 3) baseChance = 45;
        
        const variation = Math.random() * 30;
        const chance = baseChance + variation;
        const finalChance = Math.min(chance, 99.9);
        
        // Определяем результат ДО анимации
        const isWin = Math.random() * 100 < finalChance;
        
        // Анимация вращения указателя вокруг колеса
        const pointer = document.querySelector('.wheel-pointer');
        const wheel = document.getElementById('upgradeWheel');
        if (!pointer || !wheel) return;
        
        const spinCount = 5 + Math.random() * 3; // 5-8 оборотов
        
        // Получаем размеры колеса для правильного позиционирования
        const wheelSize = wheel.offsetWidth || 300;
        const centerX = wheelSize / 2;
        const centerY = wheelSize / 2;
        
        // Вычисляем финальный угол так, чтобы указатель остановился на нужном секторе
        let finalAngle;
        if (isWin) {
            // Останавливаемся на зеленом секторе (случайная позиция в зеленой зоне)
            const winAngle = (finalChance / 100) * 360;
            finalAngle = (360 * spinCount) + (Math.random() * winAngle);
        } else {
            // Останавливаемся на красном секторе (случайная позиция в красной зоне)
            const winAngle = (finalChance / 100) * 360;
            const loseAngle = 360 - winAngle;
            finalAngle = (360 * spinCount) + winAngle + (Math.random() * loseAngle);
        }
        
        // Устанавливаем transform-origin в центр колеса
        // Анимация: быстрое начало, плавное замедление, медленное завершение
        pointer.style.transition = 'transform 4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        pointer.style.transformOrigin = `${centerX}px ${centerY}px`;
        
        // Сбрасываем текущую позицию
        pointer.style.transform = 'rotate(0deg)';
        void pointer.offsetHeight; // Принудительный reflow
        
        // Запускаем анимацию
        setTimeout(() => {
        pointer.style.transform = `rotate(${finalAngle}deg)`;
        }, 50);
        
        setTimeout(() => {
            // Удаляем использованные предметы из инвентаря по уникальному ID
            upgradeState.selectedItems.forEach(item => {
                if (item && item.uniqueId) {
                    const index = state.inventory.findIndex(invItem => {
                        const invItemId = invItem.uniqueId || `${invItem.icon}_${invItem.name}_${state.inventory.indexOf(invItem)}`;
                        return invItemId === item.uniqueId;
                    });
                    if (index !== -1) {
                        state.inventory.splice(index, 1);
                    }
                } else if (item) {
                    // Fallback для старых предметов без uniqueId
                    const index = state.inventory.findIndex(invItem => 
                        invItem.icon === item.icon && invItem.name === item.name
                    );
                    if (index !== -1) {
                        state.inventory.splice(index, 1);
                    }
                }
            });
            
            if (isWin) {
                // Добавляем целевой предмет с актуальной ценой и уникальным ID
                const giftPrice = getGiftPrice(upgradeState.targetItem.name);
                state.inventory.push({
                    icon: upgradeState.targetItem.icon,
                    name: upgradeState.targetItem.name,
                    case: 'upgrade',
                    price: giftPrice,
                    rarity: getGiftInfo(upgradeState.targetItem.name).rarity,
                    uniqueId: `${upgradeState.targetItem.icon}_${upgradeState.targetItem.name}_${Date.now()}_${Math.random()}`
                });
            }
            
            localStorage.setItem('inventory', JSON.stringify(state.inventory));
            updateInventory();
            
            // Показываем результат
            showUpgradeResult(isWin);
            
            // Сбрасываем состояние
            resetUpgradeState();
            
            // Вибрация
            if (navigator.vibrate) {
                navigator.vibrate(isWin ? [100, 50, 100, 50, 200] : [200, 100, 200]);
            }
        }, 4100); // 4s анимация + 100ms задержка
    }
    
    // Показать результат апгрейда
    function showUpgradeResult(isWin) {
        const modal = document.getElementById('upgradeResultModal');
        const content = document.getElementById('upgradeResultContent');
        const title = document.getElementById('upgradeResultTitle');
        
        if (isWin) {
            title.textContent = 'Победа!';
            content.innerHTML = `
                <div class="upgrade-result-icon">✅</div>
                <div class="upgrade-result-text upgrade-result-success">
                    Вы получили: ${upgradeState.targetItem.icon} ${upgradeState.targetItem.name}
                </div>
            `;
        } else {
            title.textContent = 'Проигрыш';
            content.innerHTML = `
                <div class="upgrade-result-icon">❌</div>
                <div class="upgrade-result-text upgrade-result-fail">
                    Предметы потеряны
                </div>
            `;
        }
        
        modal.classList.add('active');
    }
    
    // Закрыть модальное окно результата
    function closeUpgradeResultModal() {
        const modal = document.getElementById('upgradeResultModal');
        modal.classList.remove('active');
    }
    
    // Сбросить состояние апгрейда
    function resetUpgradeState() {
        upgradeState.selectedItems = [null, null, null];
        upgradeState.targetItem = null;
        
        // Очищаем слоты
        for (let i = 0; i < 3; i++) {
            const slotEl = document.getElementById(`slot${i}`);
            slotEl.innerHTML = '<div class="slot-placeholder">+</div>';
        }
        
        const targetSlot = document.getElementById('targetSlot');
        targetSlot.innerHTML = '<div class="slot-placeholder">Выберите подарок</div>';
        
        document.getElementById('wheelChance').textContent = '0%';
        document.getElementById('upgradeSpinBtn').disabled = true;
        
            // Сбрасываем указатель
            const pointer = document.querySelector('.wheel-pointer');
            const wheel = document.getElementById('upgradeWheel');
            if (pointer && wheel) {
                const wheelSize = wheel.offsetWidth || 300;
                const centerX = wheelSize / 2;
                const centerY = wheelSize / 2;
            pointer.style.transition = 'none';
            pointer.style.transform = 'rotate(0deg)';
                pointer.style.transformOrigin = `${centerX}px ${centerY}px`;
            setTimeout(() => {
                pointer.style.transition = '';
            }, 50);
    }
    }
    
    // Функция для экспорта данных кейсов
    function exportCasesData() {
        const casesToExport = ['elite', 'crypto'];
        const exportData = {
            cases: {}
        };
        
        casesToExport.forEach(caseType => {
            const caseName = caseType === 'elite' ? 'Элитный' : 'Крипто';
            const caseIcon = caseType === 'elite' ? '👑' : '₿';
            const casePrice = casePrices[caseType];
            const rewards = caseRewards[caseType] || [];
            
            exportData.cases[caseType] = {
                id: caseType,
                name: caseName,
                name_en: caseType === 'elite' ? 'Elite case' : 'Crypto case',
                icon: caseIcon,
                price: casePrice,
                rewards: rewards.map(reward => ({
                    icon: reward.icon,
                    name: reward.name,
                    chance: reward.chance,
                    price: reward.getPrice ? reward.getPrice() : getGiftPrice(reward.name)
                }))
            };
        });
        
        // Выводим в консоль
        console.log('=== ЭКСПОРТ ДАННЫХ КЕЙСОВ ===');
        console.log(JSON.stringify(exportData, null, 2));
        
        // Копируем в буфер обмена (если доступно)
        if (navigator.clipboard) {
            navigator.clipboard.writeText(JSON.stringify(exportData, null, 2)).then(() => {
                console.log('Данные скопированы в буфер обмена!');
                if (tg && tg.showAlert) {
                    tg.showAlert('Данные кейсов скопированы в буфер обмена!');
                }
            }).catch(err => {
                console.error('Ошибка копирования:', err);
            });
        }
        
        return exportData;
    }
    
    // Экспортируем функцию экспорта
    window.exportCasesData = exportCasesData;
    
    // Экспортируем функции СРАЗУ после их определения
    // Это критически важно для работы onclick обработчиков
    console.log('Экспорт основных функций...');
    try {
        if (typeof switchSection === 'function') {
    window.switchSection = switchSection;
            console.log('✓ switchSection экспортирована');
        }
        if (typeof openCasePage === 'function') {
            window.openCasePage = openCasePage;
        }
        if (typeof showWalletMenu === 'function') {
            window.showWalletMenu = showWalletMenu;
            console.log('✓ showWalletMenu экспортирована');
        }
        if (typeof closeWalletModal === 'function') {
            window.closeWalletModal = closeWalletModal;
        }
        if (typeof topUpBalance === 'function') {
            window.topUpBalance = topUpBalance;
        }
        if (typeof goToWin === 'function') {
            window.goToWin = goToWin;
        }
        if (typeof backToCases === 'function') {
            window.backToCases = backToCases;
        }
        if (typeof spinCase === 'function') {
            window.spinCase = spinCase;
        }
        if (typeof closeCaseModal === 'function') {
            window.closeCaseModal = closeCaseModal;
        }
        if (typeof withdrawItem === 'function') {
            window.withdrawItem = withdrawItem;
        }
        if (typeof sellItem === 'function') {
            window.sellItem = sellItem;
        }
        if (typeof upgradeItem === 'function') {
            window.upgradeItem = upgradeItem;
        }
        if (typeof selectUpgradeItem === 'function') {
            window.selectUpgradeItem = selectUpgradeItem;
        }
        if (typeof selectTargetItem === 'function') {
            window.selectTargetItem = selectTargetItem;
        }
        if (typeof confirmItemSelection === 'function') {
            window.confirmItemSelection = confirmItemSelection;
        }
        if (typeof confirmTargetSelection === 'function') {
            window.confirmTargetSelection = confirmTargetSelection;
        }
        if (typeof closeItemSelectModal === 'function') {
            window.closeItemSelectModal = closeItemSelectModal;
        }
        if (typeof spinUpgrade === 'function') {
            window.spinUpgrade = spinUpgrade;
        }
        if (typeof closeUpgradeResultModal === 'function') {
            window.closeUpgradeResultModal = closeUpgradeResultModal;
        }
        console.log('Основные функции экспортированы');
    } catch (e) {
        console.error('Ошибка экспорта функций:', e);
    }
    
    // Игра Динозаврик
    const birdGame = {
        isPlaying: false,
        isGameOver: false,
        score: 0,
        bestScore: parseInt(localStorage.getItem('birdBestScore')) || 0,
        dinoY: 0,
        dinoVelocity: 0,
        gravity: 0.6, // Уменьшена гравитация (было 0.8)
        jumpPower: -18, // Увеличена сила прыжка (было -15)
        isJumping: false,
        obstacles: [],
        obstacleSpeed: 3, // Уменьшена начальная скорость (было 4)
        obstacleSpawnInterval: 2500, // Увеличен интервал между препятствиями (было 1500)
        lastObstacleTime: 0,
        gameLoop: null,
        gameStartTime: 0,
        currentPrice: 0
    };
    
    // Инициализация игры Птица
    function initBirdGame() {
        const bestScoreEl = document.getElementById('birdBest');
        if (bestScoreEl) {
            bestScoreEl.textContent = birdGame.bestScore;
        }
        
        const canvas = document.getElementById('birdGameCanvas');
        const jumpBtn = document.getElementById('birdJumpBtn');
        
        if (canvas && jumpBtn) {
            canvas.addEventListener('click', jumpDino);
            jumpBtn.addEventListener('click', jumpDino);
            
            // Поддержка клавиатуры
            document.addEventListener('keydown', (e) => {
                if ((e.code === 'Space' || e.code === 'ArrowUp') && birdGame.isPlaying) {
                    e.preventDefault();
                    jumpDino();
                }
            });
        }
    }
    
    // Начать игру с оплатой
    function startBirdGameWithPrice(price) {
        // Проверка баланса
        if (state.balance < price) {
            if (tg && tg.showAlert) {
                tg.showAlert('Недостаточно звезд!');
            }
            return;
        }
        
        // Списываем баланс
        state.balance -= price;
        updateBalance();
        birdGame.currentPrice = price;
        
        // Скрываем выбор сложности
        const difficulty = document.getElementById('birdDifficulty');
        const canvas = document.getElementById('birdGameCanvas');
        const controls = document.getElementById('birdControls');
        const startScreen = document.getElementById('birdStartScreen');
        
        if (difficulty) difficulty.style.display = 'none';
        if (canvas) canvas.style.display = 'block';
        if (controls) controls.style.display = 'block';
        if (startScreen) startScreen.style.display = 'none';
        
        // Показываем обратный отсчет
        startCountdown();
    }
    
    // Обратный отсчет
    function startCountdown() {
        const countdown = document.getElementById('birdCountdown');
        const countdownNumber = document.getElementById('countdownNumber');
        const startScreen = document.getElementById('birdStartScreen');
        const gameOver = document.getElementById('birdGameOver');
        
        if (!countdown || !countdownNumber) return;
        
        // Показываем обратный отсчет
        countdown.style.display = 'flex';
        if (startScreen) startScreen.style.display = 'none';
        if (gameOver) gameOver.style.display = 'none';
        
        let count = 5;
        countdownNumber.textContent = count;
        
        // Вибрация при начале отсчета
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        const countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                countdownNumber.textContent = count;
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            } else {
                clearInterval(countdownInterval);
                countdown.style.display = 'none';
                // Вибрация при старте игры
                if (navigator.vibrate) {
                    navigator.vibrate([100, 50, 200]);
                }
                startBirdGame();
            }
        }, 1000);
    }
    
    // Прыжок динозаврика
    function jumpDino() {
        // Прыгаем только если игра идет и не закончена
        if (!birdGame.isPlaying || birdGame.isGameOver) {
            return;
        }
        
        // Прыгаем только если на земле или почти на земле (dinoY >= -10) - более мягкое ограничение
        if (birdGame.dinoY < -10) {
            return;
        }
        
        birdGame.dinoVelocity = birdGame.jumpPower;
        birdGame.isJumping = true;
        const dino = document.getElementById('dino');
        if (dino) {
            dino.classList.add('jumping');
            dino.classList.remove('running');
        }
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    // Начать игру
    function startBirdGame() {
        birdGame.isPlaying = true;
        birdGame.isGameOver = false;
        birdGame.score = 0;
        birdGame.dinoY = 0;
        birdGame.dinoVelocity = 0;
        birdGame.isJumping = false;
        birdGame.obstacles = [];
        birdGame.lastObstacleTime = Date.now();
        birdGame.gameStartTime = Date.now();
        
        const startScreen = document.getElementById('birdStartScreen');
        const gameOver = document.getElementById('birdGameOver');
        const dino = document.getElementById('dino');
        const obstaclesContainer = document.getElementById('obstaclesContainer');
        const jumpBtn = document.getElementById('birdJumpBtn');
        
        if (startScreen) startScreen.style.display = 'none';
        if (gameOver) gameOver.style.display = 'none';
        if (obstaclesContainer) obstaclesContainer.innerHTML = '';
        if (jumpBtn) jumpBtn.disabled = false;
        if (dino) {
            dino.classList.add('running');
            dino.classList.remove('jumping');
        }
        
        updateBirdScore();
        updateDinoPosition();
        
        birdGame.gameLoop = setInterval(updateBirdGame, 16); // ~60 FPS
    }
    
    // Обновление игры
    function updateBirdGame() {
        if (!birdGame.isPlaying || birdGame.isGameOver) return;
        
        // Физика динозаврика
        birdGame.dinoVelocity += birdGame.gravity;
        birdGame.dinoY += birdGame.dinoVelocity;
        
        // Ограничения - динозаврик на земле (dinoY не может быть больше 0, отрицательные значения = вверх)
        if (birdGame.dinoY > 0) {
            birdGame.dinoY = 0;
            birdGame.dinoVelocity = 0;
            birdGame.isJumping = false;
            const dino = document.getElementById('dino');
            if (dino) {
                dino.classList.remove('jumping');
                dino.classList.add('running');
            }
        }
        
        updateDinoPosition();
        
        // Создание препятствий - увеличиваем частоту появления
        const now = Date.now();
        // Ускоряем появление препятствий со временем
        const timeElapsed = now - birdGame.gameStartTime;
        
        // Не создаем препятствия в первые 3 секунды игры (увеличено с 2)
        if (timeElapsed > 3000) {
            const speedMultiplier = 1 + (timeElapsed / 60000); // Ускоряем каждые 60 секунд (было 30)
            const currentInterval = birdGame.obstacleSpawnInterval / speedMultiplier;
            
            if (now - birdGame.lastObstacleTime > currentInterval) {
                createObstacle();
                birdGame.lastObstacleTime = now;
            }
        }
        
        // Движение препятствий - ускоряем со временем (медленнее)
        const speedMultiplier = 1 + (timeElapsed / 40000); // Ускоряем каждые 40 секунд (было 20)
        birdGame.obstacleSpeed = 3 * speedMultiplier; // Начальная скорость 3 (было 4)
        
        moveObstacles();
        
        // Проверка столкновений
        checkCollisions();
        
        // Увеличиваем счет
        birdGame.score = Math.floor((Date.now() - birdGame.gameStartTime) / 100);
        updateBirdScore();
    }
    
    // Обновить позицию динозаврика
    function updateDinoPosition() {
        const dino = document.getElementById('dino');
        if (dino) {
            // dinoY отрицательный вверх, положительный вниз, но мы ограничиваем его 0
            // translateY с отрицательным значением поднимает элемент вверх
            dino.style.transform = `translateY(${birdGame.dinoY}px)`;
            dino.style.transition = 'transform 0.1s ease';
        }
    }
    
    // Создать препятствие
    function createObstacle() {
        const obstaclesContainer = document.getElementById('obstaclesContainer');
        if (!obstaclesContainer) return;
        
        // Случайно выбираем тип препятствия (кактус или птица)
        const isBird = Math.random() > 0.6; // 40% шанс на птицу
        
        const obstacle = document.createElement('div');
        obstacle.className = `obstacle ${isBird ? 'bird' : 'cactus'}`;
        obstacle.textContent = isBird ? '🦅' : '🌵';
        obstacle.style.left = '100%';
        
        obstaclesContainer.appendChild(obstacle);
        
        birdGame.obstacles.push({
            element: obstacle,
            type: isBird ? 'bird' : 'cactus',
            x: 100,
            passed: false
        });
    }
    
    // Движение препятствий
    function moveObstacles() {
        birdGame.obstacles.forEach((obstacle, index) => {
            // Увеличиваем скорость движения препятствий
            obstacle.x -= birdGame.obstacleSpeed;
            obstacle.element.style.left = obstacle.x + '%';
            
            // Проверка прохождения препятствия
            if (!obstacle.passed && obstacle.x < 50) {
                obstacle.passed = true;
                
                if (navigator.vibrate) {
                    navigator.vibrate(30);
                }
            }
            
            // Удаление препятствий за экраном
            if (obstacle.x < -10) {
                obstacle.element.remove();
                birdGame.obstacles.splice(index, 1);
            }
        });
    }
    
    // Проверка столкновений
    function checkCollisions() {
        // Не проверяем столкновения если игра только началась (меньше 1.5 секунды)
        const timeSinceStart = Date.now() - birdGame.gameStartTime;
        if (timeSinceStart < 1500) {
            return;
        }
        
        // Не проверяем если нет препятствий
        if (birdGame.obstacles.length === 0) {
            return;
        }
        
        const dino = document.getElementById('dino');
        if (!dino) return;
        
        // Позиция динозаврика
        // Позиция динозаврика (в процентах от ширины экрана)
        // Динозаврик находится примерно на 10-20% от левого края
        const dinoLeft = 10;
        const dinoRight = 20;
        
        birdGame.obstacles.forEach(obstacle => {
            // Проверяем только препятствия, которые уже на экране и близко к динозаврику
            // Препятствие должно быть между 5% и 25% от левого края для столкновения
            if (obstacle.x > 25 || obstacle.x < 5) {
                return;
            }
            
            const obstacleLeft = obstacle.x;
            const obstacleRight = obstacle.x + 8; // Ширина препятствия в процентах
            
            // Столкновение по X - динозаврик находится в зоне препятствия
            if (obstacleRight > dinoLeft && obstacleLeft < dinoRight) {
                if (obstacle.type === 'bird') {
                    // Птица летит на высоте ~80px от земли (примерно -80px для dinoY)
                    // Динозаврик должен быть выше -70px чтобы избежать столкновения (было -80, стало легче)
                    // dinoY отрицательный когда вверх, 0 на земле
                    if (birdGame.dinoY > -70) {
                        // Динозаврик врезался в птицу
                        gameOverBird();
                        return;
                    }
                } else {
                    // Кактус на земле - столкновение если динозаврик на земле или слишком низко
                    // Динозаврик должен быть выше -30px чтобы перепрыгнуть кактус (было -40, стало легче)
                    if (birdGame.dinoY > -30) {
                        // Динозаврик врезался в кактус
                        gameOverBird();
                        return;
                    }
                }
            }
            
            
            // Старая проверка удалена - используем новую логику выше
            if (false && birdRect.right > pipeBottomRect.left &&
                birdRect.left < pipeBottomRect.right &&
                birdRect.bottom > pipeBottomRect.top) {
                gameOverBird();
                return;
            }
        });
    }
    
    // Конец игры
    function gameOverBird() {
        if (birdGame.isGameOver) return;
        
        birdGame.isGameOver = true;
        birdGame.isPlaying = false;
        
        if (birdGame.gameLoop) {
            clearInterval(birdGame.gameLoop);
            birdGame.gameLoop = null;
        }
        
        // Обновление рекорда
        if (birdGame.score > birdGame.bestScore) {
            birdGame.bestScore = birdGame.score;
            localStorage.setItem('birdBestScore', birdGame.bestScore.toString());
            const bestScoreEl = document.getElementById('birdBest');
            if (bestScoreEl) {
                bestScoreEl.textContent = birdGame.bestScore;
            }
        }
        
        // Показываем экран окончания игры
        const gameOver = document.getElementById('birdGameOver');
        const finalScore = document.getElementById('finalScore');
        const jumpBtn = document.getElementById('birdJumpBtn');
        
        if (gameOver) gameOver.style.display = 'block';
        if (finalScore) finalScore.textContent = birdGame.score;
        if (jumpBtn) jumpBtn.disabled = true;
        
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
    }
    
    // Перезапуск игры
    function restartBirdGame() {
        // Останавливаем текущую игру
        if (birdGame.gameLoop) {
            clearInterval(birdGame.gameLoop);
            birdGame.gameLoop = null;
        }
        
        birdGame.isPlaying = false;
        birdGame.isGameOver = false;
        
        const obstaclesContainer = document.getElementById('obstaclesContainer');
        const canvas = document.getElementById('birdGameCanvas');
        const controls = document.getElementById('birdControls');
        const difficulty = document.getElementById('birdDifficulty');
        const gameOver = document.getElementById('birdGameOver');
        const dino = document.getElementById('dino');
        
        if (obstaclesContainer) obstaclesContainer.innerHTML = '';
        if (canvas) canvas.style.display = 'none';
        if (controls) controls.style.display = 'none';
        if (difficulty) difficulty.style.display = 'block';
        if (gameOver) gameOver.style.display = 'none';
        if (dino) {
            dino.classList.remove('jumping', 'running');
        }
        
        // Сбрасываем счет
        birdGame.score = 0;
        updateBirdScore();
    }
    
    // Обновить счет
    function updateBirdScore() {
        const scoreEl = document.getElementById('birdScore');
        if (scoreEl) {
            scoreEl.textContent = birdGame.score;
        }
    }
    
    // Экспортируем функции
    window.jumpDino = jumpDino;
    window.jumpBird = jumpDino; // Для обратной совместимости
    window.restartBirdGame = restartBirdGame;
    window.startBirdGameWithPrice = startBirdGameWithPrice;
    
    // ==================== ЛЕСЕНКА ====================
    
    // Состояние игры лесенка (Crash Game)
    const ladderGame = {
        isPlaying: false,
        backgroundOffset: 0, // Смещение фона для движения
        backgroundOffsetY: 0, // Вертикальное смещение фона
        bet: 0,
        multiplier: 0.00, // Стартовый множитель по умолчанию (x0.00)
        gameLoop: null,
        timeLoop: null,
        timeElapsed: 0, // Время в секундах
        stopped: false, // Игра остановлена кнопкой STOP
        autoStartInterval: null, // Интервал автозапуска
        pendingBet: 0, // Ставка для следующего раунда
        crashPoint: 0, // Точка взрыва (определяется в начале раунда)
        speedX: 12, // Скорость по X
        speedY: 5, // Скорость по Y (вверх)
        multiplierHistory: [], // История множителей за последние 7 раундов
        lastCrashRounded: null, // Последний множитель при взрыве (округленный до 2 знаков)
        players: [], // Список игроков: [{bet: 25, name: 'Игрок 1', currentWin: 26}]
        trailPoints: [], // Точки полоски
        lineX: 0, // Позиция полоски по X (начинается от левого угла)
        lineY: 0, // Позиция полоски по Y (начинается от нижнего угла)
        startX: 0, // Начальная позиция X (левый нижний угол)
        startY: 0, // Начальная позиция Y (левый нижний угол)
        cameraOffsetX: 0, // Смещение камеры по X для следования за полоской
        cameraOffsetY: 0, // Смещение камеры по Y для следования за полоской
        cameraZoom: 1.0, // Zoom камеры (1.0 = нормальный, меньше = отдаление)
        // Настройки линии (можно менять из консоли)
        lineConfig: {
            angle: 45, // Угол в градусах (0 = вверх, 90 = вправо, 45 = диагональ)
            curvePower: 2, // Сила кривизны (1 = прямая, 2 = плавная кривая, больше = более резкая)
            startXPercent: 0, // Начальная позиция X в процентах (0 = левый край, 100 = правый)
            startYPercent: 100, // Начальная позиция Y в процентах (0 = верх, 100 = низ) - 100 = самый низ
            endXPercent: 100, // Конечная позиция X в процентах
            endYPercent: 0, // Конечная позиция Y в процентах
            speed: 5, // Скорость движения
            offsetY: 50 // Смещение вниз в пикселях (добавляется к startYPercent) - линия будет ниже
        }
    };
    
    // Экспортируем настройки в глобальную область для доступа из консоли
    window.ladderLineConfig = ladderGame.lineConfig;
    
    // Функции для настройки линии из консоли
    window.setLineAngle = function(degrees) {
        ladderGame.lineConfig.angle = degrees;
        console.log('Угол линии установлен:', degrees, 'градусов');
        console.log('Используйте ladderLineConfig для других настроек');
    };
    
    window.setLineCurve = function(power) {
        ladderGame.lineConfig.curvePower = power;
        console.log('Кривизна линии установлена:', power);
    };
    
    window.setLineStart = function(xPercent, yPercent) {
        ladderGame.lineConfig.startXPercent = xPercent;
        ladderGame.lineConfig.startYPercent = yPercent;
        console.log('Начальная позиция установлена:', xPercent + '%', yPercent + '%');
    };
    
    window.setLineEnd = function(xPercent, yPercent) {
        ladderGame.lineConfig.endXPercent = xPercent;
        ladderGame.lineConfig.endYPercent = yPercent;
        console.log('Конечная позиция установлена:', xPercent + '%', yPercent + '%');
    };
    
    window.setLineSpeed = function(speed) {
        ladderGame.lineConfig.speed = speed;
        ladderGame.speedY = speed;
        console.log('Скорость линии установлена:', speed);
    };
    
    window.resetLineConfig = function() {
        ladderGame.lineConfig.angle = 45;
        ladderGame.lineConfig.curvePower = 2;
        ladderGame.lineConfig.startXPercent = 0;
        ladderGame.lineConfig.startYPercent = 100;
        ladderGame.lineConfig.endXPercent = 100;
        ladderGame.lineConfig.endYPercent = 0;
        ladderGame.lineConfig.speed = 5;
        console.log('Настройки линии сброшены к значениям по умолчанию');
    };
    
    window.showLineHelp = function() {
        console.log('=== НАСТРОЙКА ЛИНИИ ===');
        console.log('Доступные функции:');
        console.log('  setLineAngle(градусы) - установить угол (0=вверх, 90=вправо, 45=диагональ)');
        console.log('  setLineCurve(сила) - установить кривизну (1=прямая, 2=плавная, больше=резкая)');
        console.log('  setLineStart(x%, y%) - установить начальную позицию в процентах');
        console.log('  setLineEnd(x%, y%) - установить конечную позицию в процентах');
        console.log('  setLineSpeed(скорость) - установить скорость движения');
        console.log('  resetLineConfig() - сбросить настройки');
        console.log('');
        console.log('Текущие настройки:');
        console.log('  ladderLineConfig.angle =', ladderGame.lineConfig.angle);
        console.log('  ladderLineConfig.curvePower =', ladderGame.lineConfig.curvePower);
        console.log('  ladderLineConfig.startXPercent =', ladderGame.lineConfig.startXPercent);
        console.log('  ladderLineConfig.startYPercent =', ladderGame.lineConfig.startYPercent);
        console.log('  ladderLineConfig.endXPercent =', ladderGame.lineConfig.endXPercent);
        console.log('  ladderLineConfig.endYPercent =', ladderGame.lineConfig.endYPercent);
        console.log('  ladderLineConfig.speed =', ladderGame.lineConfig.speed);
        console.log('');
        console.log('Или меняйте напрямую: ladderLineConfig.angle = 60');
    };
    
    // Показываем справку при загрузке
    console.log('=== НАСТРОЙКА ЛИНИИ ===');
    console.log('Используйте showLineHelp() для справки');
    console.log('Или меняйте ladderLineConfig напрямую');
    
    // Функция запуска игры из поля ввода
    function startLadderGameFromInput() {
        const input = document.getElementById('ladderBetInput');
        if (!input) return;
        
        // Получаем значение и убираем пробелы
        let betValue = input.value.trim();
        
        // Парсим число
        const bet = parseFloat(betValue);
        
        // Проверяем валидность (минимум 25, можно любое число)
        if (isNaN(bet) || bet < 25) {
            const msg = 'Минимальная ставка: 25 ⭐';
            if (tg && tg.showAlert) {
                tg.showAlert(msg);
            } else {
                alert(msg);
            }
            input.value = '25';
            return;
        }
        
        // Проверяем баланс
        if (state.balance < bet) {
            const msg = 'Недостаточно звезд!';
            if (tg && tg.showAlert) {
                tg.showAlert(msg);
            } else {
                alert(msg);
            }
            return;
        }
        
        // Округляем до целого числа для ставки
        const betInt = Math.floor(bet);
        
        // Проверяем состояние игры
        const countdown = document.getElementById('ladderCountdown');
        const isCountdownActive = countdown && countdown.style.display !== 'none' && countdown.style.display !== '';
        const isGameActive = ladderGame.isPlaying && !ladderGame.stopped;
        
        // ЗАПРЕЩАЕМ ставки во время активной игры - только во время countdown можно делать ставки
        if (isGameActive) {
            const msg = 'Подождите окончания игры! Ставки можно делать только во время отчета.';
            if (tg && tg.showAlert) {
                tg.showAlert(msg);
            } else {
                alert(msg);
            }
            
            // Показываем, что ставка отклонена
            if (input) {
                input.style.borderColor = '#ef4444';
                setTimeout(() => {
                    if (input) input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 1000);
            }
            return; // Не принимаем ставку во время активной игры
        }
        
        // Списываем ставку сразу (только если игра не идет)
        state.balance -= betInt;
        updateBalance();
        
        // Получаем имя игрока (из Telegram или генерируем)
        const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) 
            ? (tg.initDataUnsafe.user.first_name || 'Игрок')
            : 'Игрок ' + (ladderGame.players.length + 1);
        
        // Добавляем игрока в список СРАЗУ (только если countdown или игра не идет)
        const playerId = Date.now() + Math.random(); // Уникальный ID
        const newPlayer = {
            id: playerId,
            name: playerName,
            bet: betInt,
            currentWin: betInt, // Начальный выигрыш = ставка
            stopped: false, // Игрок не остановился
            waitingForNextRound: isCountdownActive, // Флаг ожидания следующего раунда (только если countdown)
            userId: (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) 
                ? tg.initDataUnsafe.user.id 
                : null // ID пользователя для идентификации
        };
        ladderGame.players.push(newPlayer);
        
        // Обновляем список игроков
        updateLadderPlayersList();
        
        // Если идет countdown - ставка применяется к следующему раунду
        if (isCountdownActive) {
            // Показываем визуальное сообщение
            showNextRoundMessage(`Ставка ${betInt} ⭐ принята! Игра начнется в следующем раунде.`);
            
            // Показываем, что ставка принята
            if (input) {
                input.style.borderColor = '#4ade80';
                setTimeout(() => {
                    if (input) input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }, 1000);
            }
            return; // Не запускаем игру сразу, она начнется в следующем раунде
        }
        
        // Если игра не идет - начинаем сразу
        console.log('Запуск игры со ставкой:', betInt);
        try {
            const gameStarted = startLadderGame(betInt);
            // Если игра не запустилась - возвращаем звезды
            if (gameStarted === false) {
                state.balance += betInt;
                updateBalance();
                // Удаляем игрока из списка
                ladderGame.players = ladderGame.players.filter(p => p.id !== newPlayer.id);
                updateLadderPlayersList();
                alert('Не удалось запустить игру. Звезды возвращены. Попробуйте еще раз.');
            }
        } catch (e) {
            console.error('Ошибка запуска игры:', e);
            // Если игра не запустилась - возвращаем звезды
            state.balance += betInt;
            updateBalance();
            // Удаляем игрока из списка
            ladderGame.players = ladderGame.players.filter(p => p.id !== newPlayer.id);
            updateLadderPlayersList();
            alert('Ошибка запуска игры. Звезды возвращены. Попробуйте еще раз.');
        }
    }
    
    
    // Начать игру лесенка (Crash Game)
    function startLadderGame(bet) {
        // ВАЖНО: Игра может начаться ТОЛЬКО после countdown!
        // Проверяем что countdown не активен
        const countdownEl = document.getElementById('ladderCountdown');
        const isCountdownActive = countdownEl && countdownEl.style.display !== 'none' && countdownEl.style.display !== '';
        
        if (isCountdownActive) {
            console.warn('Countdown активен, нельзя запустить игру напрямую');
            return false;
        }
        
        // Проверяем что игра не идет
        if (ladderGame.isPlaying && !ladderGame.stopped) {
            console.warn('Игра уже идет, нельзя запустить новую');
            return false;
        }
        
        // Проверка минимальной ставки
        if (bet < 25) {
            if (tg && tg.showAlert) {
                tg.showAlert('Минимальная ставка: 25 ⭐');
            }
            return false;
        }
        
        // Проверка баланса
        if (state.balance < bet) {
            if (tg && tg.showAlert) {
                tg.showAlert('Недостаточно звезд!');
            }
            return false;
        }
        
        // Баланс уже списан в startLadderGameFromInput, здесь только проверяем
        console.log('Проверка баланса. Текущий:', state.balance, 'Ставка:', bet);
        if (state.balance < 0) {
            console.error('Баланс отрицательный!');
            return false;
        }
        
        // Генерируем точку взрыва (от 1.01 до 21.00)
        // Увеличены шансы на большие множители
        const rand = Math.random();
        if (rand < 0.4) {
            // 40% шанс взрыва до x2 (было 60%)
            ladderGame.crashPoint = 1.01 + Math.random() * 0.99; // От 1.01 до 2.00
        } else if (rand < 0.7) {
            // 30% шанс взрыва до x5 (было 25%)
            ladderGame.crashPoint = 2.00 + Math.random() * 3.00; // От 2.00 до 5.00
        } else if (rand < 0.9) {
            // 20% шанс взрыва до x10 (было 10%)
            ladderGame.crashPoint = 5.00 + Math.random() * 5.00; // От 5.00 до 10.00
        } else {
            // 10% шанс взрыва до x21 (было 5%)
            ladderGame.crashPoint = 10.00 + Math.random() * 11.00; // От 10.00 до 21.00
        }
        
        // Устанавливаем параметры игры
        ladderGame.bet = bet;
        ladderGame.backgroundOffset = 0;
        ladderGame.backgroundOffsetY = 0;
        ladderGame.multiplier = 0.00; // Начинаем с x0.00
        ladderGame.timeElapsed = 0;
        ladderGame.isPlaying = true;
        ladderGame.stopped = false;
        ladderGame.trailPoints = [];
        // НЕ очищаем список игроков - они могут быть из предыдущего раунда
        // Очищаем только остановленных игроков
        ladderGame.players = ladderGame.players.filter(p => !p.stopped);
        
        // Сбрасываем позицию птички в начальное положение
        if (typeof resetBirdPosition === 'function') {
            resetBirdPosition();
        }
        
        // Инициализация позиции полоски на основе настроек
        const gameField = document.getElementById('ladderGameField');
        if (gameField) {
            const containerHeight = gameField.offsetHeight || 400;
            const containerWidth = gameField.offsetWidth || 400;
            const config = ladderGame.lineConfig;
            
            // Вычисляем начальную позицию на основе процентов
            ladderGame.startX = (config.startXPercent / 100) * containerWidth;
            // Добавляем смещение вниз (offsetY) к начальной позиции
            // offsetY добавляется к позиции, чтобы линия была ниже
            const baseStartY = (config.startYPercent / 100) * containerHeight;
            ladderGame.startY = baseStartY + (config.offsetY || 0);
            ladderGame.lineX = ladderGame.startX; // Начинаем от начальной позиции
            ladderGame.lineY = ladderGame.startY; // Начинаем от начальной позиции
            
            console.log('Начальная позиция линии:', {
                startX: ladderGame.startX,
                startY: ladderGame.startY,
                baseStartY: baseStartY,
                offsetY: config.offsetY,
                containerHeight: containerHeight
            });
        } else {
            ladderGame.startX = 0;
            ladderGame.startY = 400;
            ladderGame.lineX = 0;
            ladderGame.lineY = 400;
        }
        ladderGame.cameraOffsetX = 0;
        ladderGame.cameraOffsetY = 0;
        ladderGame.cameraZoom = 1.0; // Начальный zoom
        
        // Показываем ракету в центре экрана (и по вертикали, и по горизонтали)
        const rocketEl = document.getElementById('ladderRocket');
        if (rocketEl && gameField) {
            const containerHeight = gameField.offsetHeight || 400;
            const containerWidth = gameField.offsetWidth || 400;
            
            // Позиционируем ракетку в центре экрана
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            
            rocketEl.style.display = 'block';
            rocketEl.style.visibility = 'visible';
            rocketEl.style.opacity = '1';
            rocketEl.style.left = centerX + 'px';
            rocketEl.style.top = centerY + 'px';
            rocketEl.style.transform = 'translate(-50%, -50%)';
            rocketEl.classList.remove('rocket-fall');
            
            // Инициализируем позицию ракетки в игре (центр)
            ladderGame.birdX = centerX;
            ladderGame.birdY = centerY;
        }
        
        // Отключаем анимацию дракона
        if (dragonAnimation && dragonAnimation.isActive) {
            dragonAnimation.isActive = false;
            if (dragonAnimation.animationId) {
                cancelAnimationFrame(dragonAnimation.animationId);
            }
        }
        
        // Скрываем canvas дракона
        const birdCanvas = document.getElementById('birdAnimationCanvas');
        if (birdCanvas) {
            birdCanvas.style.display = 'none';
        }
        
        // Показываем игровое поле
        const betSelection = document.getElementById('ladderBetSelection');
        // gameField уже объявлена выше, используем её
        const result = document.getElementById('ladderResult');
        const explosion = document.getElementById('ladderExplosion');
        const stopBtn = document.getElementById('ladderStopBtn');
        const countdown = document.getElementById('ladderCountdown');
        
        if (betSelection) betSelection.style.display = 'block'; // Поле ставки ВСЕГДА видно
        if (gameField) gameField.style.display = 'block';
        if (result) result.style.display = 'none';
        if (explosion) explosion.style.display = 'none';
        if (stopBtn) {
            if (ladderGame.bet > 0) {
                stopBtn.style.display = 'block'; // Показываем кнопку STOP только для реальной игры
            } else {
                stopBtn.style.display = 'none';
            }
        }
        if (countdown) countdown.style.display = 'none';
        
        // Создаем красивый фон
        createLadderPatterns();
        
        // Устанавливаем фоновое изображение
        updateLadderBackground();
        
        // Обновляем UI
        updateLadderUI();
        
        // Запускаем игровой цикл (обновление множителя и фона)
        if (ladderGame.gameLoop) {
            clearInterval(ladderGame.gameLoop);
        }
        
        ladderGame.gameLoop = setInterval(() => {
            updateLadderGame();
        }, 100); // 10 FPS (реже для производительности)
        
        // Запускаем таймер (увеличение множителя)
        if (ladderGame.timeLoop) {
            clearInterval(ladderGame.timeLoop);
        }
        
        ladderGame.timeLoop = setInterval(() => {
            if (ladderGame.isPlaying && !ladderGame.stopped) {
                ladderGame.timeElapsed += 0.1;
                // Множитель растет: +0.01 каждые 100ms = +0.1 в секунду
                ladderGame.multiplier += 0.01;
                
                // Ограничиваем множитель до x21
                if (ladderGame.multiplier > 21.0) {
                    ladderGame.multiplier = 21.0;
                }
                
                // Проверка на взрыв (используется случайный шанс в updateLadderGame)
                // crashPoint больше не используется, взрыв происходит случайно
                
                updateLadderUI();
                updateLadderPlayersList(); // Обновляем список игроков с текущими выигрышами
            }
        }, 100); // Каждые 100ms
        
        // Вибрация при старте
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        return true; // Игра успешно запущена
    }
    
    // Обновление игры лесенка (Crash Game)
    function updateLadderGame() {
        // Не обновляем если игра не идет или остановлена (countdown НЕ останавливает игру)
        if (!ladderGame.isPlaying || ladderGame.stopped) return;
        
        // Движение белой полоски от нижнего левого угла до верхнего правого угла
        const gameField = document.getElementById('ladderGameField');
        if (!gameField) return;
        
        const containerHeight = gameField.offsetHeight || 400;
        const containerWidth = gameField.offsetWidth || 400;
        
        // Полоска идет от нижнего левого угла вверх под наклоном к правому верхнему углу
        // Движение в основном вверх, но с наклоном вправо
        const targetX = containerWidth;
        const targetY = 0;
        const startX = 0;
        const startY = containerHeight;
        
        // Вычисляем расстояние до цели
        const distanceToTarget = Math.sqrt(
            Math.pow(targetX - ladderGame.lineX, 2) + 
            Math.pow(targetY - ladderGame.lineY, 2)
        );
        
        // Если достигли геометрического конца траектории - взрываемся
        if (distanceToTarget < 5) {
            explodeLadder();
            return;
        }
        
        // Движение линии с настройками из консоли
        const config = ladderGame.lineConfig;
        const speed = config.speed || ladderGame.speedY;
        
        // Вычисляем начальную и конечную позиции на основе процентов
        const actualStartX = (config.startXPercent / 100) * containerWidth;
        // Применяем offsetY к начальной позиции Y (offsetY добавляется, чтобы линия была ниже)
        const baseStartY = (config.startYPercent / 100) * containerHeight;
        const actualStartY = baseStartY + (config.offsetY || 0);
        const actualEndX = (config.endXPercent / 100) * containerWidth;
        const actualEndY = (config.endYPercent / 100) * containerHeight;
        
        // Вычисляем прогресс движения (0 = начало, 1 = конец)
        const totalDistance = Math.sqrt(
            Math.pow(actualEndX - actualStartX, 2) + 
            Math.pow(actualEndY - actualStartY, 2)
        );
        const currentDistance = Math.sqrt(
            Math.pow(ladderGame.lineX - actualStartX, 2) + 
            Math.pow(ladderGame.lineY - actualStartY, 2)
        );
        const lineProgress = Math.max(0, Math.min(1, currentDistance / totalDistance)); // 0 до 1
        
        // Вычисляем направление движения на основе угла
        const angleRad = (config.angle * Math.PI) / 180; // Конвертируем градусы в радианы
        
        // Движение по направлению угла
        const moveX = Math.sin(angleRad) * speed; // Горизонтальное смещение
        const moveY = -Math.cos(angleRad) * speed; // Вертикальное смещение (вверх = отрицательное)
        
        // Применяем кривизну: чем выше lineProgress, тем больше отклонение
        const curvePower = config.curvePower || 2;
        const curveFactor = Math.pow(lineProgress, curvePower);
        
        // Вычисляем отклонение от прямой линии к конечной точке
        const targetDX = actualEndX - actualStartX;
        const targetDY = actualEndY - actualStartY;
        
        // Применяем кривизну: плавное отклонение к конечной точке
        const curvedMoveX = moveX + (targetDX / totalDistance) * speed * curveFactor * 0.5;
        const curvedMoveY = moveY + (targetDY / totalDistance) * speed * curveFactor * 0.5;
        
        // Движение полоски
        ladderGame.lineX += curvedMoveX;
        ladderGame.lineY += curvedMoveY;
        
        // Ограничиваем движение полоски границами поля
        if (ladderGame.lineX > containerWidth) {
            ladderGame.lineX = containerWidth;
        }
        if (ladderGame.lineY < 0) {
            ladderGame.lineY = 0;
        }
        
        // Увеличиваем скорость со временем для динамичности
        if (ladderGame.timeElapsed > 5) {
            ladderGame.speedY = 5 + (ladderGame.timeElapsed - 5) * 0.1; // Ускоряется после 5 секунд
        }
        
        // Вычисляем прогресс движения для zoom (0 = начало, 1 = конец)
        const totalDistanceForZoom = Math.sqrt(
            Math.pow(containerWidth - 0, 2) + 
            Math.pow(0 - containerHeight, 2)
        );
        const currentDistanceForZoom = Math.sqrt(
            Math.pow(ladderGame.lineX - 0, 2) + 
            Math.pow(ladderGame.lineY - containerHeight, 2)
        );
        const progressForZoom = currentDistanceForZoom / totalDistanceForZoom; // 0 до 1
        
        // Zoom out эффект: чем ближе к углу, тем больше отдаление
        // Минимальный zoom = 1.0, максимальный = 0.5 (отдаление в 2 раза)
        const minZoom = 0.5;
        const maxZoom = 1.0;
        const zoom = maxZoom - (progressForZoom * (maxZoom - minZoom));
        ladderGame.cameraZoom = zoom;
        
        // Обновление камеры (следует за полоской, держит ее в центре видимой области)
        // Камера должна следовать за полоской по обеим осям
        // Но только если полоска выходит за пределы видимой области
        const margin = 100; // Отступ от краев
        
        // Проверяем, нужно ли двигать камеру
        if (ladderGame.lineX > containerWidth - margin) {
            const targetCameraX = ladderGame.lineX - containerWidth / 2;
            ladderGame.cameraOffsetX = ladderGame.cameraOffsetX || 0;
            ladderGame.cameraOffsetX += (targetCameraX - ladderGame.cameraOffsetX) * 0.1;
        }
        
        if (ladderGame.lineY < margin) {
            const targetCameraY = ladderGame.lineY - containerHeight / 2;
            ladderGame.cameraOffsetY += (targetCameraY - ladderGame.cameraOffsetY) * 0.1;
        }
        
        // Движение фона (параллакс эффект)
        ladderGame.backgroundOffset += ladderGame.speedX;
        
        // Добавляем точку в полоску (ограничиваем до 200 точек для производительности)
        ladderGame.trailPoints.push({
            x: ladderGame.lineX,
            y: ladderGame.lineY
        });
        if (ladderGame.trailPoints.length > 200) {
            ladderGame.trailPoints.shift();
        }
        
        // Проверка на взрыв (случайный момент)
        // ВАЖНО: Взрыв может произойти ТОЛЬКО если игра идет (не во время countdown)
        if (ladderGame.isPlaying && !ladderGame.stopped) {
            // Проверяем что countdown не активен
            const countdownEl = document.getElementById('ladderCountdown');
            const isCountdownActive = countdownEl && countdownEl.style.display !== 'none' && countdownEl.style.display !== '';
            
            if (!isCountdownActive) {
                const explosionChance = getExplosionChance(ladderGame.multiplier, ladderGame.bet === 0); // демо или реальная игра
                const currentRounded = parseFloat(ladderGame.multiplier.toFixed(2));
                const lastRounded = ladderGame.lastCrashRounded;
                
                let shouldExplode = Math.random() < explosionChance;
                
                // Не допускаем два одинаковых значения подряд (по отображаемому множителю)
                if (shouldExplode && lastRounded !== null && currentRounded === lastRounded) {
                    shouldExplode = false;
                }
                
                if (shouldExplode) {
                    explodeLadder();
                    return;
                }
            }
        }
        
        // Обновляем UI
        updateLadderUI();
        updateLadderBackground();
        updateLadderBirdPosition();
        updateLadderTrail(); // Обновляем след за птицей
    }
    
    // Остановить игру (кнопка STOP) - только для текущего игрока
    function stopLadderGame() {
        if (!ladderGame.isPlaying || ladderGame.stopped) return;
        
        // Находим текущего игрока (по userId из Telegram)
        const currentUserId = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) 
            ? tg.initDataUnsafe.user.id 
            : null;
        
        let currentPlayer = null;
        
        if (currentUserId) {
            // Находим игрока по userId
            currentPlayer = ladderGame.players.find(p => p.userId === currentUserId && !p.stopped);
        } else {
            // Если нет userId, ищем первого активного игрока
            currentPlayer = ladderGame.players.find(p => !p.stopped);
        }
        
        if (!currentPlayer) return;
        
        // Помечаем игрока как остановленного
        currentPlayer.stopped = true;
        
        // Выигрыш = ставка (возвращаем) + ставка * множитель
        const winAmount = currentPlayer.bet + Math.floor(currentPlayer.bet * ladderGame.multiplier);
        
        state.balance += winAmount;
        updateBalance();
        
        // Добавляем в недавние выигрыши
        addRecentWin(`+${winAmount} ⭐`, '🪜');
        
        // Удаляем игрока из списка
        ladderGame.players = ladderGame.players.filter(p => p.id !== currentPlayer.id);
        updateLadderPlayersList();
        
        // Скрываем кнопку STOP для этого игрока, если нет других активных
        const stopBtn = document.getElementById('ladderStopBtn');
        if (stopBtn) {
            const hasActivePlayers = ladderGame.players.some(p => !p.stopped);
            if (!hasActivePlayers) {
                stopBtn.style.display = 'none';
            }
        }
        
        // Вибрация при остановке
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
        
        // Игра продолжается для других игроков!
    }
    
    // Взрыв (проигрыш)
    function explodeLadder() {
        if (!ladderGame.isPlaying || ladderGame.stopped) return;
        
        // Защита от взрыва при множителе 0.30 или меньше (начало раунда)
        if (ladderGame.multiplier <= 0.30) {
            // Не логируем, просто предотвращаем взрыв
            return;
        }
        
        ladderGame.isPlaying = false;
        ladderGame.stopped = true;
        
        // Останавливаем циклы
        if (ladderGame.gameLoop) {
            clearInterval(ladderGame.gameLoop);
            ladderGame.gameLoop = null;
        }
        
        if (ladderGame.timeLoop) {
            clearInterval(ladderGame.timeLoop);
            ladderGame.timeLoop = null;
        }
        
        // Скрываем кнопку STOP
        const stopBtn = document.getElementById('ladderStopBtn');
        if (stopBtn) stopBtn.style.display = 'none';
        
        // Показываем взрыв
        const explosion = document.getElementById('ladderExplosion');
        const explosionMultiplier = document.getElementById('explosionMultiplier');
        
        if (explosion) {
            explosion.style.display = 'block';
        }
        
        if (explosionMultiplier) {
            explosionMultiplier.textContent = `x${ladderGame.multiplier.toFixed(2)}`;
        }
        
        // Вибрация при взрыве
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }
        
        // Птичка/ракета падает при взрыве
        if (typeof makeBirdFall === 'function') {
            makeBirdFall();
        }
        const rocketEl = document.getElementById('ladderRocket');
        if (rocketEl) {
            // убираем анимацию покачивания и запускаем падение
            rocketEl.style.display = 'block';
            rocketEl.classList.remove('rocket-hidden');
            rocketEl.classList.add('rocket-fall');
        }
        
        // Сохраняем множитель как есть (не меняем его при взрыве)
        
        // Сохраняем множитель (округленный) как последний взрыв
        const crashRounded = parseFloat(ladderGame.multiplier.toFixed(2));
        ladderGame.lastCrashRounded = crashRounded;
        
        // Сохраняем множитель в историю
        if (!ladderGame.multiplierHistory) {
            ladderGame.multiplierHistory = [];
        }
        ladderGame.multiplierHistory.push(ladderGame.multiplier);
        // Оставляем только последние 7 раундов
        if (ladderGame.multiplierHistory.length > 7) {
            ladderGame.multiplierHistory.shift();
        }
        updateMultiplierHistory();
        
        // При взрыве все игроки теряют деньги (не возвращаем ставки)
        // Очищаем список игроков
        ladderGame.players = [];
        updateLadderPlayersList();
        
        // Показываем победителя и сумму выигрыша
        const activePlayers = ladderGame.players.filter(p => p.isActive);
        if (activePlayers.length > 0) {
            // Находим игрока с наибольшей ставкой (победитель)
            const winner = activePlayers.reduce((max, p) => p.bet > max.bet ? p : max, activePlayers[0]);
            const winAmount = winner.bet * ladderGame.multiplier;
            const winnerMessage = `🏆 Победитель: ${winner.name}\n💰 Выигрыш: ${winAmount.toFixed(2)} ⭐ (x${ladderGame.multiplier.toFixed(2)})`;
            
            if (tg && tg.showAlert) {
                tg.showAlert(winnerMessage);
            } else {
                alert(winnerMessage);
            }
        }
        
        // ВАЖНО: Всегда после взрыва идет countdown - никаких прямых запусков игры!
        // Через 3 секунды показываем countdown для следующего раунда
        setTimeout(() => {
            if (explosion) explosion.style.display = 'none';
            // ВСЕГДА запускаем countdown для следующего раунда
            startLadderCountdown();
        }, 3000);
    }
    
    // Обратный отсчет от 3 до 0
    function startLadderCountdown() {
        const countdown = document.getElementById('ladderCountdown');
        const countdownNumber = document.getElementById('ladderCountdownNumber');
        const result = document.getElementById('ladderResult');
        const explosion = document.getElementById('ladderExplosion');
        const betSelection = document.getElementById('ladderBetSelection');
        const rocketEl = document.getElementById('ladderRocket');
        
        if (result) result.style.display = 'none';
        if (explosion) explosion.style.display = 'none';
        if (betSelection) betSelection.style.display = 'block'; // Поле ставки всегда видно
        if (countdown) countdown.style.display = 'flex';
        // Во время отсчёта показываем только фон — ракету скрываем
        if (rocketEl) {
            rocketEl.style.display = 'none';
            rocketEl.classList.remove('rocket-fall');
        }
        
        // Останавливаем игру во время countdown - птица НЕ должна лететь
        ladderGame.isPlaying = false;
        ladderGame.stopped = true;
        
        let count = 7; // Отсчет от 7 до 1
        if (countdownNumber) countdownNumber.textContent = count;
        
        const countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                if (countdownNumber) countdownNumber.textContent = count;
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            } else {
                // count стал 0, значит countdown закончился (прошел 1)
                clearInterval(countdownInterval);
                if (countdown) countdown.style.display = 'none';
                
                // ТЕПЕРЬ начинаем игру (после countdown, после 1)
                // После countdown начинаем новую игру
                // Если есть игроки в списке - запускаем игру с их ставками
                const activePlayersForRound = ladderGame.players.filter(p => !p.stopped);
                
                // Сбрасываем флаг ожидания для всех игроков, которые ждали следующего раунда
                activePlayersForRound.forEach(player => {
                    player.waitingForNextRound = false;
                });
                
                if (activePlayersForRound.length > 0) {
                    // Берем первую ставку из списка игроков
                    const firstPlayer = activePlayersForRound[0];
                    startLadderGame(firstPlayer.bet);
                } else {
                    // Если нет игроков - запускаем демо игру
                    startLadderGameDemo();
                }
            }
        }, 1000);
    }
    
    // Завершение игры
    function endLadderGame(isWin) {
        const explosion = document.getElementById('ladderExplosion');
        const result = document.getElementById('ladderResult');
        const resultTitle = document.getElementById('ladderResultTitle');
        const resultMultiplier = document.getElementById('ladderResultMultiplier');
        const resultWin = document.getElementById('ladderResultWin');
        const resultAmount = document.getElementById('ladderResultAmount');
        
        if (explosion) explosion.style.display = 'none';
        
        // При проигрыше (взрыве) - все игроки теряют деньги
        if (!isWin) {
            // Игроки уже удалены в explodeLadder, просто обновляем список
            updateLadderPlayersList();
        }
        
        // Если это была реальная игра (со ставкой) - показываем результат
        if (ladderGame.bet > 0) {
            if (result) result.style.display = 'block';
            
            if (resultTitle) {
                resultTitle.textContent = isWin ? '🎉 Победа!' : '💥 Взрыв!';
            }
            
            if (resultMultiplier) {
                resultMultiplier.textContent = `x${ladderGame.multiplier.toFixed(2)}`;
            }
            
            // Расчет выигрыша
            if (isWin) {
                // Выигрыш = ставка (возвращаем) + ставка * множитель
                // Если множитель начинается с 0.01, то формула: bet + (bet * multiplier)
                const winAmount = ladderGame.bet + Math.floor(ladderGame.bet * ladderGame.multiplier);
                
                state.balance += winAmount;
                updateBalance();
                
                if (resultWin) {
                    resultWin.style.display = 'block';
                    if (resultAmount) {
                        resultAmount.textContent = winAmount;
                    }
                }
                
                // Добавляем в недавние выигрыши
                addRecentWin(`+${winAmount} ⭐`, '🪜');
            } else {
                // Проигрыш при взрыве (ставка потеряна)
                if (resultWin) {
                    resultWin.style.display = 'none';
                }
            }
            
            // Сохраняем баланс
            localStorage.setItem('balance', state.balance.toString());
            
            // После показа результата запускаем обратный отсчет
            setTimeout(() => {
                startLadderCountdown();
            }, 2000);
        } else {
            // Это была демо игра - просто запускаем новую через 7 секунд
            setTimeout(() => {
                if (!ladderGame.isPlaying) {
                    startLadderGameDemo();
                }
            }, 7000);
        }
    }
    
    // Показать поле ввода ставки
    function showLadderBetSelection() {
        const betSelection = document.getElementById('ladderBetSelection');
        const gameField = document.getElementById('ladderGameField');
        
        // Поле ввода всегда видно снизу, игровое поле всегда видно
        if (betSelection) betSelection.style.display = 'block';
        if (gameField) gameField.style.display = 'block';
    }
    
    // Обновление UI лесенки
    function updateLadderUI() {
        const multiplierEl = document.getElementById('ladderMultiplier');
        
        if (multiplierEl) {
            multiplierEl.textContent = `x${ladderGame.multiplier.toFixed(2)}`;
            
            // Меняем цвет в зависимости от множителя
            if (ladderGame.multiplier < 1.5) {
                multiplierEl.style.color = '#4ade80'; // Зеленый
            } else if (ladderGame.multiplier < 2.0) {
                multiplierEl.style.color = '#fbbf24'; // Желтый
            } else if (ladderGame.multiplier < 5.0) {
                multiplierEl.style.color = '#f97316'; // Оранжевый
            } else {
                multiplierEl.style.color = '#ef4444'; // Красный
            }
        }
    }
    
    // Обновление фона (временно отключен)
    function updateLadderBackground() {
        const gameField = document.getElementById('ladderGameField');
        const patterns = document.getElementById('ladderPatterns');
        
        if (gameField) {
            // Устанавливаем фоновое изображение
            gameField.style.backgroundImage = 'url(images/photo_5285461023492084486_y.jpg)';
            gameField.style.backgroundSize = 'cover'; // Покрывает всю область
            gameField.style.backgroundPosition = 'center'; // Центрируем
            gameField.style.backgroundRepeat = 'no-repeat'; // Без повторения
        }
        
        if (patterns) {
            // Скрываем старые паттерны со звездами
            patterns.style.display = 'none';
        }
    }
    
    // Обновление позиции ракетки (стоит в центре и покачивается)
    function updateLadderBirdPosition() {
        const rocketEl = document.getElementById('ladderRocket');
        const gameField = document.getElementById('ladderGameField');
        if (!rocketEl || !gameField) return;
        
        // Получаем размеры поля
        const containerHeight = gameField.offsetHeight || 400;
        const containerWidth = gameField.offsetWidth || 400;
        
        // Позиционируем ракетку в центре экрана (и по вертикали, и по горизонтали)
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        
        // Ракетка всегда в центре, анимация покачивания через CSS
        rocketEl.style.left = centerX + 'px';
        rocketEl.style.top = centerY + 'px';
        rocketEl.style.transform = 'translate(-50%, -50%)';
    }
    
    // Обновление следа птицы (ВРЕМЕННО ОТКЛЮЧЕНО - ждем скриншот)
    function updateLadderTrail() {
        // Линия временно скрыта - ждем скриншот для точной копии
        const gameField = document.getElementById('ladderGameField');
        if (!gameField) return;
        
        // Скрываем SVG линию
        let lineSvg = document.getElementById('ladderLineSvg');
        if (lineSvg) {
            lineSvg.style.display = 'none';
        }
        let linePath = document.getElementById('ladderLinePath');
        if (linePath) {
            linePath.setAttribute('d', '');
            linePath.style.display = 'none';
        }
    }
    
    // Функция расчета шанса взрыва
    function getExplosionChance(multiplier, isDemo) {
        // Не взрываемся при множителе 0.01 или меньше, и в начале раунда (до 0.30)
        if (multiplier <= 0.30) {
            return 0; // Полностью запрещаем взрыв в начале раунда
        }

        // Общая кривая шанса взрыва для реальной игры.
        // ВАЖНО: хотим, чтобы на очень малых множителях (x0.1, x0.2...)
        // взрыв был возможен, но ОЧЕНЬ редкий, чтобы не было серий "по 10 раз подряд".
        function baseChance(m) {
            // Защита от взрыва на очень маленьких множителях (до 0.50)
            if (m < 0.50) {
                return 0; // Полностью запрещаем взрыв до x0.50
            } else if (m < 1.0) {
                // Супер-низкий шанс на маленьких множителях
                // Чтобы почти не было серий взрывов на x0.20–x0.50
                return 0.00005; // 0.005% за тик
            } else if (m < 1.0) {
                const progress = (m - 0.5) / 0.5;
                // Плавный рост: ~0.005% -> ~0.08%
                return 0.00005 + progress * 0.00075;
            } else if (m < 2.0) {
                const progress = (m - 1.0) / 1.0;
                // От ~0.08% до ~1.5% между x1 и x2
                return 0.0008 + progress * 0.0142;
            } else if (m < 5.0) {
                const progress = (m - 2.0) / 3.0;
                // От ~1.5% до ~6% между x2 и x5
                return 0.015 + progress * 0.045;
            } else if (m < 10.0) {
                const progress = (m - 5.0) / 5.0;
                // От ~6% до ~15% между x5 и x10
                return 0.06 + progress * 0.09;
            } else if (m < 21.0) {
                const progress = (m - 10.0) / 11.0;
                // От ~15% до ~25% между x10 и x21
                return 0.15 + progress * 0.10;
            } else {
                return 1.0; // 100% при x21 и выше
            }
        }

        const realChance = baseChance(multiplier);

        if (isDemo) {
            // В демо режиме делаем ещё мягче, чтобы не раздражать частыми ранними взрывами.
            return realChance * 0.5;
        }

        return realChance;
    }
    
    // Создание узоров на фоне (бесконечный космический фон)
    function createLadderPatterns() {
        const patternsContainer = document.getElementById('ladderPatterns');
        if (!patternsContainer) return;
        
        patternsContainer.innerHTML = '';
        
        // Создаем бесконечный фон в длину (10000px высоты)
        const gameField = document.getElementById('ladderGameField');
        if (!gameField) return;
        
        const patternWidth = gameField.offsetWidth || 400;
        const patternHeight = 10000; // Очень высокая высота для бесконечного фона
        const starsCount = 500; // Много звезд для бесконечного фона
        
        // Устанавливаем высоту контейнера
        patternsContainer.style.height = patternHeight + 'px';
        
        // Создаем звезды по всей высоте
        for (let i = 0; i < starsCount; i++) {
            const pattern = document.createElement('div');
            pattern.className = 'ladder-pattern-item';
            
            // Звезды разных размеров и типов
            const starTypes = ['⭐', '✨', '🌟', '💫'];
            const starType = starTypes[Math.floor(Math.random() * starTypes.length)];
            const starSize = Math.random() * 12 + 6;
            pattern.innerHTML = starType;
            pattern.style.fontSize = starSize + 'px';
            pattern.style.opacity = Math.random() * 0.7 + 0.2;
            
            // Позиция по всей высоте фона
            pattern.style.position = 'absolute';
            pattern.style.left = (Math.random() * patternWidth) + 'px';
            pattern.style.top = (Math.random() * patternHeight) + 'px';
            
            // Анимация мерцания
            pattern.style.animation = `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`;
            pattern.style.animationDelay = Math.random() * 2 + 's';
            
            patternsContainer.appendChild(pattern);
        }
        
        // Добавляем красивые частицы/планеты по всей высоте
        for (let i = 0; i < 20; i++) {
            const planet = document.createElement('div');
            planet.className = 'ladder-pattern-item';
            planet.style.width = (20 + Math.random() * 30) + 'px';
            planet.style.height = planet.style.width;
            planet.style.borderRadius = '50%';
            planet.style.background = `radial-gradient(circle, rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, 255, 0.6), rgba(${50 + Math.random() * 100}, ${50 + Math.random() * 100}, 200, 0.2))`;
            planet.style.position = 'absolute';
            planet.style.left = (Math.random() * patternWidth) + 'px';
            planet.style.top = (Math.random() * patternHeight) + 'px';
            planet.style.boxShadow = `0 0 ${10 + Math.random() * 20}px rgba(100, 150, 255, 0.5)`;
            planet.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;
            planet.style.animationDelay = Math.random() * 3 + 's';
            patternsContainer.appendChild(planet);
        }
    }
    
    
    // Автоматический запуск игры каждые 7 секунд (общая игра для всех)
    function startAutoLadderGame() {
        // Очищаем предыдущий интервал если есть
        if (ladderGame.autoStartInterval) {
            clearInterval(ladderGame.autoStartInterval);
        }
        
        // Запускаем демо игру каждые 7 секунд
        ladderGame.autoStartInterval = setInterval(() => {
            // Если игра не идет - запускаем демо
            if (!ladderGame.isPlaying) {
                startLadderGameDemo();
            }
        }, 7000);
        
        // Запускаем первую демо игру сразу
        setTimeout(() => {
            if (!ladderGame.isPlaying) {
                startLadderGameDemo();
            }
        }, 1000);
    }
    
    // Демо игра (для показа всем пользователям)
    function startLadderGameDemo() {
        // ВАЖНО: Демо игра тоже должна начинаться только после countdown!
        const countdownEl = document.getElementById('ladderCountdown');
        const isCountdownActive = countdownEl && countdownEl.style.display !== 'none' && countdownEl.style.display !== '';
        
        // Убираем проверку - демо игра может запускаться
        // if (isCountdownActive) {
        //     console.warn('Countdown активен, нельзя запустить демо игру напрямую');
        //     return;
        // }
        
        if (ladderGame.isPlaying) return; // Если уже идет игра - не запускаем
        
        // Устанавливаем параметры для демо (без ставки)
        ladderGame.bet = 0; // Демо без ставки
        ladderGame.backgroundOffset = 0;
        ladderGame.backgroundOffsetY = 0;
        // В демо режиме стартуем с x0.00 (как в реальной игре)
        // Взрыв до x0.20 запрещен в getExplosionChance.
        ladderGame.multiplier = 0.00;
        ladderGame.timeElapsed = 0;
        ladderGame.isPlaying = true;
        ladderGame.stopped = false;
        ladderGame.trailPoints = [];
        
        // Инициализация позиции птицы
        const gameField = document.getElementById('ladderGameField');
        if (gameField) {
            ladderGame.birdX = gameField.offsetWidth / 2;
            ladderGame.birdY = 50;
        } else {
            ladderGame.birdX = 200;
            ladderGame.birdY = 50;
        }
        ladderGame.cameraOffsetY = 0;
        
        // Показываем игровое поле
        const betSelection = document.getElementById('ladderBetSelection');
        const gameFieldEl = document.getElementById('ladderGameField');
        const result = document.getElementById('ladderResult');
        const explosion = document.getElementById('ladderExplosion');
        const stopBtn = document.getElementById('ladderStopBtn');
        // countdownEl уже объявлен выше в функции
        
        if (betSelection) betSelection.style.display = 'block';
        if (gameFieldEl) gameFieldEl.style.display = 'block';
        if (result) result.style.display = 'none';
        if (explosion) explosion.style.display = 'none';
        if (stopBtn) stopBtn.style.display = 'none'; // В демо нет кнопки STOP
        if (countdownEl) countdownEl.style.display = 'none';
        
        // Показываем ракету в начале демо-игры
        const rocketEl = document.getElementById('ladderRocket');
        if (rocketEl) {
            rocketEl.style.display = 'block';
            rocketEl.style.visibility = 'visible';
            rocketEl.style.opacity = '1';
            rocketEl.classList.remove('rocket-fall');
        }
        
        // Обновляем UI
        updateLadderUI();
        
        // Запускаем игровой цикл
        if (ladderGame.gameLoop) {
            clearInterval(ladderGame.gameLoop);
        }
        
        ladderGame.gameLoop = setInterval(() => {
            updateLadderGame();
        }, 100);
        
        // Запускаем таймер (увеличение множителя)
        if (ladderGame.timeLoop) {
            clearInterval(ladderGame.timeLoop);
        }
        
        ladderGame.timeLoop = setInterval(() => {
            if (ladderGame.isPlaying && !ladderGame.stopped) {
                ladderGame.timeElapsed += 0.1;
                ladderGame.multiplier += 0.01;
                
                // Проверка на взрыв (используется случайный шанс в updateLadderGame)
                updateLadderUI();
            }
        }, 100);
    }
    
    // Перезапуск игры лесенка
    function restartLadderGame() {
        // Останавливаем игру
        if (ladderGame.gameLoop) {
            clearInterval(ladderGame.gameLoop);
            ladderGame.gameLoop = null;
        }
        
        if (ladderGame.timeLoop) {
            clearInterval(ladderGame.timeLoop);
            ladderGame.timeLoop = null;
        }
        
        ladderGame.isPlaying = false;
        ladderGame.stopped = false;
        
        // Сбрасываем UI
        const betSelection = document.getElementById('ladderBetSelection');
        const gameField = document.getElementById('ladderGameField');
        const result = document.getElementById('ladderResult');
        const explosion = document.getElementById('ladderExplosion');
        const stopBtn = document.getElementById('ladderStopBtn');
        const countdownEl = document.getElementById('ladderCountdown');
        
        if (betSelection) betSelection.style.display = 'block';
        if (gameField) gameField.style.display = 'block';
        if (result) result.style.display = 'none';
        if (explosion) explosion.style.display = 'none';
        if (stopBtn) stopBtn.style.display = 'none';
        if (countdownEl) countdownEl.style.display = 'none';
        
        // Обновляем множитель
        updateLadderUI();
    }
    
    // Экспортируем функции лесенки
    try {
        window.startLadderGame = startLadderGame;
        window.startLadderGameFromInput = startLadderGameFromInput;
        window.restartLadderGame = restartLadderGame;
        window.stopLadderGame = stopLadderGame;
    } catch (e) {
        console.error('Ошибка экспорта функций лесенки:', e);
    }
    
    // Функция инициализации приложения
    function initializeApp() {
        console.log('Инициализация приложения...');
        try {
            // Устанавливаем баланс если он 0 или невалидный
            if (!state.balance || state.balance <= 0 || isNaN(state.balance)) {
                console.log('Баланс невалидный, устанавливаем 1000');
                state.balance = 1000;
                localStorage.setItem('balance', '1000');
            }
            console.log('Текущий баланс:', state.balance);
            
            // Обновляем UI сразу (с проверкой DOM)
            try {
                console.log('Обновление UI...');
                if (typeof updateBalance === 'function') {
                    updateBalance();
                    console.log('Баланс обновлен');
                } else {
                    console.error('updateBalance не является функцией!');
                }
                if (typeof updateInventory === 'function') {
                    updateInventory();
                }
                if (typeof updateWinsBar === 'function') {
                    updateWinsBar();
                }
            } catch (e) {
                console.error('Ошибка обновления UI:', e);
            }
            
            // Для MineBoom используем прозрачный фон, для остальных - черный
            const isMineBoom = document.querySelector('.mineboom-section-content');
            const bgColor = isMineBoom ? 'transparent' : '#000000';
            
            if (document.body) {
                document.body.style.backgroundColor = bgColor;
            }
            if (document.documentElement) {
                document.documentElement.style.backgroundColor = bgColor;
            }
            
            // Telegram WebApp (с проверкой)
            try {
                if (tg && tg.ready) tg.ready();
                if (tg && tg.expand) tg.expand();
                if (tg && tg.setHeaderColor) tg.setHeaderColor('#000000');
                if (tg && tg.setBackgroundColor) tg.setBackgroundColor(bgColor);
            } catch (tgError) {
                console.warn('Telegram WebApp не доступен:', tgError);
            }
            
            console.log('Инициализация завершена успешно');
            console.log('Текущий баланс:', state.balance);
            
            // Дополнительная проверка баланса после инициализации
            if (state.balance <= 0) {
                console.warn('Баланс 0 или отрицательный после инициализации, исправляем');
                state.balance = 1000;
                localStorage.setItem('balance', '1000');
                updateBalance();
            }
        } catch (error) {
            console.error('Ошибка инициализации:', error);
            // Устанавливаем баланс в любом случае
            state.balance = 1000;
            localStorage.setItem('balance', '1000');
            try {
                updateBalance();
            } catch (e) {
                console.error('Не удалось обновить баланс:', e);
                // Принудительно устанавливаем баланс в UI
                const balanceEl = document.getElementById('balanceAmount');
                if (balanceEl) {
                    balanceEl.textContent = '1000 ⭐';
                }
            }
        }
    }
    
    // Инициализация при загрузке
    function hideSplashScreen() {
        const splashScreen = document.getElementById('splashScreen');
        const appContainer = document.getElementById('appContainer');
        if (splashScreen && appContainer) {
            setTimeout(() => {
                splashScreen.classList.add('hidden');
                appContainer.style.display = 'block';
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
    }
    
    function onDOMReady() {
        initializeApp();
        
        // Скрываем загрузочный экран после инициализации
        hideSplashScreen();
        
        // Инициализация системы цен подарков
        try {
            initGiftPrices();
        } catch (e) {
            console.error('Ошибка инициализации цен подарков:', e);
        }
        
        // Создание падающих новогодних элементов
        try {
            initFallingElements();
        } catch (e) {
            console.error('Ошибка инициализации падающих элементов:', e);
        }
        
        // Онлайн-индикатор
        try {
            initOnlineIndicator();
        
        // Синхронизация с бэкендом при загрузке
        setTimeout(() => {
            syncBalanceWithBackend();
            syncGiftsWithBackend();
        }, 2000); // Через 2 секунды после загрузки
        } catch (e) {
            console.error('Ошибка инициализации онлайн-индикатора:', e);
        }
        
        // Загружаем последнюю секцию
        try {
    const lastSection = localStorage.getItem('lastSection');
            if (lastSection && lastSection !== 'casePageSection') {
                setTimeout(() => {
                    try {
                        if (typeof switchSection === 'function') {
                            switchSection(lastSection);
                        }
                    } catch (e) {
                        console.error('Ошибка переключения секции:', e);
                        if (typeof switchSection === 'function') {
                            switchSection('inventory');
                        }
                    }
                }, 100);
            } else {
                if (typeof switchSection === 'function') {
                    switchSection('inventory');
                }
            }
        } catch (e) {
            console.error('Ошибка загрузки секции:', e);
        }
        
        // Инициализируем колесо апгрейда
        try {
            const wheel = document.getElementById('wheelContent');
            if (wheel && typeof updateWheelVisual === 'function') {
                updateWheelVisual(0);
            }
        } catch (e) {
            console.error('Ошибка инициализации колеса:', e);
        }
        
        // Инициализируем игру Птица
        try {
            if (typeof initBirdGame === 'function') {
                initBirdGame();
            }
        } catch (e) {
            console.error('Ошибка инициализации игры птица:', e);
        }
        
        // Запускаем автоматический режим лесенки
        try {
            if (typeof startAutoLadderGame === 'function') {
                startAutoLadderGame();
            }
        } catch (e) {
            console.error('Ошибка автозапуска лесенки:', e);
        }
        
        // Создаем фон для лесенки
        try {
            if (typeof createLadderPatterns === 'function') {
                createLadderPatterns();
            }
        } catch (e) {
            console.error('Ошибка создания фона:', e);
        }
        
        // Инициализируем анимацию дракона
        try {
            setTimeout(function() {
                if (typeof initDragonAnimationOnReady === 'function') {
                    initDragonAnimationOnReady();
                }
            }, 1000);
        } catch (e) {
            console.error('Ошибка инициализации анимации дракона:', e);
        }
        
        // Удаляем нежелательные элементы
        try {
            if (typeof removeAllUnwantedElements === 'function') {
                removeAllUnwantedElements();
                setInterval(removeAllUnwantedElements, 500);
    setTimeout(removeAllUnwantedElements, 100);
    setTimeout(removeAllUnwantedElements, 500);
    setTimeout(removeAllUnwantedElements, 1000);
            }
        } catch (e) {
            console.error('Ошибка удаления элементов:', e);
        }
    }
    
    // Запускаем инициализацию только один раз
    let domReadyCalled = false;
    function callOnDOMReady() {
        if (domReadyCalled) return;
        domReadyCalled = true;
        try {
            onDOMReady();
        } catch (e) {
            console.error('Ошибка в onDOMReady:', e);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callOnDOMReady);
    } else {
        setTimeout(callOnDOMReady, 200);
    }
    
    // Дополнительная проверка через небольшую задержку
    setTimeout(function() {
        console.log('=== ПРОВЕРКА СОСТОЯНИЯ ПРИЛОЖЕНИЯ ===');
        if (typeof window.switchSection === 'function') {
            console.log('✓ switchSection экспортирована');
        } else {
            console.error('✗ switchSection НЕ экспортирована!');
        }
        if (typeof window.showWalletMenu === 'function') {
            console.log('✓ showWalletMenu экспортирована');
        } else {
            console.error('✗ showWalletMenu НЕ экспортирована!');
        }
        const balanceEl = document.getElementById('balanceAmount');
        if (balanceEl) {
            console.log('✓ Элемент баланса найден, значение:', balanceEl.textContent);
        } else {
            console.error('✗ Элемент баланса НЕ найден!');
        }
        console.log('Текущий баланс в state:', state.balance);
        console.log('=====================================');
    }, 200);
    
    if (document.readyState === 'loading') {
        removeAllUnwantedElements();
    }
    
    const observer = new MutationObserver(() => {
        removeAllUnwantedElements();
    });
    
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    }
    // Показать сообщение о следующем раунде
    function showNextRoundMessage(message) {
        // Создаем или находим элемент для сообщения
        let messageEl = document.getElementById('nextRoundMessage');
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = 'nextRoundMessage';
            messageEl.className = 'next-round-message';
            const betSelection = document.getElementById('ladderBetSelection');
            if (betSelection) {
                betSelection.insertBefore(messageEl, betSelection.firstChild);
            }
        }
        
        messageEl.textContent = message;
        messageEl.style.display = 'block';
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            if (messageEl) {
                messageEl.style.display = 'none';
            }
        }, 5000);
    }
    
    // Обновление списка игроков
    function updateLadderPlayersList() {
        const playersContent = document.getElementById('ladderPlayersContent');
        if (!playersContent) return;
        
        // Фильтруем остановленных игроков
        const activePlayers = ladderGame.players.filter(p => !p.stopped);
        
        if (activePlayers.length === 0) {
            playersContent.innerHTML = '<div class="no-players">Нет активных игроков</div>';
            return;
        }
        
        // Обновляем выигрыши игроков на основе текущего множителя (только если игра идет)
        if (ladderGame.isPlaying && !ladderGame.stopped) {
            activePlayers.forEach(player => {
                // Выигрыш = ставка * множитель (растет пока птица летит)
                // Но только для игроков, которые уже в игре (не для тех, кто ждет следующего раунда)
                if (!player.waitingForNextRound) {
                    player.currentWin = Math.floor(player.bet * ladderGame.multiplier);
                } else {
                    // Для игроков, ожидающих следующего раунда, выигрыш = ставка
                    player.currentWin = player.bet;
                }
            });
        }
        
        // Сортируем активных игроков по выигрышу (по убыванию)
        const sortedPlayers = [...activePlayers].sort((a, b) => b.currentWin - a.currentWin);
        
        // Генерируем HTML
        playersContent.innerHTML = sortedPlayers.map((player, index) => {
            return `
                <div class="player-item">
                    <span class="player-name">${player.name}</span>
                    <span class="player-bet">Ставка: ${player.bet} ⭐</span>
                    <span class="player-win">Выигрыш: ${player.currentWin} ⭐</span>
                </div>
            `;
        }).join('');
    }
    
    // Финальная проверка после загрузки
    setTimeout(function() {
        console.log('=== ФИНАЛЬНАЯ ПРОВЕРКА ===');
        console.log('window.appLoaded:', window.appLoaded);
        console.log('state.balance:', state.balance);
        console.log('window.switchSection:', typeof window.switchSection);
        console.log('window.showWalletMenu:', typeof window.showWalletMenu);
        console.log('Элемент баланса:', document.getElementById('balanceAmount') ? 'найден' : 'НЕ НАЙДЕН');
        console.log('=======================');
        
        // Принудительно обновляем баланс еще раз
        if (typeof updateBalance === 'function') {
            updateBalance();
        }
        
        // Делаем state доступным глобально для отладки
        window.state = state;
        console.log('state доступен глобально как window.state');
    }, 500);
    
    // Экспортируем updateBalance для отладки
    window.updateBalance = updateBalance;
    console.log('updateBalance экспортирована глобально');
    
    // ==================== АНИМАЦИЯ ПТИЧКИ ====================
    let dragonAnimation = {
        canvas: null,
        ctx: null,
        x: 0, // Позиция X (движется вперед)
        y: 0, // Позиция Y
        animationId: null,
        centerY: 0, // Центральная позиция Y
        dragonSize: 50, // Размер дракона
        wingAngle: 0, // Угол крыльев для анимации (0-2π за 0.3 секунды)
        wingTime: 0, // Время для анимации крыльев (0-0.3 секунды)
        isActive: false,
        isFalling: false, // Состояние падения
        fallSpeed: 0, // Скорость падения
        fallAcceleration: 0.8, // Ускорение падения
        rotation: 0, // Угол вращения при падении
        forwardSpeed: 0.5, // Скорость движения вперед
        startX: 0 // Начальная позиция X
    };
    
    // Инициализация анимации дракона
    function initDragonAnimation() {
        const canvas = document.getElementById('birdAnimationCanvas'); // ID остается для совместимости
        if (!canvas) {
            console.log('Canvas для анимации дракона не найден');
            return;
        }
        
        const gameField = document.getElementById('ladderGameField');
        if (!gameField) return;
        
        // Устанавливаем размеры canvas
        canvas.width = gameField.offsetWidth || 400;
        canvas.height = gameField.offsetHeight || 400;
        
        dragonAnimation.canvas = canvas;
        dragonAnimation.ctx = canvas.getContext('2d');
        dragonAnimation.centerY = canvas.height * 0.3; // Дракон в верхней трети экрана
        dragonAnimation.y = dragonAnimation.centerY;
        dragonAnimation.x = canvas.width / 2; // Дракон по центру экрана (на месте)
        dragonAnimation.startX = canvas.width / 2;
        dragonAnimation.isFalling = false;
        dragonAnimation.fallSpeed = 0;
        dragonAnimation.rotation = 0;
        dragonAnimation.wingTime = 0;
        dragonAnimation.wingAngle = 0;
        dragonAnimation.lastTime = performance.now();
        
        // Запускаем анимацию
        dragonAnimation.isActive = true;
        animateDragon();
        
        // Обновляем размеры при изменении размера окна
        window.addEventListener('resize', function() {
            if (gameField && canvas) {
                canvas.width = gameField.offsetWidth || 400;
                canvas.height = gameField.offsetHeight || 400;
                dragonAnimation.centerY = canvas.height * 0.3;
                dragonAnimation.startX = canvas.width / 2;
                if (!dragonAnimation.isFalling) {
                    dragonAnimation.y = dragonAnimation.centerY;
                    dragonAnimation.x = dragonAnimation.startX;
                }
            }
        });
    }
    
    // Функция анимации дракона
    function animateDragon() {
        if (!dragonAnimation.isActive || !dragonAnimation.ctx || !dragonAnimation.canvas) {
            return;
        }
        
        const ctx = dragonAnimation.ctx;
        const canvas = dragonAnimation.canvas;
        const now = performance.now();
        const deltaTime = (now - (dragonAnimation.lastTime || now)) / 1000; // В секундах
        dragonAnimation.lastTime = now;
        
        // Очищаем canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Если дракон падает
        if (dragonAnimation.isFalling) {
            // Увеличиваем скорость падения
            dragonAnimation.fallSpeed += dragonAnimation.fallAcceleration;
            dragonAnimation.y += dragonAnimation.fallSpeed;
            // Вращение при падении
            dragonAnimation.rotation += 0.1;
            
            // Если дракон упал за пределы экрана, скрываем его
            if (dragonAnimation.y > canvas.height + dragonAnimation.dragonSize * 2) {
                // Дракон исчез, не сбрасываем - останется скрытым до следующего раунда
                dragonAnimation.isFalling = false;
            }
        } else {
            // Дракон на месте: только машет крыльями
            // Небольшое покачивание вверх-вниз при махании крыльями
            dragonAnimation.y = dragonAnimation.centerY + Math.sin(dragonAnimation.wingTime * Math.PI * 2) * 3;
            
            // Дракон остается на месте (по центру)
            dragonAnimation.x = dragonAnimation.startX;
            
            // Обновляем анимацию крыльев: 0.3 секунды на полный цикл
            dragonAnimation.wingTime += deltaTime;
            if (dragonAnimation.wingTime >= 0.3) {
                dragonAnimation.wingTime = 0; // Сбрасываем цикл
            }
            // Угол крыльев: от 0 до 2π за 0.3 секунды
            dragonAnimation.wingAngle = (dragonAnimation.wingTime / 0.3) * Math.PI * 2;
        }
        
        // Рисуем дракона (только если не упал за экран)
        if (dragonAnimation.y < canvas.height + dragonAnimation.dragonSize * 2) {
            drawDragon(ctx, dragonAnimation.x, dragonAnimation.y, dragonAnimation.wingAngle, dragonAnimation.isFalling, dragonAnimation.rotation);
        }
        
        // Продолжаем анимацию
        dragonAnimation.animationId = requestAnimationFrame(animateDragon);
    }
    
    // Функция рисования дракона
    function drawDragon(ctx, x, y, wingAngle, isFalling, rotation) {
        ctx.save();
        ctx.translate(x, y);
        
        // Если падает, вращаем дракона
        if (isFalling) {
            ctx.rotate(rotation); // Вращение при падении
        }
        
        const size = dragonAnimation.dragonSize;
        const pinkColor = '#FF69B4'; // Розовый цвет дракона
        const lightPinkColor = '#FFB6C1'; // Светло-розовый для деталей
        
        // Тело дракона (более узнаваемая форма - вытянутое тело)
        ctx.fillStyle = pinkColor;
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.6, size * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Голова дракона (более крупная и узнаваемая)
        ctx.fillStyle = pinkColor;
        ctx.beginPath();
        ctx.arc(size * 0.5, -size * 0.05, size * 0.35, 0, Math.PI * 2);
        ctx.fill();
        
        // Морда/нос дракона (более выраженный)
        ctx.fillStyle = lightPinkColor;
        ctx.beginPath();
        ctx.ellipse(size * 0.7, 0, size * 0.2, size * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Ноздри
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.arc(size * 0.65, -size * 0.02, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size * 0.65, size * 0.02, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Глаза (более выразительные)
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(size * 0.55, -size * 0.12, 5, 0, Math.PI * 2);
        ctx.fill();
        // Блик в глазу
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(size * 0.56, -size * 0.13, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Крылья (анимированные) - машут только если не падает
        if (!isFalling) {
            ctx.fillStyle = lightPinkColor;
            // Крылья машут вверх-вниз: от -45 до +45 градусов
            const wingRotation = Math.sin(wingAngle) * 0.8; // От -0.8 до +0.8 радиан (более выраженное движение)
            
            // Левое крыло (нижнее)
            ctx.save();
            ctx.translate(-size * 0.2, size * 0.1);
            ctx.rotate(wingRotation);
            ctx.beginPath();
            // Крыло в форме перевернутой капли
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(-size * 0.3, -size * 0.2, -size * 0.5, 0);
            ctx.quadraticCurveTo(-size * 0.3, size * 0.2, 0, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
            
            // Правое крыло (верхнее)
            ctx.save();
            ctx.translate(-size * 0.2, -size * 0.1);
            ctx.rotate(-wingRotation);
            ctx.beginPath();
            // Крыло в форме капли
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(-size * 0.3, size * 0.2, -size * 0.5, 0);
            ctx.quadraticCurveTo(-size * 0.3, -size * 0.2, 0, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        } else {
            // При падении крылья не машут (опущены)
            ctx.fillStyle = lightPinkColor;
            // Левое крыло (опущено)
            ctx.beginPath();
            ctx.moveTo(-size * 0.2, size * 0.1);
            ctx.quadraticCurveTo(-size * 0.4, size * 0.3, -size * 0.5, size * 0.15);
            ctx.quadraticCurveTo(-size * 0.4, size * 0.05, -size * 0.2, size * 0.1);
            ctx.closePath();
            ctx.fill();
            // Правое крыло (опущено)
            ctx.beginPath();
            ctx.moveTo(-size * 0.2, -size * 0.1);
            ctx.quadraticCurveTo(-size * 0.4, -size * 0.3, -size * 0.5, -size * 0.15);
            ctx.quadraticCurveTo(-size * 0.4, -size * 0.05, -size * 0.2, -size * 0.1);
            ctx.closePath();
            ctx.fill();
        }
        
        // Хвост дракона (более длинный и извилистый)
        ctx.fillStyle = pinkColor;
        ctx.beginPath();
        ctx.moveTo(-size * 0.6, 0);
        ctx.quadraticCurveTo(-size * 0.8, -size * 0.2, -size * 0.9, -size * 0.1);
        ctx.quadraticCurveTo(-size * 1.0, 0, -size * 0.9, size * 0.1);
        ctx.quadraticCurveTo(-size * 0.8, size * 0.2, -size * 0.6, 0);
        ctx.closePath();
        ctx.fill();
        
        // Кончик хвоста
        ctx.fillStyle = lightPinkColor;
        ctx.beginPath();
        ctx.arc(-size * 0.95, 0, size * 0.08, 0, Math.PI * 2);
        ctx.fill();
        
        // Шипы на спине (более выраженные)
        ctx.fillStyle = lightPinkColor;
        for (let i = 0; i < 4; i++) {
            const spikeX = -size * 0.4 + i * size * 0.2;
            ctx.beginPath();
            ctx.moveTo(spikeX, -size * 0.25);
            ctx.lineTo(spikeX + size * 0.06, -size * 0.35);
            ctx.lineTo(spikeX - size * 0.06, -size * 0.35);
            ctx.closePath();
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    // Функция падения дракона при взрыве
    function makeDragonFall() {
        if (dragonAnimation.isActive) {
            dragonAnimation.isFalling = true;
            dragonAnimation.fallSpeed = 0; // Начинаем с нулевой скорости
            dragonAnimation.rotation = 0; // Начинаем вращение с нуля
        }
    }
    
    // Сброс дракона в начальное положение
    function resetDragonPosition() {
        if (dragonAnimation.canvas) {
            dragonAnimation.isFalling = false;
            dragonAnimation.fallSpeed = 0;
            dragonAnimation.rotation = 0;
            dragonAnimation.y = dragonAnimation.centerY;
            dragonAnimation.x = dragonAnimation.startX;
            dragonAnimation.wingTime = 0;
            dragonAnimation.wingAngle = 0;
        }
    }
    
    // Остановка анимации
    function stopDragonAnimation() {
        dragonAnimation.isActive = false;
        if (dragonAnimation.animationId) {
            cancelAnimationFrame(dragonAnimation.animationId);
            dragonAnimation.animationId = null;
        }
    }
    
    // Запуск анимации
    function startDragonAnimation() {
        if (!dragonAnimation.isActive) {
            dragonAnimation.isActive = true;
            dragonAnimation.lastTime = performance.now();
            animateDragon();
        }
    }
    
    // Инициализация при загрузке DOM
    function initDragonAnimationOnReady() {
        // Ждем, пока секция ladder будет доступна
        setTimeout(function() {
            const gameField = document.getElementById('ladderGameField');
            if (gameField) {
                initDragonAnimation();
            }
        }, 500);
    }
    
    // Экспортируем функции для управления анимацией (сохраняем старые имена для совместимости)
    window.startBirdAnimation = startDragonAnimation;
    window.stopBirdAnimation = stopDragonAnimation;
    window.initBirdAnimation = initDragonAnimation;
    window.initBirdAnimationOnReady = initDragonAnimationOnReady;
    window.makeBirdFall = makeDragonFall;
    window.resetBirdPosition = resetDragonPosition;
    
    // Новые функции с правильными именами
    window.startDragonAnimation = startDragonAnimation;
    window.stopDragonAnimation = stopDragonAnimation;
    window.initDragonAnimation = initDragonAnimation;
    window.initDragonAnimationOnReady = initDragonAnimationOnReady;
    window.makeDragonFall = makeDragonFall;
    window.resetDragonPosition = resetDragonPosition;
    
    // Функция обновления истории множителей
    function updateMultiplierHistory() {
        const historyContent = document.getElementById('ladderHistoryContent');
        if (!historyContent) return;
        
        if (!ladderGame.multiplierHistory || ladderGame.multiplierHistory.length === 0) {
            historyContent.innerHTML = '<div class="history-empty">История пуста</div>';
            return;
        }
        
        // Показываем последние 7 раундов (от нового к старому)
        const history = [...ladderGame.multiplierHistory].reverse(); // Переворачиваем, чтобы новый был первым
        historyContent.innerHTML = '';
        
        history.forEach((multiplier, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            // Определяем цвет в зависимости от множителя
            let itemClass = 'history-item-low';
            if (multiplier >= 10) {
                itemClass = 'history-item-high';
            } else if (multiplier >= 5) {
                itemClass = 'history-item-medium';
            }
            
            historyItem.classList.add(itemClass);
            historyItem.textContent = `x${multiplier.toFixed(2)}`;
            historyContent.appendChild(historyItem);
        });
    }
    
    // Экспортируем функцию обновления истории
    window.updateMultiplierHistory = updateMultiplierHistory;
    
    // ==================== БИТВЫ ====================
    const battlesGame = {
        isActive: false,
        countdown: 13,
        countdownInterval: null,
        gameNumber: 33535,
        participants: [],
        bestValue: 9669.74,
        lastValue: 13.18,
        gifts: 5,
        giftsValue: 9.4,
        currentMode: 'dice', // dice | arena | wheel
        wheelSegments: [
            { percent: 40, color: '#ef4444', icon: '🐦', label: '40%' },
            { percent: 20, color: '#8B4513', icon: 'ZS', label: '20%' },
            { percent: 20, color: '#fbbf24', icon: '💻', label: '20%' },
            { percent: 20, color: '#f97316', icon: '👤', label: '20%' }
        ]
    };

    // Мини-игра Dice
    const diceGame = {
        currentValue: 6,
        chosenNumber: 1,
        countdown: 15,
        countdownInterval: null,
        autoRollInterval: null,
        // {name, amount, type: 'stars' | 'gift', chosen, gift?, giftValue?}
        participants: [],
        selectingGift: false,
        chooseHandlersInited: false
    };
    
    // Мини-игра MineBoom
    const mineboomGame = {
        blocks: [], // Текущие блоки на поле [{type, price, element}]
        selectedBlock: null, // Выбранный блок
        isAnimating: false, // Идет ли анимация
        blockTypes: {
            'dirt': { name: 'Земля', price: 50, rarity: 'common', image: 'images/blocks/dirt.png.jpg.webp' },
            'plank': { name: 'Доска', price: 150, rarity: 'common', image: 'images/blocks/plank.png.jpg.webp' },
            'log': { name: 'Бревно', price: 200, rarity: 'common', image: 'images/blocks/log.png.jpg.webp' },
            'coal_ore': { name: 'Угольная руда', price: 300, rarity: 'uncommon', image: 'images/blocks/coal_ore.png.jpg.webp' },
            'diamond_ore': { name: 'Алмазная руда', price: 1000, rarity: 'epic', image: 'images/blocks/diamond_ore.png.jpg.webp' },
            'sandstone': { name: 'Песчаник', price: 80, rarity: 'common', image: 'images/blocks/sandstone.png.jpg.webp' },
            'snow': { name: 'Снег', price: 60, rarity: 'common', image: 'images/blocks/snow.png.jpg.webp' },
            'diamond_block': { name: 'Алмазный блок', price: 2000, rarity: 'epic', image: 'images/blocks/diamond_block.png.jpg.webp' },
            'emerald_block': { name: 'Изумрудный блок', price: 2200, rarity: 'epic', image: 'images/blocks/emerald_block.png.jpg.webp' },
            'obsidian': { name: 'Обсидиан', price: 1800, rarity: 'legendary', image: 'images/blocks/obsidian.png.jpg.webp' },
            'gold_block': { name: 'Золотой блок', price: 1500, rarity: 'epic', image: 'images/blocks/gold_block.png.jpg.webp' },
            'bedrock': { name: 'Бедрок', price: 5000, rarity: 'mythic', image: 'images/blocks/bedrock.png.jpg.webp' }
        }
    };

    // Оценка базовой стоимости подарка в звёздах
    function getGiftBaseValue(item) {
        if (!item) return 100;
        // Используем сохранённую цену, если есть
        if (typeof item.price === 'number') return item.price;
        if (typeof item.value === 'number') return item.value;
        // Получаем актуальную цену из базы данных
        const currentPrice = getGiftPrice(item.name);
        if (currentPrice && currentPrice !== 100) return currentPrice;
        // Простейшая эвристика по редкости
        if (item.rarity === 'mythic') return 2000;
        if (item.rarity === 'legendary') return 1000;
        if (item.rarity === 'epic') return 500;
        if (item.rarity === 'rare') return 250;
        return 100;
    }
    
    // Инициализация игры битв
    function initBattlesGame() {
        if (battlesGame.currentMode === 'wheel') {
            initWheelGame();
        } else {
            createBattlesWheel();
            startBattlesCountdown();
            updateBattlesParticipants();
            updateBattlesStats();
        }
    }
    
    // Игра колеса
    const wheelGame = {
        countdown: 15,
        countdownInterval: null,
        participants: [], // {name, amount, type: 'stars'|'gift', color, percent, gift?, giftValue?}
        isSpinning: false,
        colors: [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
            '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#EC7063',
            '#5DADE2', '#58D68D', '#F4D03F', '#EB984E', '#AF7AC5',
            '#85C1E9', '#F1948A', '#7FB3D3', '#F5B041', '#82E0AA'
        ],
        usedColors: new Set(),
        selectingGift: false
    };
    
    // Инициализация игры колеса
    function initWheelGame() {
        wheelGame.countdown = 15;
        updateWheelTimer();
        updateWheelWheel();
        updateWheelParticipants();
        checkAndStartWheelTimer(); // Проверяем и запускаем таймер если есть 2+ участника
    }
    
    // Таймер обратного отсчета для колеса (запускается только при 2+ участниках)
    function startWheelCountdown() {
        const timerEl = document.getElementById('wheelTimer');
        if (!timerEl) return;
        
        // Таймер запускается только если есть 2+ участника
        if (wheelGame.participants.length < 2) {
            // Останавливаем таймер если участников меньше 2
            if (wheelGame.countdownInterval) {
                clearInterval(wheelGame.countdownInterval);
                wheelGame.countdownInterval = null;
            }
            updateWheelTimer(); // Обновляем отображение
            return;
        }
        
        // Если таймер уже запущен, не запускаем повторно
        if (wheelGame.countdownInterval) {
            return;
        }
        
        wheelGame.countdown = 15;
        updateWheelTimer();
        
        wheelGame.countdownInterval = setInterval(() => {
            wheelGame.countdown--;
            updateWheelTimer();
            
            if (wheelGame.countdown <= 0) {
                clearInterval(wheelGame.countdownInterval);
                wheelGame.countdownInterval = null;
                
                // Если есть 2+ участника, запускаем вращение
                if (wheelGame.participants.length >= 2 && !wheelGame.isSpinning) {
                    setTimeout(() => {
                    spinWheel();
                    }, 100);
                } else {
                    // Если участников стало меньше 2, не запускаем таймер заново
                    wheelGame.countdown = 15;
                    updateWheelTimer();
                }
            }
        }, 1000);
    }
    
    // Проверка и запуск таймера при добавлении участника
    function checkAndStartWheelTimer() {
        if (wheelGame.participants.length >= 2) {
            startWheelCountdown();
        } else {
            // Если участников меньше 2, останавливаем таймер
            if (wheelGame.countdownInterval) {
                clearInterval(wheelGame.countdownInterval);
                wheelGame.countdownInterval = null;
            }
            wheelGame.countdown = 15;
            updateWheelTimer();
        }
    }
    
    // Обновление таймера
    function updateWheelTimer() {
        const timerEl = document.getElementById('wheelTimer');
        if (!timerEl) return;
        
        const minutes = Math.floor(wheelGame.countdown / 60);
        const seconds = wheelGame.countdown % 60;
        timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Получить свободный цвет для игрока
    function getAvailableColor() {
        for (let color of wheelGame.colors) {
            if (!wheelGame.usedColors.has(color)) {
                wheelGame.usedColors.add(color);
                return color;
            }
        }
        // Если все цвета заняты, используем случайный
        return wheelGame.colors[Math.floor(Math.random() * wheelGame.colors.length)];
    }
    
    // Освободить цвет
    function releaseColor(color) {
        wheelGame.usedColors.delete(color);
    }
    
    // Вычисление процентов для каждого игрока
    function calculateWheelPercentages() {
        if (wheelGame.participants.length === 0) return;
        
        // Если только 1 игрок - у него 100%
        if (wheelGame.participants.length === 1) {
            wheelGame.participants[0].percent = 100;
            return;
        }
        
        // Если 2+ игрока - рассчитываем пропорционально
        const totalAmount = wheelGame.participants.reduce((sum, p) => sum + p.amount, 0);
        
        wheelGame.participants.forEach(p => {
            p.percent = (p.amount / totalAmount) * 100;
        });
    }
    
    // Обновление колеса (создание сегментов)
    function updateWheelWheel() {
        const svg = document.getElementById('wheelSvg');
        if (!svg) return;
        
        svg.innerHTML = '';
        svg.classList.remove('spinning');
        svg.style.transform = 'rotate(-90deg)';
        svg.style.setProperty('--final-rotation', '0deg');
        
        if (wheelGame.participants.length === 0) {
            // Пустое колесо
            const centerX = 200;
            const centerY = 200;
            const radius = 150;
            
            // Золотой обод (толстый, глянцевый) - самый нижний слой
            const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            outerCircle.setAttribute('cx', centerX);
            outerCircle.setAttribute('cy', centerY);
            outerCircle.setAttribute('r', radius);
            outerCircle.setAttribute('fill', '#FFD700');
            outerCircle.setAttribute('stroke', '#FFA500');
            outerCircle.setAttribute('stroke-width', '10');
            outerCircle.setAttribute('opacity', '1');
            svg.appendChild(outerCircle);
            
            // Красный фон колеса - второй слой
            const redBackground = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            redBackground.setAttribute('cx', centerX);
            redBackground.setAttribute('cy', centerY);
            redBackground.setAttribute('r', radius - 10);
            redBackground.setAttribute('fill', '#8B0000');
            svg.appendChild(redBackground);
            
            // Золотые спицы (много тонких линий от центра к ободу) - третий слой
            const numSpokes = 80;
            const innerRadiusEmpty = 30;
            const spokeOuterRadius = radius - 10;
            for (let i = 0; i < numSpokes; i++) {
                const spokeAngle = (i * 360 / numSpokes) * Math.PI / 180;
                const x1 = centerX + innerRadiusEmpty * Math.cos(spokeAngle);
                const y1 = centerY + innerRadiusEmpty * Math.sin(spokeAngle);
                const x2 = centerX + spokeOuterRadius * Math.cos(spokeAngle);
                const y2 = centerY + spokeOuterRadius * Math.sin(spokeAngle);
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.setAttribute('stroke', '#FFD700');
                line.setAttribute('stroke-width', '2');
                line.setAttribute('opacity', '0.8');
                line.setAttribute('stroke-linecap', 'round');
                svg.appendChild(line);
            }
            
            // Золотой центр - самый верхний слой
            const innerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            innerCircle.setAttribute('cx', centerX);
            innerCircle.setAttribute('cy', centerY);
            innerCircle.setAttribute('r', innerRadiusEmpty);
            innerCircle.setAttribute('fill', '#FFD700');
            innerCircle.setAttribute('stroke', '#FFA500');
            innerCircle.setAttribute('stroke-width', '4');
            innerCircle.setAttribute('opacity', '1');
            svg.appendChild(innerCircle);
            
            return;
        }
        
        calculateWheelPercentages();
        
        const centerX = 200;
        const centerY = 200;
        const radius = 150;
        const innerRadius = 30;
        let currentAngle = 0;
        
        // Золотой обод (толстый, глянцевый) - самый нижний слой
        const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        outerCircle.setAttribute('cx', centerX);
        outerCircle.setAttribute('cy', centerY);
        outerCircle.setAttribute('r', radius);
        outerCircle.setAttribute('fill', '#FFD700');
        outerCircle.setAttribute('stroke', '#FFA500');
        outerCircle.setAttribute('stroke-width', '10');
        outerCircle.setAttribute('opacity', '1');
        svg.appendChild(outerCircle);
        
        // Красный фон колеса - второй слой
        const redBackground = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        redBackground.setAttribute('cx', centerX);
        redBackground.setAttribute('cy', centerY);
        redBackground.setAttribute('r', radius - 10);
        redBackground.setAttribute('fill', '#8B0000');
        svg.appendChild(redBackground);
        
        // Создаем сегменты для каждого игрока - третий слой
        wheelGame.participants.forEach((participant, index) => {
            const angle = (participant.percent / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            
            // Разбиваем большой сегмент на маленькие полосочки (примерно 1% = 1 полоска)
            const numBars = Math.max(1, Math.floor(participant.percent));
            const barAngle = angle / numBars;
            
            for (let i = 0; i < numBars; i++) {
                const barStartAngle = startAngle + (i * barAngle);
                const barEndAngle = startAngle + ((i + 1) * barAngle);
                
                const startAngleRad = (barStartAngle * Math.PI) / 180;
                const endAngleRad = (barEndAngle * Math.PI) / 180;
                
                // Сегменты должны быть внутри красного фона, но не доходить до центра
                const segmentOuterRadius = radius - 10;
                const segmentInnerRadius = innerRadius + 5; // Немного больше центра, чтобы спицы были видны
                
                const x1 = centerX + segmentOuterRadius * Math.cos(startAngleRad);
                const y1 = centerY + segmentOuterRadius * Math.sin(startAngleRad);
                const x2 = centerX + segmentOuterRadius * Math.cos(endAngleRad);
                const y2 = centerY + segmentOuterRadius * Math.sin(endAngleRad);
                const x3 = centerX + segmentInnerRadius * Math.cos(endAngleRad);
                const y3 = centerY + segmentInnerRadius * Math.sin(endAngleRad);
                const x4 = centerX + segmentInnerRadius * Math.cos(startAngleRad);
                const y4 = centerY + segmentInnerRadius * Math.sin(startAngleRad);
                
                const largeArcFlag = barAngle > 180 ? 1 : 0;
                
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                const d = `M ${x1} ${y1} A ${segmentOuterRadius} ${segmentOuterRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${segmentInnerRadius} ${segmentInnerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
                path.setAttribute('d', d);
                path.setAttribute('fill', participant.color);
                path.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
                path.setAttribute('stroke-width', '0.5');
                path.setAttribute('opacity', '0.85');
                path.setAttribute('data-participant-index', index);
                svg.appendChild(path);
            }
            
            currentAngle = endAngle;
        });
        
        // Золотые спицы (много тонких линий от центра к ободу) - четвертый слой, поверх сегментов
        const numSpokes = 80; // Еще больше спиц для эффекта как на фото
        const spokeInnerRadius = innerRadius;
        const spokeOuterRadius = radius - 10;
        for (let i = 0; i < numSpokes; i++) {
            const spokeAngle = (i * 360 / numSpokes) * Math.PI / 180;
            const x1 = centerX + spokeInnerRadius * Math.cos(spokeAngle);
            const y1 = centerY + spokeInnerRadius * Math.sin(spokeAngle);
            const x2 = centerX + spokeOuterRadius * Math.cos(spokeAngle);
            const y2 = centerY + spokeOuterRadius * Math.sin(spokeAngle);
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#FFD700');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('opacity', '0.8');
            line.setAttribute('stroke-linecap', 'round');
            svg.appendChild(line);
        }
        
        // Золотой центр - самый верхний слой
        const innerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        innerCircle.setAttribute('cx', centerX);
        innerCircle.setAttribute('cy', centerY);
        innerCircle.setAttribute('r', innerRadius);
        innerCircle.setAttribute('fill', '#FFD700');
        innerCircle.setAttribute('stroke', '#FFA500');
        innerCircle.setAttribute('stroke-width', '4');
        innerCircle.setAttribute('opacity', '1');
        svg.appendChild(innerCircle);
    }
    
    // Обновление списка участников
    function updateWheelParticipants() {
        const list = document.getElementById('wheelPlayersList');
        if (!list) return;
        
        if (wheelGame.participants.length === 0) {
            list.innerHTML = '<div class="wheel-players-empty">Нет участников</div>';
            return;
        }
        
        // Всегда пересчитываем проценты перед отображением
        calculateWheelPercentages();
        
        list.innerHTML = wheelGame.participants.map((p, index) => {
            // Полосочки: максимум 20 полосок (для 100%)
            // Если 1 игрок - все 20 полосок в его цвет (100%)
            // Если 2+ игрока - по проценту (1% = 0.2 полоски, округляем)
            let numBars;
            if (wheelGame.participants.length === 1) {
                // Если только 1 игрок - все 20 полосок
                numBars = 20;
            } else {
                // Если 2+ игрока - пропорционально проценту
                numBars = Math.min(20, Math.max(1, Math.floor(p.percent / 5))); // 5% = 1 полоска
            }
            const bars = Array(numBars).fill(0).map((_, i) => 
                `<div class="wheel-percent-bar" style="background: ${p.color};"></div>`
            ).join('');
            
            return `
                <div class="wheel-player-item" style="border-left-color: ${p.color};">
                    <div class="wheel-player-color" style="background: ${p.color};"></div>
                    <div class="wheel-player-info">
                        <div class="wheel-player-name">${p.name}</div>
                        <div class="wheel-player-bet">${p.amount} ${p.type === 'stars' ? '⭐' : '🎁'}</div>
                        <div class="wheel-player-percent">${p.percent.toFixed(2)}%</div>
                        <div class="wheel-percent-bars">${bars}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Добавление звезд (минимум 100) - поле ввода всегда видно, просто фокусируем
    function wheelAddStars() {
        const input = document.getElementById('wheelBetInput');
        if (input) {
            input.value = '';
            input.placeholder = '100';
            setTimeout(() => {
                input.focus();
            }, 100);
        }
    }
    
    // Подтверждение ставки звездами
    function wheelSubmitBet() {
        const input = document.getElementById('wheelBetInput');
        if (!input) return;
        
        const minBet = 100;
        let amount = parseInt(input.value, 10);
        
        if (isNaN(amount) || amount < minBet) {
            if (tg && tg.showAlert) {
                tg.showAlert(`Минимальная ставка: ${minBet} ⭐`);
            }
            input.focus();
            if (isNaN(amount) || amount <= 0) {
                input.value = String(minBet);
            }
            return;
        }
        
        if (state.balance < amount) {
            if (tg && tg.showAlert) {
                tg.showAlert('Недостаточно звезд');
            }
            return;
        }
        
        // Списываем звезды
        state.balance -= amount;
        updateBalance();
        
        const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
            ? (tg.initDataUnsafe.user.first_name || 'Player')
            : 'Player';
        
        const color = getAvailableColor();
        
        wheelGame.participants.push({
            name: playerName,
            amount: amount,
            type: 'stars',
            color: color
        });
        
        // Очищаем поле ввода (используем уже объявленную переменную input)
        if (input) {
            input.value = '';
        }
        
        updateWheelWheel();
        updateWheelParticipants();
        checkAndStartWheelTimer(); // Проверяем и запускаем таймер если нужно
        
        if (tg && tg.showAlert) {
            tg.showAlert(`Ставка ${amount} ⭐ добавлена!`);
        }
    }
    
    // Добавление подарка
    function wheelAddGift() {
        wheelGame.selectingGift = true;
        switchSection('inventory');
        if (tg && tg.showAlert) {
            tg.showAlert('Выберите подарок из инвентаря');
        }
    }
    
    // Вращение колеса
    function spinWheel() {
        if (wheelGame.isSpinning || wheelGame.participants.length === 0) return;
        
        wheelGame.isSpinning = true;
        const svg = document.getElementById('wheelSvg');
        if (!svg) {
            wheelGame.isSpinning = false;
            return;
        }
        
        calculateWheelPercentages();
        
        // Вычисляем углы для каждого участника
        let currentAngle = 0;
        const segments = wheelGame.participants.map(p => {
            const angle = (p.percent / 100) * 360;
            const segment = {
                participant: p,
                startAngle: currentAngle,
                endAngle: currentAngle + angle,
                centerAngle: currentAngle + (angle / 2)
            };
            currentAngle += angle;
            return segment;
        });
        
        // Случайно выбираем победителя (пропорционально проценту)
        const random = Math.random() * 100;
        let cumulative = 0;
        let winnerSegment = segments[0];
        
        for (let segment of segments) {
            cumulative += segment.participant.percent;
            if (random <= cumulative) {
                winnerSegment = segment;
                break;
            }
        }
        
        // Вычисляем финальный угол (центр сегмента победителя)
        // Учитываем, что SVG уже повернут на -90 градусов
        const finalAngle = 360 - winnerSegment.centerAngle + 90;
        const spinCount = 8 + Math.random() * 4; // 8-12 оборотов для долгой анимации
        const totalRotation = (spinCount * 360) + finalAngle;
        
        // Сбрасываем предыдущую анимацию
        svg.classList.remove('spinning');
        svg.style.transform = 'rotate(-90deg)';
        svg.style.setProperty('--final-rotation', `${totalRotation}deg`);
        
        // Отслеживание изменения цвета под стрелкой для толчка
        const pointer = document.querySelector('.wheel-pointer-top');
        if (pointer && wheelGame.participants.length > 0) {
            let lastSegmentIndex = -1;
            let checkInterval = null;
            
            // Вычисляем границы сегментов для отслеживания
            const segmentBoundaries = [];
            let currentAngle = 0;
            segments.forEach((segment, index) => {
                segmentBoundaries.push({
                    startAngle: currentAngle,
                    endAngle: currentAngle + (segment.endAngle - segment.startAngle),
                    color: segment.participant.color,
                    index: index
                });
                currentAngle += (segment.endAngle - segment.startAngle);
            });
            
            // Проверяем каждые 30ms какой сегмент под стрелкой
            checkInterval = setInterval(() => {
                // Получаем текущий угол поворота SVG
                const computedStyle = window.getComputedStyle(svg);
                const matrix = computedStyle.transform;
                let rotation = -90;
                
                if (matrix && matrix !== 'none') {
                    const values = matrix.split('(')[1].split(')')[0].split(',');
                    const a = parseFloat(values[0]);
                    const b = parseFloat(values[1]);
                    rotation = Math.atan2(b, a) * (180 / Math.PI);
                }
                
                // Стрелка указывает на 90 градусов от текущего поворота (вверху)
                // Учитываем начальный поворот -90 градусов
                const pointerAngle = (rotation + 90 + 360) % 360;
                
                // Находим текущий сегмент
                let currentSegmentIndex = -1;
                for (let i = 0; i < segmentBoundaries.length; i++) {
                    const boundary = segmentBoundaries[i];
                    const start = boundary.startAngle % 360;
                    const end = boundary.endAngle % 360;
                    
                    if (start <= end) {
                        if (pointerAngle >= start && pointerAngle < end) {
                            currentSegmentIndex = i;
                            break;
                        }
                    } else {
                        // Сегмент пересекает 0
                        if (pointerAngle >= start || pointerAngle < end) {
                            currentSegmentIndex = i;
                            break;
                        }
                    }
                }
                
                // Если сегмент изменился - делаем толчок
                if (currentSegmentIndex !== -1 && currentSegmentIndex !== lastSegmentIndex) {
                    pointer.classList.add('pushing');
        setTimeout(() => {
                        pointer.classList.remove('pushing');
                    }, 300);
                    lastSegmentIndex = currentSegmentIndex;
                }
            }, 30);
            
            // Останавливаем проверку после завершения анимации
            setTimeout(() => {
                if (checkInterval) {
                    clearInterval(checkInterval);
                }
            }, 10000);
        }
        
        // Небольшая задержка перед запуском новой анимации для правильного сброса
        void svg.offsetHeight; // Принудительный reflow
        setTimeout(() => {
            svg.classList.add('spinning');
        }, 50);
        
        // После завершения анимации (10 секунд)
        setTimeout(() => {
            wheelGame.isSpinning = false;
            
            const winner = winnerSegment.participant;
            const totalPot = wheelGame.participants.reduce((sum, p) => sum + p.amount, 0);
            
            // Победитель получает все ставки
            if (winner.type === 'stars') {
                state.balance += totalPot;
                updateBalance();
            } else if (winner.type === 'gift' && winner.gift) {
                // Возвращаем подарок победителя
                const updatedPrice = getGiftPrice(winner.gift.name);
                winner.gift.price = updatedPrice;
                winner.gift.rarity = getGiftInfo(winner.gift.name).rarity;
                state.inventory.push(winner.gift);
                localStorage.setItem('inventory', JSON.stringify(state.inventory));
                updateInventory();
                
                // Добавляем звезды от всех проигравших
                const starsFromLosers = wheelGame.participants
                    .filter(p => p !== winner)
                    .reduce((sum, p) => {
                        if (p.type === 'stars') return sum + p.amount;
                        if (p.type === 'gift') return sum + (p.giftValue || getGiftBaseValue(p.gift));
                        return sum;
                    }, 0);
                
                if (starsFromLosers > 0) {
                    state.balance += starsFromLosers;
                    updateBalance();
                }
            }
            
            // Освобождаем цвета
            wheelGame.participants.forEach(p => releaseColor(p.color));
            
            // Очищаем участников
            wheelGame.participants = [];
            
            // Показываем результат с победителем и суммой выигрыша
            const winnerName = winner.name || 'Игрок';
            const winnerMessage = `🏆 Победитель: ${winnerName}\n💰 Выигрыш: ${totalPot} ⭐`;
            
            if (tg && tg.showAlert) {
                tg.showAlert(winnerMessage);
            } else {
                alert(winnerMessage);
            }
            
            // Обновляем колесо и список
            updateWheelWheel();
            updateWheelParticipants();
            
            // Через 3 секунды обновляем для нового раунда
            setTimeout(() => {
                wheelGame.participants = [];
                wheelGame.usedColors.clear();
                updateWheelWheel();
                updateWheelParticipants();
            }, 3000);
            
            // Через 3 секунды после показа результата очищаем список и колесо
            setTimeout(() => {
                // Очищаем участников
                wheelGame.participants = [];
                // Освобождаем все цвета
                wheelGame.usedColors.clear();
                // Обновляем колесо (оно станет пустым)
                updateWheelWheel();
                // Обновляем список (он станет пустым)
                updateWheelParticipants();
            }, 3000);
            
            // Перезапускаем таймер только если есть 2+ участника
            wheelGame.countdown = 15;
            checkAndStartWheelTimer();
        }, 5000); // 5 секунд для долгой анимации
    }

    // Инициализация Dice-игры (запуск таймера)
    function initDiceGame() {
        // Если уже работает — не запускаем повторно
        if (diceGame.countdownInterval) return;

        startDiceRound();
    }

    function startDiceRound() {
        diceGame.countdown = 15;
        updateDiceCountdown();

        // Запускаем таймер 15..1
        if (diceGame.countdownInterval) {
            clearInterval(diceGame.countdownInterval);
        }
        diceGame.countdownInterval = setInterval(() => {
            diceGame.countdown--;
            updateDiceCountdown();

            if (diceGame.countdown <= 0) {
                clearInterval(diceGame.countdownInterval);
                diceGame.countdownInterval = null;
                rollDice();
                // Через 1 секунду запускаем новый раунд
                setTimeout(startDiceRound, 1000);
            }
        }, 1000);
    }

    function updateDiceCountdown() {
        const el = document.getElementById('diceCountdown');
        if (!el) return;
        el.textContent = diceGame.countdown;
    }

    // Бросок кубика
    function rollDice() {
        const cubeEl = document.querySelector('.dice-cube');
        if (cubeEl) {
            cubeEl.classList.add('rolling');
        }

        // Распределение шансов: 1 — реже, 2-4 чаще, 5-6 средне
        const r = Math.random();
        let value;
        if (r < 0.10) {
            value = 1;
        } else if (r < 0.55) {
            // 2–4
            value = 2 + Math.floor(Math.random() * 3); // 2,3,4
        } else {
            // 5–6
            value = 5 + Math.floor(Math.random() * 2); // 5,6
        }

        // Не даём два раза подряд одно и то же значение
        if (value === diceGame.currentValue) {
            value = ((value % 6) + 1);
        }

        // Небольшая задержка, чтобы показать анимацию
        setTimeout(() => {
            diceGame.currentValue = value;

            const valueEl = document.getElementById('diceCurrentValue');
            if (valueEl) {
                valueEl.textContent = String(value);
            }

            if (cubeEl) {
                cubeEl.classList.remove('rolling');
            }

            // Расчитываем выигрыши
            resolveDiceBets(value);
        }, 550);
    }

    // Обработка ставок
    function resolveDiceBets(rolled) {
        if (!diceGame.participants.length) return;

        diceGame.participants.forEach(p => {
            // Проигрыш — просто пропускаем, звезды уже списаны, подарок уже убран из инвентаря
            if (p.chosen !== rolled) {
                return;
            }

            let multiplier = 1.5;
            if (rolled === 1) {
                multiplier = 3;
            } else if (rolled === 5 || rolled === 6) {
                multiplier = 2;
            } // 2-4 уже 1.5

            const totalReturn = Math.floor(p.amount * multiplier); // общая сумма, включая ставку

            if (p.type === 'stars') {
                // Ставка уже списана ранее, возвращаем всю сумму с множителем
                state.balance += totalReturn;
                updateBalance();
            } else if (p.type === 'gift' && p.gift) {
                // При выигрыше возвращаем подарок в инвентарь с обновлённой ценой
                const updatedPrice = getGiftPrice(p.gift.name);
                p.gift.price = updatedPrice;
                p.gift.rarity = getGiftInfo(p.gift.name).rarity;
                state.inventory.push(p.gift);
                localStorage.setItem('inventory', JSON.stringify(state.inventory));
                updateInventory();

                // Дополнительно выдаём звезды на основе стоимости подарка
                const baseValue = p.giftValue || getGiftBaseValue(p.gift);
                const bonusStars = Math.floor(baseValue * (multiplier - 1)); // "поверх" стоимости подарка

                if (bonusStars > 0) {
                    state.balance += bonusStars;
                    updateBalance();
                }
            }
        });

        // Очищаем список участников после раунда
        diceGame.participants = [];
        updateDiceParticipants();
    }

    function updateDiceParticipants() {
        const list = document.getElementById('diceParticipantsList');
        if (!list) return;

        if (!diceGame.participants.length) {
            list.innerHTML = '<div class="dice-participants-empty">No bets yet</div>';
            return;
        }

        list.innerHTML = diceGame.participants.map(p => `
            <div class="dice-participant-row">
                <span class="dice-participant-name">${p.name}</span>
                <span class="dice-participant-bet">${p.amount} ${p.type === 'stars' ? '⭐' : '🎁'}</span>
            </div>
        `).join('');
    }

    // Добавление ставки звёздами (минимум 100)
    function diceAddStars() {
        const minBet = 100;
        const input = document.getElementById('diceBetInput');
        if (!input) {
            console.error('diceBetInput not found');
            return;
        }

        let amount = parseInt(input.value, 10);
        if (isNaN(amount) || amount < minBet) {
            // Подсказываем и даём возможность сразу ввести корректную сумму
            if (tg && tg.showAlert) {
                tg.showAlert(`Введите сумму (минимум ${minBet} ⭐)`);
            } else {
                alert(`Введите сумму (минимум ${minBet} ⭐)`);
            }
            input.focus();
            if (isNaN(amount) || amount <= 0) {
                input.value = String(minBet);
            }
            return;
        }

        if (state.balance < amount) {
            if (tg && tg.showAlert) {
                tg.showAlert('Недостаточно звезд для этой ставки');
            } else {
                alert('Недостаточно звезд для этой ставки');
            }
            return;
        }

        // Списываем звёзды
        state.balance -= amount;
        updateBalance();
        localStorage.setItem('balance', state.balance.toString());
        
        const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
            ? (tg.initDataUnsafe.user.first_name || 'Player')
            : 'Player';
        
        const userId = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
            ? tg.initDataUnsafe.user.id
            : null;
        
        // Добавляем участника
        diceGame.participants.push({
            name: playerName,
            amount: amount,
            type: 'stars',
            chosen: diceGame.chosenNumber,
            userId: userId
        });
        
        // Очищаем поле ввода
        input.value = '';
        
        // Обновляем список участников
        updateDiceParticipants();
        
        console.log('Участник добавлен:', { name: playerName, amount, type: 'stars' });
        console.log('Всего участников:', diceGame.participants.length);
        
        if (tg && tg.showAlert) {
            tg.showAlert(`Ставка ${amount} ⭐ добавлена!`);
        } else {
            console.log(`Ставка ${amount} ⭐ добавлена!`);
        }
    }

    // Добавление подарка как ставки
    function diceAddGift() {
        // Проверяем, есть ли подарки в инвентаре
        if (state.inventory.length === 0) {
            if (tg && tg.showAlert) {
                tg.showAlert('Ваш инвентарь пуст!');
            } else {
                alert('Ваш инвентарь пуст!');
            }
            return;
        }
        
        // Открываем инвентарь, чтобы пользователь выбрал подарок
        diceGame.selectingGift = true;
        switchSection('inventory');
        if (tg && tg.showAlert) {
            tg.showAlert('Выберите подарок из инвентаря для ставки в Dice.');
        } else {
            console.log('Выберите подарок из инвентаря для ставки в Dice.');
        }
    }
    
    // ========== ARENA GAME FUNCTIONS ==========
    
    // Инициализация MineBoom игры
    function initMineBoomGame() {
        createMineBoomBlocks();
    }
    
    // Создание блоков на поле
    function createMineBoomBlocks() {
        const container = document.getElementById('mineboomBlocksContainer');
        if (!container) return;
        
        // Очищаем контейнер
        container.innerHTML = '';
        mineboomGame.blocks = [];
        
        // Выбираем 3 случайных типа блоков
        const blockTypeKeys = Object.keys(mineboomGame.blockTypes);
        const selectedTypes = [];
        
        for (let i = 0; i < 3; i++) {
            const randomType = blockTypeKeys[Math.floor(Math.random() * blockTypeKeys.length)];
            selectedTypes.push(randomType);
        }
        
        // Создаем блоки
        selectedTypes.forEach((blockType, index) => {
            const blockData = mineboomGame.blockTypes[blockType];
            const blockElement = document.createElement('div');
            blockElement.className = 'mineboom-block';
            blockElement.dataset.blockType = blockType;
            blockElement.dataset.price = blockData.price;
            
            // Проверяем, есть ли изображение для блока
            const hasImage = blockData.image && blockData.image.length > 0;
            const blockStyle = hasImage 
                ? `background-image: url('${blockData.image}'); background-size: cover; background-position: center center; background-repeat: no-repeat; object-fit: cover; border: none !important; outline: none !important; box-shadow: none !important;`
                : 'border: none !important; outline: none !important; box-shadow: none !important;';
            
            blockElement.innerHTML = `
                <div class="mineboom-block-tnt-hanging" id="tnt-hanging-${index}">
                    <div class="mineboom-block-tnt" data-block-type="${blockType}" data-price="${blockData.price}">
                        <div class="mineboom-tnt-price">${blockData.price}</div>
                    </div>
                </div>
                <div class="mineboom-block-base mineboom-block-${blockType}" style="${blockStyle}"></div>
            `;
            
            // Клик на TNT
            const tntElement = blockElement.querySelector('.mineboom-block-tnt');
            if (tntElement) {
                tntElement.onclick = (event) => {
                    event.stopPropagation(); // Предотвращаем всплытие события на родительский блок
                    selectMineBoomBlock(blockType, blockElement);
                };
            }
            
            // Убираем клик с блока
            blockElement.onclick = null;
            blockElement.style.cursor = 'default';
            
            container.appendChild(blockElement);
            
            mineboomGame.blocks.push({
                type: blockType,
                price: blockData.price,
                element: blockElement
            });
        });
    }
    
    // Выбор блока
    function selectMineBoomBlock(blockType, blockElement) {
        if (mineboomGame.isAnimating) return;
        
        const price = parseInt(blockElement.dataset.price);
        
        // Проверяем баланс
        if (state.balance < price) {
            if (tg && tg.showAlert) {
                tg.showAlert(`Недостаточно звезд! Нужно: ${price} ⭐`);
            } else {
                alert(`Недостаточно звезд! Нужно: ${price} ⭐`);
            }
            return;
        }
        
        // Списываем звезды
        state.balance -= price;
        updateBalance();
        localStorage.setItem('balance', state.balance.toString());
        
        // Убираем выделение с других блоков
        document.querySelectorAll('.mineboom-block').forEach(block => {
            block.classList.remove('selected');
        });
        
        // Выделяем выбранный блок
        blockElement.classList.add('selected');
        mineboomGame.selectedBlock = { type: blockType, element: blockElement, price: price };
        
        // Запускаем анимацию падения динамита
        dropDynamite(blockElement);
    }
    
    // Анимация падения динамита
    function dropDynamite(blockElement) {
        if (mineboomGame.isAnimating) return;
        mineboomGame.isAnimating = true;
        
        const containerRect = blockElement.closest('.mineboom-field').getBoundingClientRect();
        const tntElement = blockElement.querySelector('.mineboom-block-tnt');
        const blockBase = blockElement.querySelector('.mineboom-block-base');
        
        if (!tntElement || !blockBase) return;
        
        // Клонируем TNT блок для падения
        const fallingTNT = tntElement.cloneNode(true);
        fallingTNT.style.position = 'absolute';
        fallingTNT.style.width = '90px';
        fallingTNT.style.height = '90px';
        fallingTNT.style.margin = '0';
        fallingTNT.style.zIndex = '100';
        fallingTNT.id = 'falling-tnt-' + Date.now();
        
        const field = blockElement.closest('.mineboom-field');
        field.appendChild(fallingTNT);
        
        // Позиционируем TNT от текущей позиции TNT на блоке
        const tntRect = tntElement.getBoundingClientRect();
        const blockBaseRect = blockBase.getBoundingClientRect();
        const startX = tntRect.left - containerRect.left;
        const startY = tntRect.top - containerRect.top;
        // TNT должен падать прямо на блок и закрывать его полностью
        const endY = blockBaseRect.top - containerRect.top; // Точное попадание на блок
        
        fallingTNT.style.left = `${startX}px`;
        fallingTNT.style.top = `${startY}px`;
        fallingTNT.style.display = 'block';
        
        // Скрываем оригинальный TNT
        const tntHanging = blockElement.querySelector('.mineboom-block-tnt-hanging');
        if (tntHanging) {
            tntHanging.style.opacity = '0';
        }
        tntElement.style.opacity = '0';
        
        // Анимация падения
        setTimeout(() => {
            fallingTNT.style.transition = 'top 1s ease-in';
            fallingTNT.style.top = `${endY}px`;
            
            // После падения - мигание и взрыв
            setTimeout(() => {
                // Мигание TNT (белый-красный)
                let blinkCount = 0;
                const blinkInterval = setInterval(() => {
                    if (blinkCount >= 6) {
                        clearInterval(blinkInterval);
                        // Взрыв TNT
                        explodeBlock(blockElement, fallingTNT);
                    } else {
                        fallingTNT.style.filter = blinkCount % 2 === 0 
                            ? 'brightness(2) saturate(0)' // Белый
                            : 'brightness(1.2) saturate(1.5)'; // Красный
                        blinkCount++;
                    }
                }, 200);
            }, 1000);
        }, 100);
    }
    
    // Взрыв блока и выдача приза
    function explodeBlock(blockElement, fallingTNT) {
        const blockType = blockElement.dataset.blockType;
        const blockData = mineboomGame.blockTypes[blockType];
        const price = parseInt(blockElement.dataset.price);
        
        // Удаляем падающий TNT
        if (fallingTNT && fallingTNT.parentNode) {
            fallingTNT.remove();
        }
        
        // Анимация взрыва
        blockElement.classList.add('exploded');
        
        const field = blockElement.closest('.mineboom-field');
        
        // Создаем эффект взрыва
        const explosion = document.createElement('div');
        explosion.className = 'mineboom-explosion';
        explosion.innerHTML = '💥';
        const explosionBlockRect = blockElement.getBoundingClientRect();
        const explosionContainerRect = field.getBoundingClientRect();
        explosion.style.left = `${explosionBlockRect.left - explosionContainerRect.left + explosionBlockRect.width / 2 - 30}px`;
        explosion.style.top = `${explosionBlockRect.top - explosionContainerRect.top + explosionBlockRect.height / 2 - 30}px`;
        field.appendChild(explosion);
        
        setTimeout(() => {
            explosion.remove();
        }, 500);
        
        // Выбираем подарок в зависимости от цены блока
        const allRewards = window.allRewardsList || [];
        let availableRewards = [];
        
        if (price >= 5000) {
            // Бедрок - только мифические
            availableRewards = allRewards.filter(r => getGiftInfo(r.name).rarity === 'mythic');
        } else if (price >= 2500) {
            // Лава, TNT - легендарные и мифические
            availableRewards = allRewards.filter(r => ['legendary', 'mythic'].includes(getGiftInfo(r.name).rarity));
        } else if (price >= 1500) {
            // Эндерняк, алмазный блок - эпические и выше
            availableRewards = allRewards.filter(r => ['epic', 'legendary', 'mythic'].includes(getGiftInfo(r.name).rarity));
        } else if (price >= 1000) {
            // Алмазная руда - редкие и выше
            availableRewards = allRewards.filter(r => ['rare', 'epic', 'legendary', 'mythic'].includes(getGiftInfo(r.name).rarity));
        } else if (price >= 500) {
            // Железная руда - необычные и выше
            availableRewards = allRewards.filter(r => ['uncommon', 'rare', 'epic', 'legendary', 'mythic'].includes(getGiftInfo(r.name).rarity));
        } else {
            // Остальные - все подарки
            availableRewards = allRewards;
        }
        
        if (availableRewards.length === 0) {
            availableRewards = allRewards; // Fallback
        }
        
        // Случайный подарок
        const selectedReward = availableRewards[Math.floor(Math.random() * availableRewards.length)];
        
        // Добавляем в инвентарь
        const giftPrice = getGiftPrice(selectedReward.name);
        state.inventory.push({
            icon: selectedReward.icon,
            name: selectedReward.name,
            case: 'mineboom',
            price: giftPrice,
            rarity: getGiftInfo(selectedReward.name).rarity,
            uniqueId: `${selectedReward.icon}_${selectedReward.name}_${Date.now()}_${Math.random()}`
        });
        localStorage.setItem('inventory', JSON.stringify(state.inventory));
        updateInventory();
        
        // Анимация вылета подарка
        const gift = document.createElement('div');
        gift.className = 'mineboom-gift-flying';
        gift.innerHTML = selectedReward.icon || '🎁';
        gift.textContent = selectedReward.icon || '🎁';
        const giftBlockRect = blockElement.getBoundingClientRect();
        const giftContainerRect = field.getBoundingClientRect();
        gift.style.left = `${giftBlockRect.left - giftContainerRect.left + giftBlockRect.width / 2 - 20}px`;
        gift.style.top = `${giftBlockRect.top - giftContainerRect.top + giftBlockRect.height / 2 - 20}px`;
        field.appendChild(gift);
        
        // Анимация полета подарка вверх
        setTimeout(() => {
            gift.style.transition = 'all 1s ease-out';
            gift.style.top = `${-100}px`;
            gift.style.transform = 'scale(1.5)';
            gift.style.opacity = '0';
        }, 100);
        
        // Показываем результат с победителем и суммой выигрыша
        const winnerName = 'Вы';
        const winAmount = giftPrice;
        const winnerMessage = `🏆 Победитель: ${winnerName}\n💰 Выигрыш: ${winAmount} ⭐\n🎁 Подарок: ${selectedReward.name}`;
        
        setTimeout(() => {
            if (tg && tg.showAlert) {
                tg.showAlert(winnerMessage);
            } else {
                alert(winnerMessage);
            }
            gift.remove();
        }, 500);
        
        // Через 3 секунды заменяем все блоки
        setTimeout(() => {
            // Удаляем все блоки
            const container = document.getElementById('mineboomBlocksContainer');
            if (container) {
                container.innerHTML = '';
            }
            mineboomGame.blocks = [];
            mineboomGame.isAnimating = false;
            mineboomGame.selectedBlock = null;
            // Создаем новые блоки
            createMineBoomBlocks();
        }, 3000);
    }
    
    // Показать результат
    function showMineBoomResult(reward) {
        const result = document.getElementById('mineboomResult');
        const resultIcon = document.getElementById('mineboomResultIcon');
        const resultText = document.getElementById('mineboomResultText');
        
        if (result && resultIcon && resultText) {
            resultIcon.textContent = reward.icon || '🎁';
            resultText.textContent = `Вы получили: ${reward.name}`;
            result.style.display = 'block';
            
            setTimeout(() => {
                result.style.display = 'none';
            }, 2000);
        }
    }
    
    function startMineBoomRound() {
        // Проверяем, есть ли минимум 2 участника
        if (mineboomGame.participants.length < 2) {
            // Если участников меньше 2, просто обновляем таймер, но не запускаем игру
            mineboomGame.countdown = 15;
            updateMineBoomCountdown();
            
            if (mineboomGame.countdownInterval) {
                clearInterval(mineboomGame.countdownInterval);
            }
            mineboomGame.countdownInterval = setInterval(() => {
                mineboomGame.countdown--;
                updateMineBoomCountdown();
                
                // Если появилось 2+ участника, запускаем игру
                if (mineboomGame.countdown <= 0) {
                    clearInterval(mineboomGame.countdownInterval);
                    mineboomGame.countdownInterval = null;
                    
                    if (mineboomGame.participants.length >= 2) {
                        runMineBoomGame();
                    } else {
                        // Если участников всё ещё меньше 2, просто перезапускаем таймер
                        setTimeout(startMineBoomRound, 1000);
                    }
                }
            }, 1000);
            return;
        }
        
        // Если участников достаточно, запускаем игру
        mineboomGame.countdown = 15;
        updateMineBoomCountdown();
        mineboomGame.isRunning = true;
        
        if (mineboomGame.countdownInterval) {
            clearInterval(mineboomGame.countdownInterval);
        }
        mineboomGame.countdownInterval = setInterval(() => {
            mineboomGame.countdown--;
            updateMineBoomCountdown();
            
            if (mineboomGame.countdown <= 0) {
                clearInterval(mineboomGame.countdownInterval);
                mineboomGame.countdownInterval = null;
                runMineBoomGame();
                // Через 1 секунда запускаем новый раунд
                setTimeout(startMineBoomRound, 1000);
            }
        }, 1000);
    }
    
    function updateMineBoomCountdown() {
        const el = document.getElementById('mineboomCountdown');
        if (!el) return;
        el.textContent = mineboomGame.countdown;
        el.style.display = 'none'; // Всегда скрыт
        
        // Если участников меньше 2, показываем предупреждение
        if (mineboomGame.participants.length < 2) {
            el.style.color = '#ffd700';
            el.style.opacity = '0.7';
        } else {
            el.style.color = '#ffffff';
            el.style.opacity = '1';
        }
    }
    
    // Выбор TNT блока
    function mineboomSelectTNT(stars) {
        if (mineboomGame.isRunning) {
            if (tg && tg.showAlert) {
                tg.showAlert('Game is already running!');
            }
            return;
        }
        
        mineboomGame.selectedTNT = stars;
        
        // Подсвечиваем выбранный блок
        document.querySelectorAll('.mineboom-tnt-block').forEach(block => {
            block.classList.remove('selected');
            if (parseInt(block.dataset.stars) === stars) {
                block.classList.add('selected');
            }
        });
        
        // Обновляем информацию
        const infoEl = document.getElementById('mineboomInfo');
        if (infoEl) {
            infoEl.textContent = `Selected TNT block: ${stars} ⭐`;
        }
    }
    
    // Запуск игры MineBoom (взрыв TNT блока)
    function runMineBoomGame() {
        if (mineboomGame.participants.length < 2) {
            return; // Не запускаем, если участников меньше 2
        }
        
        // Случайным образом выбираем взорвавшийся TNT блок (3, 5 или 10)
        const tntBlocks = [3, 5, 10];
        const explodedTNT = tntBlocks[Math.floor(Math.random() * tntBlocks.length)];
        
        // Находим всех участников, выбравших взорвавшийся блок
        const winners = mineboomGame.participants.filter(p => p.tntBlock === explodedTNT);
        const losers = mineboomGame.participants.filter(p => p.tntBlock !== explodedTNT);
        
        // Анимация взрыва выбранного блока
        const explodedBlock = document.querySelector(`.mineboom-tnt-block[data-stars="${explodedTNT}"]`);
        if (explodedBlock) {
            explodedBlock.classList.add('exploded');
            setTimeout(() => {
                explodedBlock.classList.remove('exploded');
            }, 2000);
        }
        
        // Обновляем информацию
        const infoEl = document.getElementById('mineboomInfo');
        if (infoEl) {
            infoEl.textContent = `💣 TNT ${explodedTNT} ⭐ exploded!`;
        }
        
        if (winners.length > 0) {
            // Победители делят все ставки проигравших
            const totalPot = losers.reduce((sum, part) => {
                if (part.type === 'stars') return sum + part.amount;
                if (part.type === 'gift') return sum + (part.giftValue || getGiftBaseValue(part.gift));
                return sum;
            }, 0);
            
            const winningsPerWinner = Math.floor(totalPot / winners.length);
            
            winners.forEach(winner => {
                if (winner.type === 'stars') {
                    state.balance += winningsPerWinner;
                    updateBalance();
                } else if (winner.type === 'gift' && winner.gift) {
                    // Возвращаем подарок победителя
                    const updatedPrice = getGiftPrice(winner.gift.name);
                    winner.gift.price = updatedPrice;
                    winner.gift.rarity = getGiftInfo(winner.gift.name).rarity;
                    state.inventory.push(winner.gift);
                    localStorage.setItem('inventory', JSON.stringify(state.inventory));
                    updateInventory();
                    
                    if (winningsPerWinner > 0) {
                        state.balance += winningsPerWinner;
                        updateBalance();
                    }
                }
            });
            
            if (tg && tg.showAlert) {
                tg.showAlert(`💣 TNT ${explodedTNT} ⭐ exploded! ${winners.length} winner(s) got ${winningsPerWinner} ⭐ each!`);
            }
        } else {
            // Никто не выиграл - все проиграли
            if (tg && tg.showAlert) {
                tg.showAlert(`💣 TNT ${explodedTNT} ⭐ exploded! No winners this round.`);
            }
        }
        
        // Очищаем список участников после раунда
        mineboomGame.participants = [];
        mineboomGame.selectedTNT = null;
        updateMineBoomParticipants();
        mineboomGame.isRunning = false;
        
        // Сбрасываем выделение блоков
        document.querySelectorAll('.mineboom-tnt-block').forEach(block => {
            block.classList.remove('selected');
        });
    }
    
    function updateMineBoomParticipants() {
        const list = document.getElementById('mineboomParticipantsList');
        if (!list) return;
        
        if (!mineboomGame.participants.length) {
            list.innerHTML = '<div class="dice-participants-empty">No bets yet (min 2 players)</div>';
            return;
        }
        
        list.innerHTML = mineboomGame.participants.map(p => `
            <div class="dice-participant-row">
                <span class="dice-participant-name">${p.name}</span>
                <span class="dice-participant-bet">${p.amount} ${p.type === 'stars' ? '⭐' : '🎁'} → TNT ${p.tntBlock} ⭐</span>
            </div>
        `).join('');
    }
    
    // Добавление ставки звёздами в MineBoom (минимум 100)
    function mineboomAddStars() {
        const minBet = 100;
        const input = document.getElementById('mineboomBetInput');
        if (!input) return;
        
        // Проверяем, выбран ли TNT блок
        if (!mineboomGame.selectedTNT) {
            if (tg && tg.showAlert) {
                tg.showAlert('Please select a TNT block first!');
            }
            return;
        }
        
        let amount = parseInt(input.value, 10);
        if (isNaN(amount) || amount < minBet) {
            if (tg && tg.showAlert) {
                tg.showAlert(`Enter stars amount (min ${minBet})`);
            }
            input.focus();
            if (isNaN(amount) || amount <= 0) {
                input.value = String(minBet);
            }
            return;
        }
        
        if (state.balance < amount) {
            if (tg && tg.showAlert) {
                tg.showAlert('Not enough stars for this bet');
            }
            return;
        }
        
        // Списываем звёзды
        state.balance -= amount;
        updateBalance();
        
        const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
            ? (tg.initDataUnsafe.user.first_name || 'Player')
            : 'Player';
        
        mineboomGame.participants.push({
            name: playerName,
            amount: amount,
            type: 'stars',
            tntBlock: mineboomGame.selectedTNT
        });
        
        updateMineBoomParticipants();
        
        // Очищаем выбор TNT для следующей ставки
        mineboomGame.selectedTNT = null;
        document.querySelectorAll('.mineboom-tnt-block').forEach(block => {
            block.classList.remove('selected');
        });
        
        // Если это второй участник и игра не запущена, запускаем таймер
        if (mineboomGame.participants.length === 2 && !mineboomGame.isRunning && !mineboomGame.countdownInterval) {
            startMineBoomRound();
        }
    }
    
    // Добавление подарка как ставки в MineBoom
    function mineboomAddGift() {
        // Проверяем, выбран ли TNT блок
        if (!mineboomGame.selectedTNT) {
            if (tg && tg.showAlert) {
                tg.showAlert('Please select a TNT block first!');
            }
            return;
        }
        
        // Открываем инвентарь, чтобы пользователь выбрал подарок
        mineboomGame.selectingGift = true;
        switchSection('inventory');
        if (tg && tg.showAlert) {
            tg.showAlert('Choose a gift in inventory to use in MineBoom.');
        }
    }

    // Выбор числа 1–6 пользователем
    function initDiceChooseHandlers() {
        if (diceGame.chooseHandlersInited) return;
        const container = document.getElementById('diceChooseButtons');
        if (!container) return;

        container.addEventListener('click', (e) => {
            const btn = e.target.closest('.dice-choose-btn');
            if (!btn) return;

            const value = parseInt(btn.dataset.value, 10);
            if (!value) return;

            diceGame.chosenNumber = value;

            container.querySelectorAll('.dice-choose-btn').forEach(b => {
                b.classList.toggle('active', b === btn);
            });
        });

        diceGame.chooseHandlersInited = true;
    }

    // Переключение режима битв (UI + состояние)
    function switchBattlesMode(mode) {
        battlesGame.currentMode = mode;
        
        // Подсветка карточек-меню (работает в основном экране битв)
        const cards = document.querySelectorAll('.battle-card');
        cards.forEach(card => {
            if (card.dataset.mode === mode) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Переход в отдельный экран мини-игры
        if (typeof switchSection === 'function') {
            if (mode === 'dice') {
                switchSection('battlesDice');
            } else if (mode === 'mineboom') {
                switchSection('battlesMineBoom');
                // Инициализируем MineBoom при переходе
                setTimeout(() => {
                    initMineBoomGame();
                }, 100);
            } else if (mode === 'wheel') {
                switchSection('battlesWheel');
                // Инициализируем колесо при переходе
                setTimeout(() => {
                    initWheelGame();
                }, 100);
            }
        }
        
        // Пока у нас реализован только режим с колесом,
        // остальные режимы (Field, Dice) используют тот же визуал,
        // но в будущем сюда можно добавить разные layout'ы.
        // Здесь можно, например, менять надписи/фон в зависимости от режима.
        // В центре колеса меняем подпись по режиму
        const startText = document.querySelector('.battles-start-text');
        if (startText) {
            if (mode === 'dice') {
                startText.textContent = 'Dice';
            } else if (mode === 'arena') {
                startText.textContent = 'Arena';
            } else if (mode === 'wheel') {
                startText.textContent = 'Wheel';
            }
        }
    }
    
    // Создание круговой диаграммы
    function createBattlesWheel() {
        const svg = document.getElementById('battlesWheelSvg');
        if (!svg) return;
        
        svg.innerHTML = '';
        
        const centerX = 200;
        const centerY = 200;
        const radius = 150;
        let currentAngle = 0;
        
        battlesGame.wheelSegments.forEach((segment, index) => {
            const angle = (segment.percent / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            
            // Вычисляем координаты для дуги
            const startAngleRad = (startAngle * Math.PI) / 180;
            const endAngleRad = (endAngle * Math.PI) / 180;
            
            const x1 = centerX + radius * Math.cos(startAngleRad);
            const y1 = centerY + radius * Math.sin(startAngleRad);
            const x2 = centerX + radius * Math.cos(endAngleRad);
            const y2 = centerY + radius * Math.sin(endAngleRad);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            // Создаем путь для сегмента
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            path.setAttribute('d', d);
            path.setAttribute('fill', segment.color);
            path.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('opacity', '0.8');
            path.style.cursor = 'pointer';
            
            // Добавляем текст с процентом
            const textAngle = (startAngle + endAngle) / 2;
            const textAngleRad = (textAngle * Math.PI) / 180;
            const textRadius = radius * 0.7;
            const textX = centerX + textRadius * Math.cos(textAngleRad);
            const textY = centerY + textRadius * Math.sin(textAngleRad);
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', textX);
            text.setAttribute('y', textY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('fill', '#ffffff');
            text.setAttribute('font-size', '24');
            text.setAttribute('font-weight', '700');
            text.textContent = segment.label;
            
            // Добавляем иконку
            const iconText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            const iconRadius = radius * 0.4;
            const iconX = centerX + iconRadius * Math.cos(textAngleRad);
            const iconY = centerY + iconRadius * Math.sin(textAngleRad);
            iconText.setAttribute('x', iconX);
            iconText.setAttribute('y', iconY);
            iconText.setAttribute('text-anchor', 'middle');
            iconText.setAttribute('dominant-baseline', 'middle');
            iconText.setAttribute('fill', '#ffffff');
            iconText.setAttribute('font-size', '32');
            iconText.textContent = segment.icon;
            
            svg.appendChild(path);
            svg.appendChild(text);
            svg.appendChild(iconText);
            
            currentAngle = endAngle;
        });
    }
    
    // Таймер обратного отсчета
    function startBattlesCountdown() {
        const countdownEl = document.getElementById('battlesCountdown');
        if (!countdownEl) return;
        
        battlesGame.countdown = 13;
        updateCountdownDisplay();
        
        if (battlesGame.countdownInterval) {
            clearInterval(battlesGame.countdownInterval);
        }
        
        battlesGame.countdownInterval = setInterval(() => {
            battlesGame.countdown--;
            updateCountdownDisplay();
            
            if (battlesGame.countdown <= 0) {
                clearInterval(battlesGame.countdownInterval);
                battlesGame.countdown = 13;
                setTimeout(() => {
                    startBattlesCountdown();
                }, 1000);
            }
        }, 1000);
    }
    
    // Обновление отображения таймера
    function updateCountdownDisplay() {
        const countdownEl = document.getElementById('battlesCountdown');
        if (!countdownEl) return;
        
        const minutes = Math.floor(battlesGame.countdown / 60);
        const seconds = battlesGame.countdown % 60;
        countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    // Обновление статистики
    function updateBattlesStats() {
        // Статистика обновляется автоматически
        // Можно добавить логику обновления bestValue и lastValue
    }
    
    // Обновление списка участников
    function updateBattlesParticipants() {
        const participantsList = document.getElementById('battlesParticipantsList');
        const participantsCount = document.getElementById('battlesParticipantsCount');
        
        if (participantsCount) {
            participantsCount.textContent = battlesGame.participants.length || 4;
        }
        
        if (!participantsList) return;
        
        // Демо участники
        const demoParticipants = [
            { name: 'Игрок 1', bet: 150 },
            { name: 'Игрок 2', bet: 200 },
            { name: 'Игрок 3', bet: 100 },
            { name: 'Игрок 4', bet: 250 }
        ];
        
        participantsList.innerHTML = demoParticipants.map(p => `
            <div class="battles-participant-item">
                <span class="participant-name">${p.name}</span>
                <span class="participant-bet">${p.bet} ⭐</span>
            </div>
        `).join('');
    }
    
    // Обработчики кликов по документу
    document.addEventListener('click', function(e) {
        // Выбор подарка из инвентаря для Dice
        if (diceGame && diceGame.selectingGift) {
            // Игнорируем клики по кнопкам действий инвентаря
            if (e.target.closest('.inventory-item-actions')) {
                return;
            }

            const main = e.target.closest('.inventory-item-main');
            if (main && typeof main.dataset.inventoryIndex !== 'undefined') {
                const idx = parseInt(main.dataset.inventoryIndex, 10);
                const item = state.inventory[idx];
                if (item) {
                    // Удаляем подарок из инвентаря на время ставки
                    state.inventory.splice(idx, 1);
                    localStorage.setItem('inventory', JSON.stringify(state.inventory));
                    updateInventory();

                    const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
                        ? (tg.initDataUnsafe.user.first_name || 'Player')
                        : 'Player';
                    const userId = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
                        ? tg.initDataUnsafe.user.id
                        : null;
                    const giftValue = getGiftBaseValue(item);

                    diceGame.participants.push({
                        name: playerName,
                        amount: giftValue,
                        type: 'gift',
                        chosen: diceGame.chosenNumber,
                        gift: item,
                        giftValue: giftValue,
                        userId: userId
                    });

                    diceGame.selectingGift = false;
                    updateDiceParticipants();
                    console.log('Подарок добавлен в Dice:', { name: playerName, gift: item.name, value: giftValue });
                    console.log('Всего участников:', diceGame.participants.length);
                    // Возвращаемся в Dice
                    switchSection('battlesDice');
                    if (tg && tg.showAlert) {
                        tg.showAlert(`Подарок "${item.name}" добавлен в раунд Dice!`);
                    } else {
                        console.log(`Подарок "${item.name}" добавлен в раунд Dice!`);
                    }
                    return;
                }
            }
        }
        
        // Выбор подарка из инвентаря для Arena
        if (mineboomGame && mineboomGame.selectingGift) {
            // Игнорируем клики по кнопкам действий инвентаря
            if (e.target.closest('.inventory-item-actions')) {
                return;
            }

            const main = e.target.closest('.inventory-item-main');
            if (main && typeof main.dataset.inventoryIndex !== 'undefined') {
                const idx = parseInt(main.dataset.inventoryIndex, 10);
                const item = state.inventory[idx];
                if (item) {
                    // Удаляем подарок из инвентаря на время ставки
                    state.inventory.splice(idx, 1);
                    localStorage.setItem('inventory', JSON.stringify(state.inventory));
                    updateInventory();

                    const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
                        ? (tg.initDataUnsafe.user.first_name || 'Player')
                        : 'Player';
                    const giftValue = getGiftBaseValue(item);

                    // Проверяем, выбран ли TNT блок
                    if (!mineboomGame.selectedTNT) {
                        if (tg && tg.showAlert) {
                            tg.showAlert('Please select a TNT block first!');
                        }
                        mineboomGame.selectingGift = false;
                        return;
                    }
                    
                    mineboomGame.participants.push({
                        name: playerName,
                        amount: giftValue,
                        type: 'gift',
                        tntBlock: mineboomGame.selectedTNT,
                        gift: item,
                        giftValue: giftValue
                    });

                    mineboomGame.selectingGift = false;
                    mineboomGame.selectedTNT = null; // Очищаем выбор TNT
                    updateMineBoomParticipants();
                    // Возвращаемся в MineBoom
                    switchSection('battlesMineBoom');
                    if (tg && tg.showAlert) {
                        tg.showAlert(`Gift "${item.name}" added to MineBoom round.`);
                    }
                    
                    // Сбрасываем выделение TNT блоков
                    document.querySelectorAll('.mineboom-tnt-block').forEach(block => {
                        block.classList.remove('selected');
                    });
                    
                    // Если это второй участник и игра не запущена, запускаем таймер
                    if (mineboomGame.participants.length === 2 && !mineboomGame.isRunning && !mineboomGame.countdownInterval) {
                        startMineBoomRound();
                    }
                    return;
                }
            }
        }
        
        // Выбор подарка из инвентаря для Wheel
        if (wheelGame && wheelGame.selectingGift) {
            // Игнорируем клики по кнопкам действий инвентаря
            if (e.target.closest('.inventory-item-actions')) {
                return;
            }

            const main = e.target.closest('.inventory-item-main');
            if (main && typeof main.dataset.inventoryIndex !== 'undefined') {
                const idx = parseInt(main.dataset.inventoryIndex, 10);
                const item = state.inventory[idx];
                if (item) {
                    // Удаляем подарок из инвентаря на время ставки
                    state.inventory.splice(idx, 1);
                    localStorage.setItem('inventory', JSON.stringify(state.inventory));
                    updateInventory();

                    const playerName = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user)
                        ? (tg.initDataUnsafe.user.first_name || 'Player')
                        : 'Player';
                    const giftValue = getGiftBaseValue(item);
                    const color = getAvailableColor();

                    wheelGame.participants.push({
                        name: playerName,
                        amount: giftValue,
                        type: 'gift',
                        color: color,
                        gift: item,
                        giftValue: giftValue
                    });

                    wheelGame.selectingGift = false;
                    updateWheelWheel();
                    updateWheelParticipants();
                    checkAndStartWheelTimer(); // Проверяем и запускаем таймер если нужно
                    // Возвращаемся в Wheel
                    switchSection('battlesWheel');
                    if (tg && tg.showAlert) {
                        tg.showAlert(`Подарок "${item.name}" добавлен в колесо!`);
                    }
                    return;
                }
            }
        }
        if (e.target.classList.contains('emoji-btn')) {
            const emoji = e.target.getAttribute('data-emoji');
            console.log('Нажата кнопка с эмодзи:', emoji);
            // Здесь можно добавить логику обработки нажатия
        }
        
        if (e.target.classList.contains('quick-buy')) {
            console.log('Быстрая покупка');
            // Здесь можно добавить логику быстрой покупки
        }
        
        if (e.target.classList.contains('add-gifts')) {
            console.log('Добавить подарки');
            // Здесь можно добавить логику добавления подарков
        }
    });

    // Простая инициализация - показываем первую секцию
    function showFirstSection() {
        try {
            const inventorySection = document.getElementById('inventorySection');
            if (inventorySection) {
                // Скрываем все секции
                document.querySelectorAll('.section').forEach(s => {
                    s.classList.remove('active');
                    s.style.display = 'none';
                });
                // Показываем инвентарь
                inventorySection.classList.add('active');
                inventorySection.style.display = 'flex';
            }
        } catch (e) {
            console.error('Ошибка показа секции:', e);
        }
    }
    
    // Инициализация при загрузке
    function initOnLoad() {
        showFirstSection();
        if (typeof updateBalance === 'function') {
            updateBalance();
        }
        if (typeof updateInventory === 'function') {
            updateInventory();
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOnLoad);
    } else {
        setTimeout(initOnLoad, 100);
    }

    // Экспортируем функции битв в глобальную область,
    // чтобы их можно было вызывать из HTML (onclick)
    window.switchBattlesMode = switchBattlesMode;
    window.initBattlesGame = initBattlesGame;
    window.diceAddStars = diceAddStars;
    window.wheelAddStars = wheelAddStars;
    window.wheelAddGift = wheelAddGift;
    window.wheelSubmitBet = wheelSubmitBet;
    window.diceAddGift = diceAddGift;
   window.arenaAddStars = function() {
    console.log("arenaAddStars заглушка");
}
    window.mineboomAddStars = mineboomAddStars;
    window.mineboomAddGift = mineboomAddGift;
    window.mineboomSelectTNT = mineboomSelectTNT;
    window.selectTargetItem = selectTargetItem;
    window.startLadderGameFromInput = startLadderGameFromInput;
    window.stopLadderGame = stopLadderGame;
    window.restartBirdGame = restartBirdGame;
    window.startBirdGameWithPrice = startBirdGameWithPrice;
    window.backToCases = backToCases;
    window.openCasePage = openCasePage;
    window.spinCase = spinCase;
    window.closeWalletModal = closeWalletModal;
    window.closeCaseModal = closeCaseModal;
    window.closeItemSelectModal = closeItemSelectModal;
    window.closeUpgradeResultModal = closeUpgradeResultModal;
    
    // Убеждаемся, что основные функции экспортированы и заменяют заглушки
    if (typeof switchSection === 'function') {
        window._realSwitchSection = switchSection;
        window.switchSection = switchSection;
        console.log('✓ switchSection экспортирована в window (конец файла)');
    } else {
        console.error('✗ switchSection НЕ найдена!');
    }
    if (typeof showWalletMenu === 'function') {
        window._realShowWalletMenu = showWalletMenu;
        window.showWalletMenu = showWalletMenu;
        console.log('✓ showWalletMenu экспортирована в window');
    }
    if (typeof openCasePage === 'function') {
        window._realOpenCasePage = openCasePage;
        window.openCasePage = openCasePage;
        console.log('✓ openCasePage экспортирована в window');
    }
    if (typeof spinCase === 'function') {
        window._realSpinCase = spinCase;
        window.spinCase = spinCase;
        console.log('✓ spinCase экспортирована в window');
    }
    if (typeof backToCases === 'function') {
        window._realBackToCases = backToCases;
        window.backToCases = backToCases;
        console.log('✓ backToCases экспортирована в window');
    }
    if (typeof updateBalance === 'function') {
        window._realUpdateBalance = updateBalance;
        window.updateBalance = updateBalance;
        console.log('✓ updateBalance экспортирована в window');
    }
    if (typeof diceAddStars === 'function') {
        window._realDiceAddStars = diceAddStars;
        window.diceAddStars = diceAddStars;
        console.log('✓ diceAddStars экспортирована в window');
    }
    if (typeof startLadderGameFromInput === 'function') {
        window._realStartLadderGameFromInput = startLadderGameFromInput;
        window.startLadderGameFromInput = startLadderGameFromInput;
        console.log('✓ startLadderGameFromInput экспортирована в window');
    }
    if (typeof wheelAddStars === 'function') {
        window._realWheelAddStars = wheelAddStars;
        window.wheelAddStars = wheelAddStars;
        console.log('✓ wheelAddStars экспортирована в window');
    }
    if (typeof wheelAddGift === 'function') {
        window._realWheelAddGift = wheelAddGift;
        window.wheelAddGift = wheelAddGift;
        console.log('✓ wheelAddGift экспортирована в window');
    }
    if (typeof wheelSubmitBet === 'function') {
        window._realWheelSubmitBet = wheelSubmitBet;
        window.wheelSubmitBet = wheelSubmitBet;
        console.log('✓ wheelSubmitBet экспортирована в window');
    }
    if (typeof mineboomAddStars === 'function') {
        window._realMineboomAddStars = mineboomAddStars;
        window.mineboomAddStars = mineboomAddStars;
        console.log('✓ mineboomAddStars экспортирована в window');
    }
    if (typeof mineboomAddGift === 'function') {
        window._realMineboomAddGift = mineboomAddGift;
        window.mineboomAddGift = mineboomAddGift;
        console.log('✓ mineboomAddGift экспортирована в window');
    }
    if (typeof stopLadderGame === 'function') {
        window._realStopLadderGame = stopLadderGame;
        window.stopLadderGame = stopLadderGame;
        console.log('✓ stopLadderGame экспортирована в window');
    }
    if (typeof switchBattlesMode === 'function') {
        window._realSwitchBattlesMode = switchBattlesMode;
        window.switchBattlesMode = switchBattlesMode;
        console.log('✓ switchBattlesMode экспортирована в window');
    }
    
    // Финальная проверка
    console.log('=== ФИНАЛЬНАЯ ПРОВЕРКА ЭКСПОРТА ===');
    console.log('window.switchSection:', typeof window.switchSection);
    console.log('window.showWalletMenu:', typeof window.showWalletMenu);
    console.log('window.openCasePage:', typeof window.openCasePage);
    console.log('window.updateBalance:', typeof window.updateBalance);
    console.log('window.diceAddStars:', typeof window.diceAddStars);
    console.log('window.startLadderGameFromInput:', typeof window.startLadderGameFromInput);
})();
