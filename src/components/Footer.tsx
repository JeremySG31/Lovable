
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Cine</span>
              <span className="text-accent">Crítica</span>
            </h3>
            <p className="text-foreground/70">
              Tu fuente confiable de reseñas de películas, noticias del cine y más.
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
                <Link to="/peliculas" className="text-foreground/70 hover:text-accent transition-colors">
                  Películas
                </Link>
              </li>
              <li>
                <Link to="/reseñas" className="text-foreground/70 hover:text-accent transition-colors">
                  Reseñas
                </Link>
              </li>
              <li>
                <Link to="/top" className="text-foreground/70 hover:text-accent transition-colors">
                  Top 10
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
                <Link to="/genero/drama" className="text-foreground/70 hover:text-accent transition-colors">
                  Drama
                </Link>
              </li>
              <li>
                <Link to="/genero/comedia" className="text-foreground/70 hover:text-accent transition-colors">
                  Comedia
                </Link>
              </li>
              <li>
                <Link to="/genero/ciencia-ficcion" className="text-foreground/70 hover:text-accent transition-colors">
                  Ciencia Ficción
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
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
            © {new Date().getFullYear()} CineCrítica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
