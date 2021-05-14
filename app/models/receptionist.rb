class Receptionist
  include Rails.application.routes.url_helpers

  attr_reader :current_user

  def initialize(current_user)
    @current_user = current_user
  end

  def direct
    if current_user.nil?
      [:new, :user, :session]
    else
      if current_user.talent?
        [:jobs]
      else
        [:employer_jobs]
      end
    end
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
