const express = require("express");
const cors = require("cors");

const Usuario = require("./domain/Usuario");
const Tarefa = require("./domain/Tarefa");
const SistemaDeTarefas = require("./services/SistemaDeTarefas");

const app = express();
app.use(cors());
app.use(express.json());

const sistema = new SistemaDeTarefas();
const usuario = new Usuario("Rodrigo");

// LISTAR TAREFAS
app.get("/tarefas", (req, res) => {
  res.json(usuario.tarefas);
});

// ADICIONAR TAREFA
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  const tarefa = new Tarefa(titulo);
  sistema.adicionar(usuario, tarefa);
  res.status(201).json(tarefa);
});

// CONCLUIR TAREFA
app.put("/tarefas/:index", (req, res) => {
  sistema.concluir(usuario, req.params.index);
  res.json({ mensagem: "Tarefa concluída" });
});

module.exports = app;
