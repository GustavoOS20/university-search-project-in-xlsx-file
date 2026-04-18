class search {

    listSearch = [];
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
        this.addItensLista(this.listSearch);
    }

    addItensLista(listaF){

        listaF.forEach((item) => {
            let wrapper = document.getElementById("wrapper-linha-list")
            let novaDivPai = document.createElement('div');
            novaDivPai.classList.add('linha');
            wrapper.appendChild(novaDivPai);
            if ("materia" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.materia;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);
            }

            if ("codigo" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.codigo;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
            }

            if ("turma" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.turma;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
            }

            if ("inicio" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.inicio;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
            }

            if ("fim" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.fim;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('menores-list-item');
                novaDiv.appendChild(novaSpan);
            }

            if ("dias" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.dias;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);
            }
            if ("sala" in item) {
                let novaSpan = document.createElement('span');
                novaSpan.textContent = item.sala;
                let novaDiv = document.createElement('div');
                novaDivPai.appendChild(novaDiv)
                novaDiv.classList.add('maiores-list-item');
                novaDiv.appendChild(novaSpan);
            }
        })

    }

    filtrarLista(){
        const inputSearch = document.getElementById('pesquisar');
        const card = document.querySelectorAll('.linha');
        card.forEach(element => {
            let contemTermo = false;
            const span = element.querySelectorAll('span');
            span.forEach(spanElement => {
                const busca = spanElement.textContent.toLowerCase();
                if(busca.includes(inputSearch.value.toLowerCase())) {
                    contemTermo = true;
                }
            })
            element.style.display = contemTermo ? "" : "none";

        });
    }
}