class UserProfilePolicy < ApplicationPolicy
  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end
  end

  def new?
    # since we are creating the user_profile when user signup, we are checking  like this
    record.user_id == user.id
  end

  def create?
    # since we are creating the user_profile when user signup, we are checking  like this
    record.user_id == user.id
  end
end
