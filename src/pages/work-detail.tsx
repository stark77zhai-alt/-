import { Link, useParams } from "wouter";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";
import { useState, useEffect, useCallback } from "react";

const base = import.meta.env.BASE_URL;
const ASC_ARTICLE_URL = "https://theasc.com/news/asc-student-heritage-award-nominees-2026/";

export default function WorkDetail() {
  const params = useParams();
  const project = projects.find(p => p.id === params.id);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const hero = project?.thumbnail;
  const rest = project ? project.stills.filter(s => s !== hero) : [];

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox(i => (i === null ? null : (i - 1 + rest.length) % rest.length));
  }, [rest.length]);

  const next = useCallback(() => {
    setLightbox(i => (i === null ? null : (i + 1) % rest.length));
  }, [rest.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  if (!project) {
    return (
      <div style={{ padding: "200px 40px", textAlign: "center", fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}>
        Not found
      </div>
    );
  }

  const cols = 3;
  const rows: string[][] = [];
  for (let i = 0; i < rest.length; i += cols) {
    rows.push(rest.slice(i, i + cols));
  }

  return (
    <div style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", background: "#0B0B0B", color: "#EAEAEA", minHeight: "100vh" }}>

      {/* Nav */}
      <nav className="nav-bar" style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "28px 48px",
        zIndex: 50,
        background: "rgba(11,11,11,0)",
      }}>
        <Link href="/" style={{ fontSize: "17px", fontWeight: 500, letterSpacing: "0.04em", color: "#EAEAEA", textDecoration: "none" }}>
          ZHAI
        </Link>
        <div style={{ display: "flex", gap: "36px", fontFamily: '"KaiTi", "楷体", "STKaiti", "AR PL UKai CN", serif' }}>
          <Link href="/reel" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }} className="hover:text-[#EAEAEA] transition-colors duration-300">Reel</Link>
          <Link href="/about" style={{ fontSize: "13px", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "#666666", textDecoration: "none" }} className="hover:text-[#EAEAEA] transition-colors duration-300">About</Link>
        </div>
      </nav>

      {/* Hero — natural ratio */}
      <div style={{ width: "100%", marginTop: "80px" }}>
        <img
          src={`${base}${hero}`}
          alt={project.title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {project.id === "under-grace" && (
        <section className="detail-recognition" aria-label="Recognition">
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "12px" }}>
              <p style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666666", margin: 0 }}>
                Recognition
              </p>
              <span style={{ fontSize: "10px", color: "#555555", letterSpacing: "0.1em" }}>2026</span>
            </div>
            <h1 style={{ fontSize: "24px", fontWeight: 300, letterSpacing: "0.08em", color: "#C4C4C4", margin: "0 0 10px" }}>
              UNDER GRACE
            </h1>
            <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.7, color: "#777777", margin: 0 }}>
              ASC Student Heritage Awards · Tom Houghton, ASC Graduate Award nominee
              <br />
              New York Film Academy
            </p>
          </div>
          <a
            href={ASC_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flexShrink: 0, fontSize: "10px", fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A0A0A0", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "5px" }}
          >
            Official announcement ↗
          </a>
        </section>
      )}

      {/* Stills grid — 3 columns */}
      <div className="detail-stills">
        {rows.map((row, i) => (
          <div key={i} className="detail-stills-cols">
            {row.map((src, j) => {
              const idx = i * cols + j;
              return (
                <img
                  key={j}
                  src={`${base}${src}`}
                  alt=""
                  onClick={() => setLightbox(idx)}
                  style={{
                    width: "100%", display: "block", objectFit: "cover",
                    cursor: "zoom-in", transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="detail-back">
        <Link href="/" style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", textDecoration: "none" }}
          className="hover:text-[#e8e4df] transition-colors duration-300">
          ← All Works
        </Link>
      </div>

      <Footer />

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{
              position: "absolute", left: "24px",
              background: "none", border: "none", color: "#666", fontSize: "28px",
              cursor: "pointer", padding: "16px", lineHeight: 1,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#EAEAEA")}
            onMouseLeave={e => (e.currentTarget.style.color = "#666")}
          >
            ←
          </button>

          {/* Image */}
          <img
            src={`${base}${rest[lightbox]}`}
            alt=""
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "90vw", maxHeight: "90vh",
              objectFit: "contain", display: "block",
              userSelect: "none",
            }}
          />

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            style={{
              position: "absolute", right: "24px",
              background: "none", border: "none", color: "#666", fontSize: "28px",
              cursor: "pointer", padding: "16px", lineHeight: 1,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#EAEAEA")}
            onMouseLeave={e => (e.currentTarget.style.color = "#666")}
          >
            →
          </button>

          {/* Close */}
          <button
            onClick={close}
            style={{
              position: "absolute", top: "24px", right: "24px",
              background: "none", border: "none", color: "#666", fontSize: "22px",
              cursor: "pointer", padding: "8px", lineHeight: 1,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#EAEAEA")}
            onMouseLeave={e => (e.currentTarget.style.color = "#666")}
          >
            ✕
          </button>

          {/* Counter */}
          <div style={{
            position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)",
            fontSize: "11px", letterSpacing: "0.2em", color: "#444",
          }}>
            {lightbox + 1} / {rest.length}
          </div>
        </div>
      )}
    </div>
  );
}
