import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import useRecuperarProdutosPorSlugCategoriaComPaginacao from "../hooks/useRecuperarProdutosPorSlugCategoriaComPaginacao";
import Produto from "../interfaces/Produto";
import { useCart } from "../contexts/CartContext";
import CardsPlaceholderPage from "./CardsPlaceholderPage";
import InfiniteScroll from "react-infinite-scroll-component";
import useProdutoStore from "../store/ProdutoStore";

const CardsPorSlugCategoriaPage = () => {
  const tamanho = useProdutoStore((s) => s.tamanho);
  const { slugCategoria } = useParams();
  const {
    data,
    isPending: carregandoProdutos,
    error: errorProdutos,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useRecuperarProdutosPorSlugCategoriaComPaginacao({
    tamanho: tamanho.toString(),
    slugCategoria: slugCategoria ? slugCategoria : "",
  });

  const { cart, adicionarProduto, subtrairProduto } = useCart();

  useEffect(() => {
    console.log("Carrinho atualizado:", cart);
  }, [cart]);

  if (carregandoProdutos) return <CardsPlaceholderPage />;
  if (errorProdutos) throw errorProdutos;

  return (
    <InfiniteScroll
      style={{ overflowX: "hidden" }}
      dataLength={data.pages.reduce((total, page) => total + page.totalDeItens, 0)}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<h6>Carregando...</h6>}
    >
      <h5>
        {slugCategoria
          ? slugCategoria.charAt(0).toUpperCase() + slugCategoria.slice(1)
          : "Produtos"}
      </h5>
      <div className="row">
        {data.pages.map((page) =>
          page.itens.map((produto) => {
            const produtoNoCarrinho = cart.find(
              (item) => item.id === produto.id
            );
            return (
              <div key={produto.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <Card
                  produto={produto}
                  produtoNoCarrinho={produtoNoCarrinho}
                  adicionarProduto={adicionarProduto}
                  subtrairProduto={subtrairProduto}
                />
              </div>
            );
          })
        )}
      </div>
      {/* {hasNextPage && (
        <div className="d-flex justify-content-center">
          <button
            onClick={() => fetchNextPage()}
            className="btn btn btn-outline-success mb-5 w-50"
          >
            {isFetchingNextPage ? "Recuperando..." : "Recuperar mais..."}
          </button>
        </div>
      )} */}
    </InfiniteScroll>
  );
};
export default CardsPorSlugCategoriaPage;
