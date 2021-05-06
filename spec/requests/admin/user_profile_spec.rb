# frozen_string_literal: true

require "rails_helper"

RSpec.describe "User profile", type: :request do
  let(:admin) { create(:user, :with_admin_role) }
  let(:talent) { create(:user, :with_talent_role) }
  let(:talent_profile) { create(:user_profile, user: talent, status: :pending) }
  let!(:admin_profile) { create(:user_profile, user: admin) }
  let(:request) do
    patch "/admin/user_profiles/#{talent_profile.id}", params: { user_profile: { status: status } }
  end

  describe "change users profile status to approve" do
    before { sign_in(admin) }
    let(:status) { :approved }

    it "returns a 200" do
      request
      expect(response).to have_http_status(:ok)
    end

    it "should change user profile status form pending to approved" do
      request
      expect { talent_profile.reload }.to change(talent_profile, :status)
        .from("pending")
        .to("approved")
    end

    it "schould send email to user" do
      expect(enqueued_jobs.size).to eq(0)
      request
      expect(enqueued_jobs.size).to eq(1)
    end
  end

  describe "change users profile status to blocked" do
    before { sign_in(admin) }
    let(:status) { :blocked }

    it "returns a 200" do
      request
      expect(response).to have_http_status(:ok)
    end

    it "should change user profile status form pending to blocked" do
      request
      expect { talent_profile.reload }.to change(talent_profile, :status)
        .from("pending")
        .to("blocked")
    end

    it "schould not send email to user" do
      request
      expect(enqueued_jobs.size).to eq(0)
    end
  end
end
