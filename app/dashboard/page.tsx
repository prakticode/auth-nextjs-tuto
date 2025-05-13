"use client";

import { Button } from "@/components/ui/button";

import { logout } from "../login/actions";

export default function DashboardPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Dashboard</h1>
            <Button onClick={() => logout()}>Se déconnecter</Button>
        </div>
    );
}