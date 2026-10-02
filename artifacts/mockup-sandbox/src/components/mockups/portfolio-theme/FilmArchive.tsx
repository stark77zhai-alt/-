import { useState, type CSSProperties } from "react";
import { projects } from "../../../data/projects";

type Project = (typeof projects)[number];

const imageBase = `${import.meta.env.BASE_URL}images/`;

export function FilmArchive() {
  const [yearFilter, setYearFilter] = useState("All years");
  const [formatFilter, setFormatFilter] = useState("All formats");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const years = Array.from(new Set(projects.map(project => project.year))).sort((a, b) => b.localeCompare(a));
  const visibleProjects = projects.filter(project => {
    const yearMatches = yearFilter === "All years" || project.year === yearFilter;
    const formatMatches =
      formatFilter === "All formats" ||
      (formatFilter === "16mm" && project.format === "16mm") ||
      (formatFilter === "Not listed" && !project.format);
    return yearMatches && formatMatches;
  });

  const closeProject = () => setSelectedProject(null);

  return (
    <div className="film-archive">
      <style>{`
        .film-archive {
          --paper: #f2f0e9;
          --paper-deep: #e8e5db;
          --ink: #292d29;
          --muted: #777a70;
          --rule: #d5d2c8;
          --signal: #b0523b;
          min-height: 100dvh;
          background: var(--paper);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .film-archive * { box-sizing: border-box; }
        .archive-wrap { width: min(100% - 96px, 1220px); margin-inline: auto; }
        .archive-topbar {
          height: 76px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid var(--rule); font-size: 11px; letter-spacing: .13em;
          text-transform: uppercase;
        }
        .archive-mark { display: flex; align-items: center; gap: 12px; font-weight: 650; letter-spacing: .17em; }
        .archive-mark-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--signal); }
        .archive-top-note { color: var(--muted); }
        .archive-nav { display: flex; gap: 30px; }
        .archive-nav a { color: var(--ink); text-decoration: none; transition: color .2s ease; }
        .archive-nav a:hover { color: var(--signal); }
        .archive-intro {
          display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(250px, .75fr);
          gap: 56px; align-items: end; padding: 88px 0 64px;
        }
        .archive-kicker, .archive-micro {
          margin: 0; color: var(--muted); font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
        }
        .archive-title {
          margin: 20px 0 0; font: 400 clamp(58px, 8vw, 112px)/.88 "Iowan Old Style", "Baskerville", "Times New Roman", serif;
          letter-spacing: -.065em;
        }
        .archive-title em { color: var(--signal); font-weight: 400; }
        .archive-intro-side { padding: 0 0 7px 30px; border-left: 1px solid var(--rule); }
        .archive-intro-side p { max-width: 345px; margin: 0; font: 400 18px/1.55 "Iowan Old Style", "Baskerville", Georgia, serif; }
        .archive-intro-side .archive-micro { margin-top: 22px; }
        .archive-indexline {
          display: flex; align-items: center; justify-content: space-between;
          padding: 17px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--rule);
        }
        .archive-indexline strong { font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
        .archive-count { font: 11px ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--muted); }
        .archive-controls {
          min-height: 66px; display: flex; justify-content: space-between; align-items: center; gap: 20px;
          border-bottom: 1px solid var(--rule);
        }
        .archive-filter-set { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .archive-filter-label {
          margin-right: 6px; color: var(--muted); font: 10px ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .1em; text-transform: uppercase;
        }
        .archive-filter {
          appearance: none; border: 1px solid transparent; border-radius: 999px; background: transparent;
          color: var(--muted); padding: 7px 12px; font: 11px ui-sans-serif, system-ui, sans-serif;
          cursor: pointer; transition: color .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .archive-filter:hover { color: var(--ink); border-color: var(--rule); }
        .archive-filter[aria-pressed="true"] { color: var(--ink); background: var(--paper-deep); border-color: var(--paper-deep); }
        .archive-filter:focus-visible, .archive-project:focus-visible, .archive-close:focus-visible {
          outline: 2px solid var(--signal); outline-offset: 3px;
        }
        .archive-year { padding-top: 42px; }
        .archive-year-heading {
          display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 24px;
          margin-bottom: 12px;
        }
        .archive-year-heading h2 {
          margin: 0; font: 400 34px/.9 "Iowan Old Style", "Baskerville", Georgia, serif; letter-spacing: -.04em;
        }
        .archive-year-rule { height: 1px; background: var(--rule); }
        .archive-project {
          display: grid; width: 100%; grid-template-columns: 35px minmax(130px, 190px) minmax(180px, 1fr) 95px 115px 20px;
          align-items: center; gap: 22px; padding: 16px 0; border: 0; border-top: 1px solid var(--rule);
          color: inherit; background: transparent; text-align: left; cursor: pointer;
          animation: archive-arrive .5s both; animation-delay: calc(var(--row-index) * 55ms);
        }
        .archive-project:last-child { border-bottom: 1px solid var(--rule); }
        .archive-number { color: #96978e; font: 10px ui-monospace, SFMono-Regular, Menlo, monospace; }
        .archive-thumb { position: relative; overflow: hidden; width: 100%; aspect-ratio: 16 / 9; background: var(--paper-deep); }
        .archive-thumb img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
        .archive-project:hover .archive-thumb img { transform: scale(1.035); }
        .archive-name { min-width: 0; }
        .archive-name strong {
          display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
          font: 500 14px/1.25 ui-sans-serif, system-ui, sans-serif; letter-spacing: .06em;
        }
        .archive-name small { display: block; margin-top: 7px; color: var(--muted); font-size: 11px; }
        .archive-year-cell, .archive-format-cell {
          color: var(--muted); font: 10px ui-monospace, SFMono-Regular, Menlo, monospace;
          letter-spacing: .08em; text-transform: uppercase;
        }
        .archive-format-cell { color: var(--signal); }
        .archive-arrow { color: var(--muted); font-size: 16px; transition: transform .2s ease, color .2s ease; }
        .archive-project:hover .archive-arrow { color: var(--signal); transform: translateX(3px); }
        .archive-empty {
          display: grid; min-height: 190px; place-content: center; text-align: center;
          border-bottom: 1px solid var(--rule); color: var(--muted);
        }
        .archive-empty strong { color: var(--ink); font: 400 23px "Iowan Old Style", Georgia, serif; }
        .archive-empty span { margin-top: 8px; font-size: 12px; }
        .archive-about {
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 106px; padding: 30px 0 80px;
          border-top: 1px solid var(--ink);
        }
        .archive-about h2 { margin: 0; font: 400 34px/.95 "Iowan Old Style", Georgia, serif; letter-spacing: -.04em; }
        .archive-about p { max-width: 475px; margin: 0; color: #5f6259; font: 400 17px/1.55 "Iowan Old Style", Georgia, serif; }
        .archive-footer {
          display: flex; align-items: center; justify-content: space-between; gap: 18px;
          padding: 22px 0 28px; border-top: 1px solid var(--rule); color: var(--muted);
          font: 10px ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .08em; text-transform: uppercase;
        }
        .archive-socials { display: flex; gap: 20px; }
        .archive-footer a { color: inherit; text-decoration: none; transition: color .2s ease; }
        .archive-footer a:hover { color: var(--signal); }
        .archive-modal-backdrop {
          position: fixed; inset: 0; z-index: 90; display: grid; place-items: center; padding: 24px;
          overflow-y: auto; background: rgba(28, 31, 28, .72); animation: archive-fade .2s both;
        }
        .archive-modal {
          position: relative; width: min(100%, 940px); max-height: calc(100dvh - 48px); overflow-y: auto;
          padding: clamp(20px, 4vw, 44px); background: var(--paper); color: var(--ink);
        }
        .archive-modal-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; }
        .archive-modal h2 { margin: 14px 0 0; font: 400 clamp(32px, 5vw, 58px)/.95 "Iowan Old Style", Georgia, serif; letter-spacing: -.045em; }
        .archive-close {
          display: grid; width: 38px; height: 38px; place-items: center; border: 1px solid var(--rule);
          border-radius: 50%; color: var(--ink); background: transparent; font-size: 20px; cursor: pointer;
        }
        .archive-modal-meta { display: flex; flex-wrap: wrap; gap: 12px 28px; margin: 22px 0 24px; color: var(--muted); font: 10px ui-monospace, SFMono-Regular, Menlo, monospace; text-transform: uppercase; letter-spacing: .08em; }
        .archive-modal-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
        .archive-modal-grid img { display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: cover; background: var(--paper-deep); }
        .archive-synopsis { margin: 24px 0 0; max-width: 600px; font: 400 16px/1.55 "Iowan Old Style", Georgia, serif; color: #5f6259; }
        @keyframes archive-arrive { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes archive-fade { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .film-archive *, .film-archive *::before, .film-archive *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
        }
        @media (max-width: 760px) {
          .archive-wrap { width: min(100% - 40px, 600px); }
          .archive-topbar { height: 62px; }
          .archive-top-note { display: none; }
          .archive-nav { gap: 18px; }
          .archive-intro { grid-template-columns: 1fr; gap: 28px; padding: 70px 0 42px; }
          .archive-title { font-size: clamp(60px, 17vw, 92px); }
          .archive-intro-side { padding: 0 0 0 18px; }
          .archive-intro-side p { font-size: 16px; }
          .archive-intro-side .archive-micro { margin-top: 12px; }
          .archive-controls { align-items: flex-start; flex-direction: column; gap: 9px; padding: 14px 0; }
          .archive-filter-set { gap: 2px; }
          .archive-filter-label { width: 56px; }
          .archive-year { padding-top: 34px; }
          .archive-project {
            grid-template-columns: 22px minmax(90px, 32%) minmax(0, 1fr) 15px;
            gap: 12px; padding: 13px 0;
          }
          .archive-name strong { white-space: normal; font-size: 12px; }
          .archive-name small { font-size: 10px; }
          .archive-year-cell, .archive-format-cell { display: none; }
          .archive-about { grid-template-columns: 1fr; gap: 18px; margin-top: 75px; padding-bottom: 52px; }
          .archive-about h2 { font-size: 30px; }
          .archive-about p { font-size: 16px; }
          .archive-footer { align-items: flex-start; flex-direction: column; padding-bottom: 24px; }
        }
        @media (max-width: 420px) {
          .archive-project { grid-template-columns: 19px minmax(78px, 30%) minmax(0, 1fr) 12px; gap: 9px; }
          .archive-number { font-size: 9px; }
          .archive-modal-backdrop { padding: 12px; }
          .archive-modal { max-height: calc(100dvh - 24px); padding: 20px 16px; }
        }
      `}</style>

      <header className="archive-wrap">
        <div className="archive-topbar">
          <div className="archive-mark"><span className="archive-mark-dot" />Zhai Zhenglong</div>
          <span className="archive-top-note">Cinematographer · Los Angeles</span>
          <nav className="archive-nav" aria-label="Main navigation">
            <a href="#archive-index">Index</a>
            <a href="#archive-about">About</a>
          </nav>
        </div>
      </header>

      <main className="archive-wrap">
        <section className="archive-intro" aria-labelledby="archive-heading">
          <div>
            <p className="archive-kicker">Moving image archive / 2024—26</p>
            <h1 className="archive-title" id="archive-heading">Light,<br /><em>kept moving.</em></h1>
          </div>
          <div className="archive-intro-side">
            <p>A record of frames, places and passing light. Selected cinematography by Zhai Zhenglong.</p>
            <p className="archive-micro">观察自然 &nbsp; / &nbsp; Observe the natural</p>
          </div>
        </section>

        <section id="archive-index" aria-label="Project archive">
          <div className="archive-indexline">
            <strong>Selected works</strong>
            <span className="archive-count">{String(visibleProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} FILMS</span>
          </div>
          <div className="archive-controls" aria-label="Filter projects">
            <div className="archive-filter-set">
              <span className="archive-filter-label">Year</span>
              {["All years", ...years].map(year => (
                <button
                  className="archive-filter"
                  type="button"
                  key={year}
                  aria-pressed={yearFilter === year}
                  onClick={() => setYearFilter(year)}
                >{year}</button>
              ))}
            </div>
            <div className="archive-filter-set">
              <span className="archive-filter-label">Format</span>
              {["All formats", "16mm", "Not listed"].map(format => (
                <button
                  className="archive-filter"
                  type="button"
                  key={format}
                  aria-pressed={formatFilter === format}
                  onClick={() => setFormatFilter(format)}
                >{format}</button>
              ))}
            </div>
          </div>

          {visibleProjects.length === 0 ? (
            <div className="archive-empty"><strong>No frames in this cut.</strong><span>Try another year or format.</span></div>
          ) : years
            .filter(year => yearFilter === "All years" || yearFilter === year)
            .map(year => {
              const yearProjects = visibleProjects.filter(project => project.year === year);
              if (!yearProjects.length) return null;
              return (
                <section className="archive-year" key={year} aria-labelledby={`year-${year}`}>
                  <div className="archive-year-heading">
                    <h2 id={`year-${year}`}>{year}</h2>
                    <span className="archive-year-rule" />
                  </div>
                  {yearProjects.map(project => {
                    const originalIndex = projects.findIndex(item => item.id === project.id);
                    return (
                      <button
                        className="archive-project"
                        type="button"
                        key={project.id}
                        style={{ "--row-index": originalIndex } as CSSProperties}
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Open ${project.title}, ${project.year}${project.format ? `, ${project.format}` : ""}`}
                      >
                        <span className="archive-number">{String(originalIndex + 1).padStart(2, "0")}</span>
                        <span className="archive-thumb">
                          <img
                            src={`${imageBase}${project.thumbnail}`}
                            alt=""
                            loading={originalIndex < 2 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </span>
                        <span className="archive-name">
                          <strong>{project.title}</strong>
                          <small>{project.type}{project.duration ? ` · ${project.duration}` : ""}</small>
                        </span>
                        <span className="archive-year-cell">{project.year}</span>
                        <span className="archive-format-cell">{project.format || "Not listed"}</span>
                        <span className="archive-arrow" aria-hidden="true">↗</span>
                      </button>
                    );
                  })}
                </section>
              );
            })}
        </section>

        <section className="archive-about" id="archive-about">
          <div>
            <p className="archive-kicker">Notes from the frame</p>
            <h2>Attention is<br />a way of seeing.</h2>
          </div>
          <p>Working across short films and moving-image projects, Zhai Zhenglong looks for the quiet detail that gives a scene its pulse. This index gathers work by year and by the material it was made on.</p>
        </section>

        <footer className="archive-footer">
          <span>© Zhai Zhenglong · Cinematography</span>
          <div className="archive-socials">
            <a href="https://www.instagram.com/zhaizh.zh" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.imdb.com/name/nm16506061/" target="_blank" rel="noreferrer">IMDb ↗</a>
            <a href="https://www.xinpianchang.com/u11159564" target="_blank" rel="noreferrer">新片场 ↗</a>
          </div>
        </footer>
      </main>

      {selectedProject && (
        <div className="archive-modal-backdrop" onClick={closeProject}>
          <section
            className="archive-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-modal-title"
            onClick={event => event.stopPropagation()}
          >
            <div className="archive-modal-top">
              <div>
                <p className="archive-kicker">Project file / {selectedProject.type}</p>
                <h2 id="archive-modal-title">{selectedProject.title}</h2>
              </div>
              <button className="archive-close" type="button" aria-label="Close project details" onClick={closeProject}>×</button>
            </div>
            <div className="archive-modal-meta">
              <span>{selectedProject.year}</span>
              <span>{selectedProject.format || "Format not listed"}</span>
              {selectedProject.duration && <span>{selectedProject.duration}</span>}
              {selectedProject.location && <span>{selectedProject.location}</span>}
              <span>{selectedProject.role}</span>
            </div>
            <div className="archive-modal-grid">
              {selectedProject.stills.slice(0, 4).map((still, index) => (
                <img key={still} src={`${imageBase}${still}`} alt={`${selectedProject.title} film still ${index + 1}`} loading="lazy" />
              ))}
            </div>
            {selectedProject.synopsis && <p className="archive-synopsis">{selectedProject.synopsis}</p>}
          </section>
        </div>
      )}
    </div>
  );
}

export default FilmArchive;