FROM node:21-alpine

RUN apk add bash

USER root
WORKDIR /home/node/app
RUN chown -R 1000 /home/node/app 
RUN chown -R 1000 /usr/local/lib/node_modules
RUN chown -R 1000 /usr/local/bin

COPY ./package.json /home/node/app

COPY . .

RUN npm install
USER node
CMD ["npm", "start"]


