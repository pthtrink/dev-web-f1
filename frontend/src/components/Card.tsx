import Produto from "../interfaces/Produto";
import { useFavorites } from "../contexts/FavoritesContext";
import { CartItem } from "../contexts/CartContext";
import useUsuarioStore from "../store/UsuarioStore";

interface Props {
  produto: Produto;
  produtoNoCarrinho: CartItem | undefined;
  adicionarProduto: (produto: Produto) => void;
  subtrairProduto: (produto: Produto) => void;
}

const Card = ({ produto, adicionarProduto, subtrairProduto, produtoNoCarrinho }: Props) => {
  const { adicionarFavorito, removerFavorito, isFavorito } = useFavorites();
  const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado);
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
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <div>
          <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
        </div>
        {usuarioLogado > 0 && (
          <button 
            onClick={toggleFavorito}
            className={`btn`}
            style={{background: 'transparent', border: 'none', padding: '0', width: '35px', height: '35px'}}
          >
            {ehFavorito
              ? (<i className="bi bi-heart-fill" style={{ fontSize: '1.2rem', color: 'red' }}></i>)
              : (<i className="bi bi-heart" style={{ fontSize: '1.2rem', color: 'black' }}></i> )
            }
          </button>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: "F1-Regular" }}>{produto.nome}</h5>
        <p className="card-text" style={{ fontFamily: "F1-Italic", fontSize: "0.8em" }}>{produto.descricao}</p>
        <p className="card-text" style={{ fontFamily: "F1-Regular", color: "rgb(220,60,60)" }}>
          R${" "}
          {produto.preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true,
          })}
        </p>
      </div>
      <div className="card-footer p-0 mb-4" style={{ fontFamily: "F1-Regular" }}>
        <div style={produtoNoCarrinho ? {display: "block"} : {display: "none"}} >
          <div className="btn-group w-100">
            <button onClick={() => subtrairProduto(produto)} type="button" className="btn btn-secondary btn-sm">-</button>
            <button type="button" className="btn btn-secondary btn-sm">{produtoNoCarrinho?.quantidade}</button>
            <button onClick={() => adicionarProduto(produto)} type="button" className="btn btn-secondary btn-sm">+</button>
          </div>
        </div>
        <button style={produtoNoCarrinho ? {display: "none"} : {display: "block"}}
          onClick={() => adicionarProduto(produto)} type="button"
          className="btn btn-success btn-sm w-100">
            Comprar
        </button>
      </div>
    </div>
  );
};
export default Card;
