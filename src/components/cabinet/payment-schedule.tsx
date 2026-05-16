"use client";

import { motion } from "framer-motion";
import { type MockUser } from "@/lib/mock-data";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface PaymentScheduleProps {
  payments: MockUser["payments"];
}

const GEL = new Intl.NumberFormat("ka-GE", {
  style: "currency",
  currency: "GEL",
  minimumFractionDigits: 0,
});

const statusLabel: Record<string, string> = {
  paid: "გადახდილია",
  pending: "ჩამარცხდა",
  upcoming: "მოსალოდნელი",
};

const statusColor: Record<string, string> = {
  paid: "text-emerald-600 bg-emerald-50",
  pending: "text-red-600 bg-red-50",
  upcoming: "text-slate-500 bg-slate-100",
};

export function PaymentSchedule({ payments }: PaymentScheduleProps) {
  const progress = Math.round((payments.paid / payments.total) * 100);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-bold text-slate-900">გადახდის გრაფიკი</h2>

      {/* Summary cards */}
      <div className="mb-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-50 p-4 text-center">
          <p className="mb-0.5 text-xs text-slate-500">ჯამი</p>
          <p className="text-base font-bold text-slate-900">{GEL.format(payments.total)}</p>
        </div>
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <p className="mb-0.5 text-xs text-emerald-600">გადახდილი</p>
          <p className="text-base font-bold text-emerald-700">{GEL.format(payments.paid)}</p>
        </div>
        <div className="rounded-xl bg-indigo-50 p-4 text-center">
          <p className="mb-0.5 text-xs text-indigo-500">დარჩენილი</p>
          <p className="text-base font-bold text-indigo-700">{GEL.format(payments.remaining)}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-600">გადახდის პროგრესი</span>
        <span className="font-semibold text-indigo-600">{progress}%</span>
      </div>
      <div className="mb-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #818cf8 0%, #6366f1 100%)" }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>

      {/* Next payment */}
      <div
        className="mb-5 flex items-center justify-between rounded-xl p-4"
        style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)" }}
      >
        <div>
          <p className="text-xs text-indigo-500">შემდეგი გადახდა</p>
          <p className="font-semibold text-slate-900">
            {new Date(payments.nextPaymentDate).toLocaleDateString("ka-GE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-indigo-600">
            {GEL.format(payments.nextPaymentAmount)}
          </p>
        </div>
      </div>

      {/* History table */}
      <h3 className="mb-3 text-sm font-semibold text-slate-700">გადახდების ისტორია</h3>
      <motion.ul
        className="space-y-2"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {payments.history.map((record, i) => (
          <motion.li
            key={i}
            variants={staggerItem}
            className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">
                {new Date(record.date).toLocaleDateString("ka-GE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {record.status !== "upcoming" && (
                <span className="text-sm font-semibold text-slate-900">
                  {record.amount > 0 ? GEL.format(record.amount) : "—"}
                </span>
              )}
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[record.status]}`}
              >
                {statusLabel[record.status]}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
