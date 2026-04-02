FROM node:20-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm clean-install --no-audit --no-fund

COPY . .
RUN npm run build

FROM caddy:2.7.4-alpine
COPY --from=builder /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
