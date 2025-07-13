import { useEffect, useCallback, useRef } from 'react';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import Produto from '../interfaces/Produto';

/**
 * Hook que verifica a integridade dos dados do carrinho e favoritos
 * Remove produtos que não existem mais no backend
 */
export const useDataIntegrity = (produtosExistentes: Produto[]) => {
  const { removerProdutosInexistentes } = useCart();
  const { removerFavoritosInexistentes } = useFavorites();
  const lastCheckRef = useRef<string>('');

  const verificarIntegridade = useCallback(() => {
    if (!produtosExistentes || produtosExistentes.length === 0) return;

    // Cria uma string única dos IDs dos produtos para evitar verificações desnecessárias
    const produtosIds = produtosExistentes.map(p => p.id).sort().join(',');
    
    // Só executa se a lista de produtos mudou
    if (produtosIds !== lastCheckRef.current) {
      lastCheckRef.current = produtosIds;
      
      // Remove produtos inexistentes do carrinho
      removerProdutosInexistentes(produtosExistentes);
      
      // Remove produtos inexistentes dos favoritos
      removerFavoritosInexistentes(produtosExistentes);
    }
  }, [produtosExistentes, removerProdutosInexistentes, removerFavoritosInexistentes]);

  useEffect(() => {
    // Adiciona um pequeno delay para evitar múltiplas execuções
    const timeoutId = setTimeout(verificarIntegridade, 100);
    return () => clearTimeout(timeoutId);
  }, [verificarIntegridade]);
};

export default useDataIntegrity;
