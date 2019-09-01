FROM ubuntu:16.04

WORKDIR /mydir

COPY . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs
RUN npm install
RUN npm run build
EXPOSE 3000
CMD npm start
