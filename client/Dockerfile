# Dockerfile for Client
FROM node:22
WORKDIR /client
COPY package*.json ./
RUN npm install --verbose
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 5173
