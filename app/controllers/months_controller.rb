class MonthsController < ApplicationController
    rescue_from ActiveRecord::RenderInvalid, with: :render_invalid

    def index
        months = Months.all
        render json: month, status: :ok
    end

    def create
        month = Month.create!(month_params)
        render json: month, status: :created
    end

    private

    def month_params
        params.permit(:month, :year)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
