import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipagem do produto e item do carrinho
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

// Tipagem do carrinho
interface Cart {
  items: CartItem[];
  total: number;
}

// Contexto do carrinho
interface CartContextType {
  cart: Cart;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existingIndex = prev.items.findIndex(i => i.product.id === item.product.id);
      let newItems = [...prev.items];

      if (existingIndex >= 0) {
        newItems[existingIndex].quantity += item.quantity;
      } else {
        newItems.push(item);
      }

      const newTotal = newItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

      return { items: newItems, total: newTotal };
    });
  };

  const clearCart = () => setCart({ items: [], total: 0 });

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
};