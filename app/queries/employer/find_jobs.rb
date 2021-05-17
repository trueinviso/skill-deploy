module Employer
  class FindJobs
    attr_accessor :initial_scope

    def initialize(initial_scope)
      @initial_scope = initial_scope
    end

    def call(params = {})
      scoped = includes(initial_scope, params.fetch(:includes, [:job_types]))
      scoped = sort(scoped, params.fetch(:sort_type, :desc),
                           params.fetch(:sort_field, :created_at))
      scoped
    end

    private

    def sort(scoped, sort_type, sort_field)
      scoped.order(sort_field => sort_type)
    end

    def includes(scoped, includes)
      scoped.includes(*includes)
    end
  end
end