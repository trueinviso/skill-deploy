class SendgridManager
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
        "email": ENV["SENDGRID_FROM_EMAIL"],
      },
      "template_id": template_id,
    }

    sg = SendGrid::API.new(api_key: ENV["SENDGRID_WEB_API_KEY"])
    response = sg.client.mail._("send").post(request_body: data)
    response.body
  end
end
