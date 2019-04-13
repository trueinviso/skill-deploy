FROM ruby:2.5.0
MAINTAINER Keith Ward <keith.ward.dev@gmail.com>

ARG ssh_prv_key
ARG NPM_TOKEN

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      build-essential \
      nodejs \
      libpq-dev \
      postgresql \
      postgresql-contrib \
      vim \
      apt-transport-https \
      git

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get -o Dpkg::Options::="--force-overwrite" install \
    --no-install-recommends -qq -y yarn

RUN mkdir /root/.ssh && \
    echo "${ssh_prv_key}" > /root/.ssh/id_rsa && \
    touch /root/.ssh/known_hosts && \
    ssh-keyscan github.com >> /root/.ssh/known_hosts && \
    chmod -R 0600 /root/.ssh


ENV INSTALL_PATH /root/src/app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH

COPY Gemfile* ./

# RUN bundle config git.allow_insecure true
RUN bundle install --binstubs

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN bin/webpack

RUN rm /root/.ssh/id_rsa
