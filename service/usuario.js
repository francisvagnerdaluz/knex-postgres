const usuarioDAO = require('../dao/usuario');

class UsuarioService {
  cadastrarUsuario(usuarioDto) {
    const { nome, sobrenome, email } = usuarioDto;
    return usuarioDAO.cadastrarUsuario(nome, sobrenome, email);
  }
}

module.exports = new UsuarioService();
