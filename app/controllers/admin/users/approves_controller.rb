# frozen_string_literal: true

module Admin
  module Users
    class ApprovesController < ApplicationController
      before_action :load_user, only: :update

      def update
        authorize(@job, policy_class: ApprovePolicy)
        @user.user_profile.approved!
        head :ok, content_type: "text/html"
      end

      private

      def load_user
        @user = User.find(params[:user_id])
      end
    end
  end
end
