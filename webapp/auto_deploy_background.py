#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Полностью автоматический деплой в фоне
Работает постоянно, деплоит при любых изменениях
"""

import os
import sys
import time
import subprocess
import hashlib
from pathlib import Path
from datetime import datetime
import threading

# Настройки
WEBAPP_DIR = Path(__file__).parent
WATCH_FILES = ['index.html', 'style.css', 'app.js', '*.html', '*.css', '*.js']
NETLIFY_CMD = 'netlify deploy --prod --dir .'
GITHUB_MODE = True  # Используем GitHub для автоматического деплоя

# Кэш хешей файлов
file_hashes = {}
last_deploy_time = 0
deploy_cooldown = 20  # Минимум 20 секунд между деплоями
deploy_lock = threading.Lock()

def get_file_hash(filepath):
    """Получить хеш файла"""
    try:
        with open(filepath, 'rb') as f:
            return hashlib.md5(f.read()).hexdigest()
    except:
        return None

def check_all_files():
    """Проверить все файлы в папке"""
    changes = []
    
    # Проверяем конкретные файлы
    for filename in ['index.html', 'style.css', 'app.js']:
        filepath = WEBAPP_DIR / filename
        if filepath.exists():
            current_hash = get_file_hash(filepath)
            if filename in file_hashes:
                if file_hashes[filename] != current_hash:
                    changes.append(filename)
                    file_hashes[filename] = current_hash
            else:
                file_hashes[filename] = current_hash
    
    # Проверяем все HTML, CSS, JS файлы
    for pattern in ['*.html', '*.css', '*.js']:
        for filepath in WEBAPP_DIR.glob(pattern):
            if filepath.name in ['index.html', 'style.css', 'app.js']:
                continue  # Уже проверили
            rel_path = filepath.relative_to(WEBAPP_DIR)
            current_hash = get_file_hash(filepath)
            key = str(rel_path)
            if key in file_hashes:
                if file_hashes[key] != current_hash:
                    changes.append(key)
                    file_hashes[key] = current_hash
            else:
                file_hashes[key] = current_hash
    
    return changes

def deploy_github_silent():
    """Тихий деплой через GitHub"""
    global last_deploy_time
    
    with deploy_lock:
        current_time = time.time()
        if current_time - last_deploy_time < deploy_cooldown:
            return False
        
        try:
            # Находим корень проекта
            project_root = WEBAPP_DIR.parent
            git_dir = project_root / '.git'
            
            if not git_dir.exists():
                return False
            
            # Добавляем все изменения
            add_result = subprocess.run(
                ['git', 'add', 'webapp/'],
                cwd=project_root,
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if add_result.returncode != 0:
                return False
            
            # Коммит
            commit_msg = f'Auto: {datetime.now().strftime("%H:%M:%S")}'
            commit_result = subprocess.run(
                ['git', 'commit', '-m', commit_msg],
                cwd=project_root,
                capture_output=True,
                text=True,
                timeout=10
            )
            
            # Если нет изменений - нормально
            if 'nothing to commit' in commit_result.stdout.lower() or commit_result.returncode != 0:
                return True
            
            # Push в фоне
            push_process = subprocess.Popen(
                ['git', 'push'],
                cwd=project_root,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL
            )
            
            last_deploy_time = current_time
            return True
            
        except subprocess.TimeoutExpired:
            return False
        except Exception as e:
            return False

def main():
    """Главная функция - работает в фоне"""
    # Инициализация - читаем текущие хеши
    check_all_files()
    
    # Тихий режим - только логи в файл
    log_file = WEBAPP_DIR / 'auto_deploy.log'
    
    def log(message):
        try:
            with open(log_file, 'a', encoding='utf-8') as f:
                f.write(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {message}\n")
        except:
            pass
    
    log("🚀 Автоматический деплой запущен")
    
    try:
        while True:
            changes = check_all_files()
            
            if changes:
                log(f"📝 Изменения: {', '.join(changes)}")
                
                if deploy_github_silent():
                    log("✅ Деплой запущен")
                else:
                    log("⏳ Деплой отложен (cooldown)")
            
            time.sleep(3)  # Проверка каждые 3 секунды
            
    except KeyboardInterrupt:
        log("👋 Остановка")
        sys.exit(0)
    except Exception as e:
        log(f"❌ Ошибка: {e}")
        time.sleep(10)
        main()  # Перезапуск при ошибке

if __name__ == '__main__':
    # Запуск в фоне без окна
    if len(sys.argv) > 1 and sys.argv[1] == '--window':
        main()
    else:
        # Скрытый режим
        import ctypes
        if sys.platform == 'win32':
            # Скрываем окно консоли
            ctypes.windll.user32.ShowWindow(ctypes.windll.kernel32.GetConsoleWindow(), 0)
        main()

