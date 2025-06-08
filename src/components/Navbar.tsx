
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-secondary py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-accent fill-current" />
            <span className="text-2xl font-bold text-primary">Review<span className="text-accent">Star</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-accent font-medium">
              Inicio
            </Link>
            <Link to="/peliculas" className="text-foreground hover:text-accent font-medium">
              Películas
            </Link>
            <Link to="/series" className="text-foreground hover:text-accent font-medium">
              Series
            </Link>
            <Link to="/juegos" className="text-foreground hover:text-accent font-medium">
              Videojuegos
            </Link>
            <Link to="/libros" className="text-foreground hover:text-accent font-medium">
              Libros
            </Link>
            <Link to="/top" className="text-foreground hover:text-accent font-medium">
              Top 10
            </Link>
          </div>
          
          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Iniciar Sesión
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-accent py-2 font-medium">
              Inicio
            </Link>
            <Link to="/peliculas" className="text-foreground hover:text-accent py-2 font-medium">
              Películas
            </Link>
            <Link to="/series" className="text-foreground hover:text-accent py-2 font-medium">
              Series
            </Link>
            <Link to="/juegos" className="text-foreground hover:text-accent py-2 font-medium">
              Videojuegos
            </Link>
            <Link to="/libros" className="text-foreground hover:text-accent py-2 font-medium">
              Libros
            </Link>
            <Link to="/top" className="text-foreground hover:text-accent py-2 font-medium">
              Top 10
            </Link>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Iniciar Sesión
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              Buscar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
