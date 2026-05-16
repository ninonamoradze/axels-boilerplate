"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuthFormProps {
  onLogin: (identifier: string, password: string) => { success: boolean; error?: string };
  onRegister: (identifier: string, password: string) => { success: boolean; error?: string };
}

type Tab = "login" | "register";
type InputType = "email" | "phone";

export function AuthForm({ onLogin, onRegister }: AuthFormProps) {
  const [tab, setTab] = useState<Tab>("login");
  const [inputType, setInputType] = useState<InputType>("email");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (tab === "register") {
      if (password !== confirmPassword) {
        setError("პაროლები არ ემთხვევა");
        return;
      }
    }

    setSubmitting(true);
    const result = tab === "login"
      ? onLogin(identifier, password)
      : onRegister(identifier, password);

    if (!result.success) {
      setError(result.error ?? "შეცდომა");
    }
    setSubmitting(false);
  }

  function switchTab(t: Tab) {
    setTab(t);
    setError("");
    setIdentifier("");
    setPassword("");
    setConfirmPassword("");
  }

  const inputPlaceholder = inputType === "email" ? "demo@arsi.ge" : "599XXXXXX";
  const inputMode = inputType === "phone" ? "tel" : "email";

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/60">
        <h1 className="mb-1 text-2xl font-bold text-slate-900">პირადი კაბინეტი</h1>
        <p className="mb-6 text-sm text-slate-500">არსი — თქვენი უძრავი ქონება</p>

        {/* Tabs */}
        <div className="mb-6 flex rounded-xl bg-slate-100 p-1">
          {(["login", "register"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className={cn(
                "flex-1 rounded-lg py-2 text-sm font-medium transition-all duration-200",
                tab === t
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700",
              )}
            >
              {t === "login" ? "შესვლა" : "რეგისტრაცია"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input type toggle */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                {inputType === "email" ? "ელ-ფოსტა" : "ტელეფონი"}
              </label>
              <button
                type="button"
                onClick={() => {
                  setInputType(inputType === "email" ? "phone" : "email");
                  setIdentifier("");
                }}
                className="text-xs font-medium text-indigo-500 hover:text-indigo-700"
              >
                {inputType === "email" ? "→ ტელეფონით შესვლა" : "→ მეილით შესვლა"}
              </button>
            </div>
            <input
              type={inputMode}
              inputMode={inputMode}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={inputPlaceholder}
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">პაროლი</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Confirm password (register only) */}
          <AnimatePresence>
            {tab === "register" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  გაიმეორეთ პაროლი
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60"
            style={{
              background: "radial-gradient(80% 150% at 50% -20%, #818cf8 0%, #6366f1 100%)",
              boxShadow: "rgba(99, 102, 241, 0.3) 0px 4px 16px 0px",
            }}
          >
            {tab === "login" ? "შესვლა" : "რეგისტრაცია"}
          </button>
        </form>

        {tab === "login" && (
          <p className="mt-4 text-center text-xs text-slate-400">
            Demo: <span className="font-medium text-slate-600">demo@arsi.ge</span> /{" "}
            <span className="font-medium text-slate-600">demo123</span>
          </p>
        )}
      </div>
    </div>
  );
}
