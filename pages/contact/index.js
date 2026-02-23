import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageLayout from "../../components/PageLayout";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoStackoverflow,
  IoLogoTwitter,
} from "react-icons/io5";

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

const socials = [
  { href: "https://twitter.com/_cassilha_", Icon: IoLogoTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/lucaszawadneak/", Icon: IoLogoLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/_cassilha", Icon: IoLogoInstagram, label: "Instagram" },
  { href: "https://github.com/zawadneak", Icon: IoLogoGithub, label: "GitHub" },
  {
    href: "https://stackoverflow.com/users/12705405/lucas-zawadneak",
    Icon: IoLogoStackoverflow,
    label: "Stack Overflow",
  },
];

export default function Contact({ locale = "en" }) {
  const { t } = useTranslation();

  const canonicalPath = locale === "en" ? "/contact" : `/${locale}/contact`;
  const title = `${t("talk-to-me.label")} | Lucas Zawadneak`;
  const description =
    "Get in touch with Lucas Zawadneak via email or social media — GitHub, LinkedIn, Twitter, Instagram, Stack Overflow.";

  return (
    <PageLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Lucas Zawadneak" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/contact`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/pt/contact`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/contact`} />

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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main
          style={{
            flex: 1,
            padding: "clamp(48px, 10vh, 120px) clamp(20px, 6vw, 80px)",
            maxWidth: "1440px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "11px",
              color: "#333",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {t("contact")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: "clamp(4rem, 13vw, 12rem)",
              lineHeight: 0.85,
              color: TEXT,
              margin: "0 0 48px",
              letterSpacing: "-0.01em",
            }}
          >
            {t("talk-to-me.label")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "40px" }}
          >
            <p
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "14px",
                color: MUTED,
                marginBottom: "24px",
                maxWidth: "480px",
                lineHeight: 1.7,
              }}
            >
              {t("try-my-email")} — {t("other-social-media")}
            </p>

            <a
              href="mailto:lucaszawadneak@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "clamp(14px, 2vw, 20px)",
                color: ACCENT,
                letterSpacing: "0.04em",
                padding: "14px 24px",
                border: `1px solid ${ACCENT}`,
                transition: "background 0.25s ease, color 0.25s ease",
                marginBottom: "48px",
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
              lucaszawadneak@gmail.com
            </a>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#333",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = TEXT)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#333")
                  }
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </PageLayout>
  );
}
