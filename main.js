// Filtro para curso, código e turma (simultâneos e indenpedentes).
// Botão de fixar >> Deve ser ao lado esquerdo do nome do curso e deve ser o primeiro da lista (se esteCurso está no filtro ou filtro é vazio)
// A ordem de mais de um elemento fixado não importa, mas preferencialmente seja em ordem alfabética
// Adicionar filtro gerais de área de curso (DCC, MAT, etc) por meio de caixas de seleção
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})