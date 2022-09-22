import Link from "next/link";
import { useRouter } from "next/router";
import { IoHomeOutline } from "react-icons/io5";
import { SiLighthouse } from "react-icons/si";
import { GiUsaFlag } from "react-icons/gi";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

import UsaFlag from "../../public/usa.png";
import BrazilFlag from "../../public/brazil.png";
import Image from "next/image";

export default function Navigator() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");

  const router = useRouter();

  const handleChangeLanguage = () => {
    setLanguage((l) => (l === "en" ? "pt" : "en"));
    window.location.href = `/${language === "en" ? "pt" : "en"}`;
  };

  useEffect(() => {
    console.log(router.locale);
    setLanguage(router.locale);
  }, []);

  return (
    <nav className="flex flex-col items-center justify-center w-full pt-10">
      <div className="flex w-full max-w-6xl px-20 items-center justify-center lg:justify-end">
        <Link href="/">
          <motion.a
            className="mr-4"
            transition={{ ease: "anticipate", duration: 1 }}
            animate={{
              opacity: router.pathname !== "/" ? 1 : 0,
              display: router.pathname !== "/" ? "flex" : "hidden",
              cursor: router.pathname !== "/" ? "pointer" : "default",
            }}
          >
            <IoHomeOutline size={25} />
          </motion.a>
        </Link>
        <Link href="/education">
          <a className="mr-4 cursor-pointer font-semibold">{t("education")}</a>
        </Link>
        <Link href="/projects">
          <a className="mr-4 cursor-pointer font-semibold">
            {t("projects.label")}
          </a>
        </Link>
        <Link href="/contact">
          <a className=" cursor-pointer flex font-semibold">{t("contact")}</a>
        </Link>
        <span className="ml-4 opacity-50 flex font-semibold cursor-pointer">
          <SiLighthouse size={20} className="mr-1" />
        </span>
        <button onClick={handleChangeLanguage} className="ml-4 mt-2">
          {language === "en" ? (
            <Image src={UsaFlag} width={25} height={25} />
          ) : (
            <Image src={BrazilFlag} width={25} height={25} />
          )}
        </button>
      </div>
    </nav>
  );
}
