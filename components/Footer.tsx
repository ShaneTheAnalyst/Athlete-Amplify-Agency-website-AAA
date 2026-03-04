
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center font-black text-black text-3xl relative group-hover:bg-yellow-400 transition-all">
                A
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-black rounded-full"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                Athlete <span className="text-yellow-500">Amplify</span>
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              The world's premier marketing and personal branding agency for professional football players. We build legacies that transcend the pitch.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talent Scout</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-xs font-medium">
            &copy; {new Date().getFullYear()} Athlete Amplify Agency. All Rights Reserved. Representing the elite.
          </p>
          
          <div className="flex gap-6">
            {[
              { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', url: 'https://www.instagram.com/athleteamplifyagency/' },
              { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', url: '#' },
              { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/athlete-amplify-agency/' },
              { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', url: '#' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target={social.url !== '#' ? "_blank" : undefined}
                rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                className="text-gray-500 hover:text-white transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
