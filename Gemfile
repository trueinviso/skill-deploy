source "https://rubygems.org"
ruby "2.6.6"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "awesome_print"
gem "devise", github: "heartcombo/devise", branch: "master"
gem "forgery"
# gem "foundation-rails", "~> 5.4"
gem "aws-sdk-s3"
gem "font-awesome-rails"
gem "haml"
gem "image_processing"
gem "jsonapi-serializer"
gem "mini_magick", ">=4.3.5"
gem "mq-sass"
gem "omniauth-google-oauth2"
gem "pundit"
gem "react-rails"
gem "roda"
gem "shrine"
gem "unity", git: "https://github.com/trueinviso/unity.git"
gem "webpacker", "~> 5.x"
# gem 'unity', path: "./unity"
# path: "/Users/keithward/side_projects/engines/unity"
# Token authentication for API requests + CORS
gem "simple_token_authentication", "~> 1.0"
# required to use shrine validation plugin
# gets width and height of an uploaded image
gem "fastimage"
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem "rails", "~> 6.0.3.6"
gem "seed-fu", "~> 2.3"
# Use pg as the database for Active Record
gem "pg", "~> 0.21"
# Use Puma as the app server
gem "puma", "~> 3.7"
# Use SCSS for stylesheets
gem "sass-rails", "~> 5.0"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier", ">= 1.3.0"
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem "turbolinks", "~> 5"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.5"
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
gem "name_of_person"

gem "sentry-raven", "~> 2.6.0"

group :test do
  gem "factory_bot_rails"
  gem "rspec"
  gem "shoulda-matchers", "~> 4.0"
  gem "shrine-memory"
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem "capybara"
  gem "capybara-webkit"
  gem "dotenv-rails"
  gem "pry"
  gem "rspec-rails", "~> 5.0.0"
  gem "selenium-webdriver"
  gem "webdrivers"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "haml_lint"
  gem "letter_opener"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "web-console", ">= 3.3.0"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "draper"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
