import express from 'express'
import {xlsxService} from '../services/arquivoXlsx.service.js'
class SearchNodeController {
    dadosProcessados;
    planilhaComPesquisa = (req, res) => {
        try {
            const dados = req.body;
            //aplicar metodo que vai estar em core para processador os dados e enviar a resposta
            this.dadosProcessados;
            res.status(200).json(this.dadosProcessados);
        } catch (err) {
            res.status(500).json(err);
        }
    }
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
