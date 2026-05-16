"use client";

import { PaymentSchedule } from "@/components/cabinet/payments/payment-schedule";
import { useLang, translations } from "@/lib/lang-context";

const payments = [
  { id: 1, date: "01.02.2025", amount: "15 000 ₾", status: "paid" as const },
  { id: 2, date: "01.03.2025", amount: "15 000 ₾", status: "paid" as const },
  { id: 3, date: "01.04.2025", amount: "15 000 ₾", status: "upcoming" as const },
  { id: 4, date: "01.05.2025", amount: "15 000 ₾", status: "upcoming" as const },
  { id: 5, date: "01.06.2025", amount: "15 000 ₾", status: "upcoming" as const },
];

export default function PaymentsPage() {
  const { lang } = useLang();
  const tr = translations[lang];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold" style={{ color: "#1a3d2b" }}>
          {tr.paymentScheduleTitle}
        </h1>
        <p className="mt-1 text-sm" style={{ color: "#6b8f78" }}>
          {tr.paymentScheduleSub}
        </p>
      </div>
      <PaymentSchedule payments={payments} />
    </div>
  );
}
