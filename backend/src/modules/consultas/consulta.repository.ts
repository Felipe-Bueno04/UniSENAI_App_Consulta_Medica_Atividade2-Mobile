import { prisma } from '../../lib/prisma';
import { Prisma } from '@prisma/client';

export function list() {
  return prisma.consultas.findMany({ orderBy: { data_hora_consulta: 'desc' } });
}

export function create(data: Prisma.consultasCreateInput) {
  return prisma.consultas.create({ data });
}

export function findByID(id: number) {
  return prisma.consultas.findUnique({ where: { id } });
}

export function update(id: number, data: Prisma.consultasUpdateInput) {
  return prisma.consultas.update({ where: {id}, data });
}

export function remove(id: number) {
  return prisma.consultas.delete({ where: {id} });
}