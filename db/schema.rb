# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_05_022249) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budgets", force: :cascade do |t|
    t.bigint "month_id", null: false
    t.bigint "user_id", null: false
    t.float "monthly_income"
    t.float "car_payment"
    t.float "car_insurance"
    t.float "health_insurance"
    t.float "mortgage_or_rent"
    t.float "internet"
    t.float "food_or_groceries"
    t.float "clothing"
    t.float "utilities"
    t.float "credit_card_debt"
    t.float "cable"
    t.float "recreational"
    t.float "savings_or_investments"
    t.float "other"
    t.float "total_expenses"
    t.float "left_over"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["month_id"], name: "index_budgets_on_month_id"
    t.index ["user_id"], name: "index_budgets_on_user_id"
  end

  create_table "months", force: :cascade do |t|
    t.string "month"
    t.string "year"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "budgets", "months"
  add_foreign_key "budgets", "users", on_delete: :cascade
end
