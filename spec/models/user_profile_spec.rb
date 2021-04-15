require "rails_helper"

describe UserProfile do
  describe "enums" do
    it { is_expected.to define_enum_for(:status).with_values(pending: 0, approved: 1, blocked: 2) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:status) }
  end
end
