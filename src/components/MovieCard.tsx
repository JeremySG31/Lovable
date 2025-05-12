
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
  genres: string[];
}

const MovieCard = ({ title, imageUrl, rating, year, genres }: MovieCardProps) => {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 >= 0.5;
  
  return (
    <div className="movie-card group">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="gradient-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-lg line-clamp-2">{title}</h3>
          <div className="flex items-center mt-1 mb-2">
            <div className="star-rating mr-2">
              {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="fill-current h-4 w-4" />
              ))}
              {hasHalfStar && <StarHalf className="fill-current h-4 w-4" />}
            </div>
            <span className="text-white text-sm">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/80 text-xs">{year}</span>
            <div className="flex flex-wrap gap-1 justify-end">
              {genres.slice(0, 1).map((genre) => (
                <Badge key={genre} variant="secondary" className="text-xs">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
