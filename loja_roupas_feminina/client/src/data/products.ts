/* Design: Elegância Moderna com Textura
   Dados de produtos da loja de roupas feminina
*/

import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vestido Linho Bege',
    category: 'vestidos',
    price: 189.90,
    originalPrice: 249.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030889209/ckiHMdnj77xQwy8Q6wFGsd/hero-banner-C94yL9ifSkDpwhgus3jJQ5.webp',
    description: 'Vestido elegante em linho natural com corte envolvente. Perfeito para eventos e uso casual sofisticado.',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Bege', 'Branco', 'Cinza']
  },
  {
    id: '2',
    name: 'Vestido Blush Fluido',
    category: 'vestidos',
    price: 219.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030889209/ckiHMdnj77xQwy8Q6wFGsd/collection-summer-7z8rasyof3yFCxQyobjJnw.webp',
    description: 'Vestido fluido em tons blush com mangas curtas. Ideal para dias quentes e eventos especiais.',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blush', 'Rosa Claro', 'Marfim']
  },
  {
    id: '3',
    name: 'Vestido Preto Sofisticado',
    category: 'vestidos',
    price: 279.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030889209/ckiHMdnj77xQwy8Q6wFGsd/collection-elegant-KPABdbTVMzifKJdvXT9Sdy.webp',
    description: 'Vestido preto em seda com cinto dourado. Elegância pura para noites especiais.',
    rating: 5.0,
    reviews: 89,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Preto']
  },
  {
    id: '4',
    name: 'Blusa Linho Branca',
    category: 'blusas',
    price: 129.90,
    originalPrice: 169.90,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030889209/ckiHMdnj77xQwy8Q6wFGsd/collection-casual-CHALPtQy6Ecp6mQnEXxT6g.webp',
    description: 'Blusa em linho 100% natural com acabamento refinado. Versátil para qualquer ocasião.',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Branco', 'Creme', 'Bege']
  },
  {
    id: '5',
    name: 'Blusa Seda Blush',
    category: 'blusas',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop',
    description: 'Blusa em seda pura com textura delicada. Sofisticação em cada detalhe.',
    rating: 4.9,
    reviews: 178,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blush', 'Rosa Claro', 'Branco']
  },
  {
    id: '6',
    name: 'Blusa Preta Elegante',
    category: 'blusas',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=600&fit=crop',
    description: 'Blusa preta com gola refinada. Essencial do guarda-roupa sofisticado.',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Preto', 'Cinza Escuro']
  },
  {
    id: '7',
    name: 'Calça Bege Reta',
    category: 'calças',
    price: 179.90,
    originalPrice: 229.90,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop',
    description: 'Calça reta em linho com corte perfeito. Conforto e estilo em harmonia.',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Bege', 'Creme', 'Cinza Claro']
  },
  {
    id: '8',
    name: 'Calça Preta Slim',
    category: 'calças',
    price: 169.90,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop',
    description: 'Calça slim em algodão premium. Elegância e conforto para o dia a dia.',
    rating: 4.7,
    reviews: 198,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Preto', 'Cinza Escuro', 'Marrom']
  },
  {
    id: '9',
    name: 'Calça Cinza Claro',
    category: 'calças',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop',
    description: 'Calça em tons neutros com acabamento premium. Versátil e sofisticada.',
    rating: 4.9,
    reviews: 132,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cinza Claro', 'Cinza Médio', 'Bege']
  },
  {
    id: '10',
    name: 'Bolsa Couro Dourada',
    category: 'acessórios',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop',
    description: 'Bolsa em couro genuíno com acabamento em ouro. Luxo e funcionalidade.',
    rating: 5.0,
    reviews: 76,
    inStock: true,
    sizes: ['Único'],
    colors: ['Dourado']
  },
  {
    id: '11',
    name: 'Cinto Ouro Fino',
    category: 'acessórios',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop',
    description: 'Cinto fino em metal dourado. Detalhe perfeito para qualquer look.',
    rating: 4.8,
    reviews: 94,
    inStock: true,
    sizes: ['Único'],
    colors: ['Dourado']
  },
  {
    id: '12',
    name: 'Colar Pérola Elegante',
    category: 'acessórios',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop',
    description: 'Colar em pérola com corrente delicada. Sofisticação atemporal.',
    rating: 4.9,
    reviews: 112,
    inStock: true,
    sizes: ['Único'],
    colors: ['Branco']
  }
];
