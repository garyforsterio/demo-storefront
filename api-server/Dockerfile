FROM ruby:2.5 

WORKDIR /usr/src/app

RUN gem install bundler:1.11.2

COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install

COPY . ./

CMD ["bundle", "exec", "foreman", "start"]