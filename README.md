# PROJETO TALKER MANAGER - TRYBE

Nesse projeto foi desenvolvida uma aplicação de cadastros de talkers utilizando Node.js e Express, onde foi criado uma API de um CRUD (Create, Read, Update e Delete) de talkers e ENDPOITS para ler e escrever em um arquivo utilizando o módulo fs do Node.js, além do uso de middlewares e routers.

# - Clone o repositório:
git clone git@github.com:otavioadias/talker-manager.git

Entre na pasta: cd sd-021-b-project-talker-manager
Verifique em qual branch está, caso esteja na master utilize: git checkout otavio-azevedo-sd-021-b-project-talker-manager

# - Rodando projeto com Docker:

Rode o serviço node com o comando: docker-compose up -d.

Esse serviço irá inicializar um container chamado talker_manager.
A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
Use o comando: docker exec -it talker_manager bash.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências [Caso existam] com: npm install

Execute a aplicação com: npm start ou npm run dev

# - Rodando os testes:
! Os testes desse projeto foram fornecidos pela Trybe.
Para executar todos os testes inicie a aplicação com npm run dev e execute o npm test
Para executar um único teste inicie a aplicação com npm run dev e execute o npm test nome-do-teste

# - Requisitos do Projeto:
# 1 - Crie o endpoint GET /talker
A requisição deve retornar o status 200 e um array com todas as pessoas palestrantes cadastradas
Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o status 200 e um array vazio

# 2 - Crie o endpoint GET /talker/:id
A requisição deve retornar o status 200 e uma pessoa palestrante com base no id da rota. Por exemplo, ao fazer uma requisição /talker/1
Caso não seja encontrada uma pessoa palestrante com base no id da rota, a requisição deve retornar o status 404 e a mensagem de "Pessoa palestrante não encontrada"

# 3 - Crie o endpoint POST /login
O endpoint deverá receber no corpo da requisição os campos email e password e retornar um token aleatório de 16 caracteres. 
O corpo da requisição deve ter o formato:
{
  "email": "email@email.com",
  "password": "123456"
}

# 4 - Adicione as validações para o endpoint /login
Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de status 400 com a respectiva mensagem de erro ao invés do token.

# 5 - Crie o endpoint POST /talker
O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;
O corpo da requisição deverá ter o seguinte formato:
{
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
  }
}

A requisição deve ter o token de autenticação nos headers, no campo authorization.
Atenção utilize o token gerado no requisito 3

# 6 - Crie o endpoint PUT /talker/:id
O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
O corpo da requisição deverá ter o seguinte formato:
{
  "name": "Danielle Santos",
  "age": 56,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
  }
}

A requisição deve ter o token de autenticação nos headers, no campo authorization.
Atenção utilize o token gerado no requisito 3

# 7 - Crie o endpoint DELETE /talker/:id
A requisição deve ter o token de autenticação nos headers, no campo authorization.
Atenção utilize o token gerado no requisito 3

# 8 - Crie o endpoint GET /talker/search?q=searchTerm
O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o status 200, com o seguinte corpo:
/search?q=Da

[
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5,
    },
  }
]


A requisição deve ter o token de autenticação nos headers, no campo authorization.
Atenção utilize o token gerado no requisito 3


# - Endpoints:
Para testar as requisições HTTP pode ser usado qualquer cliente, no projeto foi utilizado o Thunder Client direto do VSCode.

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
