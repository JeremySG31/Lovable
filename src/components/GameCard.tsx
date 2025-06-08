
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
  genres: string[];
  price?: string;
  discount?: number;
}

const GameCard = ({ title, imageUrl, rating, year, genres, price, discount }: GameCardProps) => {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 >= 0.5;
  
  return (
    <div className="movie-card group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="gradient-overlay opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Discount badge */}
        {discount && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-bold">
            -{discount}%
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-lg line-clamp-2 mb-1">{title}</h3>
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
          {price && (
            <div className="flex items-center justify-between mt-2">
              {discount ? (
                <div className="flex items-center gap-2">
                  <span className="text-white/60 line-through text-sm">{price}</span>
                  <span className="text-accent font-bold">
                    €{(parseFloat(price.replace('€', '')) * (1 - discount / 100)).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-accent font-bold">{price}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
