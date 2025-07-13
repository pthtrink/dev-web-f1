import Produto from "../interfaces/Produto";
import { useFavorites } from "../contexts/FavoritesContext";
import { CartItem } from "../contexts/CartContext";

interface Props {
  produto: Produto;
  produtoNoCarrinho: CartItem | undefined;
  adicionarProduto: (produto: Produto) => void;
  subtrairProduto: (produto: Produto) => void;
}

const Card = ({ produto, adicionarProduto, subtrairProduto, produtoNoCarrinho }: Props) => {
  const { adicionarFavorito, removerFavorito, isFavorito } = useFavorites();
  const ehFavorito = isFavorito(produto.id || 0);

  const toggleFavorito = () => {
    if (ehFavorito) {
      removerFavorito(produto.id || 0);
    } else {
      adicionarFavorito(produto);
    }
  };

  return (
    <div className="card h-100 border-0">
      <div className="position-relative">
        <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
        <button 
          onClick={toggleFavorito}
          className={`btn btn-sm position-absolute top-0 end-0 m-2 ${ehFavorito ? 'btn-danger' : 'btn-outline-danger'}`}
          style={{ border: 'none', borderRadius: '50%', width: '35px', height: '35px' }}
        >
          {ehFavorito ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{produto.nome}</h5>
        <p className="card-text">{produto.descricao}</p>
        <p className="card-text fw-bold" style={{color: "rgb(220,60,60)"}}>
          R${" "}
          {produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
          })}
        </p>
      </div>
      <div className="card-footer p-0 mb-4">
        <div style={produtoNoCarrinho ? {display: "block"} : {display: "none"}} >
          <div className="btn-group w-100">
            <button onClick={() => subtrairProduto(produto)} type="button" className="btn btn-secondary btn-sm">-</button>
            <button type="button" className="btn btn-secondary btn-sm">{produtoNoCarrinho?.quantidade}</button>
            <button onClick={() => adicionarProduto(produto)} type="button" className="btn btn-secondary btn-sm">+</button>
          </div>
        </div>
        <button style={produtoNoCarrinho ? {display: "none"} : {display: "block"}} onClick={() => adicionarProduto(produto)} type="button" className="btn btn-success btn-sm w-100">Comprar</button>
      </div>
    </div>
  );
};
export default Card;
