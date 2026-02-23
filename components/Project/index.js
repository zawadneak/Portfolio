import { motion } from "framer-motion";
import { IoArrowForward, IoLogoGithub } from "react-icons/io5";

const ACCENT = "#FF2D20";
const TEXT = "#E8E8E0";
const MUTED = "#555";
const BORDER = "#1D1D1D";

export default function Project({
  image,
  title,
  description,
  year,
  tech,
  github,
  web,
  index,
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        borderTop: `1px solid ${BORDER}`,
        padding: "32px 0",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "clamp(16px, 4vw, 48px)",
        alignItems: "start",
        cursor: "pointer",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "11px",
          color: "#2A2A2A",
          paddingTop: "6px",
          letterSpacing: "0.1em",
          userSelect: "none",
          minWidth: "28px",
        }}
      >
        {num}
      </span>

      {/* Content */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "10px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: TEXT,
                margin: 0,
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              {title}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "8px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                  color: "#333",
                  letterSpacing: "0.12em",
                  padding: "2px 8px",
                  border: "1px solid #222",
                }}
              >
                {year}
              </span>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                  color: MUTED,
                  letterSpacing: "0.06em",
                }}
              >
                {tech}
              </span>
            </div>
          </div>

          {/* Image thumbnail */}
          {image && (
            <div
              style={{
                width: "clamp(60px, 10vw, 90px)",
                height: "clamp(45px, 7.5vw, 67px)",
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                flexShrink: 0,
                background: "#0F0F0F",
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        <p
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: "14px",
            color: MUTED,
            lineHeight: 1.65,
            margin: "0 0 16px",
            maxWidth: "600px",
          }}
        >
          {description}
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "12px" }}>
          {web && (
            <a
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "11px",
                color: ACCENT,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                border: `1px solid ${ACCENT}`,
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = ACCENT;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = ACCENT;
              }}
            >
              Visit <IoArrowForward size={12} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "11px",
                color: "#555",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                border: "1px solid #222",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#555";
                e.currentTarget.style.color = TEXT;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#222";
                e.currentTarget.style.color = "#555";
              }}
            >
              <IoLogoGithub size={12} /> Github
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
