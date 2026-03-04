
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Let's Build Your Legacy.</h1>
            <p className="text-xl text-gray-400 mb-12">
              Our team of experts is ready to discuss your career goals and how we can amplify your brand globally.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Email</p>
                  <p className="text-xl font-medium">info@athleteamplifyagency.com</p>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/company/athlete-amplify-agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0077b5] transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">LinkedIn</p>
                  <p className="text-xl font-medium group-hover:text-white transition-colors">Athlete Amplify Agency</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Global HQ</p>
                  <p className="text-xl font-medium">Africa | South America | Europe | North America | Asia | Australia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Message Received</h2>
                <p className="text-gray-400">Our elite management team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-white underline underline-offset-8 hover:text-gray-400 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all"
                      placeholder="Cristiano Ronaldo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all"
                      placeholder="cr7@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-widest">Current Club / Agency</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all"
                    placeholder="Real Madrid C.F."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-all resize-none"
                    placeholder="Tell us about your career goals..."
                  />
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full bg-white text-black py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition-all disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Processing...' : (
                    <>
                      Send Inquiry <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
