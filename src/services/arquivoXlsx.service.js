import fs from 'fs';
import XLSX from 'xlsx';
class XLSXService {
    dadosCompletosPlanilha;
    lerPlanilhas() {
        try {
            const fileBuffer = fs.readFileSync('./src/classroomsICEX NEW.xlsx');
            const arquivoExcel = XLSX.read(fileBuffer, { type: 'buffer' });
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