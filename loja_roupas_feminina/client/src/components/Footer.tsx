/* Design: Elegância Moderna com Textura
   Footer com informações e links
*/

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Sobre Nós</h3>
            <p className="text-muted-foreground">
              Somos uma loja de roupas femininas dedicada a oferecer elegância, qualidade e sofisticação em cada peça.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos">
                  <a className="text-muted-foreground hover:text-accent transition-colors">Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <a className="text-muted-foreground hover:text-accent transition-colors">Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a className="text-muted-foreground hover:text-accent transition-colors">Contato</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent" />
                contato@loja.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent" />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Myzana Modas. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Termos de Serviço</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
