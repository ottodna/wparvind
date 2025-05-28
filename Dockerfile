# 🟢 First stage: build with Astro
FROM node:lts-alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# 🟢 Second stage: serve with nginx
FROM nginx:alpine

# ✅ Fix: use named stage `builder` below
COPY --from=builder /app/dist /usr/share/nginx/html
