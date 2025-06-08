
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-accent fill-current" />
              <h3 className="text-xl font-bold">
                <span className="text-primary">Review</span>
                <span className="text-accent">Star</span>
              </h3>
            </div>
            <p className="text-foreground/70">
              Tu plataforma confiable de reseñas de videojuegos, noticias gaming y ofertas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/juegos" className="text-foreground/70 hover:text-accent transition-colors">
                  Juegos
                </Link>
              </li>
              <li>
                <Link to="/reseñas" className="text-foreground/70 hover:text-accent transition-colors">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="text-foreground/70 hover:text-accent transition-colors">
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Géneros</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/genero/accion" className="text-foreground/70 hover:text-accent transition-colors">
                  Acción
                </Link>
              </li>
              <li>
                <Link to="/genero/rpg" className="text-foreground/70 hover:text-accent transition-colors">
                  RPG
                </Link>
              </li>
              <li>
                <Link to="/genero/estrategia" className="text-foreground/70 hover:text-accent transition-colors">
                  Estrategia
                </Link>
              </li>
              <li>
                <Link to="/genero/indie" className="text-foreground/70 hover:text-accent transition-colors">
                  Indie
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ayuda" className="text-foreground/70 hover:text-accent transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-foreground/70 hover:text-accent transition-colors">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-foreground/70 hover:text-accent transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-foreground/70 hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-6">
          <p className="text-center text-foreground/50 text-sm">
            © {new Date().getFullYear()} ReviewStar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
