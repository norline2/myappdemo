# 1. Basis-Image: Nginx
FROM nginx:alpine

# 2. Lösche Standard-Nginx-Website
RUN rm -rf /usr/share/nginx/html/*

# 3. Kopiere das Build der React-App ins Nginx-Verzeichnis
COPY build/ /usr/share/nginx/html

# 4. Standard-Port für Nginx
EXPOSE 80

# 5. Start von Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]