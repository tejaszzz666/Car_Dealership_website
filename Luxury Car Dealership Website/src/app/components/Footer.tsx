import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl tracking-wider uppercase font-[700] mb-4">
              <span className="text-[var(--ferrari-red)]">APEX</span>
              <span className="text-white ml-2">MOTORS</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Where passion meets performance. Curating the world's most exceptional supercars for the most discerning collectors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:border-[var(--ferrari-red)] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:border-[var(--ferrari-red)] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:border-[var(--ferrari-red)] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 border border-white/10 text-gray-400 hover:text-white hover:border-[var(--ferrari-red)] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-[700] uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Models', 'Inventory', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="text-gray-400 hover:text-[var(--ferrari-red)] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-[700] uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[var(--ferrari-red)] transition-colors cursor-pointer">Buy a Car</li>
              <li className="hover:text-[var(--ferrari-red)] transition-colors cursor-pointer">Sell Your Car</li>
              <li className="hover:text-[var(--ferrari-red)] transition-colors cursor-pointer">Financing</li>
              <li className="hover:text-[var(--ferrari-red)] transition-colors cursor-pointer">Service & Parts</li>
              <li className="hover:text-[var(--ferrari-red)] transition-colors cursor-pointer">Trade-In</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-[700] uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe for exclusive offers and new arrivals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-zinc-900 border border-white/10 px-4 py-2 text-white text-sm focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
              />
              <button className="bg-[var(--ferrari-red)] px-4 py-2 hover:bg-[var(--ferrari-red-dark)] transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Apex Motors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[var(--ferrari-red)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--ferrari-red)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--ferrari-red)] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
