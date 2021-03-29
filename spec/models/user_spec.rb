require "rails_helper"

describe User do
  describe "associations" do
    it { is_expected.to belong_to(:rate_range).optional }
  end

  describe "validations" do
    subject { build(:user) }

    it { is_expected.to be_valid }
  end

  describe "relationships" do
    it { is_expected.to have_one(:subscription) }
    it do
      is_expected
        .to have_many(:favorites)
        .through(:favorite_screens)
        .source(:screen)
    end

    it do
      is_expected
        .to have_many(:downloaded)
        .through(:downloaded_screens)
        .source(:screen)
    end

    it do
      is_expected
        .to have_many(:roles)
        .through(:user_roles)
    end

    it do
      is_expected
        .to have_many(:permissions)
        .through(:user_permissions)
    end
  end

  describe ".subscribed?" do
    subject { build(:user, :with_monthly_subscription) }

    it "has stripe id" do
      expect(subject.subscribed?).to be_truthy
    end

    it "doesn't have stripe id" do
      subject.subscription.stripe_subscription_id = nil
      expect(subject.subscribed?).to be_falsey
    end
  end

  describe "#has_talent_role?" do
    subject { user.has_talent_role? }

    context "when user has talent role" do
      let(:user) { create(:user, :with_talent_role) }

      it { is_expected.to eq(true) }
    end

    context "when user doesn't have talent role" do
      let(:user) { create(:user) }

      it { is_expected.to eq(false) }
    end
  end
end
