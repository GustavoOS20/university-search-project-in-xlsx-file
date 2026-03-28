import XLSX from 'xlsx'
class XLSXService {
    dadosCompletosPlanilha;
    lerPlanilhas() {
        try {
            const arquivoExcel = XLSX.readFile('C:/planilha/classroomsICEX.xlsx')
            const nomeAba = arquivoExcel.SheetNames[0];
            const selecionarAba = arquivoExcel.Sheets[nomeAba];
            const dadosEmJson = XLSX.utils.sheet_to_json(selecionarAba);
            console.log(dadosEmJson);
            console.log('planilha convertida')
            this.dadosCompletosPlanilha = dadosEmJson;
        } catch (erro) {
            console.error('error na hora de buscar os dados da planilha ' + erro);
        }
    }
}

export const xlsxService = new XLSXService();