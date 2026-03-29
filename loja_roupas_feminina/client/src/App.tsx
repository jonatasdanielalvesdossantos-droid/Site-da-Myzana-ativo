/* Design: Elegância Moderna com Textura
   App principal com rotas e providers
*/

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/produtos"} component={Products} />
      <Route path={"/carrinho"} component={Cart} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

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
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
<a
  href="https://wa.me/5599999999999?text=Olá,%20vim%20pelo%20site%20e%20quero%20comprar"
  target="_blank"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    textDecoration: "none",
    fontSize: "20px"
  }}
>
  💬
</a>