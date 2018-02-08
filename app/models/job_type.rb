class JobType < ApplicationRecord
  # include HasAttachments
  # include Slugged

  # attachment :hero
  # attachment :thumbnail

  # has_many :category_subscription_plans, dependent: :destroy
  # has_many :categorizations, dependent: :destroy
  # has_many :category_topics, dependent: :destroy
  # has_many :subscription_plans, through: :category_subscription_plans
  # has_many :videos, through: :categorizations
  # has_many :topics, through: :category_topics
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
