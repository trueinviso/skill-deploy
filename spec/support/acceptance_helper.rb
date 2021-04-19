# frozen_string_literal: true

module AcceptanceHelper
  def sign_in(user)
    visit new_user_session_path
    fill_in "Email", with: user.email
    fill_in "Password", with: "password"
    click_on "Get started"
  end
end
