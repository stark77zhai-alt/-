const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "28px",
      padding: "40px 0 48px",
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/zhaizh.zh"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{ color: "#666666", transition: "color 0.3s ease", display: "flex" }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#EAEAEA"}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#666666"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      </a>

      {/* IMDb */}
      <a
        href="https://www.imdb.com/name/nm16506061/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="IMDb"
        style={{ color: "#666666", transition: "color 0.3s ease", display: "flex", alignItems: "center" }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#EAEAEA"}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#666666"}
      >
        <svg width="22" height="20" viewBox="0 0 64 32" fill="currentColor">
          <rect x="0" y="0" width="64" height="32" rx="4" fill="currentColor" opacity="0.15"/>
          <text x="4" y="24" fontFamily="'Space Grotesk', Arial, sans-serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="1">IMDb</text>
        </svg>
      </a>

      {/* 新片场 */}
      <a
        href="https://www.xinpianchang.com/u11159564"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="新片场"
        style={{ display: "flex", alignItems: "center", transition: "opacity 0.3s ease", opacity: 0.45 }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.45"}
      >
        <img src={`${base}xpc-logo.png`} alt="新片场" style={{ height: "22px", width: "auto", display: "block" }} />
      </a>
    </footer>
  );
}
