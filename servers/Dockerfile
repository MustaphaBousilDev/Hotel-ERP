FROM node:alpine as development 
ARG APP
ARG NODE_ENV=develepemnt
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json
RUN npm install 
COPY apps/${APP} apps/${APP}
COPY libs libs
RUN cd apps/${APP} && npm install
RUN npm run build ${APP}

FROM node:alpine as production 
# Set environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=development /usr/src/app/dist ./dist

CMD ["node","dist/apps/auth/main"]