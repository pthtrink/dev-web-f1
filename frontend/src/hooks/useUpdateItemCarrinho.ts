import { useMutation } from "@tanstack/react-query";
import queryClient from "../main";

interface UpdateItemCarrinhoDTO {
  produtoId: number;
  quantidade: number;
}

const updateItemCarrinho = async (item: UpdateItemCarrinhoDTO) => {
  const response = await fetch("http://localhost:8080/carrinho", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Ocorreu um erro ao atualizar o item no carrinho.");
  }
};

const useUpdateItemCarrinho = () => {
  return useMutation({
    mutationFn: (item: UpdateItemCarrinhoDTO) => updateItemCarrinho(item),
    onSuccess: () => {
      // Invalida a query do carrinho para buscar os dados atualizados
      queryClient.invalidateQueries({
        queryKey: ["carrinho"],
      });
    },
  });
};

export default useUpdateItemCarrinho;