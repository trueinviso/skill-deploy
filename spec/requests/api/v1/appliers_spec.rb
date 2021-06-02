# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Appliers", type: :request do
  let(:talents) { create_list(:user, 3, :with_talent_role, :with_profile) }
  let(:employer) { create(:user, :with_employer_role, :with_profile) }
  let(:employer2) { create(:user, :with_employer_role, :with_profile) }
  let!(:applied_fors) { job.appliers << talents }
  let(:job) { create(:job, user: employer) }
  let(:request) { get "/api/v1/jobs/#{job.id}/appliers" }

  describe "employer call job's appliers" do
    before do
      sign_in(employer)
      request
    end

    it { expect(response).to have_http_status(:ok) }

    it "body should have 3 appliers" do
      expect(JSON.parse(response.body)["data"].count).to eq 3
    end
  end

  describe "employer call not own job appliers" do
    before do
      sign_in(employer2)
      request
    end

    it { expect(response).to have_http_status(:unauthorized) }

    it "should have errors body Unauthorized" do
      expect(JSON.parse(response.body)["errors"]).to eq "Unauthorized"
    end
  end

  describe "unauthorized call to jobs appliers" do
    before { request }

    it { expect(response).to have_http_status(:unauthorized) }

    it "should have errors body Unauthorized" do
      expect(JSON.parse(response.body)["errors"]).to eq "Unauthorized"
    end
  end
end
