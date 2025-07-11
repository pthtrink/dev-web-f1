import { useMutation } from "@tanstack/react-query";
import Usuario from "../interfaces/Usuario";

const cadastrarUsuario = async (usuario: Usuario) => {
	const response = await fetch("http://localhost:8080/usuario", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(usuario),
	});

	if (!response.ok) {
		// Lança um erro que inclui a resposta para ser tratado no callback onError
		const error = new Error("Ocorreu um erro ao cadastrar o usuário.");
		(error as any).response = response;
		throw error;
	}
	// O backend não retorna corpo na resposta de sucesso para o cadastro
};

const useCadastrarUsuario = () => {
	return useMutation({
		mutationFn: (usuario: Usuario) => cadastrarUsuario(usuario),
	});
};
export default useCadastrarUsuario;
