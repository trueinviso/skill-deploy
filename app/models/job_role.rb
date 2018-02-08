class JobRole < ApplicationRecord
  has_many :jobs

  has_many :taggings, as: :taggable
  has_many :tags, through: :taggings

  def name_with_description
    "<div class='small-11 columns right no-padding'>" +
       "<span>#{name} </span>" +
       "<span class='instructions'>#{description}</span>" +
    "</div>"
  end
end
