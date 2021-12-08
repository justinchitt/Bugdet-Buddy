class ChangeBudgetToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :budgets, :monthly_income, :float
  end
end
