class RateRangeDecorator < Draper::Decorator
  delegate_all

  def label
    "$#{from}-$#{to}/hr  or  $#{from * 10}-$#{to * 10}/day"
  end
end