module Api
  module V1
    class JobsController < ApiController
      def index
        jobs = Job
          .includes(:job_types)
          .filter(params.slice(:job_type_name, :job_role_name))

        favorite_job_ids = FavoriteJob
          .where(job_id: jobs.map(&:id), user: current_user)
          .pluck(:job_id).to_set

        jobs = jobs.map do |job|
          {
            id: job.id,
            name: job.name,
            company_name: job.company_name,
            location: job.location,
            liked: favorite_job_ids.include?(job.id),
            job_types: [
              {
                name: job.job_types.first.name
              }
            ]
          }
        end
        #jobs = Job
        #  .includes(:job_types, :favorite_jobs)
        #  .select(:id, :company_name, :name)
        #  .joins("LEFT JOIN favorite_jobs ON favorite_jobs.job_id = jobs.id AND favorite_jobs.user_id = '1'")
        #  .select("favorite_jobs.id IS NOT NULL as liked")

        render json: jobs

      end
    end
  end
end
