class User < ApplicationRecord
    has_secure_password
    
    has_many :budgets
    has_many :months, through: :budgets

    validates :username, uniqueness: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
