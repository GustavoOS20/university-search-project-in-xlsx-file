class search {
    listSearch = [];
    inputSearch = document.getElementById('pesquisar');
    async recebendoPesquisa() {
        const valorRecebido = this.inputSearch.value;

        try {
            const resposta = await fetch('http://localhost:3000/api/pesquisa/dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valorRecebido),
            });
            const respostaRecebida = await resposta.json();
            this.listSearch = respostaRecebida;
            console.log(respostaRecebida)
        } catch (error) {
            console.error("o envio do valor da pesquisa:", error);
        }
    }

    async recebendoListaInteira(){
        fetch('http://localhost:3000/api/search/dadosTotais').then(resposta => {
            return resposta.json();
        }).then(dadosRecebido => {
            this.listSearch = dadosRecebido;
        }).catch(error => {
            console.error("o envio do valor da pesquisa:", error);
        })
    }

    enviarLista() {
        this.listSearch.forEach((item) => {
            const chaveMaior = "materia";
            const chaveMaior2 = "dias";
            const chaveMaior3 = "sala";
            const chaveMenor = "codigo";
            const chaveMenor2 = "turma";
            const chaveMenor3 = "inicio";
            const chaveMenor4 = "fim";
            const listaF = item;
            if (chaveMaior in listaF || chaveMaior2 in listaF || chaveMaior3 in listaF) {
                if (chaveMaior in listaF) {
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.materia;
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('maiores-list-item');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('materia');
                    lista.appendChild(novaDiv);
                }
                if (chaveMaior2 in listaF){
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.dias;
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('maiores-list-item');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('dias');
                    lista.appendChild(novaDiv);
                }
                if (chaveMaior3 in listaF){
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.sala;
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('maiores-list-item');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('sala');
                    lista.appendChild(novaDiv);
                }
            } else {
                if (chaveMenor in listaF) {
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.codigo
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('colunes-list');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('codigo');
                    lista.appendChild(novaDiv);
                }
                if (chaveMenor2 in listaF){
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.turma
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('colunes-list');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('turma');
                    lista.appendChild(novaDiv);
                }
                if (chaveMenor3 in listaF){
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.inicio
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('colunes-list');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('inicio');
                    lista.appendChild(novaDiv);
                }
                if (chaveMenor4 in listaF){
                    let novaSpan = document.createElement('span');
                    novaSpan.textContent = listaF?.fim
                    let novaDiv = document.createElement('div');
                    novaDiv.classList.add('colunes-list');
                    novaDiv.appendChild(novaSpan);
                    const lista = document.getElementById('fim');
                    lista.appendChild(novaDiv);
                }
            }
        })
    }
}