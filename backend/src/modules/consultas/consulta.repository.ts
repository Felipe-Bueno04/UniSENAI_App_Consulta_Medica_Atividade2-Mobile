import { prisma } from '../../lib/prisma';
import { Prisma } from '@prisma/client';

export function list() {
  return prisma.consultas.findMany({ orderBy: { data_hora_consulta: 'desc' } });
}

export function create(data: Prisma.consultasCreateInput) {
  return prisma.consultas.create({ data });
}