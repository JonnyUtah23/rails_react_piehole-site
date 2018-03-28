class CartsController < ApplicationController
  def create
    cart = Cart.new(cart_params)
    if cart.save
      render json: cart
    else
      render json: cart.errors, status: 422
    end
  end

  def update
    cart = Cart.find(params[:id])
    if cart.update(cart_params)
      render json: cart
    else
      render json: cart.errors, status: 422
    end
  end

  def destroy
    Cart.find(params[:id]).destroy
  end

  private
  
    def cart_params
      params.require(:cart).permit(:fulfilled)
    end

end
