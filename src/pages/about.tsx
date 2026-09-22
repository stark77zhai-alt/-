import { Link } from "wouter";
import Footer from "@/components/Footer";

const base = import.meta.env.BASE_URL;
const ASC_ARTICLE_URL = "https://theasc.com/news/asc-student-heritage-award-nominees-2026/";

export default function About() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", background: "#0B0B0B", color: "#EAEAEA" }}>
      {/* Nav */}
      <nav className="nav-bar" style={{
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
        <div style={{ display: "flex", gap: "36px", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>
          <Link href="/reel" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }} className="hover:text-[#EAEAEA] transition-colors duration-300">Reel</Link>
          <Link href="/about" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EAEAEA", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "2px" }}>About</Link>
        </div>
      </nav>

      <main className="about-main">
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
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "20px", marginBottom: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "#666666", margin: 0 }}>
                Recognition
              </p>
              <span style={{ fontSize: "11px", color: "#555555", letterSpacing: "0.08em" }}>2026</span>
            </div>
            <p style={{ fontSize: "18px", fontWeight: 300, lineHeight: 1.5, color: "#C4C4C4", letterSpacing: "0.01em", margin: "0 0 8px" }}>
              ASC Student Heritage Awards
            </p>
            <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "#777777", margin: "0 0 18px" }}>
              Tom Houghton, ASC Graduate Award nominee for <em>Under Grace</em>
              <br />
              New York Film Academy
            </p>
            <a
              href={ASC_ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A0A0A0", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "4px" }}
            >
              Read announcement ↗
            </a>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px" }}>
            <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", lineHeight: 2 }}>
              Society of Camera Operators (SOC)
              <br />
              <span style={{ color: "#444444" }}>Student Member</span>
            </p>
           <div style={{ marginTop: "32px" }}>
             <p style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666666", marginBottom: "20px" }}>
               Get in touch
             </p>
             <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
               <div>
                 <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555555", margin: "0 0 5px" }}>Email</p>
                 <p style={{ fontSize: "15px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.01em", margin: 0 }}>stark77zhai@gmail.com</p>
               </div>
               <div>
                 <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555555", margin: "0 0 5px" }}>Phone</p>
                 <p style={{ fontSize: "15px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.01em", margin: 0 }}>+86 185 9428 9284</p>
               </div>
               <div>
                 <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555555", margin: "0 0 5px" }}>Base</p>
                 <p style={{ fontSize: "15px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.01em", margin: 0 }}>Shanghai / Shenzhen</p>
               </div>
             </div>
           </div>
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
