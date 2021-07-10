class WorkExperience < ApplicationRecord
  belongs_to :user

  validate :end_date_after_start_date
  validate :date_period_in_the_past

  private

  def end_date_after_start_date
    return if start.nil? || self.end.nil?

    if start > self.end
      errors.add(:end_date, "must be after start date")
    end
  end

  def date_period_in_the_past
    return if start.nil? || self.end.nil?

    if start.future? || self.end.future?
      errors.add(:date, "start or end date can't be in the future")
    end
  end
end
