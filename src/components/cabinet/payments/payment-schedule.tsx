"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/motion";
import { PaymentRow } from "./payment-row";
import { useLang, translations } from "@/lib/lang-context";

interface Payment {
  id: number;
  date: string;
  amount: string;
  status: "paid" | "upcoming" | "overdue";
}

interface PaymentScheduleProps {
  payments: Payment[];
}

export function PaymentSchedule({ payments }: PaymentScheduleProps) {
  const { lang } = useLang();
  const tr = translations[lang];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        border: "1px solid #d4e8da",
        overflow: "hidden",
      }}
    >
      <div
        className="grid grid-cols-4 gap-4 px-5 py-3"
        style={{ backgroundColor: "#f4f7f4", borderBottom: "1px solid #d4e8da" }}
      >
        {[tr.col.num, tr.col.date, tr.col.amount, tr.col.status].map((h) => (
          <span key={h} className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#9ab8a5" }}>
            {h}
          </span>
        ))}
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={defaultViewport}
        className="flex flex-col divide-y"
        style={{ borderColor: "#f4f7f4" }}
      >
        {payments.map((payment) => (
          <motion.div key={payment.id} variants={staggerItem}>
            <PaymentRow
              index={payment.id}
              date={payment.date}
              amount={payment.amount}
              status={payment.status}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
