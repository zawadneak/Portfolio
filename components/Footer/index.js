import { useTranslation } from "next-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return <footer className="site-footer shell"><p>© {new Date().getFullYear()} Lucas Zawadneak</p><div><a href="https://github.com/zawadneak">GitHub</a><a href="https://www.linkedin.com/in/lucaszawadneak/">LinkedIn</a><a href="mailto:lucaszawadneak@gmail.com">{t("redesign.email")}</a></div></footer>;
}
