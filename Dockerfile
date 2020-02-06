FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm i -g @adonisjs/cli nodemon
RUN yarn
COPY . .
EXPOSE 3333
CMD [ "yarn", "start" ]