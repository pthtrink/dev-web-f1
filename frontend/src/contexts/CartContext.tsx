import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import Produto from '../interfaces/Produto';

export interface CartItem extends Produto {
  quantidade: number;
}

interface CartContextData {
  cart: CartItem[];
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (produtoId: number) => void;
  subtrairProduto: (produto: Produto) => void;
  definirQuantidade: (produto: Produto, quantidade: number) => void;
  limparCarrinho: () => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const adicionarProduto = (produto: Produto) => {
    setCart(prevCart => {
      const itemExistente = prevCart.find(item => item.id === produto.id);
      if (itemExistente) {
        return prevCart.map(item =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...prevCart, { ...produto, quantidade: 1 }];
    });
  };

  const subtrairProduto = (produto: Produto) => {
    setCart(prevCart => {
        const itemExistente = prevCart.find(item => item.id === produto.id);
        if (itemExistente && itemExistente.quantidade > 1) {
            return prevCart.map(item =>
                item.id === produto.id ? { ...item, quantidade: item.quantidade - 1 } : item
            );
        }
        return prevCart.filter(item => item.id !== produto.id);
    });
  };

  const removerProduto = (produtoId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== produtoId));
  };

  const limparCarrinho = () => {
    setCart([]);
  };

  const definirQuantidade = (produto: Produto, quantidade: number) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === produto.id ? { ...item, quantidade } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, adicionarProduto, removerProduto, subtrairProduto, definirQuantidade, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
