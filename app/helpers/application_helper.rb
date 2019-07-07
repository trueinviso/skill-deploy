module ApplicationHelper
  def employer_jobs_page?
    current_page?(main_app.employer_jobs_path)
  end

  def edit_profile_page?
    current_page?(main_app.edit_user_registration_path)
  end

  def edit_social_profile_page?
    current_page?(main_app.edit_profile_social_path)
  end

  def edit_notifications_page?
    current_page?(main_app.edit_profile_notifications_path)
  end

  def saved_jobs_page?
    current_page?(main_app.favorite_jobs_path)
  end

  def applied_fors_page?
    current_page?(main_app.applied_fors_path)
  end

  def employer_billing_page?
    current_page?(main_app.edit_employer_billing_path)
  end

  def embedded_svg filename, options={}
    file = File.read(Rails.root.join('app', 'assets', 'font', 'icon', filename))
    doc = Nokogiri::HTML::DocumentFragment.parse file
    svg = doc.at_css 'svg'
    if options[:class].present?
      svg['class'] = options[:class]
    end
    doc.to_html.html_safe
  end
end
