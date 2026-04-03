# syntax=docker/dockerfile:1
FROM docker.io/node:24.11.0-bullseye-slim AS base
RUN apt update \
  && apt install -y git \
    gcc libgl1 libxi6 make \
    autoconf libtool pkg-config zlib1g-dev \
    python3 g++ \
    libpng-dev \
    libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
RUN mkdir -p /openedx/app /openedx/env
WORKDIR /openedx/app
ENV PATH=/openedx/app/node_modules/.bin:${PATH}

FROM base AS authn-common
COPY package.json package-lock.json /openedx/app/
ARG NPM_REGISTRY=https://registry.npmjs.org/
ENV CPPFLAGS=-DPNG_ARM_NEON_OPT=0
ENV PACT_SKIP_BINARY_INSTALL=true
RUN --mount=type=cache,target=/root/.npm,sharing=shared npm clean-install --no-audit --no-fund --registry=$NPM_REGISTRY
COPY . /openedx/app

FROM authn-common AS authn-build
ARG AUTHN_SITE_NAME=FICCT Virtual
ARG AUTHN_LMS_URL=http://161.35.235.254.nip.io
ENV SITE_NAME=$AUTHN_SITE_NAME
ENV LMS_BASE_URL=$AUTHN_LMS_URL
ENV PUBLIC_PATH=/authn/
RUN npm run build

FROM docker.io/caddy:2.7.4 AS authn
COPY --from=authn-build /openedx/app/dist /openedx/dist
COPY Caddyfile /etc/caddy/Caddyfile
