import { DocumentRow } from "@/components/cabinet/documents/document-row";

const documents = [
  {
    name: "ყიდვა-გაყიდვის ხელშეკრულება",
    date: "05.01.2026",
    type: "PDF",
    downloadUrl: "/documents/nasydoba-kharchilavа.pdf",
  },
  {
    name: "პირველადი შეთანხმება",
    date: "01.02.2025",
    type: "PDF",
    downloadUrl: "/documents/pirveladi-shetanxmeba.pdf",
  },
  {
    name: "გადახდის დამადასტურებელი",
    date: "15.03.2025",
    type: "PDF",
    downloadUrl: "/documents/gadaxdis-damadasturebi.pdf",
  },
];

export default function DocumentsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold" style={{ color: "#1a3d2b" }}>დოკუმენტები</h1>
        <p className="mt-1 text-sm" style={{ color: "#6b8f78" }}>
          ჩამოტვირთეთ თქვენი დოკუმენტები
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {documents.map((doc) => (
          <DocumentRow key={doc.name} {...doc} />
        ))}
      </div>
    </div>
  );
}
