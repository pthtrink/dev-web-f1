import { useQuery } from "@tanstack/react-query";
import ItemCarrinho from "../interfaces/ItemCarrinho";

const fetchCarrinho = async () => {
  const response = await fetch("http://localhost:8080/carrinho");
  if (!response.ok) {
    throw new Error("Ocorreu um erro ao buscar o carrinho.");
  }
  return (await response.json()) as ItemCarrinho[];
};

const useCarrinho = () => {
  return useQuery({
    queryKey: ["carrinho"],
    queryFn: fetchCarrinho,
  });
};

export default useCarrinho;