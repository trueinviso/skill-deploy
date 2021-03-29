require "rails_helper"

describe Role do
  describe "#talent?" do
    subject { role.talent? }

    let(:role) { build :role, name: role_name }

    context "when role name eql talent" do
      let(:role_name) { "Talent" }

      it { is_expected.to eq(true) }
    end

    context "when role name not eql talent" do
      let(:role_name) { "Another role" }

      it { is_expected.to eq(false) }
    end
  end
end
