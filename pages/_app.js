import "tailwindcss/tailwind.css";
import Navigator from "../components/Navigator";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigator />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default appWithTranslation(MyApp);
