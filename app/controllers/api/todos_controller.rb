class Api::TodosController < ApplicationController
  def index
    @todos = current_user.todos
    render json: @todos
  end

  def show
    @todo = current_user.todos.find(params[:id])
    render json: @todo
  end

  def create
    @todo = current_user.todos.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = current_user.todos.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo, status: 200
    else
      render json: @todo.error.full_messages, status: 422
    end
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
    if @todo.destroy
      render json: @todo , status: 200
    else
      render json: @todo.errors.full_messages, status: 500
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
