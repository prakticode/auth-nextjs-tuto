"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { login } from "./actions";

export const LoginForm = () => {
    const [state, loginAction, isPending] = useActionState(login, undefined);

    return (
        <form action={loginAction} className="flex flex-col gap-2 w-[400px]">
            <div className="flex flex-col gap-2">
                <Input id="email" name="email" type="email" placeholder="Email" />
            </div>
            {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
            <div className="flex flex-col gap-2">
                <Input id="password" name="password" type="password" placeholder="Mot de passe" />
            </div>
            {state?.errors?.password && <p className="text-red-500">{state.errors.password}</p>}
            <Button type="submit" disabled={isPending}>
                {isPending ? "Connexion en cours..." : "Se connecter"}
            </Button>
        </form>
    );
};