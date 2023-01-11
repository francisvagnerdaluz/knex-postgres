const db = require('../db/db');

class UsuarioDAO {
  async cadastrarUsuario(nome, sobrenome, email) {
    const [id] = await db('usuario')
      .insert({
        email,
        nome: nome,
        sobrenome: sobrenome,
      })
      .returning('id');

    return id;
  }
}

module.exports = new UsuarioDAO();
