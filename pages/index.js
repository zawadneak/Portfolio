import { useTranslation } from "next-i18next";
import { Page, Intro, Projects, Experience, ContactBlock } from "../components/Portfolio";
export { getStaticProps } from "../lib/pageProps";
export default function Home() {
  const { t } = useTranslation();
  return <Page description={t("redesign.meta")}><Intro /><Projects /><Experience /><ContactBlock /></Page>;
}
