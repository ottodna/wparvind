# Build Astro site
FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Serve via Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
