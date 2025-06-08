
import React from 'react';
import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import FeaturedMovie from '../components/FeaturedMovie';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Featured content data
  const featuredContent = {
    title: "Baldur's Gate 3",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=750&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop",
    rating: 9.6,
    year: 2023,
    description: "Una obra maestra del RPG que redefine lo que significa la libertad de elección en los videojuegos. Con una narrativa profunda y mecánicas innovadoras.",
    genres: ["RPG", "Aventura", "Estrategia"]
  };

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
      title: "The Witcher 3",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 9.3,
      year: 2015,
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
    }
  ];

  const popularContent = [
    {
      id: 5,
      title: "Oppenheimer",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 8.7,
      year: 2023,
      genres: ["Drama", "Biográfico"],
      category: "Película"
    },
    {
      id: 6,
      title: "Wednesday",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 8.1,
      year: 2022,
      genres: ["Misterio", "Comedia"],
      category: "Serie"
    },
    {
      id: 7,
      title: "Hogwarts Legacy",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 8.4,
      year: 2023,
      genres: ["RPG", "Aventura"],
      category: "Videojuego"
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

  // Sample reviews
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
      authorName: "ReviewMaster_ES",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReviewMaster",
      rating: 9,
      content: "Después de 150+ horas puedo confirmar que este juego es una obra de arte. La profundidad de los personajes y la calidad del diálogo son excepcionales.",
      date: "3 dic 2023",
      likes: 89,
      dislikes: 12
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Featured Content */}
      <FeaturedMovie
        title={featuredContent.title}
        imageUrl={featuredContent.imageUrl}
        backdropUrl={featuredContent.backdropUrl}
        rating={featuredContent.rating}
        year={featuredContent.year}
        description={featuredContent.description}
        genres={featuredContent.genres}
      />
      
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
        title="Reseñas Destacadas de Baldur's Gate 3"
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
