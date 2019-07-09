require 'spec_helper'

module Employer
  describe JobPolicy do
    subject { described_class.new(user, job) }
    let(:job) { build(:job) }

    context 'employer' do
      let(:user) { create(:employer) }

      it "forbid all actions" do
        is_expected.to forbid_actions([
          :index,
          :new,
          :create,
          :edit,
          :update,
          :destroy
        ])
      end
    end

    context 'job seeker' do
      let(:user) { create(:job_seeker) }

      it "forbid all actions" do
        is_expected.to forbid_actions([
          :index,
          :new,
          :create,
          :edit,
          :update,
          :destroy
        ])
      end
    end

    context 'active paid employer' do
      let(:user) { create(:employer, :active_subscriber) }

      it "forbid actions" do
        is_expected.to forbid_actions([
          :edit,
          :update,
          :destroy
        ])
      end

      it "permit actions" do
        is_expected.to permit_actions([
          :index,
          :new,
          :create,
        ])
      end
    end

    context 'owner with active paid subscription' do
      let(:user) { create(:employer, :active_subscriber) }
      before { job.user_id = user.id }
  
      it "permit all actions" do
        is_expected.to permit_actions([
          :index,
          :new,
          :create,
          :edit,
          :update,
          :destroy
        ])
      end
    end
  end
end