#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Автоматический деплой в Telegram мини-приложение
Отслеживает изменения файлов и автоматически деплоит на Netlify
"""

import os
import sys
import time
import subprocess
import hashlib
from pathlib import Path
from datetime import datetime

# Настройки
WEBAPP_DIR = Path(__file__).parent
WATCH_FILES = ['index.html', 'style.css', 'app.js']
NETLIFY_CMD = 'netlify deploy --prod --dir . --message "Auto deploy: {timestamp}"'
GITHUB_MODE = False  # Если True - использует git commit + push вместо netlify

# Определяем режим из аргументов командной строки
if len(sys.argv) > 1 and sys.argv[1] == '--github':
    GITHUB_MODE = True
elif len(sys.argv) > 1 and sys.argv[1] == '--netlify':
    GITHUB_MODE = False

# Кэш хешей файлов
file_hashes = {}

def get_file_hash(filepath):
    """Получить хеш файла"""
    try:
        with open(filepath, 'rb') as f:
            return hashlib.md5(f.read()).hexdigest()
    except:
        return None

def check_changes():
    """Проверить изменения в файлах"""
    changes = []
    for filename in WATCH_FILES:
        filepath = WEBAPP_DIR / filename
        if filepath.exists():
            current_hash = get_file_hash(filepath)
            if filename in file_hashes:
                if file_hashes[filename] != current_hash:
                    changes.append(filename)
                    file_hashes[filename] = current_hash
            else:
                file_hashes[filename] = current_hash
                # Первый запуск - не считаем изменением
    return changes

def deploy_netlify():
    """Деплой через Netlify CLI"""
    print(f"\n[{datetime.now().strftime('%H:%M:%S')}] 🚀 Начинаю деплой на Netlify...")
    try:
        result = subprocess.run(
            ['netlify', 'deploy', '--prod', '--dir', '.', '--message', f'Auto deploy: {datetime.now()}'],
            cwd=WEBAPP_DIR,
            capture_output=True,
            text=True,
            timeout=120
        )
        if result.returncode == 0:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] ✅ Деплой успешен!")
            print("   Изменения появятся в Telegram через 1-2 минуты")
            return True
        else:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Ошибка деплоя:")
            print(result.stderr)
            return False
    except subprocess.TimeoutExpired:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] ⏱️  Таймаут деплоя")
        return False
    except FileNotFoundError:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Netlify CLI не найден!")
        print("   Установите: npm install -g netlify-cli")
        return False
    except Exception as e:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Ошибка: {e}")
        return False

def deploy_github():
    """Деплой через GitHub (git commit + push)"""
    print(f"\n[{datetime.now().strftime('%H:%M:%S')}] 🚀 Начинаю деплой через GitHub...")
    try:
        # Проверяем git
        subprocess.run(['git', '--version'], capture_output=True, check=True)
        
        # Определяем корневую папку проекта (где находится .git)
        project_root = WEBAPP_DIR.parent
        git_dir = project_root / '.git'
        
        # Если .git в корне проекта, используем корень, иначе используем webapp
        if not git_dir.exists():
            # Пробуем найти .git в родительских папках
            current = WEBAPP_DIR
            while current != current.parent:
                git_dir = current / '.git'
                if git_dir.exists():
                    project_root = current
                    break
                current = current.parent
        
        if not git_dir.exists():
            print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Git репозиторий не найден!")
            print("   Инициализируйте: git init")
            return False
        
        # Добавляем изменения в webapp
        subprocess.run(['git', 'add', 'webapp/'], cwd=project_root, check=True)
        
        # Коммит (может не быть изменений - это нормально)
        commit_msg = f'Auto deploy: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}'
        commit_result = subprocess.run(
            ['git', 'commit', '-m', commit_msg],
            cwd=project_root,
            capture_output=True,
            text=True
        )
        
        # Если нет изменений для коммита - это нормально
        if 'nothing to commit' in commit_result.stdout.lower():
            print(f"[{datetime.now().strftime('%H:%M:%S')}] ℹ️  Нет изменений для коммита")
            return True
        
        # Push
        push_result = subprocess.run(
            ['git', 'push'],
            cwd=project_root,
            capture_output=True,
            text=True
        )
        
        if push_result.returncode == 0:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] ✅ Изменения отправлены в GitHub!")
            print("   Netlify автоматически обновит сайт через 1-2 минуты")
            return True
        else:
            print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Ошибка push:")
            if push_result.stderr:
                print(push_result.stderr)
            if push_result.stdout:
                print(push_result.stdout)
            return False
    except subprocess.CalledProcessError as e:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Ошибка git: {e}")
        if hasattr(e, 'stderr') and e.stderr:
            print(e.stderr.decode('utf-8', errors='ignore'))
        return False
    except FileNotFoundError:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] ❌ Git не найден!")
        print("   Установите Git: https://git-scm.com/download/win")
        return False

def main():
    """Главная функция"""
    print("=" * 60)
    print("  🤖 АВТОМАТИЧЕСКИЙ ДЕПЛОЙ В TELEGRAM")
    print("=" * 60)
    print(f"\n📁 Отслеживаю папку: {WEBAPP_DIR}")
    print(f"📝 Отслеживаю файлы: {', '.join(WATCH_FILES)}")
    print(f"🔄 Режим: {'GitHub (автоматический)' if GITHUB_MODE else 'Netlify CLI'}")
    print("\n💡 Сохраните файл - изменения автоматически задеплоятся!")
    print("   Нажмите Ctrl+C для остановки\n")
    
    # Инициализация - читаем текущие хеши
    check_changes()
    
    last_deploy_time = 0
    deploy_cooldown = 30  # Минимум 30 секунд между деплоями
    
    try:
        while True:
            changes = check_changes()
            
            if changes:
                current_time = time.time()
                if current_time - last_deploy_time < deploy_cooldown:
                    print(f"[{datetime.now().strftime('%H:%M:%S')}] ⏳ Изменения обнаружены, но жду {deploy_cooldown} сек...")
                    time.sleep(5)
                    continue
                
                print(f"\n[{datetime.now().strftime('%H:%M:%S')}] 📝 Обнаружены изменения:")
                for filename in changes:
                    print(f"   - {filename}")
                
                # Деплой
                if GITHUB_MODE:
                    success = deploy_github()
                else:
                    success = deploy_netlify()
                
                if success:
                    last_deploy_time = current_time
                    print(f"[{datetime.now().strftime('%H:%M:%S')}] ✅ Готово! Проверьте Telegram через 1-2 минуты\n")
                else:
                    print(f"[{datetime.now().strftime('%H:%M:%S')}] ⚠️  Деплой не удался, попробую снова при следующем изменении\n")
            
            time.sleep(2)  # Проверка каждые 2 секунды
            
    except KeyboardInterrupt:
        print(f"\n[{datetime.now().strftime('%H:%M:%S')}] 👋 Остановка мониторинга...")
        sys.exit(0)

if __name__ == '__main__':
    main()

