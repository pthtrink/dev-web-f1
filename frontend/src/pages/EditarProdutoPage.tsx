import { useParams } from "react-router-dom";
import ProdutoForm from "../components/ProdutoForm";
import useRecuperarProdutoPorId from "../hooks/useRecuperarProdutoPorId";

const EditarProdutoPage = () => {
  const { id } = useParams();
  const { data: produto, isLoading } = useRecuperarProdutoPorId(
    parseInt(id!),
    false
  );

  if (isLoading) return <h6>Carregando...</h6>;

  if (produto)
    return (
      <>
        <div
          className="mb-4"
          style={{ fontFamily: "F1-Regular", color: "#000" }}
        >
          <h5>Edição de Produto</h5>
          <hr className="mt-1" />
        </div>

        <ProdutoForm produto={produto} />
      </>
    );

  return null;
};
export default EditarProdutoPage;
