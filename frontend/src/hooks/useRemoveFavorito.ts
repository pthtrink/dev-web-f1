import { useMutation } from "@tanstack/react-query";
import queryClient from "../main"; // Importe seu queryClient

const removeFavorito = async (produtoId: number) => {
  const response = await fetch(`http://localhost:8080/favoritos/${produtoId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Ocorreu um erro ao remover o favorito.");
  }
};

const useRemoveFavorito = () => {
  return useMutation({
    mutationFn: (produtoId: number) => removeFavorito(produtoId),
    onSuccess: () => {
      // Invalida a query de favoritos para forçar a atualização da lista
      queryClient.invalidateQueries({
        queryKey: ["favoritos"],
      });
    },
  });
};

export default useRemoveFavorito;