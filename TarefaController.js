class TarefaController {

    constructor() {
    }

    toggleTarefa(event) {

        let checkbox = event.target;
        let nomeTarefa = event.target.value;
        let labelDoCheckbox = checkbox.nextSibling;
        let dao = new TarefaDAO();

        // Se foi marcado como concluido
        if (checkbox.checked == true) {
            dao.setarTarefaComoConluído(nomeTarefa, true);
            labelDoCheckbox.className = 'tarefa-concluida';
        } else {
            // Se foi marcado como nao concluido
            dao.setarTarefaComoConluído(nomeTarefa, false);
            labelDoCheckbox.className = '';
        }
    }

    inserirTarefa(tarefa) {
        let dao = new TarefaDAO();
        dao.inserirTarefa(tarefa);
    }

    criarWidgetsUL(lista_ul, lista) {
        
        lista.forEach((e) => {
            let idTarefa = e._nome.replace(' ', ''); // Id é o nome sem espacos

            // Checkbox
            let check = document.createElement('input');
            check.type = 'checkbox';
            check.value = e._nome;
            check.id = idTarefa;

            // Setando como marcado
            if(e._concluido == true) {
                check.checked = true;
            } else {
                check.checked = false;
            }
            
            check.addEventListener('click', this.toggleTarefa, false);

            // Label para o checkbox
            let label = document.createElement('label');
            label.textContent = e._nome;
            label.htmlFor = idTarefa;
            label.id = 'label' + idTarefa.charAt(0).toUpperCase() + idTarefa.slice(1);

            if (e._concluido == true) {
                label.className = 'tarefa-concluida';
            }

            // Li
            let li = document.createElement('li');
            li.appendChild(check);
            li.appendChild(label);
            lista_ul.appendChild(li);
        });
    }

    carregarTarefas() {
        // Limpar lista
        let lista_ul = document.querySelector('#lista');
        lista_ul.innerHTML = '';

        // Carregar lista
        let dao = new TarefaDAO();
        let lista = dao.carregarTarefas();

        // Popular na tela
        this.criarWidgetsUL(lista_ul, lista);
    }
}