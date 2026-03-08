import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { CartProvider } from "./context/CartProvider.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductsPage from "./components/pages/ProductPage.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
