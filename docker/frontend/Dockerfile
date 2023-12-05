FROM node:20

EXPOSE 5173

WORKDIR /frontend

COPY /frontend/package.json .

RUN npm install

COPY /frontend/ .

CMD [ "npm", "run", "dev", "--host", "0.0.0.0"]