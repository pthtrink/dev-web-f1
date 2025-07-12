import { useMutation } from "@tanstack/react-query";
import queryClient from "../main"; // Importe seu queryClient

const addFavorito = async (produtoId: number) => {
  const response = await fetch("http://localhost:8080/favoritos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ produtoId }),
  });
  if (!response.ok) {
    throw new Error("Ocorreu um erro ao adicionar o favorito.");
  }
};

const useAddFavorito = () => {
  return useMutation({
    mutationFn: (produtoId: number) => addFavorito(produtoId),
    onSuccess: () => {
      // Invalida a query de favoritos para forçar a atualização da lista
      queryClient.invalidateQueries({
        queryKey: ["favoritos"],
      });
    },
  });
};

export default useAddFavorito;