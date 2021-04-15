module ProfileHelper
  def rate_range_options
    RateRange.decorate.map do |rr|
      { id: rr.id, from: rr.from, to: rr.to, label: rr.label }
    end
  end
end