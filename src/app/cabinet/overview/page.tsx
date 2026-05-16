import { WelcomeCard } from "@/components/cabinet/overview/welcome-card";
import { StatusTimeline } from "@/components/cabinet/overview/status-timeline";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      <WelcomeCard
        userName="გიორგი მამულაშვილი"
        apartmentNumber="412"
        apartmentStatus="ხელშეკრულება გაფორმებული"
      />
      <StatusTimeline currentStep={2} />
    </div>
  );
}
