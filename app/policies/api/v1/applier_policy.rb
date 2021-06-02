# frozen_string_literal: true

module Api
  module V1
    class ApplierPolicy < ApplicationPolicy
      def index?
        user && record.user == user
      end
    end
  end
end
