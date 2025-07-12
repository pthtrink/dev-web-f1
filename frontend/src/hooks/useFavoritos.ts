import { useQuery } from "@tanstack/react-query";
import Produto from "../interfaces/Produto";

const fetchFavoritos = async () => {
  // O backend identifica o usuário pelo token/sessão
  const response = await fetch("http://localhost:8080/favoritos");
  if (!response.ok) {
    throw new Error("Ocorreu um erro ao buscar os favoritos.");
  }
  return (await response.json()) as Produto[];
};

const useFavoritos = () => {
  return useQuery({
    queryKey: ["favoritos"],
    queryFn: fetchFavoritos,
    staleTime: 1000 * 60 * 5, // Cache de 5 minutos
  });
};

export default useFavoritos;