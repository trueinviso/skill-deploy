require "rails_helper"

RSpec.feature "Create job lising", type: :feature do
  describe "create of a job listing", js: true do
    let(:user) { create(:user, :with_employer_role) }
    let(:user_profile) { create(:user_profile, user: user) }

    scenario "when all required data filled in", js: true  do
      run_fixtures("tags|job_roles|job_type|job_experiences|job_locations")
      sign_in(user_profile.user)
      allow_any_instance_of(User).to receive(:gateway_customer).and_return(true)
      allow_any_instance_of(User).to receive_message_chain(:subscription, :active?).and_return(true)
      visit root_path
      click_on "Create new listing"
      fill_in "Job title", with: "name"
      fill_in "Company", with: "company"
      fill_in_trix_editor "#job_description", with: "some desctiption" 
      find("span", text: "Design").click
      find("span", text: "Part Time").click
      find("span", text: "Mid-level").click
      find("span", text: "Onsite or Remote").click
      fill_in "Preferred location or timezone (optional)", with: "UTC"
      click_on("Preview Listing")
      expect(page).to have_text("Listing preview")
    end

    scenario "when not all required data filled in" do
      sign_in(user_profile.user)
      allow_any_instance_of(User).to receive(:gateway_customer).and_return(true)
      allow_any_instance_of(User).to receive_message_chain(:subscription, :active?).and_return(true)
      visit root_path
      click_on "Create new listing"
      fill_in "Preferred location or timezone (optional)", with: "UTC"
      click_on("Preview Listing")
      expect(page).to have_text("Field is required.")
    end
  end
end
