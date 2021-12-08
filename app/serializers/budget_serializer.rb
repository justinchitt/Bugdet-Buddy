class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :monthly_income, :car_payment, :car_insurance, :health_insurance, :mortgage_or_rent, :internet, :food_or_groceries, :clothing, :utilities, :credit_card_debt, :cable, :recreational, :savings_or_investments, :other, :total_expenses, :left_over
  has_one :month
  has_one :user
end
