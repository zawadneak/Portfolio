import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Navigator from "../components/Navigator";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigator />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
