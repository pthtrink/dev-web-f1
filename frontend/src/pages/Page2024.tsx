import NavBar from "../components/NavBar"

const Page2024 = () => {
  
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
			<h4 id="construtores" style={{fontFamily: "F1-Wide", paddingTop: "0.5em"}}>CLASSIFICAÇÃO DOS CONSTRUTORES <span className="badge bg-dark">NEW</span></h4>
            <div className="accordion" id="accordion-equipes" style={{width: "50%"}}>
				<div className="accordion-item">
					<h2 className="accordion-header" id="mclarenHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMclaren"
							aria-expanded="true" aria-controls="collapseMclaren">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								1°
							</div>
							<img src="src\assets\images\equipes\logos\McLaren.png" alt="McLaren" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseMclaren" className="accordion-collapse collapse" aria-labelledby="mclarenHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#FF8000",
										textTransform: "uppercase"}}>
										McLaren Mercedes
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										666 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="ferrariHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFerrari"
							aria-expanded="true" aria-controls="collapseFerrari">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								2°
							</div>
							<img src="src\assets\images\equipes\logos\Ferrari.png" alt="Ferrari" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseFerrari" className="accordion-collapse collapse" aria-labelledby="ferrariHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#E80020",
										textTransform: "uppercase"}}>
										Ferrari
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										652 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="redbullHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRedbull"
							aria-expanded="true" aria-controls="collapseRedbull">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								3°
							</div>
							<img src="src\assets\images\equipes\logos\RedBull.png" alt="RedBull" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseRedbull" className="accordion-collapse collapse" aria-labelledby="redbullHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#3671C6",
										textTransform: "uppercase"}}>
										Red Bull Racing Honda RBPT
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										589 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="mercedesHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMercedes"
							aria-expanded="true" aria-controls="collapseMercedes">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								4°
							</div>
							<img src="src\assets\images\equipes\logos\Mercedes.png" alt="Mercedes" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseMercedes" className="accordion-collapse collapse" aria-labelledby="mercedesHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#27F4D2",
										textTransform: "uppercase"}}>
										Mercedes
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										468 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="astonHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAston"
							aria-expanded="true" aria-controls="collapseAston">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								5°
							</div>
							<img src="src\assets\images\equipes\logos\Aston.png" alt="Aston Martin" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseAston" className="accordion-collapse collapse" aria-labelledby="astonHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#229971",
										textTransform: "uppercase"}}>
										Aston Martin Aramco Mercedes
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										94 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="alpineHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAlpine"
							aria-expanded="true" aria-controls="collapseAlpine">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								6°
							</div>
							<img src="src\assets\images\equipes\logos\Alpine.png" alt="Alpine" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseAlpine" className="accordion-collapse collapse" aria-labelledby="alpineHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#00A1E8",
										textTransform: "uppercase"}}>
										Alpine Renault
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										65 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="haasHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHaas"
							aria-expanded="true" aria-controls="collapseHaas">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								7°
							</div>
							<img src="src\assets\images\equipes\logos\Haas.png" alt="Haas" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseHaas" className="accordion-collapse collapse" aria-labelledby="haasHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#B6BABD",
										textTransform: "uppercase"}}>
										Haas Ferrari
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										56 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="racingbullsHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRacingBulls"
							aria-expanded="true" aria-controls="collapseRacingBulls">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								8°
							</div>
							<img src="src\assets\images\equipes\logos\RacingBulls.png" alt="Racing Bulls" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseRacingBulls" className="accordion-collapse collapse" aria-labelledby="racingbullsHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#6692FF",
										textTransform: "uppercase"}}>
										RB Honda RBPT
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										46 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="williamsHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWilliams"
							aria-expanded="true" aria-controls="collapseWilliams">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								9°
							</div>
							<img src="src\assets\images\equipes\logos\Williams.png" alt="Williams" width="60%" height="auto"
								style={{paddingLeft: "10em"}}/>
						</button>
					</h2>
					<div id="collapseWilliams" className="accordion-collapse collapse" aria-labelledby="williamsHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#1868DB",
										textTransform: "uppercase"}}>
										Williams Mercedes
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										17 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="sauberHeader">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSauber"
							aria-expanded="true" aria-controls="collapseSauber">
							<div className="texto-1" style={{fontFamily: "F1-Regular", color: "#000000"}}>
								10°
							</div>
							<img src="src\assets\images\equipes\logos\KickSauber.png" alt="Kick Sauber" width="60%" height="auto"
								style={{paddingLeft: "10em"}} />
						</button>
					</h2>
					<div id="collapseSauber" className="accordion-collapse collapse" aria-labelledby="sauberHeader"
						data-bs-parent="#accordion-equipes">
						<div className="accordion-body">
							<div className="row">
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#52E252",
										textTransform: "uppercase"}}>
										Kick Sauber Ferrari
									</div>
								</div>
								<div className="col">
									<div className="text" style={{fontFamily: "F1-Regular", color: "#000000",
										textTransform: "uppercase", paddingLeft: "7em"}}>
										4 pontos
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
			<div className="container">
				<h4 id="pilotos" style={{ fontFamily: "F1-Wide", paddingTop: "5em" }}>CLASSIFICAÇÃO DOS PILOTOS</h4>
				<h4 style={{ fontFamily: "F1-Regular", paddingTop: "0.5em" }}>EM CONSTRUÇÃO</h4>
			</div>
    	</div>

		<div className="footer">
            <div className="container">
				<p className="text-center" style={{ fontFamily: 'F1-Regular', color: '#000', paddingTop: '1em' }}>
				Desenvolvido por <b style={{ textTransform: 'uppercase' }}>Pedro e Thales</b> </p>
            </div>
        </div>

		<script src="src/assets/js/jquery-3.3.1.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js"></script>
		<script src="src/assets/js/bootstrap.js"></script>
    </>
  );
};
export default Page2024;