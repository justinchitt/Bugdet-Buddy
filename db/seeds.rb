User.destroy_all
Month.destroy_all
Budget.destroy_all

puts "Generating seeds!!!!!"

#Users------------------------

justinchitt = User.create(first_name: "Justin", last_name: "Chittarath", username: "justinchitt", email: "justinchitt@gmail.com", password: "justin1234", password_confirmation: "justin1234")
jimster = User.create(first_name: "James", last_name: "Schmidt", username: "jimster", email: "jamesschmidty@gmail.com", password: "jimmyboi111", password_confirmation: "jimmyboi111")

#Months-----------------------
december = Month.create(month: "December", year: "2019")
january = Month.create(month: "January", year: "2021")
february = Month.create(month: "February", year: "2021")
march = Month.create(month: "March", year: "2021")
april = Month.create(month: "April", year: "2021")
may = Month.create(month: "may", year: "2021")

#Budgets---------------------

Budget.create(month_id: january.id, user_id: justinchitt.id, monthly_income: 5250.25, 
    car_payment: 120.22, car_insurance: 105.02, health_insurance: 200.35, 
    mortgage_or_rent: 1597.23, internet: 46.76, food_or_groceries: 212.22, clothing: 50, 
    utilities: 140.11, credit_card_debt: 90.21, cable: 0, recreational: 200,  
    savings_or_investments: 100, other: 10, total_expenses: 2872.12 , left_over: 2378.13)

Budget.create(month_id: march.id, user_id: justinchitt.id, monthly_income: 5111.25, 
    car_payment: 120.22, car_insurance: 105.02, health_insurance: 200.35, 
    mortgage_or_rent: 1597.23, internet: 46.76, food_or_groceries: 203.52, clothing: 50, 
    utilities: 125.11, credit_card_debt: 67.51, cable: 0, recreational: 300,  
    savings_or_investments: 100, other: 10, total_expenses: 2925.72 , left_over: 2733.12)

Budget.create(month_id: april.id, user_id: justinchitt.id, monthly_income: 4502.23, 
    car_payment: 192.33, car_insurance: 101.24, health_insurance: 0, 
    mortgage_or_rent: 1324.21, internet: 45.67, food_or_groceries: 230.22, clothing: 200, 
    utilities: 120.22, credit_card_debt: 234.44, cable: 0, recreational: 300,  
    savings_or_investments: 1000, other: 10, total_expenses: 3758.33 , left_over: 743.9)








puts "Seeds Generated"
