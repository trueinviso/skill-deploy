require "rails_helper"

RSpec.describe EmployerMailer, type: :mailer do
  let(:user) { create(:user) }
  let!(:user_profile) { create(:user_profile, user: user) }
  let(:job) { create(:job, user: user) }

  describe "job_listing_publish_notification" do
    let(:mail) { described_class.job_listing_publish_notification(job) }

    it "renders the headers" do
      expect(mail.subject).to eq("You job is now live!")
      expect(mail.to).to eq([job.user.email])
      expect(mail.from).to eq(["team@skilldeploy.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Your listing is now live.")
    end
  end

  describe "job_listing_talent_apply_notification" do
    let(:talent) { create(:user, :with_talent_role) }
    let(:mail) { described_class.job_listing_talent_apply_notification(job, talent) }

    it "renders the headers" do
      expect(mail.subject).to eq("Talent has applied to your job listing")
      expect(mail.to).to eq([job.user.email])
      expect(mail.from).to eq(["team@skilldeploy.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("is interesting in your listing!")
    end
  end
end
