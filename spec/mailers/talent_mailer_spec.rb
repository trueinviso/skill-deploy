require "rails_helper"

RSpec.describe TalentMailer, type: :mailer do
  describe "welcome" do
    let(:user) { create(:user) }
    let!(:user_profile) { create(:user_profile, user: user) }
    let(:mail) { described_class.welcome(user) }

    it "renders the headers" do
      expect(mail.subject).to eq(nil)
      expect(mail.to).to eq([user.email])
      expect(mail.from).to eq(["team@skilldeploy.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hey")
    end
  end
end
