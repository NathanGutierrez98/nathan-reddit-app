FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

<<<<<<< HEAD:dockerfile
CMD ["ng", "serve"]
=======

>>>>>>> 54e9bd02d124b9ef905278520f194d35108497e5:Dockerfile
