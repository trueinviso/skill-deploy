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
    return main_app.employer_jobs_path if create_listing_page?
    return request.referrer if employer_preview_job_path? && request.referrer.present?
    main_app.employer_jobs_path
  end

  def back_button_class_list
    return %w(back-button -round -black) if employer_preview_job_path?
    %w(close-button -round -black)
  end
end
