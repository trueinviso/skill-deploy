# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_27_141947) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "applied_fors", force: :cascade do |t|
    t.integer "job_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "job_id"], name: "index_applied_fors_on_user_id_and_job_id", unique: true
  end

  create_table "attachments", force: :cascade do |t|
    t.string "name"
    t.string "attachable_type"
    t.bigint "attachable_id"
    t.jsonb "file_data", default: {}
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["attachable_type", "attachable_id"], name: "index_attachments_on_attachable_type_and_attachable_id"
  end

  create_table "employer_job_experiences", force: :cascade do |t|
    t.bigint "job_experience_id"
    t.bigint "job_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_experience_id"], name: "index_employer_job_experiences_on_job_experience_id"
    t.index ["job_id"], name: "index_employer_job_experiences_on_job_id"
  end

  create_table "employer_job_locations", force: :cascade do |t|
    t.bigint "job_id", null: false
    t.bigint "job_location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_id"], name: "index_employer_job_locations_on_job_id"
    t.index ["job_location_id"], name: "index_employer_job_locations_on_job_location_id"
  end

  create_table "employer_job_roles", force: :cascade do |t|
    t.bigint "job_role_id"
    t.bigint "job_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_employer_job_roles_on_job_id"
    t.index ["job_role_id"], name: "index_employer_job_roles_on_job_role_id"
  end

  create_table "employer_job_types", force: :cascade do |t|
    t.bigint "job_type_id"
    t.bigint "job_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_employer_job_types_on_job_id"
    t.index ["job_type_id"], name: "index_employer_job_types_on_job_type_id"
  end

  create_table "favorite_jobs", force: :cascade do |t|
    t.integer "job_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "job_id"], name: "index_favorite_jobs_on_user_id_and_job_id", unique: true
  end

  create_table "job_experiences", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_locations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "job_roles", force: :cascade do |t|
    t.bigint "job_id"
    t.string "name", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_job_roles_on_job_id"
  end

  create_table "job_types", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "job_id"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_job_types_on_job_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "company_name"
    t.string "company_website"
    t.text "description"
    t.string "contact_name"
    t.string "contact_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "twitter"
    t.string "facebook"
    t.string "instagram"
    t.integer "status", default: 0
    t.string "location"
    t.index ["user_id"], name: "index_jobs_on_user_id"
  end

  create_table "permissions", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "display_name"
    t.string "short_description"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rate_ranges", force: :cascade do |t|
    t.integer "from", null: false
    t.integer "to", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["from"], name: "index_rate_ranges_on_from", unique: true
    t.index ["to"], name: "index_rate_ranges_on_to", unique: true
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "display_name"
    t.string "short_description"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "social_media_profiles", force: :cascade do |t|
    t.bigint "user_id"
    t.string "behance"
    t.string "codepen"
    t.string "dribbble"
    t.string "facebook"
    t.string "github"
    t.string "instagram"
    t.string "linked_in"
    t.string "medium"
    t.string "twitter"
    t.string "vimeo"
    t.string "website"
    t.index ["user_id"], name: "index_social_media_profiles_on_user_id"
  end

  create_table "subscription_plans", force: :cascade do |t|
    t.string "gateway_id", null: false
    t.string "period", null: false
    t.string "price", null: false
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "subscription_plan_id"
    t.string "gateway_id"
    t.integer "gateway_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subscription_plan_id"], name: "index_subscriptions_on_subscription_plan_id"
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.bigint "tag_id"
    t.string "taggable_type"
    t.bigint "taggable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
    t.index ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable_type_and_taggable_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "unity_gateway_customers", force: :cascade do |t|
    t.string "gateway_id"
    t.integer "gateway_type"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_unity_gateway_customers_on_user_id"
  end

  create_table "unity_payment_methods", force: :cascade do |t|
    t.string "gateway_id"
    t.integer "gateway_type"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_unity_payment_methods_on_user_id"
  end

  create_table "unity_subscription_plans", force: :cascade do |t|
    t.string "gateway_id"
    t.string "period"
    t.string "price"
    t.string "group_enrollment_add_on_price"
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "unity_subscriptions", force: :cascade do |t|
    t.string "gateway_id"
    t.integer "gateway_status"
    t.integer "gateway_type"
    t.boolean "group_enrolled"
    t.bigint "subscription_plan_id"
    t.datetime "trial_ends_at"
    t.datetime "cancellation_date"
    t.datetime "marked_for_cancellation_at"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subscription_plan_id"], name: "index_unity_subscriptions_on_subscription_plan_id"
    t.index ["user_id"], name: "index_unity_subscriptions_on_user_id"
  end

  create_table "user_job_experiences", force: :cascade do |t|
    t.bigint "job_experience_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_experience_id"], name: "index_user_job_experiences_on_job_experience_id"
    t.index ["user_id"], name: "index_user_job_experiences_on_user_id"
  end

  create_table "user_job_locations", force: :cascade do |t|
    t.bigint "job_location_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_location_id"], name: "index_user_job_locations_on_job_location_id"
    t.index ["user_id"], name: "index_user_job_locations_on_user_id"
  end

  create_table "user_job_roles", force: :cascade do |t|
    t.bigint "job_role_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_role_id"], name: "index_user_job_roles_on_job_role_id"
    t.index ["user_id"], name: "index_user_job_roles_on_user_id"
  end

  create_table "user_job_types", force: :cascade do |t|
    t.bigint "job_type_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["job_type_id"], name: "index_user_job_types_on_job_type_id"
    t.index ["user_id"], name: "index_user_job_types_on_user_id"
  end

  create_table "user_permissions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "permission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["permission_id"], name: "index_user_permissions_on_permission_id"
    t.index ["user_id"], name: "index_user_permissions_on_user_id"
  end

  create_table "user_profiles", force: :cascade do |t|
    t.bigint "user_id"
    t.string "first_name"
    t.string "last_name"
    t.string "location"
    t.text "bio"
    t.string "headline"
    t.boolean "update_notifications", default: false
    t.boolean "weekly_newsletter", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "status", default: 0, null: false
    t.index ["user_id"], name: "index_user_profiles_on_user_id"
  end

  create_table "user_roles", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role_id"], name: "index_user_roles_on_role_id"
    t.index ["user_id"], name: "index_user_roles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "username", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.text "skills", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_token"
    t.string "gateway_customer_id"
    t.string "authentication_token", limit: 30
    t.string "provider"
    t.string "uid"
    t.bigint "rate_range_id"
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["rate_range_id"], name: "index_users_on_rate_range_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "work_experiences", force: :cascade do |t|
    t.bigint "user_id"
    t.string "title"
    t.string "company"
    t.datetime "start"
    t.datetime "end"
    t.boolean "current_role", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_work_experiences_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "employer_job_experiences", "job_experiences"
  add_foreign_key "employer_job_experiences", "jobs"
  add_foreign_key "employer_job_locations", "job_locations"
  add_foreign_key "employer_job_locations", "jobs"
  add_foreign_key "employer_job_roles", "job_roles"
  add_foreign_key "employer_job_roles", "jobs"
  add_foreign_key "employer_job_types", "job_types"
  add_foreign_key "employer_job_types", "jobs"
  add_foreign_key "taggings", "tags"
  add_foreign_key "user_job_experiences", "job_experiences"
  add_foreign_key "user_job_experiences", "users"
  add_foreign_key "user_job_locations", "job_locations"
  add_foreign_key "user_job_locations", "users"
  add_foreign_key "users", "rate_ranges"
end
