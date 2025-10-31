import { Router } from 'express';
import { listConsultas, createConsulta, updateConsulta, deleteConsulta } from './consulta.controller';

const router = Router();

router.get('/', listConsultas);
router.post('/', createConsulta);
router.put('/:id', updateConsulta);
router.delete('/:id', deleteConsulta);

export default router;