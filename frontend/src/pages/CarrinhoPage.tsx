import { useCart } from '../contexts/CartContext';

const CarrinhoPage = () => {
  const { cart, removerProduto, adicionarProduto, subtrairProduto } = useCart();

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  return (
    <div className="container">
      <h1 className="my-4">Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
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
            {cart.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.imagem} alt={item.nome} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
                  {item.nome}
                </td>
                <td>R$ {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                <td>
                  <div className="btn-group">
                    <button onClick={() => subtrairProduto(item)} className="btn btn-secondary btn-sm">-</button>
                    <span className="btn btn-light btn-sm">{item.quantidade}</span>
                    <button onClick={() => adicionarProduto(item)} className="btn btn-secondary btn-sm">+</button>
                  </div>
                </td>
                <td>R$ {(item.preco * item.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                <td>
                  <button onClick={() => item.id && removerProduto(item.id)} className="btn btn-danger btn-sm">Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="text-end"><strong>Total</strong></td>
              <td><strong>R$ {calcularTotal().toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default CarrinhoPage;