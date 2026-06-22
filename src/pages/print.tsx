import { projects } from "@/data/projects";

const base = import.meta.env.BASE_URL;

export default function Print() {
  return (
    <div style={{ background: "#fff", color: "#111", fontFamily: "'Space Grotesk', system-ui, sans-serif", minHeight: "100vh" }}>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          @page { size: A4; margin: 18mm 16mm; }
        }
        @media screen {
          .print-root { max-width: 860px; margin: 0 auto; padding: 60px 48px 80px; }
        }
        @media print {
          .print-root { padding: 0; }
        }
        .works-table { width: 100%; border-collapse: collapse; }
        .works-table th { text-align: left; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #888; font-weight: 400; padding-bottom: 10px; border-bottom: 1px solid #ddd; }
        .works-table td { font-size: 13px; color: #333; padding: 13px 0; border-bottom: 1px solid #eee; vertical-align: top; }
        .works-table td.title { font-weight: 500; color: #111; letter-spacing: 0.04em; }
        .works-table td.dim { color: #888; font-size: 12px; }
        .col-gap { width: 32px; }
      `}</style>

      <div className="print-root">

        {/* Print button — screen only */}
        <div className="no-print" style={{ marginBottom: "40px", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => window.print()}
            style={{
              padding: "10px 24px",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "#111",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}>
            Export PDF ↓
          </button>
        </div>

        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4px" }}>
            <h1 style={{ fontSize: "38px", fontWeight: 600, letterSpacing: "0.06em", margin: 0 }}>ZHAI ZHENGLONG</h1>
            <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", fontFamily: '"KaiTi", "楷体", "STKaiti", serif' }}>翟正龙</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "16px" }}>
            <span style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", fontFamily: '"KaiTi", "楷体", "STKaiti", serif' }}>Cinematographer · Director of Photography</span>
            <span style={{ fontSize: "11px", color: "#888" }}>2026</span>
          </div>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: "48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "12px" }}>About</p>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#444", margin: 0 }}>
              Zhai Zhenglong is a cinematographer born in Nanchong, Sichuan, and raised in Shenzhen.
              He spent two years studying cinematography in the United States.
              His work as Director of Photography spans narrative short films and long-form projects,
              telling stories through light and shadow.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "12px" }}>Affiliation</p>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#444", margin: 0 }}>
              Society of Camera Operators (SOC)<br />
              <span style={{ color: "#888" }}>Student Member</span>
            </p>
            <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", margin: "24px 0 12px" }}>Contact</p>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#444", margin: 0 }}>
              stark77zhai@gmail.com<br />
              +86 185 9428 9284<br />
              <span style={{ color: "#888" }}>Shenzhen / Guangzhou</span>
            </p>
          </div>
        </div>

        {/* Works */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Selected Works</p>
          <table className="works-table">
            <thead>
              <tr>
                <th>Title</th>
                <th className="col-gap" />
                <th>Type</th>
                <th className="col-gap" />
                <th>Format</th>
                <th className="col-gap" />
                <th>Role</th>
                <th className="col-gap" />
                <th style={{ textAlign: "right" }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.id}>
                  <td className="title">{p.title}</td>
                  <td className="col-gap" />
                  <td className="dim">{p.type}</td>
                  <td className="col-gap" />
                  <td className="dim">{p.format || "—"}</td>
                  <td className="col-gap" />
                  <td className="dim">{p.role}</td>
                  <td className="col-gap" />
                  <td className="dim" style={{ textAlign: "right" }}>{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stills grid — 3 images per project thumbnail row */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Selected Stills</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {projects.flatMap(p => p.stills.slice(0, 2)).slice(0, 9).map((src, i) => (
              <img key={i} src={`${base}${src}`} alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: "1px solid #ddd", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#aaa", letterSpacing: "0.1em" }}>ZHAI ZHENGLONG · CINEMATOGRAPHER</span>
          <span style={{ fontSize: "11px", color: "#aaa" }}>stark77zhai@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
