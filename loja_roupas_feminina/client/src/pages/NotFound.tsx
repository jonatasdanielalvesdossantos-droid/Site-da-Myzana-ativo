/* Design: Elegância Moderna com Textura
   Página 404 - Não Encontrado
*/

import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container text-center py-20">
        <h1 className="text-7xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-4xl font-bold text-foreground mb-4">Página Não Encontrada</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <a className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
            <ArrowLeft className="w-5 h-5" />
            Voltar para Home
          </a>
        </Link>
      </div>
    </div>
  );
}
