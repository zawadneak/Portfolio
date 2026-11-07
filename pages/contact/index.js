import { useTranslation } from "next-i18next";
import { Page, PageHeading } from "../../components/Portfolio";
export { getStaticProps } from "../../lib/pageProps";
const socials = [["GitHub","https://github.com/zawadneak"],["LinkedIn","https://www.linkedin.com/in/lucaszawadneak/"],["Stack Overflow","https://stackoverflow.com/users/12705405/lucas-zawadneak"],["Instagram","https://www.instagram.com/_cassilha"],["Twitter","https://twitter.com/_cassilha_"]];
export default function Contact() {
  const { t } = useTranslation();
  return <Page title={t("contact")} description={t("redesign.contactText")}><PageHeading title={t("redesign.contactHeading")}>{t("redesign.contactText")}</PageHeading><section className="contact-page"><a className="large-email text-link" href="mailto:lucaszawadneak@gmail.com">lucaszawadneak@gmail.com</a><div className="social-links">{socials.map(([label,href]) => <a className="text-link" key={label} href={href}>{label}</a>)}</div></section></Page>;
}
