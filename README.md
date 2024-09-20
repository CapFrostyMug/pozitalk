## Установка и запуск через Docker

1. Склонировать репозиторий

2. Перейти в корень проекта

3. Создать свой файл `.env`:<br>
   `cp .env.example .env`

4. Поднять Docker:<br>
   `docker-compose up -d`

5. Установить зависимости приложения:<br>
   `docker run --rm \
   -u "$(id -u):$(id -g)" \
   -v $(pwd):/var/www/html \
   -w /var/www/html \
   laravelsail/php81-composer:latest \
   composer install --ignore-platform-reqs`

6. Опустить Docker:<br>
   `docker-compose down`

7. Запустить Laravel Sail (в фоновом режиме):<br>
   `./vendor/bin/sail up -d`

8. Сгенерировать `APP_KEY`:<br>
   `./vendor/bin/sail artisan key:generate`

9. Установить npm-пакеты:<br>
   `./vendor/bin/sail npm install`

10. Выполнить сборку front-части проекта:<br>
    `./vendor/bin/sail npm run build`

11. Выполнить команды `migrate` и `seed`:<br>
    `./vendor/bin/sail artisan migrate && ./vendor/bin/sail artisan db:seed`

12. Для открытия проекта в браузере, набрать в адресной строке:<br>
    http://localhost/

При возникновении ошибки типа **"Failed to open stream: Permission denied"**, скорее всего, необходимо дать права для работы с файлом **laravel.log** Для этого, **находясь в папке с проектом**, требуется выполнить команду: 
`sudo chmod 777 -R ./`
