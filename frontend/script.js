const API = "http://localhost:3000/tarefas";

async function carregar() {
  const res = await fetch(API);
  const tarefas = await res.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${tarefa.concluida ? "✅" : "⏳"} ${tarefa.titulo}
      <button onclick="concluir(${index})">Concluir</button>
    `;

    lista.appendChild(li);
  });
}

async function adicionar() {
  const titulo = document.getElementById("titulo").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo })
  });

  document.getElementById("titulo").value = "";
  carregar();
}

async function concluir(index) {
  await fetch(`${API}/${index}`, { method: "PUT" });
  carregar();
}

carregar();
