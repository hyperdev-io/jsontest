FROM node:9-alpine

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm i --production

ENTRYPOINT ["npm", "start"]
