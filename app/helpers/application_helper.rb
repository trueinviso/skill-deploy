module ApplicationHelper
  def employer_jobs_page?
    current_page?(employer_jobs_path)
  end

  def edit_profile_page?
    current_page?(edit_user_registration_path)
  end

  def saved_jobs_page?
    current_page?(favorite_jobs_path)
  end

  def job_border_color(job)
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
end
