/* Design: Elegância Moderna com Textura
   App principal com rotas, providers e botão WhatsApp integrado ao carrinho
*/

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider, useCart } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

// Rotas do site
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtos" component={Products} />
      <Route path="/carrinho" component={Cart} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Botão WhatsApp que pega os produtos do carrinho
function WhatsAppButton() {
  const { cart } = useCart(); // cart é { items: CartItem[], total: number }

  // Log para verificar se o carrinho está atualizando
  console.log("Cart:", cart);

  const generateWhatsAppLink = () => {
    if (cart.items.length === 0) {
      return "https://wa.me/5521973203565?text=Carrinho vazio";
    }

    let message = "Olá! Gostaria de comprar os seguintes produtos:\n";

    cart.items.forEach(item => {
      message += `- ${item.product.name} x${item.quantity} = R$${(item.product.price * item.quantity).toFixed(2)}`;
      if (item.selectedSize) message += ` | Tamanho: ${item.selectedSize}`;
      if (item.selectedColor) message += ` | Cor: ${item.selectedColor}`;
      message += "\n";
    });

    message += `Total: R$${cart.total.toFixed(2)}`;

    return `https://wa.me/5521973203565?text=${encodeURIComponent(message)}`;
  };

  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        padding: "15px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
}

// App principal
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
            <WhatsAppButton /> {/* botão flutuante do WhatsApp */}
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;