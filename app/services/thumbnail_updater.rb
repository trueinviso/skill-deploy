class ThumbnailUpdater
  attr_reader :user, :params

  def initialize(user, params)
    @user = user
    @params = params
  end

  def self.call!(user, params)
    new(user, params).update_thumbnail
  end

  def update_thumbnail
    result = record.update(params[model_type])
    return record.reload if result
    result
  end

  private

  def record
    return user if updating_user_thumbnail?
    return job if updating_job_thumbnail?
  end

  def updating_user_thumbnail?
    params[:model_type] === "user"
  end

  def updating_job_thumbnail?
    params[:model_type] === "job"
  end

  def job
    @job ||= user
      .jobs
      .find(params[:record_id])
  end

  def model_type
    params[:model_type].to_sym
  end
end
