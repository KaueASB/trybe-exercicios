# Requisitos em testes (Model)

## Vamos relembrar nosso primeiro requisito:

1. A API deverá permitir a inserção de filmes no banco de dados:

- Ela deve receber e registrar as seguintes informações do filme: Nome, Direção e Ano de lançamento;
- Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID;

## Como estamos falando a princípio de um banco de dados com essas informações, podemos descrever o requisito pensando primeiramente o Model com as seguintes asserções/ afirmações:

1. Insere um novo filme no DB

- quando é inserido com sucesso

  - retorna um array
  - o array está vazio

- quando existir filmes criados

  - retorna um array
  - o array não está vazio
  - o array possui itens do tipo objeto
  - tais itens possuem as propriedades: "id", "title", "releaseYear" e "directedBy"

# Requisitos em testes (Service)

Seguindo nossa sequência, iremos testar a camada de Service.
Relembrando o papel dessa camada, podemos definí-la como responsável pela lógica de negócio, sendo acessada pelo controller e acessando o model, ou seja, ficando situada entre as duas camadas.
Relembrando nossos requisitos vamos identificar quais comportamentos precisaremos garantir:

1. A API deverá permitir a inserção de filmes no banco de dados:

- Ela deve receber e registrar as seguintes informações do filme: Nome, Direção e Ano de lançamento;
- Ao realizar a inserção de um novo filme, o endpoint deverá responder com o respectivo ID;

# Requisitos em testes (Controller)

E por último vamos escrever testes e implementar a camada de Controller.
Essa camada recebe as requisições dos clientes, preparando o input e o output da pessoa usuária de acordo com sua comunicação com a camada de Service.
Dessa forma, nos testes devemos contemplar qual a resposta para o cliente apropriado em cada cenário, qual o status e o body em cada resposta:
Ao chamar o método create do controller movieController esperamos:

1. Quando o payload informado não é válido:

- Retornar o código de status 400 - Bad Request;
- Retornar a mensagem Dados inválidos.

2. Quando o payload informado é válido:

- Retornar o código de status 201 - Created;
- Retornar a mensagem Filme criado com sucesso!.
