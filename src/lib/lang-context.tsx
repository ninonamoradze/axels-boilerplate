"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "ka" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "ka",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const stored = localStorage.getItem("arsi_lang") as Lang | null;
    if (stored === "ka" || stored === "en") setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("arsi_lang", l);
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export const translations = {
  ka: {
    portalLabel: "მაცხოვრებელთა პორტალი",
    projectName: "შენი სახლი",
    logout: "გასვლა",
    loginTitle: "კაბინეტში შესვლა",
    loginSub: "შეიყვანეთ თქვენი მეილი ან ტელეფონი",
    emailLabel: "ელ-ფოსტა ან ტელეფონი",
    passwordLabel: "პაროლი",
    confirmLabel: "გაიმეორეთ პაროლი",
    loginBtn: "შესვლა",
    registerBtn: "რეგისტრაცია",
    loginTab: "შესვლა",
    registerTab: "რეგისტრაცია",
    demoHint: "Demo: demo@arsi.ge / demo123",
    greeting: "გამარჯობა,",
    greetingSub: "აქ ხედავ შენი პროექტის მდგომარეობას.",
    apartment: "ბინა",
    status: "სტატუსი",
    projectValue: "პროექტის ღირებულება",
    paidToDate: "გადახდილი",
    nextPayment: "შემდეგი გადახდა",
    remaining: "დარჩენილი",
    paymentScheduleTitle: "გადახდის გრაფიკი",
    paymentScheduleSub: "გადახდის გეგმის სრული ჩამონათვალი.",
    col: { num: "#", date: "თარიღი", desc: "დანიშნულება", amount: "თანხა", status: "სტატუსი" },
    statusLabels: { paid: "გადახდილია ✓", upcoming: "მომავალი", overdue: "ვადაგადაცილებული" },
    progressTitle: "პროექტის პროგრესი",
    steps: ["რეზერვაცია", "ხელშეკრულება", "მშენებლობა", "ჩაბარება"],
    nav: {
      overview: "მთავარი",
      property: "ჩემი ბინა",
      documents: "დოკუმენტები",
      payments: "გადახდები",
      news: "სიახლეები",
      profile: "პროფილი",
    },
    mainNav: { home: "მთავარი", news: "სიახლეები", cabinet: "პირადი კაბინეტი" },
    newsTitle: "სიახლეები",
    newsSub: "აირჩიეთ პროექტი სიახლეებისა და მშენებლობის პროგრესის სანახავად",
    contactHelp: "დახმარება გჭირდებათ?",
    footer: "© 2025 არსი. ყველა უფლება დაცულია.",
  },
  en: {
    portalLabel: "Resident Portal",
    projectName: "Your Home",
    logout: "Sign out",
    loginTitle: "Welcome back",
    loginSub: "Sign in to your Arci client portal",
    emailLabel: "Email address or phone",
    passwordLabel: "Password",
    confirmLabel: "Confirm password",
    loginBtn: "Sign in",
    registerBtn: "Create account",
    loginTab: "Sign in",
    registerTab: "Register",
    demoHint: "Demo: demo@arsi.ge / demo123",
    greeting: "Hey,",
    greetingSub: "Here's a quick look at where things stand.",
    apartment: "Apartment",
    status: "Status",
    projectValue: "Project Value",
    paidToDate: "Paid to Date",
    nextPayment: "Next Payment",
    remaining: "Remaining Balance",
    paymentScheduleTitle: "Payment Schedule",
    paymentScheduleSub: "A full breakdown of your payment plan.",
    col: { num: "#", date: "Due Date", desc: "Description", amount: "Amount", status: "Status" },
    statusLabels: { paid: "Paid ✓", upcoming: "Upcoming", overdue: "Overdue" },
    progressTitle: "Project Progress",
    steps: ["Reserved", "Contract", "Construction", "Handover"],
    nav: {
      overview: "Home",
      property: "My Property",
      documents: "Documents",
      payments: "Payments",
      news: "News",
      profile: "Account",
    },
    mainNav: { home: "Home", news: "News", cabinet: "My Cabinet" },
    newsTitle: "News",
    newsSub: "Select a project to see updates and construction progress",
    contactHelp: "Need assistance?",
    footer: "© 2025 Arci. All rights reserved.",
  },
};
