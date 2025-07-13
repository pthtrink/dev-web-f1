import { useCart } from '../contexts/CartContext';

const CarrinhoPage = () => {
  const { cart, removerProduto, adicionarProduto, subtrairProduto, definirQuantidade } = useCart();

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.preco * (item.quantidade || 1), 0);
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
                  <input 
                    type="number" 
                    min="1" 
                    value={item.quantidade || ''} 
                    onChange={(e) => {
                      const valor = e.target.value;
                      if (valor === '') {
                        // Permite campo vazio temporariamente
                        definirQuantidade(item, 0);
                      } else {
                        const novaQuantidade = parseInt(valor);
                        if (novaQuantidade > 0) {
                          definirQuantidade(item, novaQuantidade);
                        }
                      }
                    }}
                    onBlur={(e) => {
                      // Se o campo estiver vazio ao perder o foco, define como 1
                      if (e.target.value === '' || parseInt(e.target.value) === 0) {
                        definirQuantidade(item, 1);
                      }
                    }}
                    className="form-control" 
                    style={{ width: '80px' }}
                  />
                </td>
                <td>R$ {(item.preco * (item.quantidade || 1)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
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