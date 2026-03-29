/* Design: Elegância Moderna com Textura
   Card de produto com informações e ações
*/

import { ShoppingBag, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  // Função corrigida para adicionar ao carrinho
  const handleAddToCart = () => {
    setIsAdding(true);

    addToCart({
      product: product,
      quantity: 1,
      selectedSize: product.sizes?.[0],
      selectedColor: product.colors?.[0],
    });

    toast.success(`${product.name} adicionado ao carrinho!`);
    setTimeout(() => setIsAdding(false), 300);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos');
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-80 sm:h-96">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-4 right-4 bg-card text-foreground p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Fora de Estoque</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6">
        {/* Category */}
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          {product.category}
        </p>

        {/* Name */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-muted'}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-foreground">
            R$ {product.price?.toFixed(2) ?? '0.00'}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice?.toFixed(2) ?? '0.00'}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || isAdding}
          className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          {isAdding ? 'Adicionando...' : 'Adicionar ao Carrinho'}
        </button>
      </div>
    </div>
  );
}