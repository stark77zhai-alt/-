import { Link } from "wouter";

const REEL_URL = "https://www.xinpianchang.com/a13723917?channel=copyLink&from=webShare";

export default function Reel() {
  return (
    <div style={{
      fontFamily: "'Space Grotesk', system-ui, sans-serif",
      background: "#0B0B0B",
      color: "#EAEAEA",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}>

      {/* Nav — minimal, transparent */}
      <nav className="nav-bar" style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 48px",
        zIndex: 50,
      }}>
        <Link href="/" style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "0.1em", color: "#666666", textDecoration: "none", transition: "color 0.4s ease" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#EAEAEA"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666666"}>
          ZHAI
        </Link>
        <div style={{ display: "flex", gap: "36px", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>
          {[
            { href: "/reel", label: "Reel", active: true },
            { href: "/about", label: "About", active: false },
            { href: "/contact", label: "Contact", active: false },
          ].map(({ href, label, active }) => (
            <Link key={href} href={href} style={{
              fontSize: "12px", fontWeight: 400, letterSpacing: "0.2em",
              textTransform: "uppercase", textDecoration: "none",
              color: active ? "#EAEAEA" : "#666666",
              transition: "color 0.4s ease",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#EAEAEA"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = active ? "#EAEAEA" : "#666666"}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Reel CTA */}
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#666666", marginBottom: "48px",
        }}>
          2026 Demo Reel
        </p>
        {REEL_URL ? (
          <a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#EAEAEA", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "18px 48px",
              transition: "border-color 0.4s ease, color 0.4s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            Watch Reel ↗
          </a>
        ) : (
          <span style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#333333" }}>
            Coming Soon
          </span>
        )}
      </div>

    </div>
  );
}
