class SendgridTemplateData
  include Rails.application.routes.url_helpers

  SENDGRID_FROM_EMAIL  = -"admin@skilldeploy.com"
  SENDGRID_FROM_NAME  = -"Skill Deploy"

  def self.call(template_type, *args)
    "SendgridTemplateData::#{template_type.to_s.camelize}"
      .safe_constantize
      .new(*args)
      .call
  end

  private

  def personalizations
    raise "personalizations method not implemented error"
  end

  def template_id
    raise "template_id method not implemented error"
  end

  def data
    {
      "personalizations": [personalizations],
      "from": {
        "email": SENDGRID_FROM_EMAIL,
        "name": SENDGRID_FROM_NAME,
      },
      "template_id": template_id,
    }
  end
end
