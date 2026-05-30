# NewsApp

Проект переделан по структуре как у Murmur:

- App.js — только подключает script.js.
- script.js — вся логика приложения.
- style.js — все стили отдельно.
- package.json — очищенные зависимости.
- node_modules и .expo в архив не добавлены.

Запуск:

npm install
npx expo start -c

Для веба:

npx expo start --web -c

Для телефона через туннель:

npx expo start --tunnel -c
