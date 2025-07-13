import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import Produto from '../interfaces/Produto';

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
  const [favorites, setFavorites] = useState<Produto[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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
