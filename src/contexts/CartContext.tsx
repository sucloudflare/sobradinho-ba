import { createContext, ReactNode } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';
import { Product } from '../types';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      total: 0,
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            toast.success('Quantidade atualizada no carrinho');
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: state.total + product.price
            };
          }
          
          toast.success('Item adicionado ao carrinho');
          return {
            items: [...state.items, { ...product, quantity: 1 }],
            total: state.total + product.price
          };
        });
      },
      removeFromCart: (productId) => {
        set((state) => {
          const item = state.items.find(item => item.id === productId);
          if (!item) return state;
          
          toast.success('Item removido do carrinho');
          return {
            items: state.items.filter(item => item.id !== productId),
            total: state.total - (item.price * item.quantity)
          };
        });
      },
      updateQuantity: (productId, quantity) => {
        set((state) => {
          const item = state.items.find(item => item.id === productId);
          if (!item) return state;
          
          const oldTotal = item.price * item.quantity;
          const newTotal = item.price * quantity;
          
          return {
            items: state.items.map(item =>
              item.id === productId
                ? { ...item, quantity }
                : item
            ),
            total: state.total - oldTotal + newTotal
          };
        });
      },
      clearCart: () => {
        set({ items: [], total: 0 });
        toast.success('Carrinho limpo');
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);

export const CartContext = createContext({} as CartStore);

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider value={useCartStore()}>
      {children}
    </CartContext.Provider>
  );
}