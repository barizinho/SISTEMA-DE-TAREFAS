class SistemaDeTarefas {
  adicionarTarefa(usuario, tarefa) {
    usuario.adicionarTarefa(tarefa);
  }

  concluirTarefa(usuario, indice) {
    const tarefa = usuario.tarefas[indice];

    if (!tarefa) {
      console.log("❌ Tarefa não encontrada");
      return;
    }

    tarefa.concluir();
    console.log("✅ Tarefa concluída");
  }

  removerTarefa(usuario, indice) {
    if (!usuario.tarefas[indice]) {
      console.log("❌ Tarefa não encontrada");
      return;
    }

    usuario.tarefas.splice(indice, 1);
    console.log("🗑️ Tarefa removida");
  }
}

module.exports = SistemaDeTarefas;
