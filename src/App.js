
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans text-center p-10">
      <header className="py-6">
        <img src="/nuvue-logo.png" alt="Nuvue Logo" className="h-20 mx-auto" />
      </header>
      <section className="py-10 bg-cover bg-center" style={{ backgroundImage: "url('/cinematic-hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl inline-block text-white">
          <h1 className="text-4xl font-bold mb-4">We Make It Easy to Get Noticed.</h1>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Helping brick-and-mortar businesses grow through ethical outreach, high-converting ads, and content that connects.
          </p>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg hover:bg-gray-100 transition">Let’s Talk</button>
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Brand Character</h2>
        <img src="/nuvue-character.png" alt="Brand Character" className="mx-auto w-40" />
      </section>
    </div>
  );
}

export default App;
