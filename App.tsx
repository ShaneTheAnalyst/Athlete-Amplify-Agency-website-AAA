
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import About from './pages/About';
import ContactPage from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderForm from './pages/OrderForm';
import { CartProvider } from './context/CartContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // @ts-ignore
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black relative">
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order" element={<OrderForm />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <Header />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
