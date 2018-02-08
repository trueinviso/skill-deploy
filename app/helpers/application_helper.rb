module ApplicationHelper
  def employer_jobs_page?
    current_page?(employer_jobs_path)
  end

  def edit_profile_page?
    current_page?(edit_user_registration_path)
  end

  def edit_social_profile_page?
    current_page?(edit_profile_social_path)
  end

  def edit_notifications_page?
    current_page?(edit_profile_notifications_path)
  end

  def saved_jobs_page?
    current_page?(favorite_jobs_path)
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
