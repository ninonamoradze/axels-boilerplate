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
    status: "გადახდილია" | "დავალიანება";
    purchaseDate: string;
  }
> = {
  "resident-101": {
    name: "გიორგი მამულაშვილი",
    building: "შენი სახლი — უნივერსიტეტის ქუჩა",
    block: "კორპუსი A",
    floor: 4,
    apartment: "A-401",
    area: 78,
    status: "გადახდილია",
    purchaseDate: "2024-03-15",
  },
  "resident-202": {
    name: "ნინო კვარაცხელია",
    building: "შენი სახლი — უნივერსიტეტის ქუჩა",
    block: "კორპუსი B",
    floor: 7,
    apartment: "B-702",
    area: 95,
    status: "გადახდილია",
    purchaseDate: "2024-06-01",
  },
  "resident-303": {
    name: "დავით ჯავახიშვილი",
    building: "შენი სახლი — უნივერსიტეტის ქუჩა",
    block: "კორპუსი A",
    floor: 2,
    apartment: "A-203",
    area: 62,
    status: "დავალიანება",
    purchaseDate: "2023-11-20",
  },
};

export default function ResidentPage() {
  const [password, setPassword] = useState("");
  const [resident, setResident] = useState<(typeof residents)[string] | null>(
    null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      const found = residents[password.trim()];
      if (found) {
        setResident(found);
      } else {
        setError("პაროლი არასწორია. სცადეთ თავიდან.");
      }
      setLoading(false);
    }, 600);
  }

  function handleLogout() {
    setResident(null);
    setPassword("");
    setError("");
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f4f7f4", fontFamily: "Georgia, serif" }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#1a3d2b",
          borderBottom: "3px solid #2d6a4f",
        }}
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
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a8d5b5"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div>
            <p
              style={{
                color: "#a8d5b5",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              მაცხოვრებელთა პორტალი
            </p>
            <p style={{ color: "#ffffff", fontSize: 15, fontWeight: 600 }}>
              შენი სახლი — უნივერსიტეტის ქუჩა
            </p>
          </div>
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
            }}
          >
            გასვლა
          </button>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <AnimatePresence mode="wait">
          {!resident ? (
            /* LOGIN */
            <motion.div
              key="login"
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
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a3d2b"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h1
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#1a3d2b",
                    marginBottom: 6,
                  }}
                >
                  კაბინეტში შესვლა
                </h1>
                <p style={{ color: "#6b8f78", fontSize: 14 }}>
                  შეიყვანეთ თქვენი პირადი პაროლი
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
                    }}
                  >
                    პაროლი
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="შეიყვანეთ პაროლი"
                    required
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: error
                        ? "1.5px solid #e05252"
                        : "1.5px solid #c8ddd0",
                      borderRadius: 8,
                      fontSize: 15,
                      color: "#1a3d2b",
                      backgroundColor: "#f8fbf9",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#2d6a4f")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = error
                        ? "#e05252"
                        : "#c8ddd0")
                    }
                  />
                  {error && (
                    <p style={{ color: "#e05252", fontSize: 12, marginTop: 6 }}>
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
                    transition: "background-color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                >
                  {loading ? "მოწმდება..." : "შესვლა"}
                </button>
              </form>

              <p
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#9ab8a5",
                  marginTop: 24,
                }}
              >
                პაროლი გაიგზავნა SMS-ით რეგისტრაციისას
              </p>
            </motion.div>
          ) : (
            /* DASHBOARD */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              style={{ width: "100%", maxWidth: 560 }}
            >
              {/* Welcome */}
              <div className="mb-6">
                <p style={{ color: "#6b8f78", fontSize: 13 }}>გამარჯობა,</p>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1a3d2b" }}>
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
                <div
                  style={{
                    backgroundColor: "#1a3d2b",
                    padding: "20px 24px",
                  }}
                >
                  <p
                    style={{
                      color: "#a8d5b5",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    შეძენილი ქონება
                  </p>
                  <p style={{ color: "#ffffff", fontSize: 18, fontWeight: 700 }}>
                    {resident.building}
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
                  {[
                    { label: "კორპუსი", value: resident.block },
                    { label: "სართული", value: `${resident.floor}-ე სართული` },
                    { label: "ბინის ნომერი", value: resident.apartment },
                    { label: "ფართი", value: `${resident.area} მ²` },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{ backgroundColor: "#ffffff", padding: "18px 24px" }}
                    >
                      <p
                        style={{
                          fontSize: 11,
                          color: "#9ab8a5",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#1a3d2b",
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
                    padding: "18px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #d4e8da",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: 11,
                        color: "#9ab8a5",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      სტატუსი
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "4px 12px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 600,
                        backgroundColor:
                          resident.status === "გადახდილია"
                            ? "#e8f5ee"
                            : "#fdecea",
                        color:
                          resident.status === "გადახდილია"
                            ? "#1a3d2b"
                            : "#c0392b",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor:
                            resident.status === "გადახდილია"
                              ? "#2d6a4f"
                              : "#c0392b",
                          display: "inline-block",
                        }}
                      />
                      {resident.status}
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: 11,
                        color: "#9ab8a5",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      შეძენის თარიღი
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1a3d2b" }}>
                      {new Date(resident.purchaseDate).toLocaleDateString(
                        "ka-GE",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d6a4f"
                  strokeWidth="2"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.73a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p style={{ fontSize: 12, color: "#6b8f78", marginBottom: 2 }}>
                    დახმარება გჭირდებათ?
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a3d2b" }}>
                    +995 32 2 XX XX XX
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #d4e8da",
          padding: "16px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 12, color: "#9ab8a5" }}>
          © 2025 შენი სახლი — უნივერსიტეტის ქუჩა. ყველა უფლება დაცულია.
        </p>
      </footer>
    </div>
  );
}
