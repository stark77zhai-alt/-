import { Link, useRoute } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isHome] = useRoute("/");
  const [isWorks] = useRoute("/works");
  const [isAbout] = useRoute("/about");
  const [isContact] = useRoute("/contact");

  const navLinkClass = (isActive: boolean) => 
    `text-[11px] uppercase tracking-[0.15em] font-extralight transition-colors duration-500 hover:text-foreground ${isActive ? "text-foreground font-light border-b border-foreground/30 pb-1" : "text-muted"}`;

  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 w-full p-6 md:p-12 flex justify-between items-start z-50 mix-blend-difference text-white">
        <div className="text-xs font-light tracking-[0.12em]">
          <Link href="/" className="hover:opacity-70 transition-opacity duration-500">Zhai Zhenglong</Link>
        </div>
        <div className="flex gap-6 md:gap-10">
          <Link href="/works" className={navLinkClass(isWorks)}>Works</Link>
          <Link href="/about" className={navLinkClass(isAbout)}>About</Link>
          <Link href="/contact" className={navLinkClass(isContact)}>Contact</Link>
        </div>
      </nav>
      
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      {!isHome && (
        <footer className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-40">
          <div className="text-[10px] font-extralight tracking-widest text-muted">2024</div>
        </footer>
      )}
    </div>
  );
}
