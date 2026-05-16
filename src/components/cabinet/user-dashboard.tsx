"use client";

import { motion } from "framer-motion";
import { type MockUser } from "@/lib/mock-data";
import { PaymentSchedule } from "./payment-schedule";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface UserDashboardProps {
  user: MockUser;
  onLogout: () => void;
}

const aptInfo = [
  { label: "პროექტი", key: "project" as const },
  { label: "კორპუსი", key: "corpus" as const },
  { label: "სადარბაზო", key: "entrance" as const },
  { label: "სართული", key: "floor" as const },
  { label: "ბინის ნომერი", key: "number" as const },
  { label: "კვ.მ", key: "sqm" as const },
];

export function UserDashboard({ user, onLogout }: UserDashboardProps) {
  const apt = user.apartment;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl"
    >
      {/* Profile header */}
      <div className="mb-6 flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-sm">
        <div>
          <p className="font-semibold text-slate-900">{user.name}</p>
          <p className="text-sm text-slate-500">{user.email}</p>
        </div>
        <button
          onClick={onLogout}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          გასვლა
        </button>
      </div>

      {/* Apartment info */}
      <div className="mb-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-lg"
            style={{ background: "#eef2ff" }}
          >
            🏠
          </div>
          <h2 className="text-lg font-bold text-slate-900">ბინის ინფორმაცია</h2>
        </div>

        <p className="mb-4 text-xs text-slate-500">
          შეძენის თარიღი:{" "}
          <span className="font-medium text-slate-700">
            {new Date(apt.purchaseDate).toLocaleDateString("ka-GE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {aptInfo.map(({ label, key }) => (
            <motion.div
              key={key}
              variants={staggerItem}
              className="rounded-xl bg-slate-50 p-4"
            >
              <p className="mb-0.5 text-xs text-slate-500">{label}</p>
              <p className="font-semibold text-slate-900">{String(apt[key])}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Payment schedule */}
      <PaymentSchedule payments={user.payments} />
    </motion.div>
  );
}
