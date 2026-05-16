import { DocumentRow } from "@/components/cabinet/documents/document-row";

const documents = [
  {
    name: "ყიდვა-გაყიდვის ხელშეკრულება",
    date: "12.03.2025",
    type: "PDF",
    downloadUrl: "/documents/yidva-gayidvis-xelshekruleba.pdf",
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
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium text-white">დოკუმენტები</h1>
      <div className="flex flex-col gap-3">
        {documents.map((doc) => (
          <DocumentRow key={doc.name} {...doc} />
        ))}
      </div>
    </div>
  );
}
