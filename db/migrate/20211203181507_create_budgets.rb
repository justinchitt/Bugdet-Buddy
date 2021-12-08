class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.belongs_to :month, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :monthly_income
      t.integer :car_payment
      t.integer :car_insurance
      t.integer :health_insurance
      t.integer :mortgage_or_rent
      t.integer :internet
      t.integer :food_or_groceries
      t.integer :clothing
      t.integer :utilities
      t.integer :credit_card_debt
      t.integer :cable
      t.integer :recreational
      t.integer :savings_or_investments
      t.integer :other
      t.integer :total_expenses
      t.integer :left_over

      t.timestamps
    end
  end
end
