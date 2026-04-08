
const D_tarefas = document.getElementById("tarefas")
const B_excluir = document.getElementById("excluir")
const B_feito = document.getElementById("feito")
const I_texto = document.getElementById("tarefa")
const B_add = document.getElementById("add")

function CriaTarefa() {
    const item = document.createElement("li")
    const Bdon = document.createElement("button")
    const Itext = document.createElement("input")
    const Bdel = document.createElement("button")

    Bdon.textContent = "✔️"
    Bdel.textContent = "❌"
    Itext.type = "text"
    Itext.placeholder = "Nova tarefa..."

    Bdon.classList.add("btn-icon")
    Bdel.classList.add("btn-icon")
    Itext.classList.add("tarefa-input")

    Bdel.addEventListener("click", function () { item.remove() })
    Bdon.addEventListener("click", function () {
        Itext.classList.toggle("btn-icon-done")
        Itext.readOnly = Itext.classList.contains("btn-icon-done")
    })


    item.appendChild(Bdon)
    item.appendChild(Itext)
    item.appendChild(Bdel)
    D_tarefas.appendChild(item)

}
B_add.addEventListener("click", CriaTarefa)