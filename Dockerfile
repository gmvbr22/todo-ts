FROM node:16-alpine AS ts-microservice-builder
LABEL stage=builder
USER node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run clean
RUN npm run compile

FROM node:16-alpine AS ts-microservice-prod
USER node
WORKDIR /app
COPY --from=ts-microservice-builder ./app/build ./build
COPY package* ./
RUN npm install --production
CMD npm start