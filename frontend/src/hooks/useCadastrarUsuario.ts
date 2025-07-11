import { useMutation } from "@tanstack/react-query";
import Usuario from "../interfaces/Usuario";
import isErrorResponse from "../util/isErrorResponse";

const cadastrarUsuario = async (usuario: Usuario) => {
	const response = await fetch("http://localhost:8080/usuario", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(usuario),
	});
	if (!response.ok) {
		const error: any = await response.json();
		if (isErrorResponse(error)) {
			throw error;
		} else {
			throw new Error(
				"Ocorreu um erro ao cadastrar o usuário. Status code = " +
					response.status
			);
		}
	}
	// O backend não retorna corpo na resposta de sucesso para o cadastro
};

const useCadastrarUsuario = () => {
	return useMutation({
		mutationFn: (usuario: Usuario) => cadastrarUsuario(usuario),
	});
};
export default useCadastrarUsuario;
