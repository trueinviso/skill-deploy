FROM ruby:2.6.5
MAINTAINER Keith Ward <keith.ward.dev@gmail.com>

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get update && apt-get install -qq -y --no-install-recommends \
    build-essential \
    nodejs \
    libpq-dev \
    postgresql \
    postgresql-contrib \
    postgresql-client \
    vim

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get -o Dpkg::Options::="--force-overwrite" install \
    --no-install-recommends -qq -y yarn

ENV INSTALL_PATH /usr/src/app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY ./unity ./unity
COPY Gemfile* ./

RUN bundle config git.allow_insecure true
RUN bundle install --binstubs

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

VOLUME ["$INSTALL_PATH/public"]

RUN bin/webpack
