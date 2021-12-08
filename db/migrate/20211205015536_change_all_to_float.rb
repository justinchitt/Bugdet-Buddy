class ChangeAllToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :budgets, :car_payment, :float
    change_column :budgets, :car_insurance, :float
    change_column :budgets, :health_insurance, :float
    change_column :budgets, :mortgage_or_rent, :float
    change_column :budgets, :internet, :float
    change_column :budgets, :food_or_groceries, :float
    change_column :budgets, :clothing, :float
    change_column :budgets, :utilities, :float
    change_column :budgets, :credit_card_debt, :float
    change_column :budgets, :cable, :float
    change_column :budgets, :recreational, :float
    change_column :budgets, :savings_or_investments, :float
    change_column :budgets, :other, :float
    change_column :budgets, :total_expenses, :float
    change_column :budgets, :left_over, :float
  end
end
