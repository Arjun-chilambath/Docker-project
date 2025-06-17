# Use Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only the package files first (for caching layer)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the backend server port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
