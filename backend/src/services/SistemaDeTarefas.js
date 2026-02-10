class SistemaDeTarefas {
  listar(usuario) {
    return usuario.tarefas;
  }

  adicionar(usuario, tarefa) {
    usuario.adicionarTarefa(tarefa);
  }

  concluir(usuario, index) {
    const tarefa = usuario.tarefas[index];
    if (tarefa) tarefa.concluir();
  }
}

module.exports = SistemaDeTarefas;
