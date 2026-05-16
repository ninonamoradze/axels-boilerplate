import { Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentRowProps {
  name: string;
  date: string;
  type: string;
  downloadUrl?: string;
}

export function DocumentRow({ name, date, type, downloadUrl }: DocumentRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
          <FileText size={18} className="text-white/50" />
        </div>
        <div>
          <p className="text-sm text-white">{name}</p>
          <p className="mt-0.5 text-xs text-white/40">
            {type} · {date}
          </p>
        </div>
      </div>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className={cn(
            "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs text-white/60",
            "transition-colors hover:bg-white/5 hover:text-white",
          )}
        >
          <Download size={14} />
          <span>ჩამოტვირთვა</span>
        </a>
      )}
    </div>
  );
}
