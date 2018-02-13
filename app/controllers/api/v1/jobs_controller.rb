module Api
  module V1
    class JobsController < ApiController
      def index
        jobs = Job
          .includes(:job_types, :favorite_jobs)
          .filter(params.slice(:job_type_name, :job_role_name))

        render status: 200,
          json: jobs, include: { job_types: { only: :name }, favorite_jobs: { user_id: current_user.id } }
      end
    end
  end
end
jobs = Job.all
favorite_job_ids = FavoriteJob.where(user: current_user).pluck(:job_id).to_set

jobs.map do |job|
  { id: job.id, is_favorite: favorite_job_ids.include?(job.id) }
end
