import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
export default function Navigator() {
  const router = useRouter();
  const { t } = useTranslation();
  const links = [["/projects", t("projects.label")], ["/work", t("redesign.work")], ["/education", t("education.label")], ["/contact", t("contact")]];
  const nextLocale = router.locale === "pt" ? "en" : "pt";
  return <header className="site-header shell">
    <Link className="wordmark" href="/" aria-label={t("redesign.home")}>Lucas Zawadneak<span className="wordmark-dot" aria-hidden="true">.</span></Link>
    <nav aria-label={t("redesign.navigation")}>{links.map(([href, label]) => <Link key={href} href={href} aria-current={router.pathname === href ? "page" : undefined}>{label}</Link>)}
      <Link className="language-link" href={router.asPath} locale={nextLocale} hrefLang={nextLocale} lang={nextLocale} aria-label={nextLocale === "pt" ? "Mudar para português" : "Switch to English"}>{nextLocale === "pt" ? "PT" : "EN"}</Link>
    </nav>
  </header>;
}
