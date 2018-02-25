class JobType < ApplicationRecord
  has_many :jobs

  validates :name,
    presence: true,
    uniqueness: true

  def name_with_description
    "<div class='small-11 columns right no-padding'>" +
       "<span>#{name} </span>" +
       "<span class='instructions'>#{description}</span>" +
    "</div>"
  end
end
