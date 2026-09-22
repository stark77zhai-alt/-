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
          @page { size: A4; margin: 12mm 12mm; }
          .page-break { page-break-before: always; break-before: page; }
        }

        @media screen {
          .print-root { max-width: 860px; margin: 0 auto; padding: 32px 48px 60px; }
          .page-break { margin-top: 56px; padding-top: 32px; border-top: 2px dashed #ddd; }
        }

        .lbl {
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 6px;
        }

        .works-table { width: 100%; border-collapse: collapse; }
        .works-table th {
          text-align: left; font-size: 9px; letter-spacing: 0.12em;
          text-transform: uppercase; color: #bbb; font-weight: 400;
          padding-bottom: 7px; border-bottom: 1px solid #e0e0e0;
        }
        .works-table td {
          font-size: 12px; color: #444;
          padding: 8px 0; border-bottom: 1px solid #eee; vertical-align: middle;
        }
        .works-table td.title { font-weight: 600; color: #111; letter-spacing: 0.03em; }
        .works-table td.dim { color: #999; font-size: 11px; }

        .project-cover {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
          margin-bottom: 4px;
        }

        .stills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          margin-top: 4px;
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
        <div className="no-print" style={{ marginBottom: "24px", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => window.print()}
            style={{
              padding: "9px 22px", fontSize: "11px",
              letterSpacing: "0.14em", textTransform: "uppercase",
              background: "#111", color: "#fff", border: "none",
              cursor: "pointer", fontFamily: "inherit",
            }}>
            导出 PDF ↓
          </button>
        </div>

        {/* ── 第一页：封面 + 简介 + 作品目录 ── */}
        <div>
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <h1 style={{ fontSize: "38px", fontWeight: 600, letterSpacing: "0.06em", margin: 0 }}>翟正龙</h1>
              <span style={{ fontSize: "12px", color: "#aaa", letterSpacing: "0.08em" }}>ZHAI ZHENGLONG</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #111", paddingBottom: "10px", marginTop: "4px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", fontFamily: '"KaiTi","楷体","STKaiti",serif' }}>
                摄影指导 · Director of Photography
              </span>
              <span style={{ fontSize: "11px", color: "#aaa" }}>2026</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", marginBottom: "32px" }}>
            <div>
              <img
                src={`${base}about-photo.jpg`}
                alt="翟正龙"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", marginBottom: "12px" }}
              />
              <p className="lbl">简介</p>
              <p style={{ fontSize: "12px", lineHeight: 1.85, color: "#444", margin: 0 }}>
                翟正龙，摄影指导，出生于四川南充，成长于深圳。曾赴美国学习电影摄影两年。
                擅长以光与影叙述故事，作品涵盖叙事短片与长片项目。
              </p>
            </div>
            <div>
              <p className="lbl">所属机构</p>
              <p style={{ fontSize: "12px", lineHeight: 1.85, color: "#444", margin: "0 0 16px" }}>
                掌机师协会（SOC）<br />
                <span style={{ color: "#aaa" }}>学生会员</span>
              </p>
              <p className="lbl">联系方式</p>
              <p style={{ fontSize: "12px", lineHeight: 1.85, color: "#444", margin: 0 }}>
                stark77zhai@gmail.com<br />
                +86 185 9428 9284<br />
                <span style={{ color: "#aaa" }}>上海 / 深圳</span>
              </p>
            </div>
          </div>

          <p className="lbl">作品目录</p>
          <table className="works-table">
            <thead>
              <tr>
                <th style={{ width: "38%" }}>片名</th>
                <th>类型</th>
                <th>格式</th>
                <th>时长</th>
                <th style={{ textAlign: "right" }}>年份</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(p => (
                <tr key={p.id}>
                  <td className="title">{p.title}</td>
                  <td className="dim">短片</td>
                  <td className="dim">{p.format || "Digital"}</td>
                  <td className="dim">{p.duration || "—"}</td>
                  <td className="dim" style={{ textAlign: "right" }}>{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 每个项目单独一页 ── */}
        {projects.map(p => {
          const cover = p.thumbnail;
          const stills = p.stills.slice(1, 13);
          return (
            <div key={p.id} className="page-break">

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "8px" }}>
                <div>
                  <p className="lbl" style={{ marginBottom: "3px" }}>短片 · 摄影指导</p>
                  <h2 style={{ fontSize: "26px", fontWeight: 600, letterSpacing: "0.06em", margin: 0 }}>{p.title}</h2>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "11px", color: "#aaa", margin: "0 0 1px", letterSpacing: "0.1em" }}>{p.format || "Digital"}</p>
                  {p.duration && <p style={{ fontSize: "11px", color: "#aaa", margin: "0 0 1px" }}>{p.duration}</p>}
                  <p style={{ fontSize: "14px", fontWeight: 600, margin: 0 }}>{p.year}</p>
                </div>
              </div>

              <img src={`${base}${cover}`} alt={p.title} className="project-cover" />

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

        <div style={{ marginTop: "32px", borderTop: "1px solid #e0e0e0", paddingTop: "12px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "10px", color: "#ccc", letterSpacing: "0.1em" }}>翟正龙 · 摄影指导</span>
          <span style={{ fontSize: "10px", color: "#ccc" }}>stark77zhai@gmail.com</span>
        </div>

      </div>
    </div>
  );
}
