import React from 'react';
import useFavoritos from '../hooks/useFavoritos';
import useRemoveFavorito from '../hooks/useRemoveFavorito';

// Assumindo a existência destes hooks para o carrinho.
// Você precisará implementá-los seguindo o mesmo padrão dos outros hooks.
import useCarrinho from '../hooks/useCarrinho';
import useUpdateItemCarrinho from '../hooks/useUpdateItemCarrinho';

import '../assets/css/favoritos-page.css'; // Importando o CSS

const FavoritosPage = () => {
  // Hook para buscar a lista de produtos favoritos
  const { data: favoritos, isLoading, isError } = useFavoritos();

  // Hook para buscar os itens que estão no carrinho
  const { data: carrinhoItens } = useCarrinho();

  // Mutações para interagir com o backend
  const { mutate: removerFavorito } = useRemoveFavorito();
  const { mutate: atualizarQuantidade } = useUpdateItemCarrinho();

  const handleQuantidadeChange = (produtoId: number, novaQuantidade: number) => {
    if (novaQuantidade < 0) return;
    // A lógica para adicionar/remover do carrinho deve estar no hook useUpdateItemCarrinho
    // atualizarQuantidade({ produtoId, quantidade: novaQuantidade });
  };

  if (isLoading) return <div>Carregando seus favoritos...</div>;
  if (isError) return <div>Ocorreu um erro ao buscar seus favoritos.</div>;

  return (
    <div className="container mt-5 pt-5">
      <h2>Lista de Favoritos</h2>
      <table className="favoritos-table">
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
          {favoritos?.map((produto) => {
            const itemNoCarrinho = carrinhoItens?.find(item => item.produto.id === produto.id);
            const quantidade = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;
            const precoTotal = produto.preco * quantidade;

            return (
              <tr key={produto.id}>
                <td>
                  <div className="produto-info">
                    <img src={produto.urlImagem} alt={produto.nome} />
                    <div>
                      <span className="nome">{produto.nome}</span>
                      <span className="descricao">{produto.descricao}</span>
                    </div>
                  </div>
                </td>
                <td>R$ {produto.preco.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    className="quantidade-input"
                    value={quantidade}
                    onChange={(e) => handleQuantidadeChange(produto.id, parseInt(e.target.value, 10))}
                    min="0"
                  />
                </td>
                <td>R$ {precoTotal.toFixed(2)}</td>
                <td>
                  <button
                    className="remover-btn"
                    onClick={() => removerFavorito(produto.id)}
                  >
                    {/* Pode usar um ícone aqui, ex: <i className="bi bi-trash"></i> */}
                    Remover
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {(!favoritos || favoritos.length === 0) && <p>Você ainda não tem produtos favoritos.</p>}
    </div>
  );
};

export default FavoritosPage;