class AppliersSerializer
  attr_reader :user, :appliers

  def initialize(user, appliers)
    @user = user
    @appliers = appliers
  end

  def self.build(user, appliers)
    new(user, appliers).build
  end

  def build
    appliers.map do |applier|
      {
        first_name: applier.user_profile.first_name,
        last_name: applier.user_profile.last_name,
        thumbnail_url: applier.thumbnail_url,
        profile_url: "needs 203 PR to work correct",
      }
    end
  end
end
