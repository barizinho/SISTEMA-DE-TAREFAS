class Tarefa {
  constructor(titulo, descricao) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluida = false;
  }

  concluir() {
    this.concluida = true;
  }

  detalhes() {
    const status = this.concluida ? "✅ Concluída" : "⏳ Pendente";
    return `${status} | ${this.titulo} - ${this.descricao}`;
  }
}

module.exports = Tarefa;
