class Api::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    if user_signed_in?
      item = Item.new(item_params)
      if item.save
        render json: item
      else
        render json: item.errors, status: 422
      end
    else
      render_forbidden
    end
  end

  def update
    if user_signed_in?
      item = Item.find(params[:id])
      if item.update(item_params)
        render json: item
      else
        render json: item.errors, status: 422
      end
    else
      render_forbidden
    end
  end

  def destroy
    if user_signed_in?
      Item.find(params[:id]).destroy
    else
      render_forbidden
    end
  end

  private

  def render_forbidden
    render json: {message: "Insufficient Privileges"}, status: 403
  end

  def item_params
    params.require(:item).permit(:name, :price, :description, :category)
  end
end
