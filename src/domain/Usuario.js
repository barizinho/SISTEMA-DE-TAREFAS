class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.tarefas = [];
  }

  adicionarTarefa(tarefa) {
    this.tarefas.push(tarefa);
  }

  listarTarefas() {
    if (this.tarefas.length === 0) {
      console.log("📭 Nenhuma tarefa cadastrada");
      return;
    }

    this.tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa.detalhes()}`);
    });
  }
}

module.exports = Usuario;
