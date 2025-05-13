import "server-only";
import { cookies } from "next/headers";

import { encrypt } from "./auth";

export async function createSession(userId: string) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const jwtToken = await encrypt({ userId, expiresAt });

    (await cookies()).set("session", jwtToken, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
    });
}

export async function deleteSession() {
    (await cookies()).delete("session");
}