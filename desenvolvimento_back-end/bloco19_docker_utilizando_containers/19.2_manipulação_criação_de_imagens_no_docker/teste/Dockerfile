FROM node:14-alpine AS build

# Com o comando WORKDIR podemos definir um "diretório de trabalho" que será utilizado como base para a execução dos comandos. Sua estrutura é a seguinte:
WORKDIR /app

# Vimos que conseguimos preparar nossa imagem para executar, por exemplo, uma aplicação dentro do contêiner. Porém, precisamos do código fonte para rodá-lo. Para isso utilizamos o COPY (copiar, em português). Com ele conseguimos copiar diretórios e arquivos para dentro da nossa imagem:

# Imagine que estamos em um diretório que possui uma pasta app com o código fonte de uma aplicação. Para copiá-la para dentro da imagem e conseguirmos executá-la, basta aplicar:

# Com o comando COPY conseguimos montar nossa estrutura do código fonte dentro da imagem. Porém, para executá-la precisaríamos apontar para o diretório que definimos anteriormente como nosso diretório de trabalho (WORKDIR).
# Vale ressaltar que no COPY tanto a sintaxe na forma exec (COPY ["arquivo1", "arquivo2", "./destino"]) como na shell (COPY arquivo1 arquivo2 ./destino) são aceitas*.
# * O modo shell é como se você rodasse o comando em um terminal.
COPY package*.json ./

# O RUN (nesse contexto, rodar, em português - como em "rodar um comando") vai executar uma lista de comandos durante a criação da imagem.
# O RUN é comum para prepararmos a imagem para rodar nossos apps, instalando as dependências de uma aplicação. Note que o RUN também aceita as formas shell e exec, assim como o COPY (RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]).
# No Dockerfile do nosso mini-projeto, vamos rodar o comando de instalação da nossa aplicação passando um parâmetro para suprimir mensagens de aviso e facilitar a visualização do processo, quando ele ocorrer:
RUN npm install

# Agora, no Dockerfile do nosso mini-projeto, podemos definir a cópia de todos os arquivos apenas com o comando:
COPY . .

# Também devemos adicionar um comando para executar o processo de build* da nossa aplicação no Dockerfile:
# * Esses comandos podem variar dependendo da aplicação que você for rodar.
# No nosso exemplo, uma aplicação em React possui um script para gerar uma versão otimizada da página criada, por faremos esse processo aqui.
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
