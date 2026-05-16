import { PaymentSchedule } from "@/components/cabinet/payments/payment-schedule";

const payments = [
  { id: 1, date: "01.02.2025", amount: "15 000 ₾", status: "paid" as const },
  { id: 2, date: "01.03.2025", amount: "15 000 ₾", status: "paid" as const },
  { id: 3, date: "01.04.2025", amount: "15 000 ₾", status: "upcoming" as const },
  { id: 4, date: "01.05.2025", amount: "15 000 ₾", status: "upcoming" as const },
  { id: 5, date: "01.06.2025", amount: "15 000 ₾", status: "upcoming" as const },
];

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium text-white">გადახდები</h1>
      <PaymentSchedule payments={payments} />
    </div>
  );
}
