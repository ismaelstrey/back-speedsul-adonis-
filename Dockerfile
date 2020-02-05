FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm i -g @adonisjs/cli
RUN yarn
COPY . .
EXPOSE 3333
CMD yarn serve