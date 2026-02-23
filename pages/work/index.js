import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";

import SezzleLogo from "../../public/sezzle.jpg";
import PierLogo from "../../public/pier.png";
import RD2Logo from "../../public/deskmy.jpg";
import TuntsLogo from "../../public/tunts.png";

const BASE_URL = "https://lucaszawadneak.com";

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const ACCENT = "#FF2D20";
const TEXT = "#E8E8E0";
const MUTED = "#555";
const BORDER = "#1D1D1D";

const entries = [
  {
    role: "Software Engineer II",
    company: "Sezzle",
    type: "fintech",
    period: "2026",
    tech: null,
    href: "https://sezzle.com",
    logo: SezzleLogo,
    current: true,
  },
  {
    role: "Software Engineer III",
    company: "Pier",
    type: "insurtech",
    period: "2025 — 2026",
    tech: "ReactJS · React Native · Ruby on Rails · Kafka · Deno",
    href: "https://pier.digital",
    logo: PierLogo,
  },
  {
    role: "Software Engineer II",
    company: "Pier",
    type: "insurtech",
    period: "2024 — 2025",
    tech: "ReactJS · React Native · Ruby on Rails · Kafka · Deno",
    href: "https://pier.digital",
    logo: PierLogo,
  },
  {
    role: "Fullstack Developer",
    company: "Deskmy",
    type: "virtual office platform",
    period: "2021 — 2024",
    tech: "ReactJS · Django · NodeJS · WebRTC · RabbitMQ",
    href: "https://deskmy.com",
    logo: RD2Logo,
  },
  {
    role: "Development Intern",
    company: "Tunts Rocks",
    type: "software house",
    period: "2021",
    tech: "Angular · Spring · Android · NodeJS · PostgreSQL",
    href: "https://tunts.com",
    logo: TuntsLogo,
  },
];

function TimelineContent() {
  const { t } = useTranslation();

  const workEntries = [
    {
      ...entries[0],
    },
    {
      ...entries[1],
    },
    {
      ...entries[2],
    },
    {
      ...entries[3],
      role: t("fullstack-developer"),
    },
    {
      ...entries[4],
      role: t("development-intern"),
    },
  ];

  return (
    <div
      style={{
        padding: "0 clamp(20px, 6vw, 80px) 80px",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "10px",
          color: "#333",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          marginBottom: "48px",
          borderTop: `1px solid ${BORDER}`,
          paddingTop: "48px",
        }}
      >
        {t("experience")}
      </p>

      {/* Timeline container */}
      <div
        style={{
          paddingLeft: "24px",
          borderLeft: `1px solid ${BORDER}`,
          marginLeft: "8px",
        }}
      >
        {workEntries.map((entry, i) => (
          <motion.a
            key={`${entry.company}-${entry.period}`}
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              display: "block",
              position: "relative",
              paddingBottom: "44px",
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "-33px",
                top: "6px",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: entry.current ? ACCENT : BORDER,
                border: `1px solid ${entry.current ? ACCENT : "#2A2A2A"}`,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = ACCENT;
              }}
              onMouseLeave={(e) => {
                if (!entry.current)
                  e.currentTarget.style.background = BORDER;
              }}
            />

            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}
            >
              {/* Logo */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: "#0F0F0F",
                  border: `1px solid ${BORDER}`,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={entry.logo}
                  alt={entry.company}
                  width={44}
                  height={44}
                  style={{ objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "4px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                      color: TEXT,
                      margin: 0,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {entry.role}
                  </h3>
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "10px",
                      color: entry.current ? ACCENT : "#444",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      border: `1px solid ${entry.current ? ACCENT : "#222"}`,
                    }}
                  >
                    {entry.current ? `${entry.period} — ${t("present")}` : entry.period}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "13px",
                    color: MUTED,
                    margin: "0 0 6px",
                  }}
                >
                  {entry.company}
                  {entry.type && (
                    <span style={{ color: "#333" }}> · {entry.type}</span>
                  )}
                </p>
                {entry.tech && (
                  <p
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "11px",
                      color: "#383838",
                      margin: 0,
                    }}
                  >
                    {entry.tech}
                  </p>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function Work({ standalone = true, locale = "en" }) {
  if (!standalone) {
    return <TimelineContent />;
  }

  const canonicalPath = locale === "en" ? "/work" : `/${locale}/work`;
  const title = "Experience | Lucas Zawadneak";
  const description =
    "A timeline of Lucas Zawadneak's professional experience across fintech, insurtech, and software house companies.";

  return (
    <PageLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Lucas Zawadneak" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/work`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/pt/work`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/work`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}${canonicalPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${BASE_URL}/me.jpg`} />
        <meta property="og:locale" content={locale === "pt" ? "pt_BR" : "en_US"} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_cassilha_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${BASE_URL}/me.jpg`} />
      </Head>
      <div style={{ paddingTop: "68px", background: "#080808", minHeight: "100vh" }}>
        <TimelineContent />
        <Footer />
      </div>
    </PageLayout>
  );
}

