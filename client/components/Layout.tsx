import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center justify-between">
            {/* Logo/Brand */}
            <Link to="/" className="flex flex-col items-center gap-1">
              <div className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-stone-800">
                ALX
              </div>
              <div className="text-xs md:text-sm tracking-widest text-stone-600 font-light">
                CUSTOM APPAREL
              </div>
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className="text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-stone-700 hover:text-stone-900"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mt-4 md:hidden border-t border-stone-200 pt-4 space-y-4">
              <Link
                to="/"
                className="block text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="block text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="block text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-sm uppercase tracking-wider text-stone-700 hover:text-stone-900 transition-colors font-light"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-800 mb-2">
                ALX
              </h3>
              <p className="text-sm text-stone-600 font-light italic">
                Crafting style, one piece at a time.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-4">
                Connect
              </h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@alxapparel.com"
                    className="hover:text-stone-900 transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-stone-200 pt-8">
            <p className="text-center text-xs text-stone-500">
              © 2024 ALX Custom Apparel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
