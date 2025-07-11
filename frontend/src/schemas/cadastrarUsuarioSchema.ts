import { z } from "zod";

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

export default cadastrarUsuarioSchema;
