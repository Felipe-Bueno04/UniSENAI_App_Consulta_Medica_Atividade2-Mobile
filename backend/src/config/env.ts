import { config as loadEnv } from 'dotenv';
import { z } from 'zod';

loadEnv();

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  PORT: z.string().optional()
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Erro nas variáveis de ambiente: ',
    parsed.error.format());
  process.exit(1);
}

export const ENV = {
  PORT: Number(process.env.PORT ?? 3333),
  DATABASE_URL: parsed.data.DATABASE_URL
};