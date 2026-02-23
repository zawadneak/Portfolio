import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import UsaFlag from "../../public/usa.png";
import BrazilFlag from "../../public/brazil.png";

const ACCENT = "#FF2D20";
const TEXT_MUTED = "#666";
const BG_SCROLLED = "rgba(8, 8, 8, 0.94)";
const BORDER_SCROLLED = "#1D1D1D";

export default function Navigator() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const handleChangeLanguage = () => {
    const next = language === "en" ? "pt" : "en";
    setLanguage(next);
    window.location.href = `/${next}`;
  };

  useEffect(() => {
    setLanguage(router.locale);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(20px, 5vw, 56px)",
        zIndex: 100,
        background: scrolled ? BG_SCROLLED : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${BORDER_SCROLLED}`
          : "1px solid transparent",
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      <Link href="/">
        <span
          style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: "30px",
            letterSpacing: "0.04em",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <span style={{ color: ACCENT }}>L</span>
          <span style={{ color: "#E8E8E0" }}>Z</span>
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        {[
          { href: "/education", label: t("education.label") },
          { href: "/projects", label: t("projects.label") },
          { href: "/contact", label: t("contact") },
        ].map(({ href, label }) => (
          <Link key={href} legacyBehavior href={href}>
            <a
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:
                  router.pathname === href ? "#E8E8E0" : TEXT_MUTED,
                transition: "color 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#E8E8E0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  router.pathname === href ? "#E8E8E0" : TEXT_MUTED)
              }
            >
              {label}
            </a>
          </Link>
        ))}

        <button
          onClick={handleChangeLanguage}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            opacity: 0.45,
            transition: "opacity 0.2s",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
        >
          {language === "pt" ? (
            <Image src={UsaFlag} width={20} height={20} alt="EN" />
          ) : (
            <Image src={BrazilFlag} width={20} height={20} alt="PT" />
          )}
        </button>
      </div>
    </nav>
  );
}
