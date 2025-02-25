import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Sun, Phone, Mail, Search, Bell, Calendar, FileText, HelpCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Turismo', href: '/turismo' },
    { label: 'História', href: '/historia' },
    { label: 'Barragem', href: '/barragem' },
    { label: 'Escolas', href: '/escolas' },
    { label: 'Quiz', href: '/quiz' },
    { label: 'Notícias', href: '/noticias' },
    { label: 'Chat', href: '/chat' },
  ];

  const notifications = [
    { id: 1, title: 'Novo evento cultural', date: '15/03/2024' },
    { id: 2, title: 'Manutenção na barragem', date: '18/03/2024' },
    { id: 3, title: 'Festival gastronômico', date: '20/03/2024' },
  ];

  const quickLinks = [
    { icon: Calendar, label: 'Eventos', href: '/eventos' },
    { icon: FileText, label: 'Documentos', href: '/documentos' },
    { icon: HelpCircle, label: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-sky-600 text-white py-1 text-center text-sm">
        <div className="container mx-auto px-4">
          Participe do Festival Cultural de Sobradinho - 15 a 20 de Março
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-sky-900 to-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-300" />
                <span>Sobradinho, Bahia - Brasil</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Sun className="w-4 h-4 text-sky-300" />
                <span>31°C</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+557436382156" className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>(74) 3638-2156</span>
              </a>
              <a href="mailto:contato@sobradinho.ba.gov.br" className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contato@sobradinho.ba.gov.br</span>
              </a>
              <div className="hidden md:flex items-center gap-4 border-l border-sky-700 pl-4">
                <button className="hover:text-sky-300 transition-colors flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>PT</span>
                </button>
                <a href="/acessibilidade" className="hover:text-sky-300 transition-colors">
                  Acessibilidade
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg dark:bg-gray-900/80' : 'bg-white dark:bg-gray-900'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="https://portalsg.com/wp-content/uploads/2021/05/15.jpg"
                  alt="Sobradinho"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Sobradinho
                </span>
              </Link>
              
              {/* Mobile Menu Button */}
              <div className="flex items-center gap-4 lg:hidden">
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium relative group ${
                    location.pathname === item.href ? 'text-sky-600 dark:text-sky-400' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform ${
                    location.pathname === item.href ? 'scale-x-100' : ''
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    title={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Notificações
                        </h3>
                        <div className="space-y-3">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            >
                              <Calendar className="w-5 h-5 text-sky-600" />
                              <div>
                                <p className="text-sm text-gray-900 dark:text-white">
                                  {notification.title}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {notification.date}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/notifications"
                          className="block text-center text-sm text-sky-600 hover:text-sky-700 mt-3"
                        >
                          Ver todas
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
            >
              <nav className="container mx-auto px-4 py-4">
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Pesquisar..."
                      className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center py-3 text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors ${
                      location.pathname === item.href ? 'text-sky-600 dark:text-sky-400' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}