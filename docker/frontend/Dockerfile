FROM node:20

WORKDIR /frontend

RUN mkdir -p /opt/node_modules

COPY ./frontend/package.json /frontend
COPY ./frontend/package-lock.json /frontend

RUN npm ci

COPY ./frontend /frontend

EXPOSE 3000

CMD ["npm", "run", "serve"]