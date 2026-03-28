/* Design: Elegância Moderna com Textura
   Página inicial com hero section e produtos em destaque
*/

import { Link } from 'wouter';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030889209/ckiHMdnj77xQwy8Q6wFGsd/hero-banner-C94yL9ifSkDpwhgus3jJQ5.webp';

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section relative h-screen max-h-[600px] sm:max-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Coleção Premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        <div className="relative container h-full flex flex-col justify-center items-start">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-widest text-sm">Coleção Nova</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Elegância Moderna
            </h1>

            <p className="text-lg text-gray-100 mb-8 max-w-md">
              Descubra nossa coleção exclusiva de roupas femininas sofisticadas e elegantes.
            </p>            <Link href="/produtos">
              <a className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:gap-3">                Explorar Coleção
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seleção curada das peças mais procuradas e amadas por nossas clientes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/produtos">
              <a className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
                Ver Todos os Produtos
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">
            Categorias
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Vestidos', icon: '👗', count: 24 },
              { name: 'Blusas', icon: '👚', count: 18 },
              { name: 'Calças', icon: '👖', count: 15 },
              { name: 'Acessórios', icon: '✨', count: 32 }
            ].map((category, idx) => (
              <Link key={idx} href={`/produtos?categoria=${category.name.toLowerCase()}`}>
                <a className="group p-8 bg-background rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.count} produtos</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24">
        <div className="container max-w-2xl">
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-8 sm:p-12 rounded-lg border border-accent/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Fique por Dentro
            </h2>
            <p className="text-muted-foreground mb-6">
              Receba as novidades, promoções exclusivas e dicas de moda direto no seu email.
            </p>
            <form className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
