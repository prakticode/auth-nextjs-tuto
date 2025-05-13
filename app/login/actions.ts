"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

import { createSession, deleteSession } from "@/lib/session";

const user = {
    id: "1",
    email: "johndoe@example.com",
    password: "12345678",
}

const loginSchema = z.object({
    email: z.string().email({ message: "Adresse email invalide" }).trim(),
    password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères").trim(),
});

export async function login(prevState: any, formData: FormData) {
    const validatedFields = loginSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data;

    if (email !== user.email || password !== user.password) {
        return {
            errors: {
                email: ["Email ou mot de passe incorrect"],
            },
        }
    }

    await createSession(user.id);

    redirect('/dashboard');

}

export async function logout() {
    await deleteSession();
    redirect('/login');
}