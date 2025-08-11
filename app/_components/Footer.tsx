export default function Footer() {
  return (
    <footer className="bg-[#1b1523] text-gray-300 text-sm"> 
      {/* #1b1523 is a muted deep violet-gray to separate from page's gradient */}

      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About */}
        <section aria-label="About">
          <h3 className="font-semibold mb-3 text-white">About BITAID</h3>
          <p className="text-gray-400">
            AI-powered medical assistant providing OTC advice, home remedies, and health records.
          </p>
        </section>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-violet-400">Home</a></li>
            <li><a href="/dashboard" className="hover:text-violet-400">Dashboard</a></li>
            <li><a href="/faq" className="hover:text-violet-400">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-violet-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-violet-400">Terms of Service</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section aria-label="Contact">
          <h3 className="font-semibold mb-3 text-white">Contact</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:support@bitaid.health" className="hover:text-violet-400">support@bitaid.health</a></li>
            <li>Phone: +1 123‑456‑7890</li>
            <li>Location: Near Department of Hotel Management, Behind the IGH (Institute Guest House)</li>
          </ul>
        </section>

        {/* Emergency */}
        <section aria-label="Emergency">
          <h3 className="font-semibold mb-3 text-white">Emergency Contact</h3>
          <ul className="space-y-2">
            <li>Ambulance: <a href="tel:+916512276009" className="hover:text-violet-400">+91 651-227-6009</a></li>
            {/*<li>Dr. Mona Deepa: <a href="tel:+917763855564" className="hover:text-violet-400">+1 123‑456‑7890</a></li>*/}
          </ul>
        </section>
      </div>

      <div className="border-t border-violet-900">
        <div className="container mx-auto px-6 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} BITAID — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
