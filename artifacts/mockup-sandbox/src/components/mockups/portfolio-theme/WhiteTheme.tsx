import type { AnchorHTMLAttributes } from "react";
import { projects } from "../../../data/projects";
import "./_group.css";

const base = `${import.meta.env.BASE_URL}images/`;

type PreviewLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function PreviewLink({ href: _href, onClick, ...props }: PreviewLinkProps) {
  return (
    <a
      href="#"
      {...props}
      onClick={event => {
        event.preventDefault();
        onClick?.(event);
      }}
    />
  );
}

function WhiteFooter() {
  return (
    <footer style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "28px",
      padding: "40px 0 48px",
      borderTop: "1px solid rgba(39,38,35,0.1)",
    }}>
      <a
        href="https://www.instagram.com/zhaizh.zh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{ color: "#77756F", transition: "color 0.3s ease", display: "flex" }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#252522"}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#77756F"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href="https://www.imdb.com/name/nm16506061/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="IMDb"
        style={{ color: "#77756F", transition: "color 0.3s ease", display: "flex", alignItems: "center" }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#252522"}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#77756F"}
      >
        <svg width="22" height="20" viewBox="0 0 64 32" fill="currentColor">
          <rect x="0" y="0" width="64" height="32" rx="4" fill="currentColor" opacity="0.15" />
          <text x="4" y="24" fontFamily="'Space Grotesk', Arial, sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="1">IMDb</text>
        </svg>
      </a>
      <a
        href="https://www.xinpianchang.com/u11159564"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="新片场"
        style={{ display: "flex", alignItems: "center", transition: "opacity 0.3s ease", opacity: 0.55 }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.55"}
      >
        <img src={`${base}xpc-logo.png`} alt="新片场" style={{ height: "22px", width: "auto", display: "block" }} />
      </a>
    </footer>
  );
}

export function WhiteTheme() {
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
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
      }}>
        <span className="nav-logo" style={{ fontSize: "22px", fontWeight: 500, letterSpacing: "0.04em", color: "#282824" }}>
          ZHAI
        </span>
        <span className="nav-center">
          <span style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "#77756F", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>Cinematographer</span>
          <span style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "#77756F", fontFamily: '"Ma Shan Zheng", "KaiTi", "楷体", serif' }}>观察自然</span>
        </span>
        <div style={{ display: "flex", gap: "36px", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>
          <PreviewLink href="/reel" style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#77756F", textDecoration: "none", transition: "color 0.4s ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#282824"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#77756F"}>Reel</PreviewLink>
          <PreviewLink href="/about" style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#77756F", textDecoration: "none", transition: "color 0.4s ease" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#282824"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#77756F"}>About</PreviewLink>
        </div>
      </nav>

      {/* Mobile tagline — below nav */}
      <div className="nav-tagline-mobile" style={{ lineHeight: 1.5, background: "rgba(255,255,255,0.92)" }}>
        <span style={{ display: "block", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#77756F", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>Cinematographer</span>
        <span style={{ display: "block", fontSize: "9px", letterSpacing: "0.1em", color: "#77756F", fontFamily: '"Ma Shan Zheng", "KaiTi", "楷体", serif' }}>观察自然</span>
      </div>

      {/* Works grid */}
      <main className="works-main" style={{ maxWidth: "1280px", margin: "0 auto", padding: "100px 48px 80px" }}>
        <div className="works-grid">
          {projects.map((project, index) => (
            <PreviewLink key={project.id} href={`/works/${project.id}`} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
              <div className="group" style={{ cursor: "pointer" }}>
                {/* Image */}
                <div
                  style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", background: "#F2F1EE", borderRadius: "6px" }}
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
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                      display: "block",
                    }}
                  />
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
                    <p style={{ fontSize: "13px", fontWeight: 300, color: "#77756F", letterSpacing: "0.06em", margin: 0 }}>{project.type}</p>
                    <p style={{ fontSize: "13px", fontWeight: 300, color: "#282824", letterSpacing: "0.06em", margin: 0 }}>{project.title}</p>
                    {project.format && (
                      <p style={{ fontSize: "11px", fontWeight: 300, color: "#9B9992", letterSpacing: "0.12em", margin: 0 }}>{project.format}</p>
                    )}
                  </div>
                  <p style={{ fontSize: "13px", fontWeight: 300, color: "#77756F", letterSpacing: "0.06em", margin: 0 }}>{project.year}</p>
                </div>
              </div>
            </PreviewLink>
          ))}
        </div>
      </main>
      <WhiteFooter />
    </div>
  );
}