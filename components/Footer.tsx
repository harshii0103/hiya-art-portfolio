import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Murals", href: "/murals" },
  { name: "Commissions", href: "/commissions" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#19140f] text-white/70 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="font-serif text-2xl text-white">
            Hiya
          </Link>
          <p className="mt-3 text-sm italic text-terracotta">
            Once upon a brushstroke...
          </p>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            President, The Fine Arts Society of Maitreyi College, University
            of Delhi. Paintings, murals &amp; custom commissions.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Explore
          </p>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-terracotta transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Get in touch
          </p>
          <a
            href="https://instagram.com/arts.hiyaa"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-terracotta transition-colors w-fit block mb-2"
          >
            📷 @arts.hiyaa
          </a>
          <a
            href="https://wa.me/919013241865"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:text-terracotta transition-colors w-fit block"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Hiya. All artwork is original &amp;
        handmade.
      </div>
    </footer>
  );
}
