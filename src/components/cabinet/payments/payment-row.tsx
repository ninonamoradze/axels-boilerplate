"use client";

import { useLang, translations } from "@/lib/lang-context";

interface PaymentRowProps {
  index: number;
  date: string;
  amount: string;
  status: "paid" | "upcoming" | "overdue";
}

const statusStyles: Record<PaymentRowProps["status"], React.CSSProperties> = {
  paid: { backgroundColor: "#e8f5ee", color: "#1a3d2b" },
  upcoming: { backgroundColor: "#f4f7f4", color: "#6b8f78" },
  overdue: { backgroundColor: "#fdecea", color: "#c0392b" },
};

export function PaymentRow({ index, date, amount, status }: PaymentRowProps) {
  const { lang } = useLang();
  const tr = translations[lang];

  return (
    <div className="grid grid-cols-4 items-center gap-4 px-5 py-3.5">
      <span className="text-sm" style={{ color: "#9ab8a5" }}>#{index}</span>
      <span className="text-sm font-medium" style={{ color: "#1a3d2b" }}>{date}</span>
      <span className="text-sm font-semibold" style={{ color: "#1a3d2b" }}>{amount}</span>
      <span
        className="w-fit rounded-full px-2.5 py-1 text-xs font-semibold"
        style={statusStyles[status]}
      >
        {tr.statusLabels[status]}
      </span>
    </div>
  );
}
