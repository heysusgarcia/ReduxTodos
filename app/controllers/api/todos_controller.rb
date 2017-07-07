class Api::TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body)
  end
end
