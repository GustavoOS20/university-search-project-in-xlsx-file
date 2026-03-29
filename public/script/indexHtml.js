document.addEventListener("DOMContentLoaded", async function () {
    console.log("O DOM está pronto!");
    const minhaBusca = new search();
    await minhaBusca.recebendoListaInteira();
    minhaBusca.enviarLista();
});
