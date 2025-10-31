import { Request, Response, NextFunction } from 'express';
import * as service from './consulta.service';
import { createConsultaSchema } from './consulta.validators';

export async function listConsultas(_req: Request, res: Response, next: NextFunction) {
    try {
        const result = await service.listConsultas();
        return res.json(result);
    } catch (err) {
        return next(err);
    }
}

export async function createConsulta(req: Request, res: Response, next: NextFunction) {
    try {
        const body = createConsultaSchema.parse(req.body);
        const created = await service.createConsulta(body);
        return res.status(201).json(created);
    } catch (err) {
        return next(err);
    }
}

export async function updateConsulta(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const body = createConsultaSchema.parse(req.body);
        const updated = await service.updateConsulta(Number(id), body);
        return res.json(updated);
    } catch (err) {
        return next(err);
    }
}

export async function deleteConsulta(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        await service.deleteConsulta(Number(id));
        return res.status(204).send();
    } catch (err) {
        return next(err);
    }
}