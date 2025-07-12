import CadastrarUsuarioForm from "../components/CadastrarUsuarioForm";

const CadastrarUsuarioPage = () => {
  return (
    <>
      <div className="mb-4" style={{ fontFamily: "F1-Regular", color: "#000" }}>
        <h5>Página de Cadastro</h5>
        <hr className="mt-1" />
      </div>

      <CadastrarUsuarioForm />
    </>
  );
};
export default CadastrarUsuarioPage;

