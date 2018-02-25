# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180211171829) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.integer "experience"
    t.string "location"
    t.boolean "remote"
    t.text "world_changing_text"
    t.text "description"
    t.string "contact_name"
    t.string "contact_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "display_name"
    t.string "short_description"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  create_table "unity_subscription_plans", force: :cascade do |t|
    t.string "gateway_id", null: false
    t.string "period", null: false
    t.string "price", null: false
    t.string "group_enrollment_add_on_price"
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "unity_subscriptions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "subscription_plan_id"
    t.string "gateway_id"
    t.integer "gateway_status"
    t.datetime "trial_ends_at"
    t.boolean "group_enrolled"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subscription_plan_id"], name: "index_unity_subscriptions_on_subscription_plan_id"
    t.index ["user_id"], name: "index_unity_subscriptions_on_user_id"
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
    t.string "website"
    t.text "bio"
    t.string "twitter"
    t.string "facebook"
    t.string "linked_in"
    t.string "dribbble"
    t.string "github"
    t.string "codepen"
    t.string "medium"
    t.string "behance"
    t.string "instagram"
    t.string "vimeo"
    t.boolean "update_notifications", default: false
    t.boolean "weekly_newsletter", default: false
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_token"
    t.string "gateway_customer_id"
    t.string "authentication_token", limit: 30
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "employer_job_roles", "job_roles"
  add_foreign_key "employer_job_roles", "jobs"
  add_foreign_key "employer_job_types", "job_types"
  add_foreign_key "employer_job_types", "jobs"
  add_foreign_key "taggings", "tags"
end
