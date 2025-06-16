import Link from "next/link";
import { useRouter } from "next/router";
import { IoHomeOutline, IoHomeSharp, IoLeafOutline } from "react-icons/io5";

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
    <nav className="flex flex-row items-center justify-between w-full p-8  md:p-10 md:px-40">
      <Link href="/">
        <IoHomeSharp size={24} />
      </Link>
      <div className="flex  items-center justify-center lg:justify-end">
        <Link legacyBehavior href="/education">
          <a className="mr-4 cursor-pointer font-semibold">
            {t("education.label")}
          </a>
        </Link>
        <Link legacyBehavior href="/projects">
          <a className="mr-4 cursor-pointer font-semibold">
            {t("projects.label")}
          </a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className=" cursor-pointer flex font-semibold">{t("contact")}</a>
        </Link>
        <button onClick={handleChangeLanguage} className="ml-4 min-w-[20px]">
          {language === "pt" ? (
            <Image src={UsaFlag} width={25} height={25} />
          ) : (
            <Image src={BrazilFlag} width={25} height={25} />
          )}
        </button>
      </div>
    </nav>
  );
}
