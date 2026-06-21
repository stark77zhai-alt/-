import { Link } from "wouter";
import Footer from "@/components/Footer";

const base = import.meta.env.BASE_URL;

export default function About() {
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
          <Link href="/about" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EAEAEA", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "2px" }}>About</Link>
          <Link href="/contact" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }} className="hover:text-[#EAEAEA] transition-colors duration-300">Contact</Link>
        </div>
      </nav>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "160px 48px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#666666", marginBottom: "28px" }}>翟正龙</p>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.85, color: "#A0A0A0", letterSpacing: "0.01em", marginBottom: "20px" }}>
            Zhai Zhenglong is a cinematographer born in Nanchong, Sichuan, and raised in Shenzhen.
          </p>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.85, color: "#A0A0A0", letterSpacing: "0.01em", marginBottom: "20px" }}>
            He spent two years studying cinematography in the United States.
          </p>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.85, color: "#A0A0A0", letterSpacing: "0.01em", marginBottom: "20px" }}>
            His work as Director of Photography spans narrative short films and long-form projects.
          </p>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.85, color: "#666666", letterSpacing: "0.01em", marginBottom: "40px" }}>
            Telling stories through light and shadow.
          </p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", lineHeight: 2 }}>
              Society of Camera Operators (SOC)
              <br />
              <span style={{ color: "#444444" }}>Student Member</span>
            </p>
          </div>
        </div>
        <div>
          <img
            src={`${base}about-photo.jpg`}
            alt="Zhai Zhenglong"
            style={{ width: "100%", display: "block", borderRadius: "4px" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
