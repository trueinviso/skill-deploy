class Receptionist
  include Rails.application.routes.url_helpers

  attr_reader :current_user

  def initialize(current_user)
    @current_user = current_user
  end

  # Show the intermediate "choose your path" page if the user has more
  # than one role. Otherwise, direct to the page for your role.
  def direct
    if current_user.nil?
      [:new, :user, :session]
    elsif current_user.roles.size > 1
      # [:receptionist]
      [:root]
    else
      direct_by_role(current_user.roles.first)
    end
  end

  def direct_by_role(role)
    return [:root] unless role.present?

    case role.name.downcase.parameterize.underscore.to_sym
    # when :administrator
    #   [:admin, :root]
    # when :developer
    #   [:admin, :root]
    when :employer
      [:employer_jobs]
    when :job_seeker
      [:jobs]
    else
      [:root]
    end
  end
end
