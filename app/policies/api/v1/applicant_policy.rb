# frozen_string_literal: true

module Api
  module V1
    class ApplicantPolicy < ApplicationPolicy
      def index?
        return false if user.blank?
        return false if record.user.blank?

        record.user.id == user.id
      end
    end
  end
end
