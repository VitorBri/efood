# Efood - Plataforma de E-commerce para Alimentos

![Badge](https://img.shields.io/badge/version-0.1.0-blue.svg)

## Descrição
Efood é uma aplicação de **e-commerce** focada na experiência de compra online de alimentos. Os usuários podem navegar por uma lista de restaurantes, adicionar itens ao carrinho, preencher informações de entrega e realizar pagamentos.

Este é um **projeto de estudo**, sem funcionalidades aplicadas.

Desenvolvido com **React**, o projeto utiliza **Redux Toolkit** para gerenciamento centralizado de estado, incluindo funcionalidades como carrinho, modais e integração com APIs. A validação de formulários é feita com **Formik** e **Yup**, enquanto **InputMask** é usado para formatação de campos como CEP e número de cartão de crédito.

O fluxo principal da aplicação abrange três etapas:
1. **Carrinho** - Adição de itens e gerenciamento do pedido.
2. **Entrega** - Preenchimento dos dados para envio.
3. **Pagamento** - Processamento e finalização da compra.

Styled Components são utilizados para estilização modular, e **RTK Query** gerencia o consumo de APIs, permitindo obter dados dos restaurantes e realizar compras com feedback em tempo real. A navegação entre páginas é feita com **React Router**, proporcionando uma experiência fluida e intuitiva para o usuário.

## Tecnologias Utilizadas
- React
- Redux Toolkit
- RTK Query
- React Router
- Formik e Yup (validação de formulários)
- InputMask (formatação de campos)
- Styled Components
- JavaScript e TypeScript

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/VitorBri/efood.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd efood
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Como Executar

Para iniciar o projeto em ambiente de desenvolvimento, utilize o seguinte comando:
```sh
npm start
```

## Comandos Disponíveis

- `npm start`: Inicia a aplicação em modo desenvolvimento.
- `npm build`: Gera a versão de produção.
- `npm test`: Executa os testes.
- `npm eject`: Remove as configurações padrões do Create React App.

## Contribuição
Se deseja contribuir com o projeto, siga os passos:
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.



