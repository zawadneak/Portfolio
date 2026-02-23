import Head from "next/head";
import Image from "next/image";
import ProfilePicture from "../public/me.jpg";
import PageLayout from "../components/PageLayout";
import Footer from "../components/Footer";
import Work from "./work";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { motion } from "framer-motion";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const ACCENT = "#FF2D20";
const TEXT = "#E8E8E0";
const MUTED = "#555";
const BORDER = "#1D1D1D";

const techStack = [
  { label: "JavaScript", href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
  { label: "React", href: "https://reactjs.org/" },
  { label: "Node.js", href: "https://nodejs.org" },
  { label: "Ruby", href: "https://www.ruby-lang.org/" },
  { label: "Python", href: "https://python.org" },
  { label: "Go", href: "https://golang.org" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Head>
        <title>Lucas Zawadneak</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 clamp(20px, 6vw, 80px)",
          paddingTop: "68px",
          maxWidth: "1440px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #1A1A1A 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        {/* Left content */}
        <div style={{ position: "relative", zIndex: 2, flex: 1 }}>
          <motion.p
            {...fade(0.1)}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "12px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: ACCENT,
              marginBottom: "10px",
            }}
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            {...fade(0.2)}
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(5.5rem, 16vw, 15rem)",
              lineHeight: 0.82,
              color: TEXT,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            LUCAS
          </motion.h1>

          <motion.div
            {...fade(0.35)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "14px",
              marginBottom: "32px",
            }}
          >
            <div style={{ width: 36, height: 2, background: ACCENT, flexShrink: 0 }} />
            <span
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                color: ACCENT,
                letterSpacing: "0.12em",
              }}
            >
              {t("fullstack-developer.label")}
            </span>
          </motion.div>

          <motion.p
            {...fade(0.48)}
            style={{
              maxWidth: "460px",
              color: MUTED,
              lineHeight: 1.75,
              fontSize: "15px",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            {t("description")}
          </motion.p>

          {/* Mobile profile pic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:hidden"
            style={{ marginTop: "40px" }}
          >
            <ProfileRing size={160} />
          </motion.div>
        </div>

        {/* Desktop profile pic — absolute right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden lg:block"
          style={{
            position: "absolute",
            right: "clamp(20px, 6vw, 80px)",
            top: "50%",
            transform: "translateY(-46%)",
            zIndex: 2,
          }}
        >
          <ProfileRing size={290} />
          {/* Job badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              right: "-10px",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 14px",
              background: ACCENT,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "10px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#fff",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            SWE II @ SEZZLE
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "clamp(20px, 6vw, 80px)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            color: "#2A2A2A",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 22, height: 1, background: "#2A2A2A" }} />
          {t("scroll")}
        </motion.div>
      </section>

      {/* ── TECH STACK ── */}
      <section
        style={{
          padding: "56px clamp(20px, 6vw, 80px)",
          maxWidth: "1440px",
          margin: "0 auto",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            color: "#333",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {t("tools")}
        </motion.p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {techStack.map((tech, i) => (
            <motion.a
              key={tech.label}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.07 }}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "12px",
                padding: "8px 16px",
                border: `1px solid ${BORDER}`,
                color: "#555",
                letterSpacing: "0.05em",
                transition: "border-color 0.2s ease, color 0.2s ease",
                display: "inline-block",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = ACCENT;
                e.currentTarget.style.color = ACCENT;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = BORDER;
                e.currentTarget.style.color = "#555";
              }}
            >
              {tech.label}
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── EMBEDDED WORK TIMELINE ── */}
      <Work standalone={false} />

      <Footer />
    </PageLayout>
  );
}

function ProfileRing({ size }) {
  const inner = size - 6;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        padding: 3,
        background: `linear-gradient(135deg, ${ACCENT} 0%, #080808 60%)`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          borderRadius: "50%",
          overflow: "hidden",
          background: "#080808",
        }}
      >
        <Image
          src={ProfilePicture}
          alt="Lucas Zawadneak"
          width={inner}
          height={inner}
          style={{ display: "block", filter: "grayscale(15%)", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
