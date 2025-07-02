import { NavLink } from "react-router-dom";
import logof1 from "../assets/images/logo-f1.png";
import useUsuarioStore from "../store/UsuarioStore";
import Produto from "../interfaces/Produto";
import useProdutoStore from "../store/ProdutoStore";
import "../assets/css/all.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
	const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado);
	const setProdutoSelecionado = useProdutoStore((s) => s.setProdutoSelecionado);

	return (
		<nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<img
					src={logof1}
					alt="logo da f1"
					style={{ width: "5em" }}
					/>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item" style={{ fontFamily: "F1-Regular", color: "#FFF",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/pilotos">
								Pilotos
							</NavLink>
						</li>
						<li className="nav-item" style={{ fontFamily: "F1-Regular", color: "#FFF",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/equipes">
								Equipes
							</NavLink>
						</li>
						<li className="nav-item dropdown" style={{ fontFamily: "F1-Regular", color:"#FFF",
							fontSize: "0.9em", textAlign: "center"}}>
							<a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Campeonatos Anteriores
							</a>
							<ul className="dropdown-menu dropdown-menu-dark">
								<li><a className="dropdown-item" href="#">2021</a></li>
								<li><a className="dropdown-item" href="#">2022</a></li>
								<li><a className="dropdown-item" href="#">2023</a></li>
								<li>
									<NavLink className="dropdown-item" to="/2024">
										2024
									</NavLink></li>
							</ul>
						</li>
						<li className="nav-item" style={{ fontFamily: "F1-Regular", color: "#FFF",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/favoritos">
								Favoritos
							</NavLink>
						</li>
						<li className="nav-item" style={{fontFamily: "F1-Regular",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/produtos">
								Produtos
							</NavLink>
						</li>
						<li className="nav-item" style={{fontFamily: "F1-Regular",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink onClick={() => setProdutoSelecionado({} as Produto)} className="nav-link" to="/cadastrarProduto">
								Cadastrar Produto
							</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item" style={{fontFamily: "F1-Regular",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/produtos:shop">
								<i className="bi bi-shop"></i>
							</NavLink>
						</li>
						<li className="nav-item" style={{fontFamily: "F1-Regular",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/carrinho">
								<i className="bi bi-cart2"></i>
							</NavLink>
						</li>
						<li className="nav-item" style={{fontFamily: "F1-Regular",
							fontSize: "0.9em", textAlign: "center" }}>
							<NavLink className="nav-link" to="/login">
								{usuarioLogado ? "Sair" : "Entrar"}
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
