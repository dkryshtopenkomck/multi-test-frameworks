# Use an official Cypress base image
FROM cypress/base:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

# Expose the necessary ports for Cypress
EXPOSE 80 443 8080 3000

# Run Cypress tests in headless mode
CMD ["npm", "run", "cypress:run"]
