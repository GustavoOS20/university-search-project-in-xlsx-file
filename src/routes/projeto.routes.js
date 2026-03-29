import express from 'express'
const router = express.Router();
import {searchNode} from '../controllers/searchNode.controller.js'

router.get('/dados', searchNode.planilhaInteira);
router.post('/filter, ')
 export default router;