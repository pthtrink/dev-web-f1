import { useMutation } from "@tanstack/react-query";
import queryClient from "../main";
import isErrorResponse from "../util/isErrorResponse";
import Usuario from "../interfaces/Usuario";

const cadastrarUsuario = async (usuario: Usuario) => {
  const response = await fetch("http://localhost:8080/usuario", {
    method: "POST",
    headers: {
      // tipo do conteúdo que o back-end espera receber
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(usuario)
  });
    if (!response.ok) {
      const error: any = await response.json();
      if (isErrorResponse(error)) {
        throw error;
      } else {
        throw new Error(
          "Ocorreu um erro ao se cadastrar. Status code = " +
            response.status
        );
      }
    }
  return await response.json(); 
};

const useCadastrarUsuario = () => {
  return useMutation({
    mutationFn: (usuario: Usuario) => cadastrarUsuario(usuario),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["usuario"]
      })
    }
  });
}
export default useCadastrarUsuario;
