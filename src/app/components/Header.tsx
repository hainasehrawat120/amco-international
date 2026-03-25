import { Link, useLocation } from "react-router";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/quality", label: "Quality" },
    { path: "/export", label: "Export" },
    { path: "/clients", label: "Clients" },
    { path: "/contact", label: "Contact" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-between items-center text-sm gap-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>9830160000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>asianwinches@yahoo.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Kolkata, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Brand Section */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                  AMCO INTERNATIONAL
                </h1>
                <p className="text-xs md:text-sm text-orange-600 font-semibold">
                  A Trusted Name in Lifting Equipment Since 2004
                </p>
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-red-700">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-6 py-4 font-semibold transition-colors ${
                    isActive(link.path)
                      ? "bg-orange-500 text-white"
                      : "text-white hover:bg-red-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <ul className="md:hidden py-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 font-semibold transition-colors ${
                      isActive(link.path)
                        ? "bg-orange-500 text-white"
                        : "text-white hover:bg-red-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}