import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Usuario from "../interfaces/Usuario";
import useCadastrarUsuario from "../hooks/useCadastrarUsuario";
import { useState } from "react";
import { AxiosError } from 'axios';

const cadastrarUsuarioSchema = z
	.object({
		conta: z
			.string()
			.min(1, "A conta é obrigatória")
			.email("Formato de e-mail inválido"),
		senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
		confirmacaoSenha: z.string(),
	})
	.refine((data) => data.senha === data.confirmacaoSenha, {
		message: "As senhas não correspondem",
		path: ["confirmacaoSenha"],
	});

type Form = z.infer<typeof cadastrarUsuarioSchema>;

const CadastrarUsuarioForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Form>({
		resolver: zodResolver(cadastrarUsuarioSchema),
	});

	const { mutate: efetuarCadastro } =	useCadastrarUsuario();
	const [cadastroSucesso, setCadastroSucesso] = useState(false);
	const [cadastroInvalido, setCadastroInvalido] = useState(false);
	const [contaExistente, setContaExistente] = useState(false);

	const submit = ({ conta, senha }: Form) => {
		const usuario: Usuario = { conta, senha };

		efetuarCadastro(usuario, {
			onSuccess: () => {
				setCadastroSucesso(true);
				setCadastroInvalido(false);
			},
			onError: (error: AxiosError) => {
				if (error.response && error.response.status === 409) {
					setContaExistente(true);
					setCadastroInvalido(false);
					setCadastroSucesso(false);
				} else {
					setCadastroInvalido(true);
					setCadastroSucesso(false);
					setContaExistente(false);
				}
			},
		});
	};

	return (
		<>
			{cadastroSucesso && (
				<div className="alert alert-success">Cadastro realizado com sucesso!</div>
			)}
			{cadastroInvalido && (
				<div className="alert alert-danger">
					Não foi possível realizar o cadastro.
				</div>
			)}
			{contaExistente && (
				<div className="alert alert-danger">
					Esta conta já existe.
				</div>
			)}
			<form autoComplete="off" onSubmit={handleSubmit(submit)}>
				<div className="row mb-2">
					<label htmlFor="conta" className="col-lg-2 fw-bold mb-2">
						Conta (e-mail)
					</label>
					<div className="col-lg-5">
						<input
							{...register("conta")}
							type="text" id="conta" className={`form-control form-control-sm ${
								errors.conta && "is-invalid"
							}`}
						/>
						{errors.conta && (
							<div className="invalid-feedback">{errors.conta.message}</div>
						)}
					</div>
				</div>

				<div className="row mb-2">
					<label htmlFor="senha" className="col-lg-2 fw-bold mb-2">
						Senha
					</label>
					<div className="col-lg-5">
						<input
							{...register("senha")}
							type="password"
							id="senha"
							className={`form-control form-control-sm ${
								errors.senha && "is-invalid"
							}`}
						/>
						{errors.senha && (
							<div className="invalid-feedback">{errors.senha.message}</div>
						)}
					</div>
				</div>
				<div className="row mb-2">
					<label htmlFor="confirmacaoSenha" className="col-lg-2 fw-bold mb-2">
						Confirme a Senha
					</label>
					<div className="col-lg-5">
						<input
							{...register("confirmacaoSenha")}
							type="password"
							id="confirmacaoSenha"
							className={`form-control form-control-sm ${
								errors.confirmacaoSenha && "is-invalid"
							}`}
						/>
						{errors.confirmacaoSenha && (
							<div className="invalid-feedback">
								{errors.confirmacaoSenha.message}
							</div>
						)}
					</div>
				</div>

				<div className="row">
					<div className="offset-2">
						<button
							type="submit"
							className="btn btn-outline-primary"
							style={{ whiteSpace: "nowrap" }}
						>
							Cadastrar-se
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
export default CadastrarUsuarioForm;
