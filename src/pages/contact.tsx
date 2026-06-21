import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", background: "#0B0B0B", color: "#EAEAEA" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 48px",
        zIndex: 50,
        background: "rgba(11,11,11,0.92)",
        backdropFilter: "blur(8px)",
      }}>
        <Link href="/" style={{ fontSize: "17px", fontWeight: 500, letterSpacing: "0.04em", color: "#EAEAEA", textDecoration: "none" }}>ZHAI</Link>
        <div style={{ display: "flex", gap: "36px" }}>
          <Link href="/reel" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }} className="hover:text-[#EAEAEA] transition-colors duration-300">Reel</Link>
          <Link href="/about" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }} className="hover:text-[#EAEAEA] transition-colors duration-300">About</Link>
          <Link href="/contact" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EAEAEA", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "2px" }}>Contact</Link>
        </div>
      </nav>

      <main className="contact-main">
        <p style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#666666", marginBottom: "48px" }}>Get in touch</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#666666", marginBottom: "8px" }}>Email</p>
            <p style={{ fontSize: "17px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.01em" }}>stark77zhai@gmail.com</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#666666", marginBottom: "8px" }}>Phone</p>
            <p style={{ fontSize: "17px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.01em" }}>+86 185 9428 9284</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#666666", marginBottom: "8px" }}>Base</p>
            <p style={{ fontSize: "17px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.01em" }}>Shenzhen / Guangzhou</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
