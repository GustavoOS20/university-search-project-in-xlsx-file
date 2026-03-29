// Filtro para curso, código e turma (simultâneos e indenpedentes).
// Botão de fixar >> Deve ser ao lado esquerdo do nome do curso e deve ser o primeiro da lista (se esteCurso está no filtro ou filtro é vazio)
// A ordem de mais de um elemento fixado não importa, mas preferencialmente seja em ordem alfabética
// Adicionar filtro gerais de área de curso (DCC, MAT, etc) por meio de caixas de seleção
import express from 'express'
import {fileURLToPath} from 'url';
import path from 'path'
const app = express();
const port = 3000;
import routersMain from './src/routes/projeto.routes.js'

app.use(express.json());
app.use('/api', routersMain);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});