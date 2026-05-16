"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/motion";
import { PaymentRow } from "./payment-row";

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
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 grid grid-cols-4 gap-4 px-4">
        {["#", "თარიღი", "თანხა", "სტატუსი"].map((h) => (
          <span key={h} className="text-xs text-white/40">
            {h}
          </span>
        ))}
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={defaultViewport}
        className="flex flex-col gap-2"
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
