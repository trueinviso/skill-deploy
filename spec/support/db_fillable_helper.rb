# frozen_string_literal: true

module DbFillableHelper
  def run_fixtures(fixtures)
    SeedFu.quiet = true
    SeedFu.seed("#{Rails.root}/db/fixtures", /#{fixtures}/)
  end
end
