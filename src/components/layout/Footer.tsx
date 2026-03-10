import Link from 'next/link';
import { Trophy, Github, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  producto: [
    { label: 'Resultados', href: '/' },
    { label: 'Ligas', href: '/ligas' },
    { label: 'Equipos', href: '/equipos' },
    { label: 'En Vivo', href: '/en-vivo' },
  ],
  recursos: [
    { label: 'API', href: '#' },
    { label: 'Documentación', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  legal: [
    { label: 'Términos', href: '#' },
    { label: 'Privacidad', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                <span className="text-white">Futbol</span>
                <span className="text-primary-500">Data</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Resultados, estadísticas y tablas de fútbol en tiempo real.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 FútbolData Live. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Hecho con ❤️ para fanáticos del fútbol
          </p>
        </div>
      </div>
    </footer>
  );
}
