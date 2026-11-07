import { useTranslation } from "next-i18next";
import { Page, PageHeading, Projects, ContactBlock } from "../../components/Portfolio";
export { getStaticProps } from "../../lib/pageProps";
export default function ProjectsPage() {
  const { t } = useTranslation();
  return <Page title={t("projects.label")} description={t("redesign.projectsIntro")}><PageHeading title={t("projects.label")}>{t("redesign.projectsIntro")}</PageHeading><Projects all /><ContactBlock /></Page>;
}
