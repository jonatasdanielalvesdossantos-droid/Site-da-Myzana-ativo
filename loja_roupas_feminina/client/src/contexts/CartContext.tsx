import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipagem do produto e item do carrinho
export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

// Tipagem do contexto do carrinho
interface CartContextType {
  cart: { items: CartItem[] };
  cartTotal: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

// Criando contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });

  // Adiciona item ao carrinho
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const index = prev.items.findIndex((i) => i.product.id === item.product.id);
      const newItems = [...prev.items];

      if (index >= 0) {
        newItems[index].quantity += item.quantity;
      } else {
        newItems.push(item);
      }

      return { items: newItems };
    });
  };

  // Remove item do carrinho
  const removeFromCart = (productId: number) => {
    setCart((prev) => ({
      items: prev.items.filter((i) => i.product.id !== productId),
    }));
  };

  // Atualiza quantidade do item
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) return removeFromCart(productId);
    setCart((prev) => {
      const newItems = prev.items.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      );
      return { items: newItems };
    });
  };

  // Limpa carrinho
  const clearCart = () => setCart({ items: [] });

  // Total do carrinho com proteção contra product undefined
  const cartTotal = cart.items.reduce(
    (sum, i) => sum + (i.product?.price ?? 0) * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
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