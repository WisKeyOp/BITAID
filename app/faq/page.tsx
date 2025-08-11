// app/faq/page.tsx
import Header from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export default function FAQPage() {
  const faqs = [
    { q: "What is BITAID?", a: "BITAID is an AI-powered medical assistant..." },
    { q: "Is BITAID a replacement for a doctor?", a: "No. BITAID is not a substitute..." },
    { q: "Can I store my medical history?", a: "Yes. You can securely save..." },
    { q: "Does BITAID support emergencies?", a: "BITAID can provide emergency contacts..." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-violet-950 via-gray-900 to-gray-900 text-gray-300">
      {/* Shared Site Header */}
      <Header />

      <main className="flex-1 container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-violet-400">
          Frequently Asked Questions
        </h1>
        <div className="divide-y divide-violet-800">
          {faqs.map((item, idx) => (
            <div key={idx} className="py-6">
              <h2 className="text-lg font-semibold text-white">{item.q}</h2>
              <p className="mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
