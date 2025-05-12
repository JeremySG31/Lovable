
import React from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import FeaturedMovie from '../components/FeaturedMovie';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  // Sample data for the featured movie
  const featuredMovie = {
    title: "Dune: Parte Dos",
    imageUrl: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    rating: 8.6,
    year: 2024,
    description: "Paul Atreides se une a los Fremen y comienza un viaje espiritual y político para convertirse en Muad'Dib, mientras busca venganza contra los conspiradores que destruyeron a su familia.",
    genres: ["Ciencia Ficción", "Acción", "Drama"]
  };

  // Sample data for movies
  const recentMovies = [
    {
      id: 1,
      title: "Oppenheimer",
      imageUrl: "https://image.tmdb.org/t/p/w500/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
      rating: 8.2,
      year: 2023,
      genres: ["Drama", "Historia"]
    },
    {
      id: 2,
      title: "La sociedad de la nieve",
      imageUrl: "https://image.tmdb.org/t/p/w500/zBW3eu3RJwzWMVMW4IBNb5jjBVX.jpg",
      rating: 7.8,
      year: 2023,
      genres: ["Drama", "Aventura"]
    },
    {
      id: 3,
      title: "Pobres Criaturas",
      imageUrl: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      rating: 8.0,
      year: 2023,
      genres: ["Fantasía", "Drama"]
    },
    {
      id: 4,
      title: "Gladiador II",
      imageUrl: "https://image.tmdb.org/t/p/w500/ju28C5pzA9xQHHqWWU1BxGKB0AA.jpg",
      rating: 7.5,
      year: 2024,
      genres: ["Acción", "Historia"]
    }
  ];

  const popularMovies = [
    {
      id: 5,
      title: "Avatar: El Camino del Agua",
      imageUrl: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      rating: 7.6,
      year: 2022,
      genres: ["Ciencia Ficción", "Aventura"]
    },
    {
      id: 6,
      title: "Joker",
      imageUrl: "https://image.tmdb.org/t/p/w500/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
      rating: 8.4,
      year: 2019,
      genres: ["Drama", "Crimen"]
    },
    {
      id: 7,
      title: "El Padrino",
      imageUrl: "https://image.tmdb.org/t/p/w500/ApiEfzSkrqS4m9H1wUL4IRS4Piz.jpg",
      rating: 9.2,
      year: 1972,
      genres: ["Drama", "Crimen"]
    },
    {
      id: 8,
      title: "Todo en todas partes al mismo tiempo",
      imageUrl: "https://image.tmdb.org/t/p/w500/zp33ycMmqBDYJoeBojUmChGONDj.jpg",
      rating: 8.0,
      year: 2022,
      genres: ["Ciencia Ficción", "Comedia"]
    }
  ];

  // Sample reviews
  const reviews = [
    {
      id: 1,
      authorName: "Carlos M.",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      rating: 9,
      content: "Dune: Parte Dos supera a su predecesora en casi todos los aspectos. Una epopeya visual con actuaciones asombrosas y una banda sonora envolvente que te transporta a Arrakis. Denis Villeneuve confirma su maestría en la ciencia ficción.",
      date: "15 mar 2024",
      likes: 45,
      dislikes: 3
    },
    {
      id: 2,
      authorName: "Sofía R.",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
      rating: 8,
      content: "La película mantiene un ritmo pausado pero constante, permitiendo saborear cada detalle del universo creado por Frank Herbert. Las escenas de batalla son impresionantes y el arco de Paul está perfectamente desarrollado.",
      date: "2 mar 2024",
      likes: 32,
      dislikes: 5
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Featured Movie */}
      <FeaturedMovie
        title={featuredMovie.title}
        imageUrl={featuredMovie.imageUrl}
        backdropUrl={featuredMovie.backdropUrl}
        rating={featuredMovie.rating}
        year={featuredMovie.year}
        description={featuredMovie.description}
        genres={featuredMovie.genres}
      />
      
      {/* Movies Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="recientes" className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Películas</h2>
              <TabsList>
                <TabsTrigger value="recientes">Recientes</TabsTrigger>
                <TabsTrigger value="populares">Populares</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="recientes">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recentMovies.map((movie) => (
                  <MovieCard 
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    rating={movie.rating}
                    year={movie.year}
                    genres={movie.genres}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline">Ver Más Películas</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="populares">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularMovies.map((movie) => (
                  <MovieCard 
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    rating={movie.rating}
                    year={movie.year}
                    genres={movie.genres}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-10">
                <Button variant="outline">Ver Más Películas</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Reviews Section */}
      <ReviewSection 
        title="Reseñas Destacadas de Dune: Parte Dos"
        reviews={reviews}
      />
      
      {/* Newsletter */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Suscríbete a Nuestro Newsletter</h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            Recibe las últimas reseñas, noticias sobre estrenos y contenido exclusivo directamente en tu correo.
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
