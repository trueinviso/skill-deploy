# frozen_string_literal: true

module Admin
  module Users
    class BlocksController < ApplicationController
      before_action :load_user, only: :update

      def update
        authorize(@job, policy_class: BlockPolicy)
        @user.user_profile.blocked!
        head :ok, content_type: "text/html"
      end

      private

      def load_user
        @user = User.find(params[:user_id])
      end
    end
  end
end
