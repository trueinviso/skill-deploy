module Unity
  module ApplicationHelper
    def embedded_svg(filename, options = {})
      file = File.read(Rails.root.join("app", "assets", "font", "icon", filename))
      doc = Nokogiri::HTML::DocumentFragment.parse file
      svg = doc.at_css "svg"
      if options[:class].present?
        svg["class"] = options[:class]
      end
      doc.to_html.html_safe
    end

    def no_side_nav?
      current_user.blank? ||
        current_page?(main_app.join_us_path)
    end
  end
end
