FROM nginx:latest

# RUN ls /etc/nginx/conf.d/ > /test.txt
# RUN cat /etc/nginx/conf.d/$(cat /test.txt) > /test2.txt
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY proxy_params /etc/nginx