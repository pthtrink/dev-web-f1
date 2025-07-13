import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import useDataIntegrity from '../hooks/useDataIntegrity';

const FavoritosPage = () => {
  const { favorites, removerFavorito } = useFavorites();
  const { cart, definirQuantidade, removerProduto } = useCart();

  // Verifica integridade dos dados dos favoritos
  useDataIntegrity(favorites);

  const handleQuantidadeChange = (produto: any, novaQuantidade: number) => {
    if (novaQuantidade === 0) {
      // Remove do carrinho se quantidade for 0
      if (produto.id) {
        removerProduto(produto.id);
      }
    } else if (novaQuantidade > 0) {
      // Define a nova quantidade
      definirQuantidade(produto, novaQuantidade);
    }
  };

  const handleBlur = (produto: any, valor: string) => {
    // Se o campo estiver vazio ao perder o foco, remove do carrinho
    if (valor === '' || parseInt(valor) === 0) {
      if (produto.id) {
        removerProduto(produto.id);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="my-4">Lista de Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você ainda não tem produtos favoritos.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço Unitário</th>
              <th>Quantidade</th>
              <th>Preço Total</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((produto) => {
              const itemNoCarrinho = cart.find(item => item.id === produto.id);
              const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;
              const precoTotal = produto.preco * quantidade;

              return (
                <tr key={produto.id}>
                  <td>
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome} 
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} 
                    />
                    {produto.nome}
                  </td>
                  <td>R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: '80px' }}
                      value={quantidade || ''}
                      onChange={(e) => {
                        const valor = e.target.value;
                        if (valor === '') {
                          // Permite campo vazio temporariamente
                          if (produto.id) {
                            removerProduto(produto.id);
                          }
                        } else {
                          const novaQuantidade = parseInt(valor);
                          handleQuantidadeChange(produto, novaQuantidade);
                        }
                      }}
                      onBlur={(e) => handleBlur(produto, e.target.value)}
                      min="0"
                    />
                  </td>
                  <td>R$ {precoTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => produto.id && removerFavorito(produto.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavoritosPage;