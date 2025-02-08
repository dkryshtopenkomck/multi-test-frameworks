# 🟢 1-й этап: билдим приложение
FROM node:20.16.0-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# 🔹 2-й этап: Запускаем TestCafe
FROM testcafe/testcafe:latest

WORKDIR /tests

COPY --from=builder /app/dist /tests

CMD ["firefox", "/tests/**/*.js"]
