# Use an official Nginx image to serve the static site
FROM nginx:alpine

# Copy the Astro build output into the Nginx web directory
COPY dist /usr/share/nginx/html

# Optional: replace default Nginx config (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
