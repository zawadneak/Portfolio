import { t } from "i18next";
import Head from "next/head";
import Footer from "../../components/Footer";
import PageLayout from "../../components/PageLayout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>{t("talk-to-me.label")} | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center max-w-6xl w-full flex-1 p-5 lg:px-20 text-center mt-5">
          <div className="w-full text-left">
            <h1 className="font-bold text-4xl">{t("talk-to-me.label")}</h1>
            <p className="mt-3">{t("try-my-email")}</p>
            <p>{t("other-social-media")}</p>

            <span className="p-3 bg-red-400 mt-5 mb-5  flex w-64 items-center rounded justify-center">
              <p className="font-bold text-white">lucaszawadneak@gmail.com</p>
            </span>
          </div>
        </main>

        <Footer absolute />
      </div>
    </PageLayout>
  );
}
