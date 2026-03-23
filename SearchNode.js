const express = require('express');
const router = express.Router();
const {lerPlanilhas} = require('./arquivoXlsx.js');
class SearchNode {
    dadosRece;
    dadosPlanilha = lerPlanilhas();
    definindoRotadeRecebimento(){
        console.log(lerPlanilhas());
        router.post('/dados', (req, res) => {
            const dados = req.body;
            this.dadosRece = dados;
            res.status(200).json({
                mensagem: 'Dados Recebidos',
                dados: dados
            });
        });
    }
    //verificarFiltro é booleano que verifica se algum filtro ta ligado
    //lista filtrada é a lista que filtradas se o boolean for positivo
    filtrarListaPorPesquisa(verificadorFiltro, listaFiltrada){
        if(verificadorFiltro){
        }
    }
}

module.exports = router;
