import { Router } from 'express';
import { listConsultas, createConsulta } from './consulta.controller';

const router = Router();

router.get('/', listConsultas);
router.post('/', createConsulta);

export default router;