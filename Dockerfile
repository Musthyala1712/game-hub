# ---------------------------
# 🧱 Stage 1 — Build the React App
# ---------------------------
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy rest of the project
COPY . .

# ✅ Copy environment variables from GitHub Actions
COPY .env.production .env

# Build React app (will now include VITE_API_KEY)
RUN npm run build

# ---------------------------
# 🌐 Stage 2 — Nginx Web Server
# ---------------------------
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
# Uncomment the next line if you have a custom nginx.conf file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
