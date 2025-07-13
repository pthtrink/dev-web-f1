import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import Produto from '../interfaces/Produto';
import useUsuarioStore from '../store/UsuarioStore';

interface FavoritesContextData {
  favorites: Produto[];
  adicionarFavorito: (produto: Produto) => void;
  removerFavorito: (produtoId: number) => void;
  isFavorito: (produtoId: number) => boolean;
  limparFavoritos: () => void;
  removerFavoritosInexistentes: (produtosExistentes: Produto[]) => void;
}

const FavoritesContext = createContext<FavoritesContextData | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado);
  
  const [favorites, setFavorites] = useState<Produto[]>(() => {
    if (usuarioLogado > 0) {
      const storedFavorites = localStorage.getItem(`favorites_user_${usuarioLogado}`);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  });

  // Atualiza favoritos quando o usuário muda
  useEffect(() => {
    if (usuarioLogado > 0) {
      const storedFavorites = localStorage.getItem(`favorites_user_${usuarioLogado}`);
      setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    } else {
      setFavorites([]);
    }
  }, [usuarioLogado]);

  // Salva favoritos no localStorage quando mudam
  useEffect(() => {
    if (usuarioLogado > 0) {
      localStorage.setItem(`favorites_user_${usuarioLogado}`, JSON.stringify(favorites));
    }
  }, [favorites, usuarioLogado]);

  const adicionarFavorito = (produto: Produto) => {
    setFavorites(prevFavorites => {
      const jaExiste = prevFavorites.find(item => item.id === produto.id);
      if (!jaExiste) {
        return [...prevFavorites, produto];
      }
      return prevFavorites;
    });
  };

  const removerFavorito = (produtoId: number) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(item => item.id !== produtoId)
    );
  };

  const isFavorito = (produtoId: number) => {
    return favorites.some(item => item.id === produtoId);
  };

  const limparFavoritos = () => {
    setFavorites([]);
  };

  const removerFavoritosInexistentes = (produtosExistentes: Produto[]) => {
    setFavorites(prevFavorites => {
      return prevFavorites.filter(favorito => 
        produtosExistentes.some(produto => produto.id === favorito.id)
      );
    });
  };

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      adicionarFavorito, 
      removerFavorito, 
      isFavorito, 
      limparFavoritos,
      removerFavoritosInexistentes 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
