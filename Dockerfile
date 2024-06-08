FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
EXPOSE 4200
RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0","--disable-host-check"]
