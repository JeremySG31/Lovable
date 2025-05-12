
import React from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Review {
  id: number;
  authorName: string;
  authorAvatar: string;
  rating: number;
  content: string;
  date: string;
  likes: number;
  dislikes: number;
}

interface ReviewSectionProps {
  title: string;
  reviews: Review[];
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={review.authorAvatar} alt={review.authorName} />
            <AvatarFallback>{review.authorName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{review.authorName}</h4>
            <div className="flex items-center mt-1">
              <div className="star-rating mr-2">
                {[...Array(Math.floor(review.rating / 2))].map((_, i) => (
                  <Star key={i} className="fill-current h-4 w-4" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
          </div>
        </div>
        <div className="bg-muted px-2 py-1 rounded text-sm font-medium">
          {review.rating}/10
        </div>
      </div>
      
      <p className="text-foreground/90 mb-4">{review.content}</p>
      
      <div className="flex items-center gap-4 text-muted-foreground">
        <button className="flex items-center gap-1 hover:text-accent transition-colors">
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm">{review.likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-primary transition-colors">
          <ThumbsDown className="h-4 w-4" />
          <span className="text-sm">{review.dislikes}</span>
        </button>
      </div>
    </div>
  );
};

const ReviewSection = ({ title, reviews }: ReviewSectionProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
