
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] uppercase">
              Tell Us <br /> <span className="text-yellow-500">Your Story.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-md font-light">
              Ready to take your professional presence to the next level? Our consultants are ready to build your global legacy.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Email us</div>
                  <div className="text-lg font-bold">partnerships@athleteamplifyagency.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Global HQ</div>
                  <div className="text-lg font-bold">Africa | South America | Europe | North America | Asia | Australia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] flex flex-col justify-center items-center text-center">
            <h3 className="text-3xl font-bold mb-6">Start Your Journey</h3>
            <p className="text-gray-400 mb-10 max-w-sm">
              Complete our elite application form to begin your brand amplification process.
            </p>
            <Link 
              to="/contact" 
              className="w-full py-5 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-yellow-400 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Open Application <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
