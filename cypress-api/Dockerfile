# 🟢 1-й этап: билдим приложение
FROM node:20.16.0-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    xvfb \
    libnss3 \
    libgtk-3-0 \
    libgbm-dev \
    libasound2 \
    fonts-liberation \
    libgtk2.0-0 \
    libnotify-dev \
    libxss1 \
    libxtst6 \
    xauth && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /tmp/*

COPY package*.json ./
RUN npm install

COPY . .

# Открываем порты, если тесты требуют запущенного сервера
#EXPOSE 80 443 8080 3000

# Запускаем Cypress в headless-режиме
CMD ["npm", "run", "test"]
