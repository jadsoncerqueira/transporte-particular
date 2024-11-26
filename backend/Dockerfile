FROM node:23-alpine3.19
RUN npm install -g npm@8.12.2
WORKDIR /backend
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 80