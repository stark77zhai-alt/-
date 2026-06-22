import { projects } from "@/data/projects";

const base = import.meta.env.BASE_URL;

export default function Print() {
  return (
    <div style={{ background: "#fff", color: "#111", fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>

      <style>{`
        * { box-sizing: border-box; }

        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: #fff; }
          @page { size: A4; margin: 14mm 14mm; }
          .page-break { page-break-before: always; break-before: page; }
        }

        @media screen {
          .print-root { max-width: 860px; margin: 0 auto; padding: 40px 48px 80px; }
          .page-break { margin-top: 80px; padding-top: 40px; border-top: 2px dashed #ddd; }
        }

        .section-label {
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #aaa;
          margin-bottom: 10px;
        }

        .works-table { width: 100%; border-collapse: collapse; }
        .works-table th {
          text-align: left; font-size: 9px; letter-spacing: 0.14em;
          text-transform: uppercase; color: #aaa; font-weight: 400;
          padding-bottom: 8px; border-bottom: 1px solid #ddd;
        }
        .works-table td {
          font-size: 12px; color: #444;
          padding: 10px 0; border-bottom: 1px solid #eee; vertical-align: middle;
        }
        .works-table td.title { font-weight: 500; color: #111; letter-spacing: 0.03em; }
        .works-table td.dim { color: #999; font-size: 11px; }

        .project-cover {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
          margin-bottom: 6px;
        }

        .stills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
          margin-top: 5px;
        }

        .stills-grid img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div className="print-root">

        {/* Print button */}
        <div className="no-print" style={{ marginBottom: "32px", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => window.print()}
            style={{
              padding: "10px 24px", fontSize: "11px",
              letterSpacing: "0.16em", textTransform: "uppercase",
              background: "#111", color: "#fff", border: "none",
              cursor: "pointer", fontFamily: "inherit",
            }}>
            Export PDF ↓
          </button>
        </div>

        {/* ── PAGE 1: Cover + Bio + Works list ── */}
        <div>
          {/* Header */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <h1 style={{ fontSize: "40px", fontWeight: 600, letterSpacing: "0.06em", margin: 0 }}>ZHAI ZHENGLONG</h1>
              <span style={{ fontSize: "13px", color: "#aaa", fontFamily: '"KaiTi","楷体","STKaiti",serif' }}>翟正龙</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "12px", marginTop: "4px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#666", fontFamily: '"KaiTi","楷体","STKaiti",serif' }}>
                Cinematographer · Director of Photography
              </span>
              <span style={{ fontSize: "11px", color: "#aaa" }}>2026</span>
            </div>
          </div>

          {/* Bio + Contact */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "40px" }}>
            <div>
              <p className="section-label">About</p>
              <p style={{ fontSize: "12px", lineHeight: 1.9, color: "#444", margin: 0 }}>
                Zhai Zhenglong is a cinematographer born in Nanchong, Sichuan, and raised in Shenzhen.
                He spent two years studying cinematography in the United States.
                His work as Director of Photography spans narrative short films and long-form projects,
                telling stories through light and shadow.
              </p>
            </div>
            <div>
              <p className="section-label">Affiliation</p>
              <p style={{ fontSize: "12px", lineHeight: 1.9, color: "#444", margin: "0 0 20px" }}>
                Society of Camera Operators (SOC)<br />
                <span style={{ color: "#aaa" }}>Student Member</span>
              </p>
              <p className="section-label">Contact</p>
              <p style={{ fontSize: "12px", lineHeight: 1.9, color: "#444", margin: 0 }}>
                stark77zhai@gmail.com<br />
                +86 185 9428 9284<br />
                <span style={{ color: "#aaa" }}>Shenzhen / Guangzhou</span>
              </p>
            </div>
          </div>

          {/* Works table */}
          <p className="section-label">Selected Works</p>
          <table className="works-table">
            <thead>
              <tr>
                <th style={{ width: "36%" }}>Title</th>
                <th>Type</th>
                <th>Format</th>
                <th>Duration</th>
                <th style={{ textAlign: "right" }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.id}>
                  <td className="title">{p.title}</td>
                  <td className="dim">{p.type}</td>
                  <td className="dim">{p.format || "—"}</td>
                  <td className="dim">{p.duration || "—"}</td>
                  <td className="dim" style={{ textAlign: "right" }}>{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── PAGES 2+: One page per project ── */}
        {projects.map(p => {
          const cover = p.stills[0];
          const stills = p.stills.slice(1, 7);
          return (
            <div key={p.id} className="page-break">

              {/* Project header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "12px" }}>
                <div>
                  <p className="section-label" style={{ marginBottom: "4px" }}>{p.type} · {p.role}</p>
                  <h2 style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "0.06em", margin: 0 }}>{p.title}</h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  {p.format && <p style={{ fontSize: "11px", color: "#aaa", margin: "0 0 2px", letterSpacing: "0.1em" }}>{p.format}</p>}
                  {p.duration && <p style={{ fontSize: "11px", color: "#aaa", margin: "0 0 2px" }}>{p.duration}</p>}
                  <p style={{ fontSize: "13px", fontWeight: 500, margin: 0 }}>{p.year}</p>
                </div>
              </div>

              {/* Cover image */}
              <img src={`${base}${cover}`} alt={p.title} className="project-cover" />

              {/* Stills grid */}
              {stills.length > 0 && (
                <div className="stills-grid">
                  {stills.map((src, i) => (
                    <img key={i} src={`${base}${src}`} alt="" />
                  ))}
                </div>
              )}

            </div>
          );
        })}

        {/* Footer on last page */}
        <div style={{ marginTop: "40px", borderTop: "1px solid #ddd", paddingTop: "14px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "10px", color: "#bbb", letterSpacing: "0.1em" }}>ZHAI ZHENGLONG · CINEMATOGRAPHER</span>
          <span style={{ fontSize: "10px", color: "#bbb" }}>stark77zhai@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
