class MessagesSerializer
  include JSONAPI::Serializer
  set_key_transform :camelcase
end
