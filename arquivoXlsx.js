const XLSX = require('xlsx');
 function lerPlanilhas(){
    try {
        const arquivoExcel = XLSX.readFile('C:\\planilha')
        const nomeAba = arquivoExcel.SheetNames[0];
        const selecionarAba = arquivoExcel.Sheets[nomeAba];
        const dadosEmJson = XLSX.utils.sheet_to_json(selecionarAba);
        console.log(dadosEmJson);
        console.log('planilha convertida')
        return dadosEmJson;
    } catch (erro){
        console.error('error na hora de buscar os dados da planilha '+ erro);
    }
}
module.exports = {lerPlanilhas};