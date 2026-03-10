
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

// ==========================================
// BEGINNER CUSTOMIZATION SECTION
// ==========================================
const CONFIG = {
  STORE_NAME: "ATHLETE AMPLIFY",
  PRODUCT_NAME: "ELITE MANAGEMENT",
  PRODUCT_DESCRIPTION: "PREMIUM MARKETING & BRAND AMPLIFICATION SERVICES",
  PRICE_PER_SERVICE: 5000,
  CURRENCY: "USD",
  VARIANTS: [
    "Variant A (Standard)", 
    "Variant B (Growth)", 
    "Variant C (Premium)", 
    "Variant D (Enterprise)"
  ],
  DEFAULT_COUNTRY: "United States",
  SUPABASE_URL: "https://botkjvlmcqmczrbwuzyt.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_4eM1GKp4uo7UmIMGvAPlqw_a824fTnm",
};

const BENEFITS = [
  {
    title: "Global Reach",
    description: "Access our network of 75+ global brand partners and 500M+ audience reach.",
    icon: Globe
  },
  {
    title: "Elite Strategy",
    description: "Custom-tailored brand amplification strategies designed for generational influence.",
    icon: Zap
  },
  {
    title: "Secure Growth",
    description: "Verified commercial infrastructure to maximize your market value safely.",
    icon: ShieldCheck
  }
];

const STEPS = [
  {
    step: "01",
    title: "Select Your Tier",
    description: "Choose the management variant that aligns with your current career stage."
  },
  {
    step: "02",
    title: "Submit Details",
    description: "Fill out our secure order form with your athlete and brand information."
  },
  {
    step: "03",
    title: "Launch Campaign",
    description: "Our lead agents begin your brand amplification within 24 hours of onboarding."
  }
];

const FAQS = [
  {
    question: "How does the management service work?",
    answer: "We provide a full-service infrastructure including social media management, brand scouting, and legal referral to amplify your commercial value."
  },
  {
    question: "What is the typical growth timeline?",
    answer: "Most athletes see a significant increase in brand engagement and partnership inquiries within the first 30-60 days of our elite management."
  },
  {
    question: "Can I upgrade my tier later?",
    answer: "Yes, you can transition between tiers as your career evolves and your management needs become more complex."
  }
];
// ==========================================
// END CUSTOMIZATION SECTION
// ==========================================

const supabase = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_PUBLISHABLE_KEY);

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    country: CONFIG.DEFAULT_COUNTRY,
    product_variant: CONFIG.VARIANTS[0],
    quantity: 1,
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.customer_name) newErrors.customer_name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.address) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    try {
      const { error } = await supabase
        .from('orders')
        .insert([
          {
            ...formData,
            product_name: CONFIG.PRODUCT_NAME,
            status: 'pending'
          }
        ]);

      if (error) throw error;
      setStatus('success');
      setFormData({
        customer_name: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        country: CONFIG.DEFAULT_COUNTRY,
        product_variant: CONFIG.VARIANTS[0],
        quantity: 1,
        notes: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-yellow-200 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-black">A</div>
            {CONFIG.STORE_NAME}
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Benefits</a>
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Process</a>
            <a href="#order" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Order Now</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 p-4 flex flex-col gap-4"
          >
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Benefits</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Process</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Order Now</a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-100/30 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full uppercase tracking-widest mb-6">
              Premium Service Tier
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              {CONFIG.PRODUCT_NAME}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
              {CONFIG.PRODUCT_DESCRIPTION}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="#order" 
                className="w-full md:w-auto px-10 py-5 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
              >
                Secure Your Session <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#how-it-works" 
                className="w-full md:w-auto px-10 py-5 bg-white text-black border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all"
              >
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-3xl bg-gray-50 border border-gray-100 transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  <benefit.icon className="w-7 h-7 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Simple 3-Step Process</h2>
            <p className="text-gray-500 font-medium">From emerging talent to global icon in three easy steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10" />
            {STEPS.map((step, i) => (
              <div key={i} className="text-center bg-[#f8f9fa] px-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-8 shadow-xl shadow-black/20">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h2 className="text-3xl font-black mb-8 tracking-tight">Secure Order Form</h2>
              
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-green-50 border border-green-100 rounded-2xl flex items-center gap-4 text-green-700"
                >
                  <CheckCircle className="w-8 h-8 shrink-0" />
                  <div>
                    <p className="font-bold">Order Submitted Successfully!</p>
                    <p className="text-sm">Our team will contact you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-700"
                >
                  <AlertCircle className="w-8 h-8 shrink-0" />
                  <div>
                    <p className="font-bold">Submission Failed</p>
                    <p className="text-sm">Please check your connection and try again.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.customer_name ? 'border-red-300' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.customer_name && <p className="text-xs text-red-500 font-bold">{errors.customer_name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.phone ? 'border-red-300' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-xs text-red-500 font-bold">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-white border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">City</label>
                    <input 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border ${errors.city ? 'border-red-300' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all`}
                      placeholder="New York"
                    />
                    {errors.city && <p className="text-xs text-red-500 font-bold">{errors.city}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Country</label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Address</label>
                  <input 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-white border ${errors.address ? 'border-red-300' : 'border-gray-200'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all`}
                    placeholder="123 Elite St"
                  />
                  {errors.address && <p className="text-xs text-red-500 font-bold">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Service Variant</label>
                    <select 
                      name="product_variant"
                      value={formData.product_variant}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none"
                    >
                      {CONFIG.VARIANTS.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Quantity</label>
                    <input 
                      name="quantity"
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Additional Notes</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                    placeholder="Any specific requirements?"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-6 bg-black text-white rounded-2xl font-black text-lg hover:bg-gray-800 transition-all disabled:opacity-50 shadow-2xl shadow-black/20 flex items-center justify-center gap-3"
                >
                  {status === 'submitting' ? 'Processing Securely...' : 'Complete Order Now'}
                </button>
              </form>
            </div>

            {/* Right: Summary */}
            <div className="sticky top-32">
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
                <h3 className="text-2xl font-black mb-8 tracking-tight">Order Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                      <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg">{CONFIG.PRODUCT_NAME}</p>
                      <p className="text-sm text-gray-400">{formData.product_variant}</p>
                    </div>
                    <p className="font-black text-lg">
                      {CONFIG.CURRENCY} {(CONFIG.PRICE_PER_SERVICE * formData.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-gray-50">
                  <div className="flex justify-between text-gray-500 font-medium">
                    <span>Service Fee</span>
                    <span>{CONFIG.CURRENCY} {CONFIG.PRICE_PER_SERVICE.toLocaleString()} x {formData.quantity}</span>
                  </div>
                  <div className="flex justify-between text-gray-500 font-medium">
                    <span>Processing</span>
                    <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Free</span>
                  </div>
                  <div className="h-px bg-gray-100 my-6" />
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Amount</p>
                      <p className="text-4xl font-black tracking-tighter">
                        {CONFIG.CURRENCY} {(CONFIG.PRICE_PER_SERVICE * formData.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-600 shrink-0" />
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    Your payment is secured with 256-bit SSL encryption. We never store your sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-black tracking-tighter mb-4">
            {CONFIG.STORE_NAME}
          </div>
          <p className="text-gray-400 text-sm mb-8">
            © {new Date().getFullYear()} {CONFIG.STORE_NAME}. All rights reserved.
          </p>
          <div className="flex justify-center gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Refund Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderForm;
