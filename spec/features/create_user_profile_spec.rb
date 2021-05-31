require "rails_helper"

RSpec.feature "Create user profile", type: :feature do
  describe "create user prorfile", js: true do
    let(:user) { create(:user, :with_employer_role) }
    let(:user_profile) { create(:user_profile, user: user) }
    let!(:rate_range) { create(:rate_range) }

    scenario "when all required data filled in" do
      run_fixtures("tags|job_roles|job_type|job_experiences|job_locations")
      sign_in(user_profile.user)
      visit join_us_path
      click_on "Create your profile"
      fill_in "First Name", with: "name"
      fill_in "Last Name", with: "last name"
      fill_in_trix_editor "#user_user_profile_attributes_bio", with: "some bio"
      fill_in "Current Location", with: "UTC"
      find("span", text: "Onsite or Remote").click
      find("span", text: "Development").click
      find("span", text: "Mid-level").click
      find("span", text: "Part Time").click
      find("#rate-range").click.find("#react-select-2-option-0").click
      click_on("Save changes")
      expect(page).to have_text("Hi name last name")
    end

    scenario "when not all required data filled in" do
      sign_in(user_profile.user)
      visit join_us_path
      click_on "Create your profile"
      fill_in "First Name", with: "name"
      fill_in "Last Name", with: "last name"
      click_on("Save changes")
      expect(page).to have_text("Field is required.")
    end

    scenario "save for later", js: true do
      run_fixtures("tags|job_roles|job_type|job_experiences|job_locations")
      sign_in(user_profile.user)
      visit join_us_path
      click_on "Create your profile"
      fill_in "First Name", with: "name"
      fill_in "Last Name", with: "last name"
      fill_in_trix_editor "#user_user_profile_attributes_bio", with: "some bio"
      fill_in "Current Location", with: "UTC"
      find("span", text: "Onsite or Remote").click
      find("span", text: "Development").click
      find("span", text: "Mid-level").click
      find("span", text: "Part Time").click
      find("#rate-range").click.find("#react-select-2-option-0").click
      click_on("Save for later")
      expect(page).to have_current_path(root_path)
    end
  end
end
