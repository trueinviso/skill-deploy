namespace :rate_range do
  task populate: :environment do
    desc "Populate rate ranges"
    [[5, 10], [10, 20], [35, 40], [75,100]].each do |from, to|
      RateRange.create from: from, to: to
    end
  end
end