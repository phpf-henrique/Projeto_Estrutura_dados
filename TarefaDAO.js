class TarefaDAO {

    constructor() {
        this._STORAGE_NAME = 'todo';
    }

    filtrarLista(listaOriginal, filtro) {

        // Nova lista para ser retornada
        let listaFiltrada = [];

        // Filtro
        listaOriginal.forEach( (e) => {

            if (filtro == 'concluidas') {
                if (e._concluido == true) {
                    listaFiltrada.push(e);
                }
            } else if (filtro == 'pendentes') {
                if (e._concluido == false) {
                    listaFiltrada.push(e);
                }
            }
        });

        // Retorno
        return listaFiltrada;
    }

    // Chamado pelo Controller
    carregarTarefas(tarefa) {
        let lista = this.carregarListaFiltrada();
        return lista;
    }

    carregarListaFiltrada() {
        let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));
        if (lista === null) {
            lista = [];
        }

        let filtro = window.filtro;

        if (filtro != 'todas') {
            lista = this.filtrarLista(lista, filtro);
        }
        return lista;
    }

    carregarListaAll() {
        let lista = JSON.parse(localStorage.getItem(this._STORAGE_NAME));
        if (lista === null) {
            lista = [];
        }
        return lista;
    }

    inserirTarefa(tarefa) {
        // carregar lista[] com TODAS as tarefas
        let lista = this.carregarListaAll();

        //inserir na lista
        lista.push(tarefa);

        //inserir no storage
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
    }

    setarTarefaComoConluído(nomeTarefa, concluido) {

        // Carregar TODAS as tarefas
        let lista = this.carregarListaAll();

        // Encontrar tarefa
        lista.forEach((e) => {
            if (e._nome == nomeTarefa) {
                // Setar como concluido / aberto
                e._concluido = concluido;
            }
        });

        // Salvar tarefas
        localStorage.setItem(this._STORAGE_NAME, JSON.stringify(lista));
    }
}