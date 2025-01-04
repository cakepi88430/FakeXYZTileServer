FROM node:22-alpine

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake

WORKDIR /app/FakeXYZServerForNode
COPY ./src/FakeXYZServerForNode .
RUN npm install -g && npm install

WORKDIR /app/OpenLayerPreview
COPY ./src/OpenLayerPreview .
RUN npm install -g && npm install

WORKDIR /app
COPY ./src/start.sh .
CMD ["./start.sh"]
