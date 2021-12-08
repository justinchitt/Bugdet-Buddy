class BudgetsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        budgets = Budget.all.order("created_at DESC")
        render json: budgets, status: :ok
    end

    def create
        months = Month.create!(month_params)
        params = budget_params
        params["month_id"] = months.id
        budget = Budget.create!(params)
        render json: budget, status: :created
    end

    def show
        budget = Budget.find(params[:id])
        render json: budget, status: :ok
    end

    def destroy
        budget = Budget.find(params[:id])
        budget.destroy
        render json: budget
    end

    def update
        budget = Budget.find(params[:id])
        budget.update(budget_params)
        render json: budget
    end

    private

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found
        render json: {error: "Budget not found"}, status: :not_found
    end

    def budget_params
        params.permit(:user_id, :monthly_income, :car_payment, :car_insurance, :health_insurance, :mortgage_or_rent, :internet, :food_or_groceries, :clothing, :utilities, :credit_card_debt, :cable, :recreational, :savings_or_investments, :other, :total_expenses, :left_over)
    end

    def month_params
        params.permit(:month, :year)
    end
    
end
