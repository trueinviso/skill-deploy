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

  def render_job_back_button
    content_tag(:a, href: back_button_href) do
      tag.div(
        class: back_button_class_list,
        aria: { label: "back" },
        role: "button",
      )
    end
  end

  private

  def back_button_href
    return request.referrer if go_to_last_uri?
    return main_app.employer_jobs_path if current_user.employer?
    main_app.root_path
  end

  def go_to_last_uri?
    request.referrer.present? &&
      URI(request.referrer).path != new_employer_job_path &&
      URI(request.referrer).to_s != request.url
  end

  def back_button_class_list
    return %w(back-button -round -black) if employer_preview_job_path?
    %w(close-button -round -black)
  end
end
