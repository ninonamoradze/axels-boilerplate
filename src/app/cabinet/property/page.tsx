import { PropertyCard } from "@/components/cabinet/property/property-card";

export default function PropertyPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium text-white">ჩემი ბინა</h1>
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
