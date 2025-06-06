import React from "react";
import { useCart } from "../context/context";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();  // using it from the context, it is declared on the context page

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber = Number(item.price.replace('$', '')) || 0;
    return total + priceNumber * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return <p className="text-center mt-10 text-xl">Your cart is empty</p>;
  }

  return (
    <div className="w-11/12 xl:w-4/5 m-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>{item.price} each</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="px-3 py-1 bg-gray-200 rounded"
            >-</button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >+</button>
          </div>
          <div>
            <p>
              {/* Price times quantity */}
              ${((Number(item.price.replace('$', '')) || 0) * item.quantity).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right mt-6 text-xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <div className="mt-6">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;