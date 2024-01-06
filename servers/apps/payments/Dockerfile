FROM node:alpine as development 

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . . 

RUN npm run build 


FROM node:alpine as production 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
#for install dependency for production and not install devDependencie in package json
RUN npm install --prod

#copy folder dist was created in mode develepemnt using command npm run build into and colleer into folder /dist in mode production 
COPY --from=development /usr/src/app/dist ./dist

CMD ["node","dist/apps/payments/main"]