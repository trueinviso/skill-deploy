class RateRangeDecorator < Draper::Decorator
  delegate_all

  def label
    str = "$#{from}"
    str += "-$#{to}" if to.present?
    str += "+" if to.blank?
    str += "/hr"
    str += "  or  $#{from * 10}"
    str += "-$#{to * 10}" if to.present?
    str += "+" if to.blank?
    str += "/day"
    str
  end
end
