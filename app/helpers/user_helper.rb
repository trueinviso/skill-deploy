module UserHelper
  def employer_role?
    current_user.user_roles.each do |user_role|
      if user_role.role.name === 'Employer'
        return true
      end
    end
    false
  end
end