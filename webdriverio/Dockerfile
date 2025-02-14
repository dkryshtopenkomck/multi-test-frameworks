FROM --platform=linux/amd64 node:20.16.0-slim

RUN apt-get update && apt-get install -y \
    gconf-service \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget \
    xz-utils \
    fontconfig \
    libxcomposite1 \
    libxrandr2 \
    libxdamage1 \
    libxtst6 \
    libnss3 \
    chromium

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install your Node.js dependencies
RUN npm ci
#RUN npx playwright install --with-deps

# Copy the rest of your application code
COPY . .

# By default, we'll run the tests, but you can open a bash shell if needed
CMD ["npm", "test"]
