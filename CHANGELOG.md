# Log de Alterações

## Adições

- `frontend/src/pages/CadastrarUsuarioPage.tsx`: Nova página para o cadastro de usuários.
- `frontend/src/schemas/cadastrarUsuarioSchema.ts`: Schema de validação com Zod para o formulário de cadastro.

## Modificações

- `frontend/src/components/CadastrarUsuarioForm.tsx`: Atualizado para incluir os campos de conta, senha e confirmação de senha, utilizando `react-hook-form` e `zod` para validação.
- `frontend/src/hooks/useCadastrarUsuario.ts`: Modificado para refletir a nova lógica de cadastro.
- `frontend/src/components/NavBar.tsx`: Adicionado um botão "Cadastrar-se" na barra de navegação.
- `frontend/src/routes/index.tsx`: Adicionada a rota para a página de cadastro de usuário.
- `frontend/src/interfaces/Usuario.ts`: Adicionado o campo `confirmacaoSenha`.

## Remoções

- `frontend/src/interfaces/TokenResponse.ts`: Removido pois não é mais utilizado.
