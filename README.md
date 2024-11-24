# API-Reserva
📋 Funcionalidades
CRUD de Usuários: Gerenciamento de usuários com endpoints para criar, ler, atualizar e deletar.
Gerenciamento de Experiências: Recursos para buscar, criar, atualizar e deletar experiências.
Sistema de Avaliações: Permite criar e visualizar avaliações associadas a experiências e usuários.
Sistema de Reservas: Possibilita a reserva de experiências por usuários.
Busca por Local: Endpoints otimizados para pesquisar experiências por localização.
Validações Avançadas: Verificação de existência e consistência entre entidades, como usuários e experiências.
Mensagens de Erro Informativas: Respostas claras e amigáveis para casos de erro ou falha nas operações.
🚀 Tecnologias Utilizadas
Node.js: Plataforma para desenvolvimento do servidor backend.
Express: Framework para criação da API.
Knex.js: Query builder para facilitar interações com o banco de dados.
PostgreSQL: Banco de dados relacional utilizado.
UUID v7: Gerador de identificadores únicos para entidades.
Jest: Testes unitários e de integração (se aplicável).
Insomnia/Postman: Ferramentas recomendadas para testar os endpoints.
⚙️ Instalação e Execução
Pré-requisitos
Node.js e npm instalados em sua máquina.
Banco de dados PostgreSQL configurado.
Passos para executar o projeto
Clone o repositório:
bash
Copiar código
git clone https://github.com/usuario/Rick-and-Morty-API-Backend.git
cd Rick-and-Morty-API-Backend
Instale as dependências:
bash
Copiar código
npm install
Configure o banco de dados:
Edite o arquivo src/config/database.js para adicionar as credenciais do seu banco PostgreSQL.

Execute as migrações:
bash
Copiar código
npx knex migrate:latest
Inicie o servidor:
bash
Copiar código
npm start
Teste os endpoints:
Utilize ferramentas como Insomnia ou Postman para testar os endpoints disponíveis.

🌐 Endpoints Disponíveis
Usuários
GET /usuarios: Lista todos os usuários.
GET /usuarios/:idUser: Busca um usuário pelo ID.
POST /usuarios: Cria um novo usuário.
DELETE /usuarios/:idUser: Deleta um usuário.
Experiências
GET /experiencias: Lista todas as experiências com paginação.
GET /experiencias/searchByLocal?local=:local: Busca experiências por local.
GET /experiencias/:idExp: Busca uma experiência pelo ID.
POST /experiencias: Cria uma nova experiência.
PUT /experiencias/:idExp: Atualiza uma experiência existente.
PATCH /experiencias/:idExp: Atualiza parcialmente uma experiência.
DELETE /experiencias/:idExp: Deleta uma experiência.
Avaliações
GET /avaliacoes: Lista todas as avaliações.
GET /avaliacoes/:idAvali: Busca uma avaliação pelo ID.
POST /avaliacoes: Cria uma nova avaliação.
DELETE /avaliacoes/:idAvali: Deleta uma avaliação.
Reservas
GET /reservas: Lista todas as reservas.
GET /reservas/:idReserva: Busca uma reserva pelo ID.
POST /reservas: Cria uma nova reserva.
DELETE /reservas/:idReserva: Deleta uma reserva.
📂 Estrutura de Arquivos
bash
Copiar código
src/
│
├── controllers/
│   ├── usuarioController.js       # Controlador de usuários
│   ├── experienciaController.js   # Controlador de experiências
│   ├── avaliacaoController.js     # Controlador de avaliações
│   └── reservaController.js       # Controlador de reservas
│
├── models/
│   ├── usuarioModel.js            # Model para operações no banco relacionadas a usuários
│   ├── experienciaModel.js        # Model para operações no banco relacionadas a experiências
│   ├── avaliacaoModel.js          # Model para operações no banco relacionadas a avaliações
│   └── reservaModel.js            # Model para operações no banco relacionadas a reservas
│
├── services/
│   ├── usuarioService.js          # Lógica de negócios para usuários
│   ├── experienciaService.js      # Lógica de negócios para experiências
│   ├── avaliacaoService.js        # Lógica de negócios para avaliações
│   └── reservaService.js          # Lógica de negócios para reservas
│
├── config/
│   └── database.js                # Configuração do banco de dados
│
├── routes/
│   ├── usuarioRoutes.js           # Rotas relacionadas a usuários
│   ├── experienciaRoutes.js       # Rotas relacionadas a experiências
│   ├── avaliacaoRoutes.js         # Rotas relacionadas a avaliações
│   └── reservaRoutes.js           # Rotas relacionadas a reservas
│
└── app.js                         # Configuração principal do servidor
📝 Feito por
Leticia Segurasse
Miguel Dutra
Thiago Roncete
