import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-violet-950 via-gray-900 to-gray-900 text-gray-300 min-h-screen">
        <Navbar />
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-violet-400">Privacy Policy</h1>
        <p className="mb-4 text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="border-l-4 border-violet-700 pl-4">
          <h2 className="text-xl font-semibold text-white mt-6 mb-2">1. Information We Collect</h2>
          <p>We collect personal and medical information you provide...</p>
        </section>

        <section className="border-l-4 border-violet-700 pl-4">
          <h2 className="text-xl font-semibold text-white mt-6 mb-2">2. How We Use Your Data</h2>
          <p>Your data is used to provide AI medical guidance...</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
