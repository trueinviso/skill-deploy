require 'spec_helper'

describe EmployerJobPolicy do
  subject { Employer::JobPolicy }

  permissions :create :index, :new do
    it "denies access if not a active paid employer" do
    end

    it "allows access for an active paid employer" do
    end
  end

  permissions :edit, :update?, :destroy do
    it "prevents access if not an active paid employer"
    it "prevents access if current user is not job's owner"
    it "allows for an active paid employer who owns this job"
  end
end