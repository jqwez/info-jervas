FROM node:lts AS builder

WORKDIR /app

RUN apt update && apt install git

RUN git clone https://github.com/jqwez/info-jervas && \
    echo "Cloned repo at $GIT_TIMESTAMP"

RUN cd info-jervas && npm install && npm run build

FROM caddy:latest

COPY --from=builder /app/info-jervas/Caddyfile /etc/caddy/Caddyfile

COPY --from=builder /app/info-jervas/dist /app

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
