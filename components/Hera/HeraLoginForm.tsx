"use client"

import React from 'react'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod"
import { loginSchema } from "@/lib/schemas/auth"
import { toast } from 'sonner'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function HeraLoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        defaultValues: {
            email: "",
            senha: ""
        },
        resolver: zodResolver(loginSchema)
    })

    async function onSubmit(data: z.infer<typeof loginSchema>) {
        form.reset()
        toast.success("Login realizado com sucesso!", {
            description: JSON.stringify(data, null, 2)
        })
        console.log('forget, ill do it sometime')

        window.location.href = "/dashboard"
    }

    return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full flex flex-col gap-8">
      <FieldGroup className='flex flex-col gap-2'>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>E-mail</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="Digite seu e-mail"
              />
              {fieldState.error && (
                <p className="text-sm text-red-500 mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </Field>
          )}
        />

        <Controller
          name="senha"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Senha</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Digite sua senha"
              />
              {fieldState.error && (
                <p className="text-sm text-red-500 mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 transition-colors"
      >
        Entrar
      </button>
    </form>
  )
}