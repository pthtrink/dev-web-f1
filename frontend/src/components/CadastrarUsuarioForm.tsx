import TokenResponse from "../interfaces/TokenResponse";
import Usuario from "../interfaces/Usuario";

interface CadastrarUsuarioForm {
	conta: string;
	senha: string;
}

const CadastrarUsuarioForm = () => {
    const submit = ({ conta, senha }: CadastrarUsuarioForm) => {
		const usuario: Usuario = { conta, senha };

		efetuarCadastro(usuario, {
			onSuccess: (tokenResponse: TokenResponse) => {
				if (tokenResponse.token > 0) {
					setUsuarioLogado(tokenResponse.token);
					if (location.state?.destino) {
						navigate(location.state.destino);
					} else {
						navigate("/");
					}
				} else {
					setLoginInvalido(true);
				}
			},
		});
	};

    return (
        <>
            <div className="mb-4" style={{ fontFamily: "F1-Regular", color: "#FFF" }}>
                <h5>Página de Login</h5>
            <hr className="mt-1" />
      </div>

      <CadastrarUsuarioForm />
        </>
    );
};
export default CadastrarUsuarioForm;
