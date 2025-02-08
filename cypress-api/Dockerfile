# Use the official Cypress Docker image with browsers
FROM cypress/included:cypress-13.13.1-node-20.15.1-chrome-127.0.6533.72-1-ff-128.0-edge-126.0.2592.102-1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first for npm installation
COPY package*.json ./

# Install dependencies (no need to install Cypress separately as it's already included in the base image)
RUN npm ci

# Copy the rest of your application files into the container
COPY . .

# Ensure permissions on the home directory (useful for non-root user issues)
#RUN chmod -R 777 /home/cypress/.cache/Cypress

# Open ports if needed for testing servers
# EXPOSE 80 443 8080 3000

# Define the command to run the tests (or override with a bash command for debugging)
CMD ["npm", "run", "test"]
