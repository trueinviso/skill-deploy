FROM ruby:2.5.0
MAINTAINER Keith Ward <keith.ward.dev@gmail.com>
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      build-essential nodejs libpq-dev postgresql postgresql-contrib vim

ENV INSTALL_PATH /usr/src/app
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY Gemfile* ./

RUN bundle config git.allow_insecure true
RUN bundle install --binstubs

COPY . .

VOLUME ["$INSTALL_PATH/public"]

CMD puma -C config/puma.rb

EXPOSE 3000
