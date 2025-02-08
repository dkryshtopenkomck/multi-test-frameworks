FROM testcafe/testcafe:latest

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

USER root
RUN npm run build

RUN ls -la && ls -la dist

COPY dist /tests
