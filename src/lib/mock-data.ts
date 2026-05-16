export type ProjectId = "lis" | "uni";

export interface ProjectUpdate {
  date: string;
  title: string;
  description: string;
  icon: string;
  stage: string;
}

export interface Project {
  id: ProjectId;
  name: string;
  address: string;
  coverColor: string;
  constructionStage: string;
  constructionPercent: number;
  updates: ProjectUpdate[];
}

export interface PaymentRecord {
  date: string;
  amount: number;
  status: "paid" | "pending" | "upcoming";
}

export interface MockUser {
  email: string;
  phone: string;
  password: string;
  name: string;
  apartment: {
    project: string;
    projectId: ProjectId;
    corpus: string;
    entrance: number;
    floor: number;
    number: string;
    sqm: number;
    purchaseDate: string;
  };
  payments: {
    total: number;
    paid: number;
    remaining: number;
    nextPaymentDate: string;
    nextPaymentAmount: number;
    history: PaymentRecord[];
  };
}

export const projects: Project[] = [
  {
    id: "lis",
    name: "შენი სახლი ლისზე",
    address: "თბილისი, ლისის ტბის მიმდებარე ტერიტორია",
    coverColor: "#6366f1",
    constructionStage: "გარე სამუშაოები",
    constructionPercent: 72,
    updates: [
      {
        date: "2026-05-10",
        title: "დასრულდა გამწვანება",
        description: "კომპლექსის ეზოში მოეწყო სრული გამწვანება, დაირგო ხეები და ბუჩქები.",
        icon: "🌳",
        stage: "გარე სამუშაოები",
      },
      {
        date: "2026-04-20",
        title: "ფიტნეს სტადიონი",
        description: "ეზოს სპორტულ ზონაში გაიხსნა ღია ფიტნეს სტადიონი სრული მოწყობილობით.",
        icon: "🏟️",
        stage: "ინფრასტრუქტურა",
      },
      {
        date: "2026-03-15",
        title: "ლიფტის მონტაჟი",
        description: "ყველა კორპუსში დამონტაჟდა KONE-ის ლიფტები.",
        icon: "🛗",
        stage: "შიდა სამუშაოები",
      },
      {
        date: "2026-02-01",
        title: "სახურავის სამუშაოები დასრულდა",
        description: "ყველა კორპუსზე დასრულდა სახურავის სამუშაოები და თბოიზოლაცია.",
        icon: "🏗️",
        stage: "კარკასი",
      },
    ],
  },
  {
    id: "uni",
    name: "შენი სახლი უნივერსიტეტის ქუჩაზე",
    address: "თბილისი, უნივერსიტეტის ქუჩა",
    coverColor: "#0ea5e9",
    constructionStage: "შიდა სამუშაოები",
    constructionPercent: 45,
    updates: [
      {
        date: "2026-05-05",
        title: "ელექტრო გაყვანილობა",
        description: "A და B კორპუსებში დასრულდა ელექტრო გაყვანილობის სამუშაოები.",
        icon: "⚡",
        stage: "შიდა სამუშაოები",
      },
      {
        date: "2026-04-10",
        title: "C კორპუსი — III სართული",
        description: "C კორპუსი მიაღწია III სართულის ნიშნულს, სამუშაოები გრძელდება.",
        icon: "🏢",
        stage: "კარკასი",
      },
      {
        date: "2026-03-20",
        title: "საძირკვლის სამუშაოები",
        description: "C კორპუსის საძირკვლის სამუშაოები წარმატებით დასრულდა.",
        icon: "🔩",
        stage: "საძირკველი",
      },
    ],
  },
];

export const mockUser: MockUser = {
  email: "demo@arsi.ge",
  phone: "599123456",
  password: "demo123",
  name: "გიორგი მამულაშვილი",
  apartment: {
    project: "შენი სახლი ლისზე",
    projectId: "lis",
    corpus: "A",
    entrance: 2,
    floor: 5,
    number: "503",
    sqm: 78.5,
    purchaseDate: "2024-03-15",
  },
  payments: {
    total: 120000,
    paid: 45000,
    remaining: 75000,
    nextPaymentDate: "2026-06-15",
    nextPaymentAmount: 5000,
    history: [
      { date: "2024-03-15", amount: 20000, status: "paid" },
      { date: "2024-06-15", amount: 5000, status: "paid" },
      { date: "2024-09-15", amount: 5000, status: "paid" },
      { date: "2024-12-15", amount: 5000, status: "paid" },
      { date: "2025-03-15", amount: 5000, status: "paid" },
      { date: "2025-06-15", amount: 5000, status: "paid" },
      { date: "2025-09-15", amount: 0, status: "pending" },
      { date: "2026-06-15", amount: 5000, status: "upcoming" },
      { date: "2026-09-15", amount: 5000, status: "upcoming" },
      { date: "2026-12-15", amount: 5000, status: "upcoming" },
    ],
  },
};
