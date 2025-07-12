import Produto from "../interfaces/Produto";
import { ProdCarrinho } from "../pages/CardsPorSlugCategoriaPage";

interface Props {
  produto: Produto;
  isFavorito: boolean;
  produtoNoCarrinho: ProdCarrinho | null;
  adicionarProduto: (produto: Produto) => void;
  subtrairProduto: (produto: Produto) => void;
  alternarFavorito: (produto: Produto) => void;
}

const Card = ({ produto, isFavorito, adicionarProduto, subtrairProduto, alternarFavorito, produtoNoCarrinho }: Props) => {
  return (
	<div className="card h-100 border-0">
	  <i
		onClick={() => alternarFavorito(produto)}
		className={`bi ${isFavorito ? 'bi-heart-fill' : 'bi-heart'}`}
		style={{ 
		  top: '0.5rem',
		  right: '0.5rem',
		  cursor: 'pointer'
		}}
	  ></i>
	  <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
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
