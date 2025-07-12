import Produto from "./Produto";

interface ItemCarrinho {
  id: number;
  produto: Produto;
  quantidade: number;
}

export default ItemCarrinho;