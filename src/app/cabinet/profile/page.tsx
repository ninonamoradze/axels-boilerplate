export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium text-white">პროფილი</h1>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { label: "სახელი", value: "გიორგი" },
            { label: "გვარი", value: "მამულაშვილი" },
            { label: "პირადი ნომერი", value: "01001234567" },
            { label: "ტელეფონი", value: "+995 555 123 456" },
            { label: "ელ-ფოსტა", value: "giorgi@example.com" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/40">{label}</p>
              <p className="mt-1 text-sm text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
