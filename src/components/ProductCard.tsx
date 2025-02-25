import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/format';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-zinc-400 text-sm mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            {formatPrice(product.price)}
          </span>
          
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Adicionar
          </button>
        </div>
      </div>
    </motion.div>
  );
}