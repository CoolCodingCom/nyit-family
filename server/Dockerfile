FROM node:18-alpine

RUN apk --no-cache add bash curl

EXPOSE 5000

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . /server

CMD ["node", "app.js"]