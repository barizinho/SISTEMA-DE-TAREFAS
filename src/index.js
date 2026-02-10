const Usuario = require("./domain/Usuario");
const Tarefa = require("./domain/Tarefa");
const SistemaDeTarefas = require("./services/SistemaDeTarefas");

// Criando sistema
const sistema = new SistemaDeTarefas();

// Criando usuário
const usuario = new Usuario("Rodrigo");

// Criando tarefas
const tarefa1 = new Tarefa("Estudar POO", "Revisar classes e métodos");
const tarefa2 = new Tarefa("Praticar JS", "Criar projetos pequenos");
const tarefa3 = new Tarefa("Projeto final", "Sistema de tarefas completo");

// Adicionando tarefas
sistema.adicionarTarefa(usuario, tarefa1);
sistema.adicionarTarefa(usuario, tarefa2);
sistema.adicionarTarefa(usuario, tarefa3);

// Listar tarefas
console.log("\n📋 TAREFAS:");
usuario.listarTarefas();

// Concluir tarefa
console.log("\n✔️ CONCLUINDO:");
sistema.concluirTarefa(usuario, 1);

// Listar novamente
console.log("\n📋 ATUALIZADO:");
usuario.listarTarefas();

// Remover tarefa
console.log("\n🗑️ REMOVENDO:");
sistema.removerTarefa(usuario, 0);

// Lista final
console.log("\n📋 FINAL:");
usuario.listarTarefas();
