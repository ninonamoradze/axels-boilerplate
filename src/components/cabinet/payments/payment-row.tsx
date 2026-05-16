import { cn } from "@/lib/utils";

interface PaymentRowProps {
  index: number;
  date: string;
  amount: string;
  status: "paid" | "upcoming" | "overdue";
}

const statusLabels: Record<PaymentRowProps["status"], string> = {
  paid: "გადახდილი",
  upcoming: "მომავალი",
  overdue: "ვადაგადაცილებული",
};

const statusStyles: Record<PaymentRowProps["status"], string> = {
  paid: "bg-green-500/10 text-green-400",
  upcoming: "bg-white/10 text-white/60",
  overdue: "bg-red-500/10 text-red-400",
};

export function PaymentRow({ index, date, amount, status }: PaymentRowProps) {
  return (
    <div className="grid grid-cols-4 items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-white/40">#{index}</span>
      <span className="text-sm text-white">{date}</span>
      <span className="text-sm font-medium text-white">{amount}</span>
      <span
        className={cn("w-fit rounded-full px-2.5 py-1 text-xs", statusStyles[status])}
      >
        {statusLabels[status]}
      </span>
    </div>
  );
}
