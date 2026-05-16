import { NewsFilter } from "@/components/cabinet/news/news-filter";

const newsItems = [
  {
    id: 0,
    title: "სერვისის მომსახურების გზამკვლევი",
    description:
      "კომპლექსის მომსახურების სრული გზამკვლევი — გაეცანით ყველა სერვისს, პროცედურებს და საკონტაქტო ინფორმაციას.",
    date: "16 მაისი, 2025",
    category: "news" as const,
    isNew: true,
    downloadUrl: "/documents/service-guide.pdf",
    downloadLabel: "გზამკვლევის ჩამოტვირთვა",
  },
  {
    id: 1,
    title: "საახალწლო ფასდაკლება — 5%",
    description:
      "2025 წლის 31 დეკემბრამდე ხელშეკრულების გაფორმებისას მიიღეთ 5%-იანი ფასდაკლება ბინის ღირებულებიდან.",
    date: "15 მაისი, 2025",
    category: "offer" as const,
    isNew: true,
  },
  {
    id: 2,
    title: "სარდაფის პარკინგი — სპეციალური პირობები",
    description:
      "კომპლექსის მცხოვრებლებისთვის პარკინგის ადგილი ხელმისაწვდომია განვადებით, 0%-იანი პროცენტით.",
    date: "10 მაისი, 2025",
    category: "offer" as const,
  },
  {
    id: 3,
    title: "მე-8 სართულის კარკასი დასრულდა",
    description:
      "A ბლოკის მე-8 სართულის სამშენებლო სამუშაოები წარმატებით დასრულდა. სამუშაოები განრიგის შესაბამისად მიმდინარეობს.",
    date: "12 მაისი, 2025",
    category: "news" as const,
    isNew: true,
  },
  {
    id: 4,
    title: "ლიფტის მონტაჟი დაიწყო",
    description:
      "ორივე ბლოკში ლიფტის სამონტაჟო სამუშაოები დაიწყო. სრული ინსტალაცია სექტემბრისთვის დასრულდება.",
    date: "8 მაისი, 2025",
    category: "news" as const,
  },
  {
    id: 5,
    title: "გარე კეთილმოწყობის გეგმა დამტკიცდა",
    description:
      "კომპლექსის ეზოს კეთილმოწყობის პროექტი დამტკიცდა — მოიცავს სათამაშო მოედანს, სკამ-მერხებს და მწვანე ზონებს.",
    date: "5 მაისი, 2025",
    category: "news" as const,
  },
  {
    id: 6,
    title: "მყიდველთა შეხვედრა — 25 მაისი",
    description:
      "გიწვევთ ღია შეხვედრაზე, სადაც გაგაცნობთ მშენებლობის მიმდინარეობას, გეგმებს და გიპასუხებთ კითხვებს.",
    date: "25 მაისი, 2025",
    category: "event" as const,
    isNew: true,
  },
  {
    id: 7,
    title: "საფუძვლის ჩაყრის ცერემონია",
    description:
      "C ბლოკის მშენებლობის დაწყების სიმბოლური ცერემონია გაიმართება კომპლექსის ეზოში. მოწვეულნი არიან ყველა მყიდველი.",
    date: "1 ივნისი, 2025",
    category: "event" as const,
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-medium text-white">სიახლეები</h1>
      <NewsFilter items={newsItems} />
    </div>
  );
}
