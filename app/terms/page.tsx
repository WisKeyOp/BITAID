import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="bg-gradient-to-b from-violet-950 via-gray-900 to-gray-900 text-gray-300 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-violet-400">Terms of Service</h1>
        <p className="mb-4 text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="border-l-4 border-violet-700 pl-4">
          <h2 className="text-xl font-semibold text-white mt-6 mb-2">1. Acceptance of Terms</h2>
          <p>By using BITAID, you agree to these Terms of Service.</p>
        </section>

        <section className="border-l-4 border-violet-700 pl-4">
          <h2 className="text-xl font-semibold text-white mt-6 mb-2">2. Services Provided</h2>
          <p>BITAID offers AI-powered health guidance...</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
