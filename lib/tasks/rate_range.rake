namespace :rate_range do
  task populate: :environment do
    desc "Populate rate ranges"
    [[0, 50], [50, 100], [100, 150], [150, nil]].each do |from, to|
      RateRange.find_or_create_by! from: from, to: to
    end
  end
end
