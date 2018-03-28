class Api::OrdersController < ApplicationController

  before_action :set_order, only [:update, :destroy]
  before_action :set_cart, only [:index, :create]

  def index
    render json: @cart.orders
  end

  def create
    order = @cart.orders.new(order_params)
    if order.save
      render json: order
    else
      render json: order.errors, status:422
    end
  end

  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: 422
    end
  end

  def destroy
    @order.destroy
  end

  private
    def order_params
      params.require(:order).permit(:quantity, :item_id)
    end

    def set_cart
      @cart = Cart.find(params[:cart_id])
    end

    def set_order
      @order = Order.find(params[:id])
    end
end
