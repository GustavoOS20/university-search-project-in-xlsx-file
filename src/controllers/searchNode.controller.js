import express from 'express'
import {xlsxService} from '../services/arquivoXlsx.service.js'
class SearchNodeController {
    planilhaInteira = (req, res) => {
        try{
            xlsxService.lerPlanilhas();
            const dados = xlsxService.dadosCompletosPlanilha;
            res.status(200).json(dados);
        }catch (error){
            res.status(500).json({error: error});
        }
    }
}

export const searchNode = new SearchNodeController();
