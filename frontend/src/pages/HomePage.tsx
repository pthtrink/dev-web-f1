import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {

	return (
		<>
			<div className="row">
				<div className="col-lg-2">
					<nav className="nav nav-pills d-flex flex-column">
						<h5 style={{ fontFamily: "F1-Regular" }}>Categorias</h5>
						<NavLink className="nav-link" to="/" style={{ fontFamily: "F1-Bold-Web" }} aria-current="page">
							Todos
						</NavLink>
						<NavLink className="nav-link" to="/bones" style={{ fontFamily: "F1-Bold-Web" }}>
							Bonés
						</NavLink>
						<NavLink className="nav-link" to="/polos" style={{ fontFamily: "F1-Bold-Web" }}>
							Camisas Polo
						</NavLink>
						<NavLink className="nav-link" to="/legos" style={{ fontFamily: "F1-Bold-Web" }}>
							LEGO
						</NavLink>
						<NavLink className="nav-link" to="/calcados" style={{ fontFamily: "F1-Bold-Web" }}>
							Calçados
						</NavLink>
					</nav>
				</div>
				<div className="col-lg-10">
					<Outlet />
				</div>
			</div>
			<div className="footer">
				<div className="container">
					<p className="text-center" style={{ fontFamily: 'F1-Regular', color: '#000', paddingTop: '1em' }}>
					Desenvolvido por <b style={{ textTransform: 'uppercase' }}>Pedro e Thales</b> </p>
				</div>
			</div>
		</>
	);
};
export default HomePage;
