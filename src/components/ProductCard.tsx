import React from 'react';
import { Star, Check, X, ExternalLink, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="relative overflow-hidden border-border-custom bg-white rounded-lg shadow-none transition-all hover:shadow-md">
      <div className="absolute top-2 left-2 z-10">
        <Badge className="bg-[#FFD700] text-black text-[10px] font-extrabold px-2 py-0.5 rounded-[2px] border-none">
          {product.bestFor.toUpperCase()}
        </Badge>
      </div>
      
      <div className="aspect-square overflow-hidden bg-[#eee] flex items-center justify-center">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <CardHeader className="space-y-1 p-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-primary uppercase">{product.brand}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-bold text-zinc-900">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-base font-bold text-secondary line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
      </CardHeader>
      
      <CardContent className="space-y-3 p-4 pt-0">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-extrabold text-price">${product.price.toFixed(2)}</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {product.wavelengths.map(w => (
            <span key={w} className="bg-accent-custom text-secondary px-2 py-1 rounded-[4px] text-[10px] font-bold">
              {w}
            </span>
          ))}
          <span className="bg-accent-custom text-secondary px-2 py-1 rounded-[4px] text-[10px] font-bold">
            {product.irradiance.split(' at ')[0]}
          </span>
        </div>

        <p className="text-[12px] text-[#666666] line-clamp-2">
          {product.pros[0]}. {product.pros[1]}.
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          asChild 
          className="w-full bg-amazon border border-amazon-border hover:bg-[#f0c14b] text-[#111] h-9 text-xs font-bold rounded-[3px]"
        >
          <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-4 w-4" />
            View on Amazon
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
