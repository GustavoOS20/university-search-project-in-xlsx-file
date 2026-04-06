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
        try {
            const resposta = await fetch('http://localhost:3000/api/dados');
            if (!resposta.ok) {
                new Error(`Erro na requisição: ${resposta.status}`);
            }
            this.listSearch = await resposta.json();
        } catch (error) {
            console.error("Erro ao buscar a lista:", error);
        }
    }

    enviarLista() {
        this.listSearch.forEach((item) => {
            const listaF = item;

            if ("materia" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.materia;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('materia').appendChild(novaDiv);
            }
            if ("dias" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.dias;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('dias').appendChild(novaDiv);
            }
            if ("sala" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.sala;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('sala').appendChild(novaDiv);
            }

            if ("codigo" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.codigo;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('codigo').appendChild(novaDiv);
            }
            if ("turma" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.turma;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('turma').appendChild(novaDiv);
            }
            if ("inicio" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.inicio;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('inicio').appendChild(novaDiv);
            }
            if ("fim" in listaF) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF.fim;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
                document.getElementById('fim').appendChild(novaDiv);
            }
        });
    }
}