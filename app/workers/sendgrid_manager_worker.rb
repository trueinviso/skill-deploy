class SendgridManagerWorker
  include Sidekiq::Worker

  SENDGRID_WEB_API_KEY = ENV["SENDGRID_WEB_API_KEY"]

  def perform(request_body)
    send_grid
      .client
      .mail
      ._("send")
      .post(request_body: request_body)
  end

  private

  def send_grid
    SendGrid::API.new(api_key: SENDGRID_WEB_API_KEY)
  end
end
