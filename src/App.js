
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <header className="py-6 px-6 flex justify-center items-center">
        <img src="/nuvue-logo.png" alt="Nuvue Logo" className="h-20" />
      </header>

      <section className="text-center py-20 px-6">
        <div className="bg-black bg-opacity-50 text-white p-6 rounded-xl inline-block">
          <h1 className="text-4xl font-bold mb-4">We Make It Easy to Get Noticed.</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Helping brick-and-mortar businesses grow through ethical outreach, high-converting ads, and content that connects.
          </p>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg hover:bg-gray-100 transition">Let’s Talk</button>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Brand Character</h2>
        <img src="/nuvue-character.png" alt="Brand Character" className="mx-auto w-48 sm:w-64 md:w-72" />
      </section>

      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Smart Lead Generation. Ethical Marketing. Real Results.</p>
        <ul className="max-w-lg mx-auto text-left space-y-2">
          <li>🔥 Cold & Warm Outreach Campaigns</li>
          <li>📱 Paid Ads (Meta, Google, TikTok)</li>
          <li>✍️ Content Creation & Posting</li>
          <li>✉️ Lead Capture & Funnel Strategy</li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Nuvue?</h2>
        <ul className="max-w-xl mx-auto space-y-4 text-lg">
          <li>✅ <strong>Consistent & Reliable:</strong> We act fast and follow through.</li>
          <li>💬 <strong>Clear Communication:</strong> No buzzwords—just results and honest updates.</li>
          <li>🤝 <strong>Ethical Practices:</strong> No spam, no gimmicks, no shortcuts.</li>
          <li>🚀 <strong>Tailored Strategy:</strong> We work with your brand, not around it.</li>
        </ul>
      </section>

      <section className="py-20 px-6 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold mb-4">Let’s Chat</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Ready to get more leads the right way? Tell us a bit about your business—we’ll reply fast and with value (not fluff).
        </p>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg hover:bg-gray-100 transition">Let’s Work Together</button>
      </section>

      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        Nuvue Marketing | Based in London<br />
        hello@nuvue.agency | © 2025
      </footer>
    </div>
  );
}

export default App;
