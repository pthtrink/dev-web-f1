import NavBar from "../components/NavBar";

const PilotosPage = () => {
  
  return (
	<>
	  <NavBar />
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><a href="/">Home</a></li>
				<li className="breadcrumb-item active" aria-current="page">2024</li>
			</ol>
		</nav>
		<div className="container">
			<h4 id="pilotos" style={{ fontFamily: 'F1-Wide', paddingTop: '0.5em', paddingBottom: '0.1em'}}>PILOTOS</h4>
			<div className="row">
			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/lando-norris.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/nor.png" alt="Norris" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Lando <b style={{ textTransform: 'uppercase' }}>Norris</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#FF8000', fontFamily: 'F1-Regular' }}>
						MCLAREN MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/oscar-piastri.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/pia.png" alt="Piastri" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Oscar <b style={{ textTransform: 'uppercase' }}>Piastri</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#FF8000', fontFamily: 'F1-Regular' }}>
						MCLAREN MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/charles-leclerc.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/lec.png" alt="Leclerc" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Charles <b style={{ textTransform: 'uppercase' }}>Leclerc</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#E80020', fontFamily: 'F1-Regular' }}>
						FERRARI
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/lewis-hamilton.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/ham.png" alt="Hamilton" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Lewis <b style={{ textTransform: 'uppercase' }}>Hamilton</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#E80020', fontFamily: 'F1-Regular' }}>
						FERRARI
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/max-verstappen.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/ver.png" alt="Verstappen" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Max <b style={{ textTransform: 'uppercase' }}>Verstappen</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#3671C6', fontFamily: 'F1-Regular' }}>
						RED BULL RACING HONDA RBPT
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/yuki-tsunoda.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/tsu.png" alt="Tsunoda" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Yuki <b style={{ textTransform: 'uppercase' }}>Tsunoda</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#3671C6', fontFamily: 'F1-Regular' }}>
						RED BULL RACING HONDA RBPT
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/george-russell.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/rus.png" alt="Russell" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						George <b style={{ textTransform: 'uppercase' }}>Russell</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#27F4D2', fontFamily: 'F1-Regular' }}>
						MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/kimi-antonelli.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/ant.png" alt="Antonelli" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Kimi <b style={{ textTransform: 'uppercase' }}>Antonelli</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#27F4D2', fontFamily: 'F1-Regular' }}>
						MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/fernando-alonso.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/alo.png" alt="Alonso" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Fernando <b style={{ textTransform: 'uppercase' }}>Alonso</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#229971', fontFamily: 'F1-Regular' }}>
						ASTON MARTIN ARAMCO MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/lance-stroll.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/str.png" alt="Stroll" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Lance <b style={{ textTransform: 'uppercase' }}>Stroll</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#229971', fontFamily: 'F1-Regular' }}>
						ASTON MARTIN MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/pierre-gasly.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/gas.png" alt="Gasly" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Pierre <b style={{ textTransform: 'uppercase' }}>Gasly</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#00A1E8', fontFamily: 'F1-Regular' }}>
						ALPINE RENAULT
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/jack-doohan.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/doo.png" alt="Doohan" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Jack <b style={{ textTransform: 'uppercase' }}>Doohan</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#00A1E8', fontFamily: 'F1-Regular' }}>
						ALPINE RENAULT
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/esteban-ocon.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/oco.png" alt="Ocon" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Esteban <b style={{ textTransform: 'uppercase' }}>Ocon</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#B6BABD', fontFamily: 'F1-Regular' }}>
						HAAS FERRARI
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/oliver-bearman.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/bea.png" alt="Bearman" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Oliver <b style={{ textTransform: 'uppercase' }}>Bearman</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#B6BABD', fontFamily: 'F1-Regular' }}>
						HAAS FERRARI
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/isack-hadjar.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/had.png" alt="Hadjar" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Isack <b style={{ textTransform: 'uppercase' }}>Hadjar</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#6692FF', fontFamily: 'F1-Regular' }}>
						RACING BULLS HONDA RBPT
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/liam-lawson.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/law.png" alt="Lawson" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Liam <b style={{ textTransform: 'uppercase' }}>Lawson</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#6692FF', fontFamily: 'F1-Regular' }}>
						RACING BULLS HONDA RBPT
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/alexander-albon.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/alb.png" alt="Albon" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Alexander <b style={{ textTransform: 'uppercase' }}>Albon</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#1868DB', fontFamily: 'F1-Regular' }}>
						WILLIAMS MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/carlos-sainz.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/sai.png" alt="Sargeant" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Carlos <b style={{ textTransform: 'uppercase' }}>Sainz</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#1868DB', fontFamily: 'F1-Regular' }}>
						WILLIAMS MERCEDES
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/gabriel-bortoleto.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/bor.png" alt="Bortoleto" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Gabriel <b style={{ textTransform: 'uppercase' }}>Bortoleto</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#52E252', fontFamily: 'F1-Regular' }}>
						KICK SAUBER FERRARI
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>

			<div className="col-3 mb-4">
				<a href="https://www.formula1.com/en/drivers/nico-hulkenberg.html" className="text-decoration-none">
				<div className="card">
					<img src="/src/assets/images/pilotos/hul.png" alt="Hulkenberg" />
					<div className="card-body">
					<div className="text-center">
						<h5 className="card-title" style={{ fontFamily: 'F1-Regular', color: '#000' }}>
						Nico <b style={{ textTransform: 'uppercase' }}>Hulkenberg</b>
						</h5>
						<p className="font-weight-bold" style={{ color: '#52E252', fontFamily: 'F1-Regular' }}>
						KICK SAUBER FERRARI
						</p>
					</div>
					</div>
				</div>
				</a>
			</div>
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
export default PilotosPage;