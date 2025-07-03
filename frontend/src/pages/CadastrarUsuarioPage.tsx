import CadastrarUsuarioForm from "../components/CadastrarUsuarioForm";

const CadastrarUsuarioPage = () => {
  return (
        <>
            <div className="mb-4" style={{ fontFamily: "F1-Regular", color: "#FFF" }}>
                <h5>Página de Cadastro de Usuário</h5>
            <hr className="mt-1" />
      </div>

      <CadastrarUsuarioForm />
        </>
    );
};
export default CadastrarUsuarioPage;
