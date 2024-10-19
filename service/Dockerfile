# Dockerfile for Service
FROM node:22 AS builder
WORKDIR /service
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate

# Production image
FROM node:22
WORKDIR /service
COPY --from=builder /service ./
CMD ["npm", "run", "dev"]
EXPOSE 5000
