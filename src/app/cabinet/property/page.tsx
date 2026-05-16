import { PropertyCard } from "@/components/cabinet/property/property-card";

export default function PropertyPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold" style={{ color: "#1a3d2b" }}>ჩემი ბინა</h1>
        <p className="mt-1 text-sm" style={{ color: "#6b8f78" }}>
          თქვენი ქონების დეტალური ინფორმაცია
        </p>
      </div>
      <PropertyCard
        number="412"
        floor={4}
        area={72}
        rooms={3}
        block="A"
        status="მშენებლობის პროცესში"
      />
    </div>
  );
}
