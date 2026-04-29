@echo off
chcp 65001 >nul
title Настройка автоматического деплоя через GitHub
color 0E

echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   ⚙️  НАСТРОЙКА АВТОМАТИЧЕСКОГО ДЕПЛОЯ              ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

REM Переходим в корневую папку проекта
cd /d "%~dp0\.."

echo [ШАГ 1] Проверка Git...
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ОШИБКА] Git не установлен!
    echo.
    echo Скачайте и установите Git:
    echo https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)
echo ✓ Git установлен
echo.

echo [ШАГ 2] Проверка Git конфигурации...
git config user.name >nul 2>&1
if %errorlevel% neq 0 (
    echo Git не настроен. Введите ваше имя:
    set /p gitname="Имя: "
    git config --global user.name "%gitname%"
)

git config user.email >nul 2>&1
if %errorlevel% neq 0 (
    echo Git не настроен. Введите ваш email:
    set /p gitemail="Email: "
    git config --global user.email "%gitemail%"
)
echo ✓ Git настроен
echo.

echo [ШАГ 3] Проверка Git репозитория...
if not exist ".git" (
    echo Git репозиторий не найден. Инициализирую...
    git init
    git branch -M main
    echo ✓ Репозиторий создан
) else (
    echo ✓ Репозиторий найден
)
echo.

echo [ШАГ 4] Проверка подключения к GitHub...
git remote -v >nul 2>&1
if %errorlevel% neq 0 (
    echo GitHub не подключен.
    echo.
    echo Создайте репозиторий на GitHub:
    echo 1. Зайдите на https://github.com/new
    echo 2. Создайте новый репозиторий
    echo 3. Скопируйте URL репозитория
    echo.
    set /p githuburl="Вставьте URL репозитория: "
    git remote add origin "%githuburl%"
    echo ✓ GitHub подключен
) else (
    echo ✓ GitHub подключен
    git remote -v
)
echo.

echo [ШАГ 5] Первый коммит (если нужно)...
git add .
git status --short >nul 2>&1
if %errorlevel% equ 0 (
    git commit -m "Initial commit - автоматический деплой настроен"
    echo ✓ Коммит создан
) else (
    echo ℹ️  Нет изменений для коммита
)
echo.

echo [ШАГ 6] Отправка в GitHub...
git push -u origin main 2>nul
if %errorlevel% equ 0 (
    echo ✓ Изменения отправлены в GitHub
) else (
    echo ⚠️  Не удалось отправить (возможно, уже отправлено)
)
echo.

echo ╔═══════════════════════════════════════════════════════╗
echo ║   ✅ НАСТРОЙКА ЗАВЕРШЕНА!                            ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo Теперь:
echo 1. Подключите Netlify к GitHub репозиторию
echo    (https://app.netlify.com/ - Add new site - Import from GitHub)
echo.
echo 2. Запустите АВТОМАТИЧЕСКИЙ_ДЕПЛОЙ_ПРИ_ИЗМЕНЕНИЯХ.bat
echo    и выберите вариант 1 (GitHub)
echo.
echo 3. Редактируйте файлы - всё будет автоматически!
echo.
pause

