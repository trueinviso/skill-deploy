require "rails_helper"

describe RateRangeDecorator do
  let(:rate_range) { build :rate_range }
  let(:decorated_range) { rate_range.decorate }

  describe "#label" do
    subject { decorated_range.label }

    it "checks label" do
      day_from_rate = rate_range.from * 10
      day_to_rate = rate_range.to * 10

      is_expected.to(
        eq("$#{rate_range.from}-$#{rate_range.to}/hr  or  $#{day_from_rate}-$#{day_to_rate}/day")
      )
    end
  end
end