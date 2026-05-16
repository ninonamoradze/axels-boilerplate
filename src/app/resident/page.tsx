"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const residents: Record<
  string,
  {
    name: string;
    building: string;
    block: string;
    floor: number;
    apartment: string;
    area: number;
    status: "paid" | "overdue";
    purchaseDate: string;
  }
> = {
  "resident-101": {
    name: "გიორგი მამულაშვილი",
    building: "შენი სახლი — უნივერსიტეტის ქუჩა",
    block: "A",
    floor: 4,
    apartment: "A-401",
    area: 78,
    status: "paid",
    purchaseDate: "2024-03-15",
  },
  "resident-202": {
    name: "ნინო კვარაცხელია",
    building: "შენი სახლი — უნივერსიტეტის ქუჩა",
    block: "B",
    floor: 7,
    apartment: "B-702",
    area: 95,
    status: "paid",
    purchaseDate: "2024-06-01",
  },
  "resident-303": {
    name: "დავით ჯავახიშვილი",
    building: "შენი სახლი — უნივერსიტეტის ქუჩა",
    block: "A",
    floor: 2,
    apartment: "A-203",
    area: 62,
    status: "overdue",
    purchaseDate: "2023-11-20",
  },
};

const t = {
  ka: {
    portalLabel: "მაცხოვრებელთა პორტალი",
    projectName: "შენი სახლი — უნივერსიტეტის ქუჩა",
    logout: "გასვლა",
    loginTitle: "კაბინეტში შესვლა",
    loginSub: "შეიყვანეთ თქვენი პირადი პაროლი",
    passwordLabel: "პაროლი",
    passwordPlaceholder: "შეიყვანეთ პაროლი",
    loginBtn: "შესვლა",
    checking: "მოწმდება...",
    errorMsg: "პაროლი არასწორია. სცადეთ თავიდან.",
    smsHint: "პაროლი გაიგზავნა SMS-ით რეგისტრაციისას",
    hello: "გამარჯობა,",
    propertyTitle: "შეძენილი ქონება",
    block: "კორპუსი",
    floor: "სართული",
    aptNum: "ბინის ნომერი",
    area: "ფართი",
    status: "სტატუსი",
    purchaseDate: "შეძენის თარიღი",
    paid: "გადახდილია",
    overdue: "დავალიანება",
    helpText: "დახმარება გჭირდებათ?",
    floorSuffix: (n: number) => `${n}-ე სართული`,
    copyright: "© 2025 შენი სახლი — უნივერსიტეტის ქუჩა. ყველა უფლება დაცულია.",
    dateLocale: "ka-GE",
  },
  en: {
    portalLabel: "Resident Portal",
    projectName: "Your Home — University Street",
    logout: "Log out",
    loginTitle: "Sign in to your account",
    loginSub: "Enter your personal access password",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    loginBtn: "Sign in",
    checking: "Checking...",
    errorMsg: "Incorrect password. Please try again.",
    smsHint: "Your password was sent by SMS upon registration",
    hello: "Welcome,",
    propertyTitle: "Your Property",
    block: "Block",
    floor: "Floor",
    aptNum: "Apartment",
    area: "Area",
    status: "Status",
    purchaseDate: "Purchase date",
    paid: "Paid",
    overdue: "Outstanding balance",
    helpText: "Need assistance?",
    floorSuffix: (n: number) => `Floor ${n}`,
    copyright: "© 2025 Your Home — University Street. All rights reserved.",
    dateLocale: "en-GB",
  },
};

const numFont =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
const baseFont =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';

export default function ResidentPage() {
  const [password, setPassword] = useState("");
  const [resident, setResident] = useState<(typeof residents)[string] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<"ka" | "en">("ka");

  const tr = t[lang];

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      const found = residents[password.trim()];
      if (found) {
        setResident(found);
      } else {
        setError(tr.errorMsg);
      }
      setLoading(false);
    }, 600);
  }

  function handleLogout() {
    setResident(null);
    setPassword("");
    setError("");
  }

  const infoItems = resident
    ? [
        { label: tr.block, value: `${tr.block} ${resident.block}` },
        { label: tr.floor, value: tr.floorSuffix(resident.floor) },
        { label: tr.aptNum, value: resident.apartment },
        { label: tr.area, value: `${resident.area} m²` },
      ]
    : [];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f4f7f4", fontFamily: baseFont }}
    >
      {/* Header */}
      <header
        style={{ backgroundColor: "#1a3d2b", borderBottom: "3px solid #2d6a4f" }}
        className="px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 36,
              height: 36,
              backgroundColor: "#2d6a4f",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8d5b5" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <p style={{ color: "#a8d5b5", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.4 }}>
              {tr.portalLabel}
            </p>
            <p style={{ color: "#ffffff", fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>
              {tr.projectName}
            </p>
          </div>
        </div>

        {/* Right: lang toggle + logout */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Language toggle */}
          <div
            style={{
              display: "flex",
              border: "1px solid #2d6a4f",
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            {(["ka", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "5px 10px",
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: numFont,
                  letterSpacing: "0.05em",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: lang === l ? "#2d6a4f" : "transparent",
                  color: lang === l ? "#ffffff" : "#a8d5b5",
                  transition: "background-color 0.15s",
                  lineHeight: 1,
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {resident && (
            <button
              onClick={handleLogout}
              style={{
                color: "#a8d5b5",
                fontSize: 13,
                border: "1px solid #2d6a4f",
                borderRadius: 6,
                padding: "6px 14px",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontFamily: baseFont,
                lineHeight: 1,
              }}
            >
              {tr.logout}
            </button>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <AnimatePresence mode="wait">
          {!resident ? (
            /* LOGIN */
            <motion.div
              key={`login-${lang}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: "48px 40px",
                width: "100%",
                maxWidth: 400,
                boxShadow: "0 4px 24px rgba(26, 61, 43, 0.10)",
                border: "1px solid #d4e8da",
              }}
            >
              <div className="text-center mb-8">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: "#e8f5ee",
                    borderRadius: 14,
                    margin: "0 auto 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3d2b" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1a3d2b", marginBottom: 6, lineHeight: 1.3 }}>
                  {tr.loginTitle}
                </h1>
                <p style={{ color: "#6b8f78", fontSize: 14, lineHeight: 1.5 }}>
                  {tr.loginSub}
                </p>
              </div>

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      color: "#1a3d2b",
                      marginBottom: 6,
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {tr.passwordLabel}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={tr.passwordPlaceholder}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: error ? "1.5px solid #e05252" : "1.5px solid #c8ddd0",
                      borderRadius: 8,
                      fontSize: 15,
                      color: "#1a3d2b",
                      backgroundColor: "#f8fbf9",
                      outline: "none",
                      boxSizing: "border-box",
                      fontFamily: numFont,
                      lineHeight: 1.5,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2d6a4f")}
                    onBlur={(e) => (e.target.style.borderColor = error ? "#e05252" : "#c8ddd0")}
                  />
                  {error && (
                    <p style={{ color: "#e05252", fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "13px",
                    backgroundColor: loading ? "#6b8f78" : "#1a3d2b",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: baseFont,
                    lineHeight: 1,
                  }}
                >
                  {loading ? tr.checking : tr.loginBtn}
                </button>
              </form>

              <p style={{ textAlign: "center", fontSize: 12, color: "#9ab8a5", marginTop: 24, lineHeight: 1.5 }}>
                {tr.smsHint}
              </p>
            </motion.div>
          ) : (
            /* DASHBOARD */
            <motion.div
              key={`dashboard-${lang}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ width: "100%", maxWidth: 560 }}
            >
              {/* Welcome */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ color: "#6b8f78", fontSize: 13, lineHeight: 1, marginBottom: 4 }}>
                  {tr.hello}
                </p>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1a3d2b", lineHeight: 1.2, margin: 0 }}>
                  {resident.name}
                </h2>
              </div>

              {/* Main card */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 16,
                  border: "1px solid #d4e8da",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(26, 61, 43, 0.08)",
                  marginBottom: 16,
                }}
              >
                {/* Card header */}
                <div style={{ backgroundColor: "#1a3d2b", padding: "20px 24px" }}>
                  <p style={{ color: "#a8d5b5", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4, lineHeight: 1 }}>
                    {tr.propertyTitle}
                  </p>
                  <p style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                    {lang === "ka" ? resident.building : "Your Home — University Street"}
                  </p>
                </div>

                {/* Info grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1px",
                    backgroundColor: "#d4e8da",
                  }}
                >
                  {infoItems.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "20px 24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        minHeight: 80,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          color: "#9ab8a5",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                          lineHeight: 1,
                          margin: "0 0 8px 0",
                          fontFamily: baseFont,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#1a3d2b",
                          lineHeight: 1,
                          margin: 0,
                          fontFamily: numFont,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Status & date */}
                <div
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderTop: "1px solid #d4e8da",
                    gap: 16,
                  }}
                >
                  <div>
                    <p style={{ fontSize: 10, color: "#9ab8a5", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px 0", lineHeight: 1, fontFamily: baseFont }}>
                      {tr.status}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "5px 12px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: baseFont,
                        lineHeight: 1,
                        backgroundColor: resident.status === "paid" ? "#e8f5ee" : "#fdecea",
                        color: resident.status === "paid" ? "#1a3d2b" : "#c0392b",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: resident.status === "paid" ? "#2d6a4f" : "#c0392b",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {resident.status === "paid" ? tr.paid : tr.overdue}
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 10, color: "#9ab8a5", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px 0", lineHeight: 1, fontFamily: baseFont }}>
                      {tr.purchaseDate}
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1a3d2b", lineHeight: 1, margin: 0, fontFamily: numFont, fontVariantNumeric: "tabular-nums" }}>
                      {new Date(resident.purchaseDate).toLocaleDateString(tr.dateLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact card */}
              <div
                style={{
                  backgroundColor: "#e8f5ee",
                  borderRadius: 12,
                  padding: "16px 20px",
                  border: "1px solid #c8ddd0",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.73a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p style={{ fontSize: 12, color: "#6b8f78", marginBottom: 4, lineHeight: 1, fontFamily: baseFont }}>
                    {tr.helpText}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a3d2b", lineHeight: 1, margin: 0, fontFamily: numFont }}>
                    +995 32 2 XX XX XX
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #d4e8da", padding: "16px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ab8a5", lineHeight: 1.5, margin: 0, fontFamily: baseFont }}>
          {tr.copyright}
        </p>
      </footer>
    </div>
  );
}
