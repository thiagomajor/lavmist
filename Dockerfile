# LAVMIST — site estático servido por nginx
# Easypanel: App apontando para este repositório (build por Dockerfile, porta 80).
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.svg /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
# Sem HEALTHCHECK (o wget do Alpine marcava unhealthy -> 502 no Easypanel).
