import { Link } from "wouter";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";

const base = import.meta.env.BASE_URL;

export default function Home() {
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
        fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif',
      }}>
        <span className="nav-logo" style={{ fontSize: "22px", fontWeight: 500, letterSpacing: "0.04em", color: "#EAEAEA" }}>
          ZHAI
        </span>
        <span className="nav-center" style={{ fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>
          <span style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666666" }}>Cinematographer</span>
          <span style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "#666666" }}>观察自然</span>
        </span>
        <span className="nav-tagline-mobile" style={{ fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>观察自然</span>
        <div style={{ display: "flex", gap: "36px" }}>
          <Link href="/reel" style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none", transition: "color 0.4s ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#EAEAEA"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666666"}>Reel</Link>
          <Link href="/about" style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none", transition: "color 0.4s ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#EAEAEA"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666666"}>About</Link>
          <Link href="/contact" style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none", transition: "color 0.4s ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#EAEAEA"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#666666"}>Contact</Link>
        </div>
      </nav>

      {/* Works grid */}
      <main className="works-main" style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 48px 80px" }}>
        <div className="works-grid">
          {projects.map((project) => (
            <Link key={project.id} href={`/works/${project.id}`} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
              <div className="group" style={{ cursor: "pointer" }}>
                {/* Image */}
                <div
                  style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", background: "#0B0B0B", borderRadius: "6px" }}
                  onMouseEnter={e => {
                    const img = (e.currentTarget as HTMLDivElement).querySelector("img") as HTMLImageElement;
                    if (img) img.style.transform = "scale(1.03)";
                    const fog = (e.currentTarget as HTMLDivElement).querySelector(".fog-overlay") as HTMLDivElement;
                    if (fog) fog.style.opacity = "1";
                  }}
                  onMouseLeave={e => {
                    const img = (e.currentTarget as HTMLDivElement).querySelector("img") as HTMLImageElement;
                    if (img) img.style.transform = "scale(1)";
                    const fog = (e.currentTarget as HTMLDivElement).querySelector(".fog-overlay") as HTMLDivElement;
                    if (fog) fog.style.opacity = "0";
                  }}
                >
                  <img
                    src={`${base}${project.thumbnail}`}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                      display: "block",
                    }}
                  />
                  {/* White fog on hover */}
                  <div className="fog-overlay" style={{
                    position: "absolute", inset: 0,
                    background: "rgba(255,255,255,0.05)",
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }} />
                </div>
                {/* Info */}
                <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                    <p style={{ fontSize: "13px", fontWeight: 300, color: "#666666", letterSpacing: "0.06em", margin: 0 }}>{project.type}</p>
                    {project.format && (
                      <p style={{ fontSize: "11px", fontWeight: 300, color: "#555555", letterSpacing: "0.12em", margin: 0 }}>{project.format}</p>
                    )}
                  </div>
                  <p style={{ fontSize: "13px", fontWeight: 300, color: "#A0A0A0", letterSpacing: "0.06em", margin: 0 }}>{project.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
