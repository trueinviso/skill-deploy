# frozen_string_literal: true

class SendgridManager
  SENDGRID_WEB_API_KEY = ENV["SENDGRID_WEB_API_KEY"]
  SENDGRID_FROM_EMAIL  = ENV["SENDGRID_FROM_EMAIL"]

  def self.send(to, template_id, subsitutions = {})
    data = {
      "personalizations": [
        {
          "to": [
            {
              "email": to,
            },
          ],
          "dynamic_template_data": subsitutions,
        },
      ],
      "from": {
        "email": SENDGRID_FROM_EMAIL,
      },
      "template_id": template_id,
    }

    send_grid = SendGrid::API.new(api_key: SENDGRID_WEB_API_KEY)
    send_grid.client.mail._("send").post(request_body: data)
  end
end
