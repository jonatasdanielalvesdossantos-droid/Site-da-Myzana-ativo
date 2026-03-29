import React from "react";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleWhatsApp = () => {
    if (cart.items.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    let message = "Olá! Gostaria de comprar os seguintes produtos:\n";

    cart.items.forEach((item) => {
      message += `- ${item.product.name} x${item.quantity} = R$${(
        item.product.price * item.quantity
      ).toFixed(2)}`;
      if (item.selectedSize) message += ` | Tamanho: ${item.selectedSize}`;
      if (item.selectedColor) message += ` | Cor: ${item.selectedColor}`;
      message += "\n";
    });

    message += `Total: R$${cartTotal.toFixed(2)}`;

    const link = `https://wa.me/5521973203565?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Meu Carrinho</h1>

      {cart.items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                {item.product.image && (
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div>
                  <h2 className="font-medium">{item.product.name}</h2>
                  {item.selectedSize && <p>Tamanho: {item.selectedSize}</p>}
                  {item.selectedColor && <p>Cor: {item.selectedColor}</p>}
                  <p>R$ {item.product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.product.id, Number(e.target.value))
                  }
                  className="w-16 border rounded p-1 text-center"
                />
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:opacity-80"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <p className="font-bold text-lg">Total: R$ {cartTotal.toFixed(2)}</p>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:opacity-80"
              >
                Limpar Carrinho
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 text-white px-4 py-2 rounded hover:opacity-80"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}