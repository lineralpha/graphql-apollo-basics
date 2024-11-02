FROM node:lts-alpine3.20 AS base
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# install packages
RUN npm install

# copy everything
COPY . .

# build the app
RUN npm run build && rm -rf node_modules
# RUN npm run build

FROM node:lts-alpine3.20 AS final
WORKDIR /app
EXPOSE 4000

COPY --from=base /app/dist ./dist
COPY package.json .
COPY package-lock.json .
RUN npm install --omit=dev

CMD ["node", "./dist/index.js"]
