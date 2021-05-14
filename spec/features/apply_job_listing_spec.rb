require "rails_helper"

RSpec.feature "Apply job lising", type: :feature do
  describe "apply a job listing" do
    let(:user) { create(:user, :with_talent_role) }
    let(:user_profile) { create(:user_profile, user: user) }
    let(:job) { create(:job) }
    let(:apply_job) { user_profile.user.applied_jobs << job }

    scenario "when talent apply the first time same job" do
      sign_in(user_profile.user)
      visit job_path(job)
      click_on("Apply now", match: :first)
      expect(page).to have_text("You applied to the job listing")
      expect(ActionMailer::Base.deliveries.count).to eq(1)
      expect(ActionMailer::Base.deliveries.last.to).to include(job.user.email)
      expect(ActionMailer::Base.deliveries.last.subject).to include("Talent has applied to your job listing")
    end

    scenario "when talent apply the second time same job" do
      apply_job
      sign_in(user_profile.user)
      visit job_path(job)
      click_on("Apply now", match: :first)
      expect(page).to have_text("Could not apply to the job")
      expect(ActionMailer::Base.deliveries.count).to eq(0)
    end
  end
end
