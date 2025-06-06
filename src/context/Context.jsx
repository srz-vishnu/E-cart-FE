import React, { createContext, useState, useContext} from "react";

// creatig the context
const CartContext = createContext();  // CartContext is the box where we store and share cart data

export const CartProvider = ({ children }) => {   // CartProvider is a component in which we wrap our app
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity =1) => {  // default qty as 1
        setCartItems(prevItems => {                // prevItems => {} is a function that receives the current cart items (previous state) and returns a new state.
            const existingItem = prevItems.find(cartItem => cartItem.id === product.id); //checking if there is already a  product exsist
            if (existingItem) {
                // updating products if there is a product already
                return prevItems.map(cartItem =>     // we map the item already there, ...item copies exsisting cartitem properties like qty, price etc
                    cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem 
                );
            } else {
                // add new product to the cart
                return [...prevItems, {...product,quantity}];
            }
            });
        };

        // remove item from the cart

        const removeFromCart = (productId) => {
            setCartItems(prevItems => prevItems.filter(
                cartItem=> cartItem.id !==productId
            ));
        };

        // update quantity for a product
        const updateQuantity = (productId, quantity) => {
            setCartItems(prevItems =>
                prevItems.map(cartItem=> // here we updates produce in the cart with more qunatity
                    cartItem.id === productId ? { ...cartItem, quantity } :cartItem,
                )
            );
        };

        // clear the cart

        const clearCart =() => {
            setCartItems([]); // makes cart empty
        };

        return (
            <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,
                updateQuantity, clearCart}}> {children} </CartContext.Provider>
        );
    };

    export const useCart = () => useContext(CartContext) // when we use useCart() in any component we gte access to cart and its functions


