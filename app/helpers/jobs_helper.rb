module JobsHelper
  def job_border_color(job)
    return unless job.job_types.present?
    case job.job_types.first.name
    when "Full Time"
      "full-time"
    when "Part Time"
      "part-time"
    when "Freelance"
      "contract"
    else
      ""
    end
  end

  def active_role_class(params, role)
    "active-role" if params[:job_role_name] == role.name
  end

  def active_type_class(params, type)
    type_name = params[:job_type_name]
    case type_name
    when "Full Time"
      "active-full-time" if type.name == type_name
    when "Part Time"
      "active-part-time" if type.name == type_name
    when "Freelance"
      "active-freelance" if type.name == type_name
    else
      ""
    end
  end

  def role_name(params, role)
    active_role_class(params, role).present? ? nil : role.name
  end

  def type_name(params, type)
    active_type_class(params, type).present? ? nil : type.name
  end
end
