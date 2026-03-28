/* Design: Elegância Moderna com Textura
   Tipos e estruturas de dados para a loja de roupas feminina
*/

export interface Product {
  id: string;
  name: string;
  category: 'vestidos' | 'blusas' | 'calças' | 'acessórios';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  inStockOnly?: boolean;
}
