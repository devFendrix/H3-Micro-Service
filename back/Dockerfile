FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . /app

CMD [ "npm", "run", "start"]
