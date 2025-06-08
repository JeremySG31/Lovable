
import React from 'react';
import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import FeaturedMovie from '../components/FeaturedMovie';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Featured game data
  const featuredGame = {
    title: "Baldur's Gate 3",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=750&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop",
    rating: 9.6,
    year: 2023,
    description: "Reúne a tu equipo y regresa a los Reinos Olvidados en una historia de compañerismo y traición, sacrificio y supervivencia, y la atracción del poder absoluto.",
    genres: ["RPG", "Aventura", "Estrategia"]
  };

  // Recent games data
  const recentGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 8.2,
      year: 2020,
      genres: ["RPG", "Acción"],
      price: "€59.99",
      discount: 50
    },
    {
      id: 2,
      title: "The Witcher 3",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 9.3,
      year: 2015,
      genres: ["RPG", "Aventura"],
      price: "€39.99",
      discount: 75
    },
    {
      id: 3,
      title: "Hogwarts Legacy",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 8.4,
      year: 2023,
      genres: ["RPG", "Aventura"],
      price: "€59.99"
    },
    {
      id: 4,
      title: "Elden Ring",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
      rating: 9.2,
      year: 2022,
      genres: ["RPG", "Acción"],
      price: "€49.99",
      discount: 30
    }
  ];

  const popularGames = [
    {
      id: 5,
      title: "Counter-Strike 2",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      rating: 8.8,
      year: 2023,
      genres: ["FPS", "Multijugador"],
      price: "Gratis"
    },
    {
      id: 6,
      title: "Hades II",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      rating: 9.1,
      year: 2024,
      genres: ["Roguelike", "Acción"],
      price: "€29.99"
    },
    {
      id: 7,
      title: "Palworld",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      rating: 8.5,
      year: 2024,
      genres: ["Supervivencia", "Aventura"],
      price: "€27.99",
      discount: 20
    },
    {
      id: 8,
      title: "Lethal Company",
      imageUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=600&fit=crop",
      rating: 8.7,
      year: 2023,
      genres: ["Horror", "Cooperativo"],
      price: "€9.99"
    }
  ];

  // Sample reviews for games
  const reviews = [
    {
      id: 1,
      authorName: "GamerPro_ES",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GamerPro",
      rating: 10,
      content: "Baldur's Gate 3 es simplemente perfecto. La libertad de elección, las mecánicas de combate por turnos y la narrativa épica hacen de este juego una obra maestra absoluta. Cada decisión importa y el multijugador cooperativo es increíble.",
      date: "15 dic 2023",
      likes: 127,
      dislikes: 8
    },
    {
      id: 2,
      authorName: "RPGMaster",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RPGMaster",
      rating: 9,
      content: "Después de 150+ horas puedo decir que BG3 ha establecido un nuevo estándar para los RPGs. La profundidad de los personajes y las opciones de personalización son abrumadoras en el mejor sentido posible.",
      date: "3 dic 2023",
      likes: 89,
      dislikes: 12
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Featured Game */}
      <FeaturedMovie
        title={featuredGame.title}
        imageUrl={featuredGame.imageUrl}
        backdropUrl={featuredGame.backdropUrl}
        rating={featuredGame.rating}
        year={featuredGame.year}
        description={featuredGame.description}
        genres={featuredGame.genres}
      />
      
      {/* Games Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="recientes" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Juegos</h2>
              <TabsList>
                <TabsTrigger value="recientes">Recientes</TabsTrigger>
                <TabsTrigger value="populares">Populares</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="recientes">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recentGames.map((game) => (
                  <GameCard 
                    key={game.id}
                    title={game.title}
                    imageUrl={game.imageUrl}
                    rating={game.rating}
                    year={game.year}
                    genres={game.genres}
                    price={game.price}
                    discount={game.discount}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline">Ver Más Juegos</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="populares">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularGames.map((game) => (
                  <GameCard 
                    key={game.id}
                    title={game.title}
                    imageUrl={game.imageUrl}
                    rating={game.rating}
                    year={game.year}
                    genres={game.genres}
                    price={game.price}
                    discount={game.discount}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline">Ver Más Juegos</Button>
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
            Recibe las últimas reseñas, noticias sobre lanzamientos y ofertas exclusivas directamente en tu correo.
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
