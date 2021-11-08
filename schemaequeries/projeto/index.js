const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	scalar Date

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

	type Query {
    ola: String
    horaAtual: String
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
  }
`

const resolvers = {
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return produto.preco * (1 - produto.desconto)
      } else {
        return produto.preco
      }
    }
  },
  Usuario: {
    salario(usuario) {
      return usuario.salario_real
    }
  },
  Query: {
    ola() {
      return 'Bom dia!'
    },
    horaAtual() {
      return `${new Date().toLocaleTimeString()}`
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: 'Fulano',
        email: 'fulano@gmail.com',
        idade: 32,
        salario_real: 1234.56,
        vip: true
      }
    },
    produtoEmDestaque() {
      return {
        nome: 'Macbook Pro',
        preco: 1299.99,
        desconto: 0.15,
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});