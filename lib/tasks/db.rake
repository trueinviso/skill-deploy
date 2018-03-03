namespace :db do
  task :rebuild do
    desc "Rebuild db and seed"
    unless Rails.env.production?
      Rake::Task["db:drop"].invoke
      Rake::Task["db:create"].invoke
      Rake::Task["db:migrate"].invoke
      Rake::Task["db:seed_fu"].invoke
    end
  end
end
