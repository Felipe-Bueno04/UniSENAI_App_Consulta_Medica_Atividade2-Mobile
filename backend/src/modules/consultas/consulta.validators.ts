import { z } from 'zod';

export const ESPECIALIDADES = ['CARDIOLOGISTA', 'GERAL', 'PSIQUIATRIA', 'NEUROLOGISTA'] as const;

export const createConsultaSchema = z.object({
  nome_paciente: z.string().trim().min(2, 'Nome do paciente é obrigatório.'),
  data_hora_consulta: z.coerce.date(),
  especialidade: z.enum(ESPECIALIDADES),
  nome_medico: z.string().trim().min(2, 'Nome do médico é obrigatório.'),
}).strict();

export type CreateConsultaDTO = z.infer<typeof createConsultaSchema>;