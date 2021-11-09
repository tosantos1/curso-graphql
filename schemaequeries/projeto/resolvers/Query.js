const { usuarios, perfis } = require('../data/db');

module.exports = {
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
  },
  usuarios() {
    return usuarios
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const sels = perfis.filter(p => p.id === id)
    return sels ? sels[0] : null
  }
}