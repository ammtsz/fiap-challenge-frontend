# Escola CMS

![](/docs/images/desktop-login.png)

Esta é a solução de frontend para o ambiente de conteúdo da Escola. 

## Como Instalar

Para rodar esta solução, é preciso primeiro rodar o backend que está em outro repositório do github, mas já containerizado. Para isso, rode no terminal:

```sh
git clone https://github.com/ammtsz/fiap-challenge-backend.git
cd fiap-challenge-backend
npm install
docker compose up
```

Após esse procedimento, você terá rodando em localhost:
* Instância do PostgreSQL na porta 5432.
* Instância do backend (API) na porta 3000.

Em seguida, para o frontend, abra uma nova instância do terminal e rode:

```sh
git clone https://github.com/ammtsz/fiap-challenge-frontend.git
cd fiap-challenge-frontend
npm install
docker compose up
```

Desta forma, o frontend pode ser acessado no navegador através de `http://localhost:3001/`.

## Como utilizar a aplicação

* Logo na tela principal, clicque em "Registre-se" e crie um usuário. Usuários do tipo ADMIN ou PROFESSOR podem criar/editar posts. Usuários do tipo ALUNO podem apensar visualizar posts.
