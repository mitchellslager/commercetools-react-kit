FROM node:14-buster-slim

RUN mkdir /code/
WORKDIR /code/

COPY package.json yarn.lock /code/
RUN yarn install

COPY . /code/

RUN ["yarn", "compile", "--output-path=dist/"]

ENTRYPOINT ["yarn"]
