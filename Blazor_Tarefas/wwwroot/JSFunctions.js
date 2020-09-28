window.MostraAlerta = (message) => {
    alert(message);
}

function getTotalTarefas() {
    DotNet.invokeMethodAsync("Blazor_Tarefas", "obterTotalTarefas")
        .then(resultado => {
            alert("Total de tarefas: " + resultado)
        });
}

function getTotalTarefasInstancia(dotnet) {
    return dotnet.invokeMethodAsync("obterTotalTarefasInstancia")
        .then(resultado => {
            alert("Total de tarefas: " + resultado)
        });
}