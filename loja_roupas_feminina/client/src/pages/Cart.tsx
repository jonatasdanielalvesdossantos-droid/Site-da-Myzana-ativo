/* Design: Elegância Moderna com Textura
   Página do carrinho de compras
*/

import { useCart } from '@/contexts/CartContext';
import { Link } from 'wouter';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  const handleCheckout = () => {
    toast.success('Funcionalidade de checkout em desenvolvimento!');
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-12">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-foreground mb-4">Seu Carrinho</h1>
            <p className="text-lg text-muted-foreground mb-8">Seu carrinho está vazio</p>
            <Link href="/produtos">
              <a className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                <ArrowLeft className="w-5 h-5" />
                Continuar Comprando
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Seu Carrinho</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              {cart.items.map((item, idx) => (
                <div key={idx} className="border-b border-border last:border-b-0 p-6">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.selectedSize && <span>Tamanho: {item.selectedSize} | </span>}
                        {item.selectedColor && <span>Cor: {item.selectedColor}</span>}
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      <div className="flex items-center gap-2 bg-muted rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-border rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-border rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={() => clearCart()}
                className="text-destructive hover:text-destructive/80 font-semibold transition-colors"
              >
                Limpar Carrinho
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">Resumo do Pedido</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal</span>
                  <span>R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Frete</span>
                  <span className="text-accent font-semibold">Grátis</span>
                </div>
                <div className="flex justify-between text-foreground">
                  <span>Desconto</span>
                  <span className="text-accent">-R$ 0,00</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-foreground mb-6">
                <span>Total</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 mb-3"
              >
                Finalizar Compra
              </button>

              <Link href="/produtos">
                <a className="block text-center text-accent font-semibold hover:text-opacity-80 transition-colors">
                  Continuar Comprando
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
