import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoStackoverflow,
  IoLogoTwitter,
} from "react-icons/io5";

const ACCENT = "#FF2D20";
const MUTED = "#333";

const links = [
  { href: "https://twitter.com/_cassilha_", Icon: IoLogoTwitter },
  { href: "https://www.linkedin.com/in/lucaszawadneak/", Icon: IoLogoLinkedin },
  { href: "https://www.instagram.com/_cassilha", Icon: IoLogoInstagram },
  { href: "https://github.com/zawadneak", Icon: IoLogoGithub },
  {
    href: "https://stackoverflow.com/users/12705405/lucas-zawadneak",
    Icon: IoLogoStackoverflow,
  },
];

export default function Footer({ absolute }) {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        borderTop: "1px solid #1D1D1D",
        ...(absolute
          ? { position: "absolute", bottom: 0, left: 0, right: 0 }
          : {}),
      }}
    >
      <div style={{ display: "flex", gap: "20px", marginBottom: "14px" }}>
        {links.map(({ href, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: MUTED,
              transition: "color 0.2s ease",
              display: "flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "11px",
          color: "#2A2A2A",
          letterSpacing: "0.1em",
        }}
      >
        Lucas Cassilha Zawadneak — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
