"use client"

import React from 'react'
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod"
import { loginSchema } from "@/lib/schemas/auth"
import { toast } from 'sonner'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'


function LoginForm() {
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
    }
    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller
                    name='email'
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={field.invalid}>
                            <FieldLabel htmlFor={field.name}>E-mail</FieldLabel>
                            <Input />
                        </Field>
                    )}
                />
            </FieldGroup>
        </form>
    )
}

export default LoginForm