# Use the Node.js 18.10.0 image as a base
FROM cimg/node:18.10.0

# Set the working directory in the container
WORKDIR /art-social-app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Define the command to start your application
CMD ["npm", "start"]
