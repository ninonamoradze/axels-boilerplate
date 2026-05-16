"use client";

import { useAuth } from "@/lib/auth-store";
import { AuthForm } from "@/components/cabinet/auth-form";
import { UserDashboard } from "@/components/cabinet/user-dashboard";

export default function CabinetPage() {
  const { user, loading, login, register, logout } = useAuth();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 pt-14">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-500" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4">
        {user ? (
          <UserDashboard user={user} onLogout={logout} />
        ) : (
          <AuthForm onLogin={login} onRegister={register} />
        )}
      </div>
    </main>
  );
}
