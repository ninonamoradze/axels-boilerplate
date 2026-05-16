"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, translations } from "@/lib/lang-context";

interface AuthFormProps {
  onLogin: (identifier: string, password: string) => { success: boolean; error?: string };
  onRegister: (identifier: string, password: string) => { success: boolean; error?: string };
}

type Tab = "login" | "register";

export function AuthForm({ onLogin, onRegister }: AuthFormProps) {
  const { lang, setLang } = useLang();
  const tr = translations[lang];

  const [tab, setTab] = useState<Tab>("login");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (tab === "register" && password !== confirmPassword) {
      setError(lang === "ka" ? "პაროლები არ ემთხვევა" : "Passwords do not match");
      return;
    }
    setSubmitting(true);
    const result = tab === "login" ? onLogin(identifier, password) : onRegister(identifier, password);
    if (!result.success) setError(result.error ?? "Error");
    setSubmitting(false);
  }

  function switchTab(t: Tab) {
    setTab(t);
    setError("");
    setIdentifier("");
    setPassword("");
    setConfirmPassword("");
  }

  const inputStyle = (hasError?: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "12px 14px",
    border: hasError ? "1.5px solid #e05252" : "1.5px solid #c8ddd0",
    borderRadius: 8,
    fontSize: 14,
    color: "#1a3d2b",
    backgroundColor: "#f8fbf9",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "Inter, system-ui, sans-serif",
  });

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      {/* Header bar */}
      <div
        className="mb-6 flex items-center justify-between rounded-xl px-4 py-3"
        style={{ backgroundColor: "#1a3d2b" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: "#2d6a4f" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a8d5b5" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#a8d5b5" }}>
            {tr.portalLabel}
          </span>
        </div>
        <div className="flex overflow-hidden rounded" style={{ border: "1px solid #2d6a4f" }}>
          {(["ka", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-2.5 py-1 text-xs font-bold uppercase transition-colors"
              style={{
                backgroundColor: lang === l ? "#2d6a4f" : "transparent",
                color: lang === l ? "#ffffff" : "#a8d5b5",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 16,
          padding: "40px 36px",
          boxShadow: "0 4px 24px rgba(26,61,43,0.10)",
          border: "1px solid #d4e8da",
        }}
      >
        {/* Icon + title */}
        <div className="mb-6 text-center">
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: "#e8f5ee" }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1a3d2b" strokeWidth="1.8">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1a3d2b", marginBottom: 6 }}>
            {tr.loginTitle}
          </h1>
          <p style={{ fontSize: 13, color: "#6b8f78" }}>{tr.loginSub}</p>
        </div>

        {/* Tabs */}
        <div
          className="mb-5 flex rounded-lg p-1"
          style={{ backgroundColor: "#f4f7f4" }}
        >
          {(["login", "register"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className="flex-1 rounded-md py-2 text-sm font-medium transition-all"
              style={{
                backgroundColor: tab === t ? "#ffffff" : "transparent",
                color: tab === t ? "#1a3d2b" : "#6b8f78",
                boxShadow: tab === t ? "0 1px 4px rgba(26,61,43,0.08)" : "none",
              }}
            >
              {t === "login" ? tr.loginTab : tr.registerTab}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#1a3d2b", marginBottom: 6 }}>
              {tr.emailLabel}
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="demo@arsi.ge"
              required
              style={inputStyle()}
              onFocus={(e) => (e.target.style.borderColor = "#2d6a4f")}
              onBlur={(e) => (e.target.style.borderColor = "#c8ddd0")}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#1a3d2b", marginBottom: 6 }}>
              {tr.passwordLabel}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              required
              style={inputStyle()}
              onFocus={(e) => (e.target.style.borderColor = "#2d6a4f")}
              onBlur={(e) => (e.target.style.borderColor = "#c8ddd0")}
            />
          </div>

          <AnimatePresence>
            {tab === "register" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#1a3d2b", marginBottom: 6 }}>
                  {tr.confirmLabel}
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••"
                  required
                  style={inputStyle()}
                  onFocus={(e) => (e.target.style.borderColor = "#2d6a4f")}
                  onBlur={(e) => (e.target.style.borderColor = "#c8ddd0")}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ fontSize: 12, color: "#e05252", backgroundColor: "#fdecea", borderRadius: 8, padding: "10px 14px" }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "13px",
              backgroundColor: submitting ? "#6b8f78" : "#1a3d2b",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: submitting ? "not-allowed" : "pointer",
            }}
          >
            {tab === "login" ? tr.loginBtn : tr.registerBtn}
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 11, color: "#9ab8a5", marginTop: 20 }}>
          {tr.demoHint}
        </p>
      </div>
    </div>
  );
}
