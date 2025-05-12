
import React from 'react';
import { Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedMovieProps {
  title: string;
  imageUrl: string;
  backdropUrl: string;
  rating: number;
  year: number;
  description: string;
  genres: string[];
}

const FeaturedMovie = ({ 
  title, 
  imageUrl, 
  backdropUrl, 
  rating, 
  year, 
  description, 
  genres 
}: FeaturedMovieProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Backdrop image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backdropUrl} 
          alt={`${title} backdrop`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 py-12">
          {/* Movie poster */}
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Movie details */}
          <div className="flex-grow space-y-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                <span className="text-white/70">({year})</span>
              </div>
              
              <div className="flex items-center mt-3 gap-4">
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-accent fill-current mr-1" />
                  <span className="text-xl font-bold">{rating.toFixed(1)}</span>
                  <span className="text-white/70 ml-1">/10</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90">
                Ver Reseñas
              </Button>
              <Button variant="outline">
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
