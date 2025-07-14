import dayjs from "dayjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import databaseAdd from "../assets/skin/database_add.png";
import databaseEdit from "../assets/skin/database_edit.png";
import databaseCancel from "../assets/skin/multiply.png";
import useAlterarProduto from "../hooks/useAlterarProduto";
import useCadastrarProduto from "../hooks/useCadastrarProduto";
import Categoria from "../interfaces/Categoria";
import Produto from "../interfaces/Produto";
import useProdutoStore from "../store/ProdutoStore";
import z from "zod";
import isCategoriaValida from "../util/isCategoriaValida";
import isDataValida from "../util/isDataValida";
import { zodResolver } from "@hookform/resolvers/zod";

const regexData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const regexImagem = /^[a-z_]+\.(gif|jpg|png|bmp)$/;
const schema = z.object({
  nome: z
    .string()
    .nonempty({ message: "O 'nome' deve ser informado." })
    .min(3, { message: "O 'nome' deve ter pelo menos 3 caracteres." }),
  descricao: z.string().min(1, { message: "A 'descrição' deve ser informada." }),
  categoria: z
    .number()
    .refine(isCategoriaValida, { message: "A 'categoria' deve ser informada." }),
  data_cadastro: z
    .string()
    .min(1, { message: "A 'data de cadastro' deve ser informada." })
    .regex(regexData, { message: "Data inválida." })
    .refine(isDataValida, { message: "Data inválida." }),
  preco: z
    .coerce
    .number({ invalid_type_error: "O preço deve ser informado." })
    .min(0.1, { message: "O preço deve ser maior ou igual a R$ 0.10" }),
  qtd_estoque: z
    .coerce
    .number({
      invalid_type_error: "A quantidade em estoque deve ser informada.",
    })
    .min(0, { message: "A quantidade em estoque deve ser maior do que zero." }),
  imagem: z
    .string()
    .min(1, { message: "A 'imagem' deve ser informada." })
    .regex(regexImagem, { message: "Nome de imagem inválido." }),
  disponivel: z.boolean(),
});

type ProdutoForm = z.infer<typeof schema>;

interface Props {
  produto?: Produto;
}

const ProdutoForm = ({ produto }: Props) => {
  const setMensagem = useProdutoStore((s) => s.setMensagem);
  
  const setValoresIniciais = () => {
    if (produto) {
      setValue("nome", produto.nome);
      setValue("descricao", produto.descricao);
      setValue("categoria", produto.categoria.id);
      setValue(
        "data_cadastro",
        dayjs(produto.dataCadastro).format("DD/MM/YYYY")
      );
      setValue("preco", produto.preco);
      setValue("qtd_estoque", produto.qtdEstoque);
      setValue("imagem", produto.imagem);
      setValue("disponivel", produto.disponivel);
    } else {
      reset();
      setValue("data_cadastro", dayjs(new Date()).format("DD/MM/YYYY"));
      setValue("disponivel", true);
    }
  };

  useEffect(() => {
    setValoresIniciais();
  }, [produto]);

  const navigate = useNavigate();

  const { mutate: cadastrarProduto, error: errorCadastrarProduto } =
    useCadastrarProduto();
  const { mutate: alterarProduto, error: errorAlterarProduto } =
    useAlterarProduto();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProdutoForm>({
    defaultValues: {
      nome: "",
      descricao: "",
      categoria: 0,
      data_cadastro: dayjs(new Date()).format("DD/MM/YYYY"),
      preco: 0.0,
      qtd_estoque: 0,
      imagem: "",
      disponivel: true,
    },
    resolver: zodResolver(schema),
  });

  const onCadastrar = (data: ProdutoForm) => {
    const categoria: Categoria = {
      id: data.categoria,
      nome: "", // O backend não usa isso, apenas o id
      slug: "" // O backend não usa isso, apenas o id
    };

    const produto: Produto = {
      nome: data.nome,
      slug: slugify(data.nome, { lower: true }),
      descricao: data.descricao,
      categoria: categoria,
      dataCadastro: dayjs(data.data_cadastro, "DD/MM/YYYY").toDate(),
      preco: data.preco,
      qtdEstoque: data.qtd_estoque,
      imagem: data.imagem,
      disponivel: data.disponivel,
    };
    cadastrarProduto(produto);
    setMensagem("Produto cadastrado com sucesso!");
    reset();
    navigate("/produtos");
  };

  const onAlterar = (data: ProdutoForm) => {
    const categoria: Categoria = {
      id: data.categoria,
      nome: "", // O backend não usa isso, apenas o id
      slug: "" // O backend não usa isso, apenas o id
    };

    const produtoParaAlterar: Produto = {
      id: produto!.id,
      nome: data.nome,
      slug: slugify(data.nome, { lower: true }),
      descricao: data.descricao,
      categoria: categoria,
      dataCadastro: dayjs(data.data_cadastro, "DD/MM/YYYY").toDate(),
      preco: data.preco,
      qtdEstoque: data.qtd_estoque,
      imagem: data.imagem,
      disponivel: data.disponivel,
    };
    alterarProduto(produtoParaAlterar);
    setMensagem("Produto alterado com sucesso!");
    reset();
    navigate("/produtos");
  };

  const onCancelar = () => {
    reset();
    navigate("/produtos");
  };

  if (errorCadastrarProduto) throw errorCadastrarProduto;
  if (errorAlterarProduto) throw errorAlterarProduto;

  return (
    <form
      onSubmit={handleSubmit(produto ? onAlterar : onCadastrar)}
    >
      <div className="row">
        <div className="col-sm-8">
          <div className="form-group">
            <label htmlFor="nome" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>
              Nome
            </label>
            <input
              {...register("nome")}
              type="text"
              id="nome"
              className={errors.nome ? "form-control is-invalid" : "form-control"}
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            />
            <div className="invalid-feedback">{errors.nome?.message}</div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="categoria" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>
              Categoria
            </label>
            <select
              {...register("categoria", { valueAsNumber: true })}
              id="categoria"
              className={errors.categoria ? "form-select is-invalid" : "form-select"}
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            >
              <option value="0">Selecione uma categoria</option>
              <option value="1">Boné</option>
              <option value="2">Camisa Polo</option>
              <option value="3">LEGO</option>
              <option value="4">Calçado</option>
            </select>
            <div className="invalid-feedback">{errors.categoria?.message}</div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="preco" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>
              Preço
            </label>
            <input
              {...register("preco")}
              type="number"
              step={0.01}
              className={
                errors.preco ? "form-control is-invalid" : "form-control"
              }
              id="preco"
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            />
            <div className="invalid-feedback">{errors.preco?.message}</div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="qtd_estoque" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>
              Quantidade em Estoque
            </label>
            <input
              {...register("qtd_estoque")}
              type="number"
              className={
                errors.qtd_estoque ? "form-control is-invalid" : "form-control"
              }
              id="qtd_estoque"
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            />
            <div className="invalid-feedback">
              {errors.qtd_estoque?.message}
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="data_cadastro" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>
              Data de Cadastro
            </label>
            <input
              {...register("data_cadastro")}
              type="text"
              className={
                errors.data_cadastro ? "form-control is-invalid" : "form-control"
              }
              id="data_cadastro"
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            />
            <div className="invalid-feedback">
              {errors.data_cadastro?.message}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-8">
          <div className="form-group">
            <label htmlFor="descricao" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>
              Descrição
              </label>
            <input
              {...register("descricao")}
              type="text"
              className={
                errors.descricao ? "form-control is-invalid" : "form-control"
              }
              id="descricao"
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            />
            <div className="invalid-feedback">
              {errors.descricao?.message}
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="form-group">
            <label htmlFor="imagem" style={{ fontFamily: "F1-Bold-4", fontSize: "0.8em" }}>Nome da Imagem</label>
            <input
              {...register("imagem")}
              type="text"
              className={
                errors.imagem ? "form-control is-invalid" : "form-control"
              }
              id="imagem"
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
            />
            <div className="invalid-feedback">{errors.imagem?.message}</div>
          </div>

          <div className="form-check mt-2">
            <input
              {...register("disponivel")}
              className="form-check-input"
              type="checkbox"
              id="disponivel"
            />
            <label className="form-check-label" htmlFor="disponivel"
              style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}>
              Disponível
            </label>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <button type="submit" className="btn btn-primary me-2">
          <img
            src={produto ? databaseEdit : databaseAdd}
            width={16}
            className="me-2"
            style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
          />
          {produto ? "Alterar" : "Cadastrar"}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onCancelar()}
          style={{ fontFamily: "F1-Regular", fontSize: "0.8em" }}
        >
          <img src={databaseCancel} width={16} className="me-2" />
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default ProdutoForm;
