<h1 align="center">FIAP - Frontend Challenge</h1>

<p align="center">
  <a><img src="https://img.shields.io/badge/react-v18-red"/></a>
  <a><img src="https://img.shields.io/badge/react_dom-v18-red"/></a>
  <a><img src="https://img.shields.io/badge/nextjs-v14.2.13-red"/></a>
  <a><img src="https://img.shields.io/badge/formik-v2.4.6-green"/></a>
  <a><img src="https://img.shields.io/badge/yup-v1.4.0-green"/></a>
  <a><img src="https://img.shields.io/badge/axios-v1.7.7-orange"/></a>
  <a><img src="https://img.shields.io/badge/typescript-v5-blue"/></a>
  <a><img src="https://img.shields.io/badge/eslint-v8-blue"/></a>
  <a><img src="https://img.shields.io/badge/tailwindcss-v3.4.13-yellow"/></a>
</p>

Frontend Web para uma plataforma voltada a professores e alunos, onde professores podem publicar postagens visíveis para alunos e demais professores.
O projeto foi desenvolvido utilizando as seguintes tecnologias em destaque:

- **react:** Biblioteca para construir componentes web reutilizáveis.
- **nextjs:** Framework que utiliza componentes react para aplicações dinâmicas.
- **typescript:** Superconjunto de JavaScript que adiciona tipagem estática opcional;
- **formik:** Biblioteca auxiliar para formulários em react.
- **yup:** Biblioteca auxiliar para validação de formulários.
- **axios:** Biblioteca para requisições http.
- **tailwind:** Framework css com utility classes.

# Como Instalar

![](/docs/images/desktop-login.png)

## Backend

Para rodar esta solução, é preciso primeiro rodar o backend que está em outro repositório do github, mas já containerizado. Para isso, rode no terminal:

```sh
git clone https://github.com/ammtsz/fiap-challenge-backend.git
cd fiap-challenge-backend
npm install
```

Antes de rodar o container com o docker compose, configure um arquivo .env com as variáveis de ambiente conforme sugerido no [repositório do backend](https://github.com/ammtsz/fiap-challenge-backend), ou como o exemplo abaixo:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=docker
POSTGRES_PASSWORD=docker
POSTGRES_DB=challenge
JWT_SECRET=mysecret
```

Por fim, subir a aplicação utilizando docker:

```sh
docker compose up
```

Após esse procedimento, você terá rodando em localhost:
* Instância do PostgreSQL na porta 5432.
* Instância do backend (API) na porta 3000.

## Frontend

Em seguida, para o frontend, abra uma nova instância do terminal e rode:

```sh
git clone https://github.com/ammtsz/fiap-challenge-frontend.git
cd fiap-challenge-frontend
npm install
docker compose up
```

Desta forma, o frontend pode ser acessado no navegador através de `http://localhost:3001/`.

# Como utilizar a aplicação e Documentação

Logo na tela principal, clique em **"Registre-se"** para criar um usuário. Usuários do tipo ADMIN ou PROFESSOR podem criar/editar posts. Usuários do tipo ALUNO podem apenas visualizar posts. Para a documentação completa, com passo-a-passo para todos os procedimentos, [acesse aqui](https://beryl-sushi-951.notion.site/Documenta-o-Tech-Challenge-Fase-3-10feb6993b4a80e69b61db65c7609ab3).
