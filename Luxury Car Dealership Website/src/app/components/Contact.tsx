import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-[800] text-white mb-4 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 text-lg tracking-wide">
            Begin your journey to automotive excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white focus:border-[var(--ferrari-red)] focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Interested In
                </label>
                <select className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white focus:border-[var(--ferrari-red)] focus:outline-none transition-colors">
                  <option>Test Drive</option>
                  <option>Purchase Inquiry</option>
                  <option>Trade-In</option>
                  <option>Service</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-white/10 px-4 py-3 text-white focus:border-[var(--ferrari-red)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your dream car..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--ferrari-red)] text-white py-4 uppercase tracking-wider hover:bg-[var(--ferrari-red-dark)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="relative h-64 bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--ferrari-red)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                alt="Location"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-[var(--ferrari-red)]" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-transparent border border-white/10 hover:border-[var(--ferrari-red)]/50 transition-all duration-300">
                <div className="p-3 bg-[var(--ferrari-red)]/10">
                  <MapPin className="w-6 h-6 text-[var(--ferrari-red)]" />
                </div>
                <div>
                  <h4 className="text-white font-[700] mb-1">Showroom Location</h4>
                  <p className="text-gray-400">
                    123 Luxury Boulevard<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-transparent border border-white/10 hover:border-[var(--ferrari-red)]/50 transition-all duration-300">
                <div className="p-3 bg-[var(--ferrari-red)]/10">
                  <Phone className="w-6 h-6 text-[var(--ferrari-red)]" />
                </div>
                <div>
                  <h4 className="text-white font-[700] mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (310) 555-0199</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Sat: 9AM - 7PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-transparent border border-white/10 hover:border-[var(--ferrari-red)]/50 transition-all duration-300">
                <div className="p-3 bg-[var(--ferrari-red)]/10">
                  <Mail className="w-6 h-6 text-[var(--ferrari-red)]" />
                </div>
                <div>
                  <h4 className="text-white font-[700] mb-1">Email</h4>
                  <p className="text-gray-400">contact@apexmotors.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-transparent border border-white/10 hover:border-[var(--ferrari-red)]/50 transition-all duration-300">
                <div className="p-3 bg-[var(--ferrari-red)]/10">
                  <MessageCircle className="w-6 h-6 text-[var(--ferrari-red)]" />
                </div>
                <div>
                  <h4 className="text-white font-[700] mb-1">WhatsApp</h4>
                  <p className="text-gray-400">+1 (310) 555-0199</p>
                  <button className="mt-2 text-[var(--ferrari-red)] text-sm hover:underline">
                    Start Chat →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
