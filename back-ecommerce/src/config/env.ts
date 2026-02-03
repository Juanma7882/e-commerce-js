import dotenv from 'dotenv';
dotenv.config();
import { envSchema } from './env.schema';

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error('Error parsing env vars', parsed.error.format());
    throw new Error('Invalid env vars');
}


export const env = parsed.data;