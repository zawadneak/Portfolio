import Head from "next/head";
import { useTranslation } from "next-i18next";
import Footer from "../../components/Footer";
import PageLayout from "../../components/PageLayout";
import Project from "../../components/Project";
import useProjects from "../../hooks/useProjects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const BASE_URL = "https://lucaszawadneak.com";

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const BORDER = "#1D1D1D";

export default function Projects({ locale = "en" }) {
  const { t } = useTranslation();
  const projects = useProjects();

  const canonicalPath = locale === "en" ? "/projects" : `/${locale}/projects`;
  const title = `${t("projects.label")} | Lucas Zawadneak`;
  const description =
    "Open-source and side projects built by Lucas Zawadneak — game trackers, video-call platforms, and more.";

  return (
    <PageLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Lucas Zawadneak" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/projects`} />
        <link rel="alternate" hrefLang="pt" href={`${BASE_URL}/pt/projects`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/projects`} />

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
              marginBottom: "8px",
              borderTop: `1px solid ${BORDER}`,
              paddingTop: "48px",
            }}
          >
            {t("projects.label")}
          </p>

          {projects.map((item, index) => (
            <Project {...item} index={index} key={item.title} />
          ))}

          {/* Closing border */}
          <div style={{ borderTop: `1px solid ${BORDER}` }} />
        </main>

        <Footer />
      </div>
    </PageLayout>
  );
}
