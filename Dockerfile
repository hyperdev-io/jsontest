FROM node:9-alpine

COPY . /app

WORKDIR /app

RUN npm i --production

ENTRYPOINT ["npm", "start"]
