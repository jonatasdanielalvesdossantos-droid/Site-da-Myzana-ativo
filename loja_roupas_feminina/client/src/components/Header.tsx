/* Design: Elegância Moderna com Textura
   Header com navegação e carrinho
*/

import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'wouter';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItemsCount } = useCart();

  return (
    <header className="bg-card text-card-foreground shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-2xl text-accent-gold hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-card font-bold">
              L
            </div>
            <span className="hidden sm:inline">Myzana Modas</span>
          </a>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-foreground hover:text-accent transition-colors font-medium">Home</a>
          </Link>
          <Link href="/produtos">
            <a className="text-foreground hover:text-accent transition-colors font-medium">Produtos</a>
          </Link>
          <Link href="/sobre">
            <a className="text-foreground hover:text-accent transition-colors font-medium">Sobre</a>
          </Link>
          <Link href="/contato">
            <a className="text-foreground hover:text-accent transition-colors font-medium">Contato</a>
          </Link>
        </nav>

        {/* Cart and Menu */}
        <div className="flex items-center gap-4">
          <Link href="/carrinho">
            <a className="relative p-2 hover:bg-muted hover:opacity-80 rounded-lg transition-colors">
              <ShoppingBag className="w-6 h-6 text-foreground" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-muted hover:opacity-80 rounded-lg transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Home</a>
            </Link>
            <Link href="/produtos">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Produtos</a>
            </Link>
            <Link href="/sobre">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Sobre</a>
            </Link>
            <Link href="/contato">
              <a className="text-foreground hover:text-accent transition-colors font-medium">Contato</a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
