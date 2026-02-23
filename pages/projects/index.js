import Head from "next/head";
import { useTranslation } from "next-i18next";
import Footer from "../../components/Footer";
import PageLayout from "../../components/PageLayout";
import Project from "../../components/Project";
import useProjects from "../../hooks/useProjects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const BORDER = "#1D1D1D";

export default function Projects() {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <PageLayout>
      <Head>
        <title>{`${t("projects.label")} | Lucas Zawadneak`}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
