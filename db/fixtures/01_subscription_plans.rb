Unity::SubscriptionPlan.seed(:id) do |sp|
  sp.id = 1
  sp.gateway_id = "heyfam_unlimited_monthly"
  sp.period = "1"
  sp.price = "500"
end

Unity::SubscriptionPlan.seed(:id) do |sp|
  sp.id = 2
  sp.gateway_id = "heyfam_single_project"
  sp.period = "1"
  sp.price = "200"
end
