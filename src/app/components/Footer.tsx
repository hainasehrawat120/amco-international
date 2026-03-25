import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">AMCO INTERNATIONAL</h3>
            <p className="text-gray-300 text-sm mb-4">
              A trusted name in lifting equipment since 2004. Pioneers in manufacturing Electric Winches and quality lifting solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/quality" className="text-gray-300 hover:text-orange-500 transition-colors">Quality</Link></li>
              <li><Link to="/export" className="text-gray-300 hover:text-orange-500 transition-colors">Export</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Electric Winches</li>
              <li>EOT Cranes</li>
              <li>Chain Pulley Blocks</li>
              <li>Wire Rope Hoists</li>
              <li>Gantry Cranes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                <span className="text-gray-300">Nando Mullick Lane, Kolkata - 700 006</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span className="text-gray-300">9830160000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-orange-500" />
                <span className="text-gray-300">asianwinches@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AMCO International. All rights reserved. | Brand "ASIAN" since 2004</p>
        </div>
      </div>
    </footer>
  );
}