class UrlValidator < ActiveModel::EachValidator
  URL_REGEX = /https?:\/\/[^:\/]+/

  def validate_each(record, attribute, value)
    return true if value.blank?
    unless value.match?(URL_REGEX)
      record.errors[attribute] << (options[:message] || "is not a valid url")
    end
  end
end
