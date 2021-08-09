namespace :rate_range do
  task populate: :environment do
    desc "Populate rate ranges"
    [[5, 10], [10, 20], [35, 40], [50, 75], [75,100]].each do |from, to|
      RateRange.find_or_create_by! from: from, to: to
    end
  end
end
