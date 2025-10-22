import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Endereço de e-mail inválido"),
  senha: z.string().min(4, "Senha deve ter ao menos 4 caracteres"),
})
