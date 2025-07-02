import { createBrowserRouter } from "react-router-dom";
import CardsPorSlugCategoriaPage from "../pages/CardsPorSlugCategoriaPage";
import CarrinhoPage from "../pages/CarrinhoPage";
import ErrorPage from "../pages/ErrorPage";
import FavoritosPage from "../pages/FavoritosPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProdutoPage from "../pages/ProdutoPage";
import ProdutosComPaginacaoPage from "../pages/ProdutosComPaginacaoPage";
import Layout from "./Layout";
import PrivateRoutes from "./PrivateRoutes";
import CadastrarProdutoPage from "../pages/CadastrarProdutoPage";
import Page2024 from "../pages/Page2024";
import EquipesPage from "../pages/EquipesPage";
import PilotosPage from "../pages/PilotosPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "", 
                element: <HomePage />,
                children: [
                    {path: ":slugCategoria?", element: <CardsPorSlugCategoriaPage />}
                ]},
            {path: "produtos", element: <ProdutosComPaginacaoPage />},
            {path: "carrinho", element: <CarrinhoPage />},
            {path: "cadastrar-produto", element: <CadastrarProdutoPage />},
            {path: "produtos/:id", element: <ProdutoPage />},
            {path: "login", element: <LoginPage />},
            {path: "2024", element: <Page2024 />},
            {path: "pilotos", element: <PilotosPage />},
            {path: "equipes", element: <EquipesPage />},
        ]
    },
    {
        path: "/",
        element: <PrivateRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {path: "favoritos", element: <FavoritosPage />},
        ]
    }
])
export default router;