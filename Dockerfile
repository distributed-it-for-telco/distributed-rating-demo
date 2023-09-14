FROM nginx:1.17.1-alpine


COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/distrbuted-rating-simulator /usr/share/nginx/html