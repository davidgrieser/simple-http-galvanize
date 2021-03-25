FROM node:lts-alpine3.13

WORKDIR /app

COPY server.js .

CMD ["node", "server.js"]
