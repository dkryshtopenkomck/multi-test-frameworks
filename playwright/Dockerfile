# Use the official Playwright image from Microsoft as the base image
FROM mcr.microsoft.com/playwright:v1.50.1-noble

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install your Node.js dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# By default, we'll run the tests, but you can open a bash shell if needed
CMD ["npm", "test"]
