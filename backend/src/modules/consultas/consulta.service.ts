import * as repo from './consulta.repository';
import { CreateConsultaDTO } from './consulta.validators';

export async function listConsultas() { // <-- Função listConsultas que o Controller espera
  const items = await repo.list();
  return { data: items };
}

export async function createConsulta(data: CreateConsultaDTO) {
  return await repo.create(data);
}

export async function updateConsulta(id: number, data: CreateConsultaDTO) {
  return await repo.update(id, data);
}

export async function deleteConsulta(id: number) {
  return await repo.remove(id);
}