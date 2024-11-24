# Bem-vindo à API de Reserva de Experiências! 🎉
Esta API foi projetada para gerenciar __reservas, avaliações, usuários e experiências__ de forma eficiente e escalável. O sistema é ideal para aplicações que desejam fornecer uma experiência personalizada e dinâmica para seus usuários, permitindo a exploração e o agendamento de atividades únicas. Com uma arquitetura bem estruturada e endpoints organizados, a API facilita o desenvolvimento de frontends interativos e robustos.

## 📋 Funcionalidades
- __CRUD de Usuários:__ Gerenciamento de usuários com endpoints para criar, ler, atualizar e deletar.
- __Gerenciamento de Experiências:__ Recursos para buscar, criar, atualizar e deletar experiências.
- __Sistema de Avaliações:__ Permite criar e visualizar avaliações associadas a experiências e usuários.
- __Sistema de Reservas:__ Possibilita a reserva de experiências por usuários.
- __Busca por Local:__ Endpoints otimizados para pesquisar experiências por localização.
- __Validações Avançadas:__ Verificação de existência e consistência entre entidades, como usuários e experiências.
- __Mensagens de Erro Informativas:__ Respostas claras e amigáveis para casos de erro ou falha nas operações.

## 🚀 Tecnologias Utilizadas
- __Node.js:__ Plataforma para desenvolvimento do servidor backend.
- __Express:__ Framework para criação da API.
- __Knex.js:__ Query builder para facilitar interações com o banco de dados.
- __PostgreSQL:__ Banco de dados relacional utilizado.
- __UUID v7:__ Gerador de identificadores únicos para entidades.
- __Postman:__ Ferramentaa recomendada para testar os endpoints.

## ⚙️ Instalação e Execução
__Pré-requisitos__
- __Node.js__ e npm instalados em sua máquina.
- Banco de dados __PostgreSQL__ configurado.
  
__Passos para executar o projeto__

__1.Clone o repositório:__
```
git clone https://github.com/usuario/Rick-and-Morty-API-Backend.git
cd Rick-and-Morty-API-Backend
```
__2.Instale as dependências:__
```
npm install
```
__3.Configure o banco de dados:__
```
Edite o arquivo src/config/database.js para adicionar as credenciais do seu banco PostgreSQL.
```
__4.Inicie o servidor:__
```
npm start
```
__5.Teste os endpoints:__
```
Utilize ferramentas como Postman para testar os endpoints disponíveis.
```

## 🌐 Endpoints Disponíveis
__Usuários__
- __GET /usuarios:__ Lista todos os usuários.
- __GET /usuarios/:idUsuario:__ Busca um usuário pelo ID.
- __POST /usuarios:__ Cria um novo usuário.
- __DELETE /usuarios/:idUsuario:__ Deleta um usuário.

__Experiências__
- __GET /experiencias:__ Lista todas as experiências com paginação.
- __GET /experiencias/searchByLocal?local=:local:__ Busca experiências por local.
- __GET /experiencias/:idExperiencia:__ Busca uma experiência pelo ID.
- __POST /experiencias:__ Cria uma nova experiência.
- __PUT /experiencias/:idExperiencia:__ Atualiza uma experiência existente.
- __PATCH /experiencias/:idExperiencia:__ Atualiza parcialmente uma experiência.
- __DELETE /experiencias/:idExperiencia:__ Deleta uma experiência.

__Avaliações__
- __GET /avaliacoes:__ Lista todas as avaliações.
- __GET /avaliacoes/:idAvaliacao:__ Busca uma avaliação pelo ID.
- __POST /avaliacoes:__ Cria uma nova avaliação.
- __DELETE /avaliacoes/:idAvaliacao:__ Deleta uma avaliação.

__Reservas__
- __GET /reservas:__ Lista todas as reservas.
- __GET /reservas/:idReserva:__ Busca uma reserva pelo ID.
- __POST /reservas:__ Cria uma nova reserva.
- __DELETE /reservas/:idReserva:__ Deleta uma reserva.

## 📂 Estrutura de Arquivos
```
src/
│── config/
│   └── database.ts                # Configuração do banco de dados
│
├── controllers/
│   ├── usuarioController.ts       # Controlador de usuários
│   ├── experienciaController.ts   # Controlador de experiências
│   ├── avaliacaoController.ts     # Controlador de avaliações
│   └── reservaController.ts       # Controlador de reservas
│
├── models/
│   ├── usuarioModel.ts            # Model para operações no banco relacionadas a usuários
│   ├── experienciaModel.ts        # Model para operações no banco relacionadas a experiências
│   ├── avaliacaoModel.ts          # Model para operações no banco relacionadas a avaliações
│   └── reservaModel.ts            # Model para operações no banco relacionadas a reservas
│
├── routes/
│   ├── usuarioRoutes.ts           # Rotas relacionadas a usuários
│   ├── experienciaRoutes.ts       # Rotas relacionadas a experiências
│   ├── avaliacaoRoutes.ts         # Rotas relacionadas a avaliações
│   └── reservaRoutes.ts           # Rotas relacionadas a reservas
│
├── services/
│   ├── usuarioService.ts          # Lógica de negócios para usuários
│   ├── experienciaService.ts      # Lógica de negócios para experiências
│   ├── avaliacaoService.ts        # Lógica de negócios para avaliações
│   └── reservaService.ts          # Lógica de negócios para reservas
│
├── utils/
│    └── normalizeText.ts          # Normalizador de texto
│
└── app.js                         # Configuração principal do servidor
```
## Explicação do uso dos Omits
- Omit<Avaliacao, "idAvaliacao"> cria um tipo que é igual ao tipo Avaliacao, mas sem a propriedade idAvaliacao. Isso é usado porque o idAvaliacao é gerado automaticamente na função com uuidv7(), então não precisa ser fornecido ao chamar a função. Assim, o parâmetro data aceita apenas as outras propriedades de Avaliacao, garantindo clareza e segurança no código.

- Omit<Experiencia, "idExperiencia"> cria um tipo que é igual ao tipo Experiencia, mas sem a propriedade idExperiencia. Isso é feito porque o idExperiencia é gerado automaticamente dentro da função usando uuidv7(), então quem chama a função não precisa informar essa propriedade. O parâmetro data aceita apenas as outras propriedades de Experiencia, garantindo que a função seja mais simples e segura de usar.

- Omit<Reserva, "idReserva"> cria um tipo baseado no tipo Reserva, mas exclui a propriedade idReserva. Isso é porque o idReserva é gerado automaticamente dentro da função usando uuidv7(). Assim, o parâmetro data só precisa conter as outras propriedades de Reserva, simplificando a chamada da função e garantindo que o idReserva seja tratado internamente, evitando inconsistências ou erros.

- Omit<Usuario, "idUsuario"> cria um tipo baseado no tipo Usuario, mas sem a propriedade idUsuario. Isso acontece porque o idUsuario é gerado automaticamente dentro da função usando uuidv7(). Dessa forma, o parâmetro data deve conter apenas as outras propriedades de Usuario, enquanto a função cuida de adicionar o idUsuario, garantindo simplicidade e segurança na criação de usuários.


## 📝 Feito por
- __Leticia Segurasse__
- __Miguel Dutra__
- __Thiago Roncete__
#
