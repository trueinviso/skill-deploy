Unity::SubscriptionPlan.seed(:id) do |sp|
  sp.id = 2
  sp.gateway_id = "heyfam_single_project"
  sp.period = "1"
  sp.price = "200"
  sp.name = "Single Project - $200"
  sp.description = "Your project listing stays up for 30 days. " +
    "For teams looking to just hire one person. " +
    "This plan does not renew."
end

Unity::SubscriptionPlan.seed(:id) do |sp|
  sp.id = 1
  sp.gateway_id = "heyfam_unlimited_monthly"
  sp.period = "1"
  sp.price = "500"
  sp.name = "Unlimited Monthly - $500"
  sp.description = "Unlimited projects per month.  For teams " +
    "always looking for fresh talent.  This plan renews every month."
end
