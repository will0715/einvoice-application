FROM node:12-alpine

WORKDIR /app

COPY package.json /app 

RUN npm install

COPY .  /app

EXPOSE 3000

RUN npm run build

RUN npm prune --production

CMD ["npm", "run", "serve"]
