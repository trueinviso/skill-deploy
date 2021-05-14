class Receptionist
  include Rails.application.routes.url_helpers

  attr_reader :current_user

  def initialize(current_user)
    @current_user = current_user
  end

  def direct
    return [:jobs] if current_user.talent?
    return [:employer_jobs] if current_user.employer?
    [:new, :user, :session]
  end

  def direct_by_role(role)
    return [:join_us] if role.blank?

    case role.name.downcase.parameterize.underscore.to_sym
    when :employer
      [:employer_jobs]
    when :job_seeker
      [:jobs]
    else
      [:root]
    end
  end
end
