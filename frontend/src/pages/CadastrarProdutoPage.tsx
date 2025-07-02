import ProdutoForm from "../components/ProdutoForm";

const CadastrarProdutoPage = () => {
  return (
    <>
      <div className="mb-4" style={{ fontFamily: "F1-Bold-Web", color: "#000" }}>
        <h5>Cadastro de Produtos</h5>
        <hr className="mt-1" />
      </div>

      <ProdutoForm />
    </>
  );
};
export default CadastrarProdutoPage;
