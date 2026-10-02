import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", background: "#FFFFFF", color: "#282824" }}>
      {/* Nav */}
      <nav className="nav-bar" style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 48px",
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
      }}>
        <Link href="/" style={{ fontSize: "17px", fontWeight: 500, letterSpacing: "0.04em", color: "#282824", textDecoration: "none" }}>ZHAI</Link>
        <div style={{ display: "flex", gap: "36px", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>
          <Link href="/reel" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#77756F", textDecoration: "none" }} className="hover:text-[#282824] transition-colors duration-300">Reel</Link>
          <Link href="/about" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#77756F", textDecoration: "none" }} className="hover:text-[#282824] transition-colors duration-300">About</Link>
          <Link href="/contact" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#282824", textDecoration: "none", borderBottom: "1px solid rgba(39,38,35,0.1)", paddingBottom: "2px" }}>Contact</Link>
        </div>
      </nav>

      <main className="contact-main">
        <p style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#77756F", marginBottom: "48px" }}>Get in touch</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#77756F", marginBottom: "8px" }}>Email</p>
            <p style={{ fontSize: "17px", fontWeight: 300, color: "#5A5954", letterSpacing: "0.01em" }}>stark77zhai@gmail.com</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#77756F", marginBottom: "8px" }}>Phone</p>
            <p style={{ fontSize: "17px", fontWeight: 300, color: "#5A5954", letterSpacing: "0.01em" }}>+86 185 9428 9284</p>
          </div>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#77756F", marginBottom: "8px" }}>Base</p>
            <p style={{ fontSize: "17px", fontWeight: 300, color: "#5A5954", letterSpacing: "0.01em" }}>Shanghai / Shenzhen</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
