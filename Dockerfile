FROM node:20-alpine

COPY .output /app

ENTRYPOINT ["node", "app/server/index.mjs"]
