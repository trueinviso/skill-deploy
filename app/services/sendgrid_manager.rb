# frozen_string_literal: true

module SendgridManager
  extend self

  SENDGRID_FROM_EMAIL  = -"admin@skilldeploy.com"

  TEMPLATE_IDS = {
    published_job_notification: "d-d746e27796cc4f13b153e4188da91d99",
    apply_notification: "d-2d778090ddcb43df8eec4e5241279503",
    password_change: "d-77437192fa3e4c2083b992c444575f4e",
    reset_password_instructions: "d-e021181d93c44d0ab3143ff5bf7d81d6",
    recruiter_message: "d-c5d9bd7f8a51475ea8852e84b481d25d",
  }

  def send(to, template_id, subsitutions = {})
    SendgridManagerWorker
      .perform_async(data(to, template_id, subsitutions))
  end

  private

  def data(to, template_id, subsitutions)
    {
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
  end
end
