
import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart, total, itemCount } = useCart();

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-40 pb-20 px-4 text-center"
      >
        <div className="max-w-md mx-auto">
          <ShoppingBag className="w-20 h-20 mx-auto mb-8 text-gray-600" />
          <h1 className="text-4xl font-bold mb-4">Your Roster is Empty</h1>
          <p className="text-gray-400 mb-10">You haven't selected any management packages yet.</p>
          <Link 
            to="/services" 
            className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all"
          >
            Explore Packages
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
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Your Selected Packages</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div 
                key={item.id}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.duration}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold">${item.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Subtotal</p>
                    <p className="text-xl font-bold">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl sticky top-32">
              <h3 className="text-2xl font-bold mb-8">Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Packages</span>
                  <span>{itemCount}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Service Fees</span>
                  <span>$0.00</span>
                </div>
                <div className="h-px bg-white/10 my-4"></div>
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
              
              <Link 
                to="/checkout"
                className="w-full bg-yellow-500 text-black py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              
              <p className="text-center text-xs text-gray-500 mt-6">
                Secure checkout powered by Athlete Amplify Global
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
