FROM node:lts AS build

RUN apt update && apt install git

RUN git clone https://github.com/jqwez/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM caddy:latest

COPY Caddyfile /etc/caddy/Caddyfile

COPY dist /app

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
