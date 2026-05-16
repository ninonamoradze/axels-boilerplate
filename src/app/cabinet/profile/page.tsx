export default function ProfilePage() {
  const fields = [
    { label: "სახელი", value: "გიორგი" },
    { label: "გვარი", value: "მამულაშვილი" },
    { label: "პირადი ნომერი", value: "01001234567" },
    { label: "ტელეფონი", value: "+995 555 123 456" },
    { label: "ელ-ფოსტა", value: "giorgi@example.com" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold" style={{ color: "#1a3d2b" }}>პროფილი</h1>
        <p className="mt-1 text-sm" style={{ color: "#6b8f78" }}>
          თქვენი საკონტაქტო ინფორმაცია
        </p>
      </div>
      <div
        className="rounded-2xl p-6"
        style={{ backgroundColor: "#ffffff", border: "1px solid #d4e8da" }}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {fields.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-xl p-4"
              style={{ backgroundColor: "#f4f7f4", border: "1px solid #d4e8da" }}
            >
              <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "#9ab8a5" }}>
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: "#1a3d2b" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
