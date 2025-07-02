package com.carlosribeiro.apirestfulv1;

import com.carlosribeiro.apirestfulv1.model.Categoria;
import com.carlosribeiro.apirestfulv1.model.Produto;
import com.carlosribeiro.apirestfulv1.model.Usuario;
import com.carlosribeiro.apirestfulv1.repository.CategoriaRepository;
import com.carlosribeiro.apirestfulv1.repository.ProdutoRepository;
import com.carlosribeiro.apirestfulv1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class Apirestfulv1Application implements CommandLineRunner {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	public static void main(String[] args) {
		SpringApplication.run(Apirestfulv1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Usuario usuario = new Usuario("admin", "devweb");
		usuarioRepository.save(usuario);

		Categoria bone = new Categoria("Boné", "bones");
		categoriaRepository.save(bone);

		Categoria polo = new Categoria("Camisa Polo", "polos");
		categoriaRepository.save(polo);

		Categoria lego = new Categoria("LEGO", "legos");
		categoriaRepository.save(lego);

		Categoria calcado = new Categoria("Calçado", "calcados");
		categoriaRepository.save(calcado);

		Produto produto = new Produto(
				"lego_mclaren.png",
				"LEGO F1 McLaren",
				"lego_mclaren",
				"Miniatura LEGO da equipe McLaren de Fórmula 1",
				true,
				12,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2023, 4, 26),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_ferrari.png",
				"LEGO F1 Ferrari",
				"lego_ferrari",
				"Miniatura LEGO da equipe Ferrari de Fórmula 1",
				true,
				15,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2022, 8, 11),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_aston.png",
				"LEGO F1 Aston Martin",
				"lego_aston",
				"Miniatura LEGO da equipe Aston Martin de Fórmula 1",
				true,
				7,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2024, 3, 21),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_alpine.png",
				"LEGO F1 Alpine",
				"lego_alpine",
				"Miniatura LEGO da equipe Alpine de Fórmula 1",
				true,
				19,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2021, 11, 5),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_williams.png",
				"LEGO F1 Williams",
				"lego_williams",
				"Miniatura LEGO da equipe Williams de Fórmula 1",
				true,
				12,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2023, 1, 30),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_redbull.png",
				"LEGO F1 Red Bull",
				"lego_redbull",
				"Miniatura LEGO da equipe Red Bull de Fórmula 1",
				true,
				5,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2022, 5, 18),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_haas.png",
				"LEGO F1 Haas",
				"lego_haas",
				"Miniatura LEGO da equipe Haas de Fórmula 1",
				true,
				9,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2021, 7, 25),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_sauber.png",
				"LEGO F1 Kick Sauber",
				"lego_sauber",
				"Miniatura LEGO da equipe Kick Sauber de Fórmula 1",
				true,
				18,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2023, 10, 2),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"lego_mercedes.png",
				"LEGO F1 Mercedes",
				"lego_mercedes",
				"Miniatura LEGO da equipe Mercedes de Fórmula 1",
				true,
				11,
				BigDecimal.valueOf(249.99),
				LocalDate.of(2022, 6, 14),
				lego);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_mclaren.png",
				"Camisa Polo F1 McLaren",
				"camisa_polo_mclaren",
				"Camisa Polo de torcedor da equipe McLaren de Fórmula 1",
				true,
				4,
				BigDecimal.valueOf(329.90),
				LocalDate.of(2023, 5, 22),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_ferrari.png",
				"Camisa Polo F1 Ferrari",
				"camisa_polo_ferrari",
				"Camisa Polo de torcedor da equipe Ferrari de Fórmula 1",
				true,
				9,
				BigDecimal.valueOf(459.99),
				LocalDate.of(2023, 8, 22),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_aston.png",
				"Camisa Polo F1 Aston Martin",
				"camisa_polo_aston",
				"Camisa Polo de torcedor da equipe Aston Martin de Fórmula 1",
				true,
				15,
				BigDecimal.valueOf(389.99),
				LocalDate.of(2024, 4, 1),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_alpine.png",
				"Camisa Polo F1 Alpine",
				"camisa_polo_alpine",
				"Camisa Polo de torcedor da equipe Alpine de Fórmula 1",
				true,
				6,
				BigDecimal.valueOf(309.99),
				LocalDate.of(2022, 12, 19),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_williams.png",
				"Camisa Polo F1 Williams",
				"camisa_polo_williams",
				"Camisa Polo de torcedor da equipe Williams de Fórmula 1",
				true,
				12,
				BigDecimal.valueOf(299.99),
				LocalDate.of(2023, 2, 28),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_redbull.png",
				"Camisa Polo F1 Red Bull",
				"camisa_polo_redbull",
				"Camisa Polo de torcedor da equipe Red Bull de Fórmula 1",
				true,
				5,
				BigDecimal.valueOf(499.99),
				LocalDate.of(2025, 6, 30),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_racingbulls.png",
				"Camisa Polo F1 Racing Bulls",
				"camisa_polo_racingbulls",
				"Camisa Polo de torcedor da equipe Racing Bulls de Fórmula 1",
				true,
				14,
				BigDecimal.valueOf(349.99),
				LocalDate.of(2024, 3, 11),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_haas.png",
				"Camisa Polo F1 Haas",
				"camisa_polo_haas",
				"Camisa Polo de torcedor da equipe Haas de Fórmula 1",
				true,
				8,
				BigDecimal.valueOf(329.99),
				LocalDate.of(2022, 10, 5),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_sauber.png",
				"Camisa Polo F1 Kick Sauber",
				"camisa_polo_sauber",
				"Camisa Polo de torcedor da equipe Kick Sauber de Fórmula 1",
				true,
				11,
				BigDecimal.valueOf(419.99),
				LocalDate.of(2023, 9, 14),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"polo_mercedes.png",
				"Camisa Polo F1 Mercedes",
				"camisa_polo_mercedes",
				"Camisa Polo de torcedor da equipe Mercedes de Fórmula 1",
				true,
				7,
				BigDecimal.valueOf(479.99),
				LocalDate.of(2025, 1, 20),
				polo);
		produtoRepository.save(produto);

		produto = new Produto(
				"calcado_preto_mercedes.png",
				"Calçado Preto Mercedes",
				"calcado_preto_mercedes",
				"Calçado preto da equipe Mercedes de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"calcado_branco_mercedes.png",
				"Calçado Branco Mercedes",
				"calcado_branco_mercedes",
				"Calçado branco da equipe Mercedes de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"calcado_sola_feia_mercedes.png",
				"Calçado Sola Feia Mercedes",
				"calcado_sola_feia_mercedes",
				"Calçado de sola feia da equipe Mercedes de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"calcado_all_black_mercedes.png",
				"Calçado All Black Mercedes",
				"calcado_all_black_mercedes",
				"Calçado all black da equipe Mercedes de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"tenis_mercedes.png",
				"Tênis Mercedes",
				"tenis_mercedes",
				"Tênis da equipe Mercedes de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"calcado_preto_ferrari.png",
				"Calçado Preto Ferrari",
				"calcado_preto_ferrari",
				"Calçado preto da equipe Ferrari de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"calcado_vermelho_ferrari.png",
				"Calçado Vermelho Ferrari",
				"calcado_vermelho_ferrari",
				"Calçado vermelho da equipe Ferrari de Fórmula 1",
				true,
				10,
				BigDecimal.valueOf(449.99),
				LocalDate.of(2023, 3, 28),
				calcado);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_mclaren.png",
				"Boné F1 McLaren",
				"bone_mclaren",
				"Boné da equipe McLaren de Fórmula 1",
				true,
				3,
				BigDecimal.valueOf(109.99),
				LocalDate.of(2024, 5, 15),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_ferrari.png",
				"Boné F1 Ferrari",
				"bone_ferrari",
				"Boné da equipe Ferrari de Fórmula 1",
				true,
				5,
				BigDecimal.valueOf(119.99),
				LocalDate.of(2025, 2, 10),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_aston.png",
				"Boné F1 Aston Martin",
				"bone_aston",
				"Boné da equipe Aston Martin de Fórmula 1",
				true,
				1,
				BigDecimal.valueOf(99.99),
				LocalDate.of(2023, 11, 20),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_alpine.png",
				"Boné F1 Alpine",
				"bone_alpine",
				"Boné da equipe Alpine de Fórmula 1",
				true,
				4,
				BigDecimal.valueOf(89.99),
				LocalDate.of(2024, 1, 30),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_williams.png",
				"Boné F1 Williams",
				"bone_williams",
				"Boné da equipe Williams de Fórmula 1",
				true,
				2,
				BigDecimal.valueOf(79.99),
				LocalDate.of(2023, 7, 7),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_redbull.png",
				"Boné F1 Red Bull",
				"bone_redbull",
				"Boné da equipe Red Bull de Fórmula 1",
				true,
				5,
				BigDecimal.valueOf(115.99),
				LocalDate.of(2025, 3, 5),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_racingbulls.png",
				"Boné F1 Racing Bulls",
				"bone_racingbulls",
				"Boné da equipe Racing Bulls de Fórmula 1",
				true,
				2,
				BigDecimal.valueOf(95.99),
				LocalDate.of(2024, 8, 1),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_haas.png",
				"Boné F1 Haas",
				"bone_haas",
				"Boné da equipe Haas de Fórmula 1",
				true,
				1,
				BigDecimal.valueOf(85.99),
				LocalDate.of(2023, 9, 25),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_sauber.png",
				"Boné F1 Kick Sauber",
				"bone_sauber",
				"Boné da equipe Kick Sauber de Fórmula 1",
				true,
				4,
				BigDecimal.valueOf(92.99),
				LocalDate.of(2024, 6, 18),
				bone);
		produtoRepository.save(produto);

		produto = new Produto(
				"bone_mercedes.png",
				"Boné F1 Mercedes",
				"bone_mercedes",
				"Boné da equipe Mercedes de Fórmula 1",
				true,
				5,
				BigDecimal.valueOf(112.99),
				LocalDate.of(2025, 7, 1),
				bone);
		produtoRepository.save(produto);
	}
}
