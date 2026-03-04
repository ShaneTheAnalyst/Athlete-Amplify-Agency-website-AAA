
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Lock, CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { total, clearCart, cart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2500);
  };

  if (cart.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-40 pb-20 px-4 text-center"
      >
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 p-12 rounded-3xl">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to the Roster</h1>
          <p className="text-gray-400 mb-10">Your elite management session has been secured. Our lead agent will contact you shortly to begin your brand amplification.</p>
          <Link 
            to="/" 
            className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all"
          >
            Return to Dashboard
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/cart" className="p-2 hover:bg-white/10 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-4xl font-bold">Secure Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-sm">1</span>
                Athlete Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all" />
                <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all" />
                <input type="email" placeholder="Email Address" className="col-span-2 bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all" />
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center text-sm">2</span>
                Payment Method
              </h3>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6" />
                    <span className="font-medium">Credit / Debit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-gray-700 rounded"></div>
                    <div className="w-8 h-5 bg-gray-700 rounded"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM / YY" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all" />
                    <input type="text" placeholder="CVC" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">Tier {item.tier} Management</p>
                    </div>
                    <p className="font-bold">${item.price.toLocaleString()}</p>
                  </div>
                ))}
                <div className="h-px bg-white/10 my-6"></div>
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total Due</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full bg-yellow-500 text-black py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all disabled:opacity-50 mb-6"
              >
                {isProcessing ? 'Processing Securely...' : (
                  <>
                    <Lock className="w-5 h-5" /> Complete Secure Payment
                  </>
                )}
              </button>

              {cart.some(item => item.id === 'standard') && (
                <div className="space-y-4 mb-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <span className="relative px-4 bg-[#050505] text-xs text-gray-500 uppercase font-bold">Standard Package</span>
                  </div>
                  <form action="https://www.paypal.com/ncp/payment/6BL8HB8PFU93A" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}

              {cart.some(item => item.id === 'growth') && (
                <div className="space-y-4 mb-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <span className="relative px-4 bg-[#050505] text-xs text-gray-500 uppercase font-bold">Growth Package</span>
                  </div>
                  <form action="https://www.paypal.com/ncp/payment/4L4GTKDHQY3FA" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}

              {cart.some(item => item.id === 'premium') && (
                <div className="space-y-4 mb-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <span className="relative px-4 bg-[#050505] text-xs text-gray-500 uppercase font-bold">Premium Package</span>
                  </div>
                  <form action="https://www.paypal.com/ncp/payment/JZERMDLPACB5Q" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}

              {cart.some(item => item.id === 'elite-enterprise') && (
                <div className="space-y-4">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <span className="relative px-4 bg-[#050505] text-xs text-gray-500 uppercase font-bold">Elite Enterprise Package</span>
                  </div>
                  <form action="https://www.paypal.com/ncp/payment/3XR23QAS4A4BL" method="post" target="_blank" className="flex flex-col items-center gap-2">
                    <input 
                      type="submit" 
                      value="Pay Now" 
                      className="w-full bg-[#FFD140] text-black h-[42px] rounded-[0.25rem] font-bold text-base cursor-pointer hover:bg-[#e6bc39] transition-colors"
                    />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" className="h-6" />
                    <section className="text-[0.75rem] text-gray-500 flex items-center gap-1">
                      Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="h-[0.875rem]" />
                    </section>
                  </form>
                </div>
              )}
              
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
                <Lock className="w-3 h-3" />
                <span>256-bit SSL Encrypted Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
