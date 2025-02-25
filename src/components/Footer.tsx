import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-sky-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sobradinho</h3>
            <p className="text-sky-100 mb-4">
              Uma cidade acolhedora com belezas naturais únicas e pessoas hospitaleiras.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sky-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-sky-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-sky-200 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/turismo" className="text-sky-200 hover:text-white transition-colors">
                  Turismo
                </Link>
              </li>
              <li>
                <Link to="/historia" className="text-sky-200 hover:text-white transition-colors">
                  História
                </Link>
              </li>
              <li>
                <Link to="/barragem" className="text-sky-200 hover:text-white transition-colors">
                  Barragem
                </Link>
              </li>
              <li>
                <Link to="/escolas" className="text-sky-200 hover:text-white transition-colors">
                  Escolas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sky-200">
                <Phone className="w-5 h-5" />
                <span>(74) 3638-2156</span>
              </li>
              <li className="flex items-center gap-2 text-sky-200">
                <Mail className="w-5 h-5" />
                <span>contato@sobradinho.ba.gov.br</span>
              </li>
              <li className="flex items-center gap-2 text-sky-200">
                <MapPin className="w-5 h-5" />
                <span>Sobradinho, Bahia - Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-sky-200">
              <li>Segunda à Sexta</li>
              <li>08:00 - 17:00</li>
              <li className="pt-2">Sábado e Domingo</li>
              <li>Fechado</li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-sky-800">
          <p className="text-sky-200">
            © {new Date().getFullYear()} Prefeitura de Sobradinho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}