class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }
}

module.exports = Usuario;
