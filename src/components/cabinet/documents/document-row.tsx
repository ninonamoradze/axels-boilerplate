import { Download, FileText } from "lucide-react";

interface DocumentRowProps {
  name: string;
  date: string;
  type: string;
  downloadUrl?: string;
}

export function DocumentRow({ name, date, type, downloadUrl }: DocumentRowProps) {
  return (
    <div
      className="flex items-center justify-between rounded-xl px-4 py-3"
      style={{ backgroundColor: "#ffffff", border: "1px solid #d4e8da" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: "#e8f5ee" }}
        >
          <FileText size={18} style={{ color: "#2d6a4f" }} />
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: "#1a3d2b" }}>{name}</p>
          <p className="mt-0.5 text-xs" style={{ color: "#9ab8a5" }}>
            {type} · {date}
          </p>
        </div>
      </div>
      <a
        href={downloadUrl ?? "#"}
        download={name}
        aria-disabled={!downloadUrl}
        className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
        style={{
          color: downloadUrl ? "#2d6a4f" : "#c8ddd0",
          border: "1px solid #d4e8da",
          cursor: downloadUrl ? "pointer" : "not-allowed",
        }}
      >
        <Download size={14} />
        <span>ჩამოტვირთვა</span>
      </a>
    </div>
  );
}
