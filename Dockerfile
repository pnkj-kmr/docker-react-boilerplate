FROM node:13
MAINTAINER Pnkj <pankaj@agrichain.com>
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/
COPY start.sh /app/
ADD . /app/
CMD ["sh", "-c", "./start.sh"]
