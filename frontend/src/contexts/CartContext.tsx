import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import Produto from '../interfaces/Produto';
import useUsuarioStore from '../store/UsuarioStore';

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
  removerProdutosInexistentes: (produtosExistentes: Produto[]) => void;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado);
  
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (usuarioLogado > 0) {
      const storedCart = localStorage.getItem(`cart_user_${usuarioLogado}`);
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Atualiza carrinho quando o usuário muda
  useEffect(() => {
    if (usuarioLogado > 0) {
      const storedCart = localStorage.getItem(`cart_user_${usuarioLogado}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    } else {
      setCart([]);
    }
  }, [usuarioLogado]);

  // Salva carrinho no localStorage quando muda
  useEffect(() => {
    if (usuarioLogado > 0) {
      localStorage.setItem(`cart_user_${usuarioLogado}`, JSON.stringify(cart));
    }
  }, [cart, usuarioLogado]);

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
      const itemExistente = prevCart.find(item => item.id === produto.id);
      if (itemExistente) {
        // Se existe, atualiza a quantidade
        return prevCart.map(item =>
          item.id === produto.id ? { ...item, quantidade } : item
        );
      } else if (quantidade > 0) {
        // Se não existe e quantidade > 0, adiciona ao carrinho
        return [...prevCart, { ...produto, quantidade }];
      }
      // Se não existe e quantidade <= 0, não faz nada
      return prevCart;
    });
  };

  const removerProdutosInexistentes = (produtosExistentes: Produto[]) => {
    setCart(prevCart => {
      return prevCart.filter(itemCarrinho => 
        produtosExistentes.some(produto => produto.id === itemCarrinho.id)
      );
    });
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      adicionarProduto, 
      removerProduto, 
      subtrairProduto, 
      definirQuantidade, 
      limparCarrinho, 
      removerProdutosInexistentes 
    }}>
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
