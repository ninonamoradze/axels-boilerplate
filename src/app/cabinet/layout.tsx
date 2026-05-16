import { CabinetSidebar } from "@/components/cabinet/cabinet-sidebar";
import { CabinetHeader } from "@/components/cabinet/cabinet-header";

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <CabinetSidebar />
      <div className="flex flex-1 flex-col">
        <CabinetHeader userName="გიორგი მამულაშვილი" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
