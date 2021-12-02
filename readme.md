# Steps

Criar um pasta onde estará a estrutura do projeto

npm init -y: Cria o arquivo package.json

copiar o package.json do repositório do Policarpo

npm install: instala as dependências 

npm run open: Cria a estrutura do Cypress, e inicia o modo interativo do Cypress

Utilizar a URL Swagger do Pets: https://petstore.swagger.io/

Dentro do folder support, no arquivo index.js adicionar: import './request'

Dentro do Folder Integrations, criar um Folder Serviços e dentro de Serviços cria o arquivos: user.js

No Swagger copiar o curl da request colar no import no postam, realizar a requisição e copiar o snippet.

No arquivo request colar o snippet e realizar as alterações de acordo com a sinatxe do cypress.

No arquivo User realizar os testes conforme os métodos declarados no request.js

