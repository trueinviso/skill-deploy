# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## File Formatting

If you want to use auto-formatting before committing files on your local machine
you should run `cp .lintstagedrc.sample .lintstagedrc && cp .huskyrc.sample .huskyrc`

## Email

The application uses the mailcatcher gem in development.

```
gem install mailcatcher
mailcatcher
```

Mailcatcher will run as a background daemon on port `1025` and a web interface will be made
available at `http://localhost:1080` where you can review the emails sent from your development machine.
