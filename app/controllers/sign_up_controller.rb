class SignUpController < ApplicationController
  def new
    @user = User.new
  end
end
