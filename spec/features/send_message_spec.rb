require "rails_helper"

RSpec.feature "Send message", type: :feature do
  describe "send a message to talent", js: true do
    let(:user) { create(:user, :with_talent_role) }
    let(:user_profile) { create(:user_profile, user: user) }
    let(:employer) { create(:user, :with_employer_role) }
    let(:employer_profile) { create(:user_profile, user: employer) }
    let(:job) { create(:job, user: employer) }
    let(:apply_job) { user_profile.user.applied_jobs << job }

    scenario "when employer send message to applied job talent" do
      apply_job
      sign_in(employer_profile.user)
      visit employer_applied_for_path(user_profile.user.applied_jobs.first)
      click_on("Send a message")
      fill_in "message[body]", with: "some message"
      click_on("Send message")
      expect(page).to have_text("Your messages was sent")
    end

    scenario "when employer send message to applied job talent with empty body" do
      apply_job
      sign_in(employer_profile.user)
      visit employer_applied_for_path(user_profile.user.applied_jobs.first)
      click_on("Send a message")
      click_on("Send message")
      expect(page).to have_text("Field is required.")
    end
  end
end
