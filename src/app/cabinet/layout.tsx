"use client";

import { useAuth } from "@/lib/auth-store";
import { LangProvider } from "@/lib/lang-context";
import { CabinetSidebar } from "@/components/cabinet/cabinet-sidebar";
import { CabinetHeader } from "@/components/cabinet/cabinet-header";
import { AuthForm } from "@/components/cabinet/auth-form";

function CabinetShell({ children }: { children: React.ReactNode }) {
  const { user, loading, login, register, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white/70" />
      </div>
    );
  }

  if (!user) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center px-4 py-16"
        style={{ backgroundColor: "#f4f7f4" }}
      >
        <AuthForm onLogin={login} onRegister={register} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <CabinetSidebar />
      <div className="flex flex-1 flex-col" style={{ backgroundColor: "#f4f7f4" }}>
        <CabinetHeader userName={user.name} onLogout={logout} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <CabinetShell>{children}</CabinetShell>
    </LangProvider>
  );
}
