import { t } from "i18next";
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

export default function Projects() {
  const { t } = useTranslation();

  const projects = useProjects();

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>{t("projects.label")} | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-5 lg:px-20 text-center  max-w-6xl w-full">
          {projects.map((item, index) => (
            <Project {...item} index={index} key={item.title} />
          ))}
        </main>
        <Footer />
      </div>
    </PageLayout>
  );
}
