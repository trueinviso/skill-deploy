class FavoriteJobPolicy < ApplicationPolicy
  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end
  end

  def destroy?
    user.id == record.user_id
  end
end
