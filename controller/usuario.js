const usuarioService = require('../service/usuario');

class UsuarioController {
  async cadastrarUsuario(req, res) {
    try {
      const id = await usuarioService.cadastrarUsuario(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new UsuarioController();
