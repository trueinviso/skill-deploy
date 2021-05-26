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

  def show_plan_list?
    !current_user.unlimited?
  end

  def show_payment_form?
    !current_user.paying_subscriber?
  end
end
