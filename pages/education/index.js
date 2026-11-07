import { useTranslation } from "next-i18next";
import { Page, PageHeading, ContactBlock } from "../../components/Portfolio";
export { getStaticProps } from "../../lib/pageProps";
export default function Education() {
  const { t } = useTranslation();
  const entries = [{institution:"Universidade Tecnológica Federal do Paraná",degree:"postgraduate",period:"2024 – 2025",href:"https://www.utfpr.edu.br/"},{institution:"Universidade Federal do Paraná",degree:"university",period:"2020 – 2023",href:"https://www.ufpr.br/portalufpr/"}];
  return <Page title={t("education.label")} description={t("redesign.educationIntro")}><PageHeading title={t("education.label")}>{t("redesign.educationIntro")}</PageHeading><section className="education-list">{entries.map(entry => <article className="education-entry" key={entry.degree}><p className="job-period">{entry.period}</p><div><h2>{t("education." + entry.degree + ".description")}</h2><a className="text-link" href={entry.href}>{entry.institution}</a></div></article>)}</section><ContactBlock /></Page>;
}
