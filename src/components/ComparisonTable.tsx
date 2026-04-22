import { Check, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import { Button } from './ui/button';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border-custom bg-white shadow-none">
      <Table>
        <TableHeader className="bg-zinc-50 border-b border-border-custom">
          <TableRow>
            <TableHead className="w-[250px] text-xs font-bold uppercase text-secondary">Product</TableHead>
            <TableHead className="text-xs font-bold uppercase text-secondary">Price</TableHead>
            <TableHead className="text-xs font-bold uppercase text-secondary">Specs</TableHead>
            <TableHead className="text-right text-xs font-bold uppercase text-secondary">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="hover:bg-zinc-50/50 border-b border-border-custom last:border-0">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded bg-[#eee] flex items-center justify-center text-[8px] text-[#999] text-center p-1">
                    {product.brand}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-secondary">{product.name}</span>
                    <span className="text-[11px] text-[#666666]">{product.bestFor}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-lg font-extrabold text-price">${product.price}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {product.wavelengths.map(w => (
                    <span key={w} className="bg-accent-custom text-secondary px-2 py-0.5 rounded-[4px] text-[10px] font-bold">
                      {w}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button asChild className="bg-amazon border border-amazon-border hover:bg-[#f0c14b] text-[#111] h-8 text-xs font-bold rounded-[3px]">
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

