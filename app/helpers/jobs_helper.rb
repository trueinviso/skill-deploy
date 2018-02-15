module JobsHelper
  def job_border_color(job)
    return unless job.job_types.present?
    case job.job_types.first.name
    when "Full Time"
      "full-time"
    when "Part Time"
      "part-time"
    when "Freelance"
      "contract"
    else
      ""
    end
  end
end
