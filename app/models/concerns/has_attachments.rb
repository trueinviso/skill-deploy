module HasAttachments
  extend ActiveSupport::Concern

  included do
    class_attribute :attachments,
      instance_accessor: false,
      instance_predicate: false
    self.attachments = Set[]
  end

  class_methods do
    def inherited(subclass)
      subclass.attachments = Set[]
      super
    end

    def attachment(type)
      has_one type, as: :attachable, dependent: :destroy
      accepts_nested_attributes_for type, allow_destroy: true
      attachments << type
    end
  end

  def respond_to_missing?(name, _)
    if name =~ /(.+?)_url=?/ && self.class.attachments.include?($1)
      true
    else
      super
    end
  end

  def method_missing(name, *args)
    if name =~ /(.+?)_url=?/ && self.class.attachments.include?($1.to_sym)
      define_type_url_getter($1)
      define_type_url_setter($1)
      send(name, *args)
    else
      super
    end
  end

  private

  def define_type_url_getter(type, size = :small)
    self.class.send(:define_method, "#{type}_url") do
      if send(type)
        send(type).file_url(size)
      else
        send("build_#{type}").file_url
      end
    end
  end

  def define_type_url_setter(type)
    self.class.send(:define_method, "#{type}_url=") do |arg|
      if send(type)
        send(type).file_remote_url = arg
      else
        send("build_#{type}").file_remote_url = arg
      end
    end
  end
end
