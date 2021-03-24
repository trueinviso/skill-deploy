require "rails_helper"

describe RateRange do
  describe "validations" do
    subject { build :rate_range }

    it { is_expected.to validate_presence_of(:from) }
    it { is_expected.to validate_uniqueness_of(:from) }

    it { is_expected.to validate_presence_of(:to) }
    it { is_expected.to validate_uniqueness_of(:to) }
  end
end
