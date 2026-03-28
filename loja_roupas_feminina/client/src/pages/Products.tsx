/* Design: Elegância Moderna com Textura
   Página de produtos com filtros e grid
*/

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ChevronDown } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<string>('popular');

  const categories = ['vestidos', 'blusas', 'calças', 'acessórios'];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      filtered = [...filtered].reverse();
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Nossos Produtos</h1>
          <p className="text-lg text-muted-foreground">
            Explore nossa coleção completa de roupas femininas elegantes e sofisticadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg shadow-sm sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Categorias</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-foreground">Todas</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={selectedCategory === cat}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-foreground capitalize">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8 pb-8 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Preço</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Mínimo: R$ {priceRange[0]}</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Máximo: R$ {priceRange[1]}</label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Sort Filter */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Ordenar por</h3>
                <div className="space-y-3">
                  {[
                    { value: 'popular', label: 'Mais Popular' },
                    { value: 'newest', label: 'Mais Novo' },
                    { value: 'price-low', label: 'Menor Preço' },
                    { value: 'price-high', label: 'Maior Preço' },
                    { value: 'rating', label: 'Melhor Avaliado' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={sortBy === option.value}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-foreground">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <div className="mb-6 text-sm text-muted-foreground">
                  Mostrando {filteredProducts.length} de {products.length} produtos
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Nenhum produto encontrado com esses filtros.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
