
import React from 'react';
import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Recent content data (mixed categories)
  const recentContent = [
    {
      id: 1,
      title: "The Last of Us",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 9.2,
      year: 2023,
      genres: ["Drama", "Post-apocalíptico"],
      category: "Serie"
    },
    {
      id: 2,
      title: "Dune: Parte Dos",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 8.8,
      year: 2024,
      genres: ["Sci-Fi", "Épico"],
      category: "Película"
    },
    {
      id: 3,
      title: "Baldur's Gate 3",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 9.6,
      year: 2023,
      genres: ["RPG", "Aventura"],
      category: "Videojuego"
    },
    {
      id: 4,
      title: "Dune",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
      rating: 8.9,
      year: 1965,
      genres: ["Sci-Fi", "Clásico"],
      category: "Libro"
    },
    {
      id: 5,
      title: "The Witcher 3",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 9.3,
      year: 2015,
      genres: ["RPG", "Aventura"],
      category: "Videojuego"
    },
    {
      id: 6,
      title: "House of the Dragon",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 8.5,
      year: 2022,
      genres: ["Fantasía", "Drama"],
      category: "Serie"
    },
    {
      id: 7,
      title: "Oppenheimer",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 8.7,
      year: 2023,
      genres: ["Drama", "Biográfico"],
      category: "Película"
    },
    {
      id: 8,
      title: "Fourth Wing",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
      rating: 8.6,
      year: 2023,
      genres: ["Fantasía", "Romance"],
      category: "Libro"
    }
  ];

  const popularContent = [
    {
      id: 9,
      title: "Wednesday",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 8.1,
      year: 2022,
      genres: ["Misterio", "Comedia"],
      category: "Serie"
    },
    {
      id: 10,
      title: "Avatar: El Camino del Agua",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 8.3,
      year: 2022,
      genres: ["Sci-Fi", "Aventura"],
      category: "Película"
    },
    {
      id: 11,
      title: "Hogwarts Legacy",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 8.4,
      year: 2023,
      genres: ["RPG", "Aventura"],
      category: "Videojuego"
    },
    {
      id: 12,
      title: "It Ends with Us",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
      rating: 8.2,
      year: 2016,
      genres: ["Romance", "Drama"],
      category: "Libro"
    },
    {
      id: 13,
      title: "The Bear",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 9.1,
      year: 2022,
      genres: ["Comedia", "Drama"],
      category: "Serie"
    },
    {
      id: 14,
      title: "Everything Everywhere All at Once",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 8.9,
      year: 2022,
      genres: ["Sci-Fi", "Comedia"],
      category: "Película"
    },
    {
      id: 15,
      title: "Elden Ring",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 9.4,
      year: 2022,
      genres: ["RPG", "Acción"],
      category: "Videojuego"
    },
    {
      id: 16,
      title: "The Seven Husbands of Evelyn Hugo",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
      rating: 8.8,
      year: 2017,
      genres: ["Drama", "Romance"],
      category: "Libro"
    }
  ];

  // Sample reviews from mixed categories
  const reviews = [
    {
      id: 1,
      authorName: "CríticoTotal",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CriticoTotal",
      rating: 10,
      content: "Baldur's Gate 3 establece un nuevo estándar para los RPGs. La libertad narrativa es absoluta y cada decisión se siente significativa. Una experiencia que redefine el género.",
      date: "15 dic 2023",
      likes: 127,
      dislikes: 8
    },
    {
      id: 2,
      authorName: "SerieAdicto",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SerieAdicto",
      rating: 9,
      content: "The Last of Us logra una adaptación perfecta del videojuego. Pedro Pascal y Bella Ramsey tienen una química increíble, y la producción es de primer nivel.",
      date: "8 dic 2023",
      likes: 89,
      dislikes: 12
    },
    {
      id: 3,
      authorName: "CineRetro",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CineRetro",
      rating: 9,
      content: "Dune: Parte Dos supera todas las expectativas. Denis Villeneuve consigue crear una secuela épica que honra el material original con una cinematografía espectacular.",
      date: "2 dic 2023",
      likes: 156,
      dislikes: 7
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a <span className="text-accent">ReviewStar</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Descubre las mejores reseñas de películas, series, videojuegos, libros y más. 
            Tu plataforma de confianza para encontrar tu próxima gran experiencia.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Explorar Reseñas
          </Button>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="recientes" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Contenido Destacado</h2>
              <TabsList>
                <TabsTrigger value="recientes">Recientes</TabsTrigger>
                <TabsTrigger value="populares">Populares</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="recientes">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recentContent.map((content) => (
                  <GameCard 
                    key={content.id}
                    title={content.title}
                    imageUrl={content.imageUrl}
                    rating={content.rating}
                    year={content.year}
                    genres={content.genres}
                    category={content.category}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline">Ver Más Reseñas</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="populares">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularContent.map((content) => (
                  <GameCard 
                    key={content.id}
                    title={content.title}
                    imageUrl={content.imageUrl}
                    rating={content.rating}
                    year={content.year}
                    genres={content.genres}
                    category={content.category}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline">Ver Más Reseñas</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Reviews Section */}
      <ReviewSection 
        title="Reseñas Destacadas de la Comunidad"
        reviews={reviews}
      />
      
      {/* Newsletter */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Únete a la Comunidad ReviewStar</h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            Recibe las últimas reseñas de películas, series, videojuegos, libros y más directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Tu email"
              className="flex-1 rounded-md border border-border bg-muted px-4 py-2 text-foreground"
            />
            <Button>Suscribirse</Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
