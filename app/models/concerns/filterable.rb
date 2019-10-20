module Filterable
  extend ActiveSupport::Concern

  module ClassMethods
    def filter_result(filtering_params)
      results = where(nil)
      filtering_params.each do |k, v|
        results = results.public_send(k, v) if v.present?
      end
      results
    end
  end
end
