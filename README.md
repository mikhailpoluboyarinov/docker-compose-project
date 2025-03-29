# Инструкция по запуску

## 1. Убедитесь, что установлены Docker и Docker Compose

Проверьте версии установленных инструментов:
```bash
docker --version
docker-compose --version
```

## 2. Запуск Docker-контейнеров

В корне проекта выполните команду для сборки и запуска контейнеров:
```bash
docker-compose up --build
```
Контейнеры будут запущены в фоновом режиме.

## 3. Остановка Docker-контейнеров

Для остановки контейнеров используйте команду:
```bash
docker-compose down
```

## 4. Проверка работы базы данных

После запуска контейнеров можно проверить работу базы данных PostgreSQL.

### Найдите ID контейнера базы данных:
```bash
docker ps
```

### Подключитесь к базе данных внутри контейнера
Подставьте `CONTAINER_ID` в команду:
```bash
docker exec -it CONTAINER_ID psql -U user -d mydatabase
```

### Создайте тестовую таблицу и добавьте данные
В консоли PostgreSQL выполните SQL-запросы:
```sql
CREATE TABLE test (id SERIAL PRIMARY KEY, name TEXT);
INSERT INTO test (name) VALUES ('Hello Docker');
SELECT * FROM test;
```
Чтобы выйти из дб нужно ввести
```
\q
```

## 5. Перезапуск контейнеров и проверка сохранения данных

Перезапустите контейнеры:
```bash
docker-compose down
docker-compose up -d
```

После перезапуска подключитесь к базе данных снова:
```bash
docker exec -it CONTAINER_ID psql -U user -d mydatabase
```

Проверьте, сохранились ли данные:
```sql
SELECT * FROM test;
```
Если данные остались, значит `volumes` работают корректно.

## P.S.

- [Frontend - localhost:3000](http://localhost:3000)
- [Backend - localhost:5000](http://localhost:5000)