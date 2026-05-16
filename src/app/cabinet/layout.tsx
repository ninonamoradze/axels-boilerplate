"use client";

import { useAuth } from "@/lib/auth-store";
import { CabinetSidebar } from "@/components/cabinet/cabinet-sidebar";
import { CabinetHeader } from "@/components/cabinet/cabinet-header";
import { AuthForm } from "@/components/cabinet/auth-form";

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
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
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
        <AuthForm onLogin={login} onRegister={register} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <CabinetSidebar />
      <div className="flex flex-1 flex-col">
        <CabinetHeader userName={user.name} onLogout={logout} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
