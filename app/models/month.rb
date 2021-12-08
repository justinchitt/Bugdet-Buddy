class Month < ApplicationRecord
    has_many :budgets
    has_many :users, through: :budgets
end
