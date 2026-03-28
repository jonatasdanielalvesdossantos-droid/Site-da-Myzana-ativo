/* Design: Elegância Moderna com Textura
   Contexto de carrinho para gerenciar estado global
*/

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Cart, CartItem, Product } from '@/types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemsCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : { items: [], total: 0 };
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const addToCart = (product: Product, quantity: number, size?: string, color?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.items.find(
        item => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      let newItems;
      if (existingItem) {
        newItems = prevCart.items.map(item =>
          item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prevCart.items, { product, quantity, selectedSize: size, selectedColor: color }];
      }

      return {
        items: newItems,
        total: calculateTotal(newItems)
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.product.id !== productId);
      return {
        items: newItems,
        total: calculateTotal(newItems)
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      return {
        items: newItems,
        total: calculateTotal(newItems)
      };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const cartItemsCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal: cart.total, cartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
