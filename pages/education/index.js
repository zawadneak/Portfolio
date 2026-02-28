import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import { useTranslation } from "next-i18next";
import PageLayout from "../../components/PageLayout";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import UfprLogo from "../../public/ufpr.jpg";
import UTFPRLogo from "../../public/utfprlogo.png";

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

export default function Education({ locale = "en" }) {
  const { t } = useTranslation();

  const canonicalPath = locale === "en" ? "/education" : `/${locale}/education`;
  const title = `${t("education.label")} | Lucas Zawadneak`;
  const description =
    "Lucas Zawadneak's academic background: Software Engineering at UFPR and a postgraduate in AI at UTFPR.";

  const entries = [
    {
      institution: "Universidade Tecnológica Federal do Paraná",
      description: t("education.postgraduate.description"),
      period: "2024 — 2025",
      logo: UTFPRLogo,
      href: "https://www.utfpr.edu.br/",
      logoStyle: { objectFit: "contain", background: "#fff", padding: "4px" },
    },
    {
      institution: "Universidade Federal do Paraná",
      description: t("education.university.description"),
      period: "2020 — 2023",
      logo: UfprLogo,
      href: "https://www.ufpr.br/portalufpr/",
      logoStyle: { objectFit: "cover" },
    },
  ];

  return (
    <PageLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Lucas Zawadneak" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/education`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/pt/education`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/education`} />

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


      <div
        style={{
          paddingTop: "68px",
          background: "#080808",
          minHeight: "100vh",
        }}
      >
        <main
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
            {t("education.label")}
          </p>

          <div
            style={{
              paddingLeft: "24px",
              borderLeft: `1px solid ${BORDER}`,
              marginLeft: "8px",
            }}
          >
            {entries.map((entry, i) => (
              <motion.a
                key={entry.institution}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
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
                    background: i === 0 ? ACCENT : BORDER,
                    border: `1px solid ${i === 0 ? ACCENT : "#2A2A2A"}`,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "24px",
                  }}
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
                      alt={entry.institution}
                      width={44}
                      height={44}
                      style={entry.logoStyle}
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
                          fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                          color: TEXT,
                          margin: 0,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {entry.institution}
                      </h3>
                      <span
                        style={{
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: "10px",
                          color: i === 0 ? ACCENT : "#444",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "2px 8px",
                          border: `1px solid ${i === 0 ? ACCENT : "#222"}`,
                        }}
                      >
                        {entry.period}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "13px",
                        color: MUTED,
                        margin: 0,
                      }}
                    >
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </PageLayout>
  );
}
