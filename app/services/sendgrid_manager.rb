# frozen_string_literal: true

module SendgridManager
  extend self

  SENDGRID_FROM_EMAIL  = -"admin@skilldeploy.com"

  TEMPLATE_IDS = {
    published_job_notification: "d-d746e27796cc4f13b153e4188da91d99",
    apply_notification: "d-3f9748fca35f4e58a2712ad010362665",
    password_change: "d-77437192fa3e4c2083b992c444575f4e",
    reset_password_instructions: "d-e021181d93c44d0ab3143ff5bf7d81d6",
    recruiter_message: "d-c5d9bd7f8a51475ea8852e84b481d25d",
    cancel_subscription: "d-c54674fd878749f3acf98688cb82d649",
    subscription_receipt: "d-bb4ebaae730d4c36b14f5a9a7b7514c7",
    confirmation_instructions: "d-7d45ed2e3da64e0b8d8b544342c7d7ba",
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
