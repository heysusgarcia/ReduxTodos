class Api::StepsController < ApplicationController
  def index
    @steps = Step.all
    render json: @steps
  end

  def show
    @step = Step.find(params[:id])
    render json: @step
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step.update(step_params)
      render json: @step, status: 200
    else
      render json: @step.error.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if @step.destroy
      render json: @step, status: 200
    else
      render json: @step.errors.full_messages, status: 500
    end
  end

  private

  def step_params
    params.require(:step).permit(:title, :body, :done, :todo_id)
  end
end
