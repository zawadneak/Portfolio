import "../styles/globals.css";
import { useRouter } from "next/router";
import Navigator from "../components/Navigator";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return <><a className="skip-link" href="#main">{locale === "pt" ? "Pular para o conteúdo" : "Skip to content"}</a><Navigator /><Component {...pageProps} /><Analytics /></>;
}
export default appWithTranslation(MyApp);
