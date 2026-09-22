export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-orange-500 text-sm tracking-widest uppercase mb-6">
        Let&apos;s Create Together
      </p>

      <h1 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
        Ready for your
        <br />
        <span className="italic text-orange-500">masterpiece?</span>
      </h1>

      <p className="text-gray-400 max-w-xl mb-10 leading-relaxed">
        Whether you want a canvas painting, a mural, a custom portrait, or a
        handmade crochet bouquet — just slide into the DMs. Orders are open.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <a
          href="https://instagram.com/arts.hiyaa"
          target="_blank"
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-full"
        >
          📷 @arts.hiyaa
        </a>
        <a
          href="https://instagram.com/arts.hiyaa"
          target="_blank"
          className="border border-gray-600 hover:border-white transition-colors text-white px-6 py-3 rounded-full"
        >
          DM to Order
        </a>
      </div>

      <div className="flex items-center gap-6 w-full max-w-md mb-6">
        <span className="flex-1 h-px bg-gray-700" />
        <span className="italic text-gray-400 whitespace-nowrap">
          Once upon a brushstroke...
        </span>
        <span className="flex-1 h-px bg-gray-700" />
      </div>

    
    </div>
  );
}