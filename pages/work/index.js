import { useTranslation } from "next-i18next";
import { Page, PageHeading, Experience, ContactBlock } from "../../components/Portfolio";
export { getStaticProps } from "../../lib/pageProps";
export default function Work() {
  const { t } = useTranslation();
  return <Page title={t("redesign.experience")} description={t("redesign.workIntro")}><PageHeading title={t("redesign.experience")}>{t("redesign.workIntro")}</PageHeading><Experience all /><ContactBlock /></Page>;
}
