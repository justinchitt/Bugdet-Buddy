class Budget < ApplicationRecord
  belongs_to :month
  belongs_to :user
end
