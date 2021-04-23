# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Admin users block", type: :request do
  describe "change users profile status to blocked" do
    let(:admin) { create(:user, :with_admin_role) }
    let(:talent) { create(:user, :with_talent_role) }
    let(:talent_profile) { create(:user_profile, user: talent, status: :pending) }
    let!(:admin_profile) { create(:user_profile, user: admin) }


    before do
      sign_in(admin)
      patch "/admin/users/#{talent_profile.user.id}/block"
    end
    
    it "returns a 200" do
      expect(response).to have_http_status(:ok)
    end

    it "should change user profile status form pending to blocked" do
      expect { talent_profile.reload }.to change(talent_profile, :status)
                                      .from("pending")
                                      .to("blocked")
    end
  end
end
