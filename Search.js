class search {
    /** @type {Array<{id: number, categoria: string, nome: string}>} */
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
            /** @type {Array<{id: number, categoria:string, nome: string}>}*/
            const respostaRecebida = await resposta.json();
            this.listSearch = respostaRecebida;
            console.log(respostaRecebida)
        } catch (error) {
            console.error("o envio do valor da pesquisa:", error);
        }
    }

    async recebendoListaInteira(){

    }

    enviarLista() {
        this.listSearch.forEach((item) => {
            const listaF = item;
            if (listaF?.categoria === "Matéria" || listaF?.categoria === "Dias" || listaF?.categoria === "Sala") {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF?.nome;
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);

                //falta modificador para colocar o id correto
                const lista = document.querySelector('.maiores-linha-list');
                lista.appendChild(novaDiv);
            } else {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = listaF?.nome
                let novaDiv = document.createElement('div');
                novaDiv.classList.add('colunes-list');
                novaDiv.appendChild(novaSpan);

                const lista = document.getElementsByClassName('maiores-linha-list');
                lista.appendChild(novaDiv);
            }
        })
    }
}