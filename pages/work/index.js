import React from "react";

import Image from "next/image";

import UfprLogo from "../../public/ufpr.jpg";
import TuntsLogo from "../../public/tunts.png";
import RD2Logo from "../../public/deskmy.png";
import PierLogo from "../../public/pier.webp";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Work() {
  const { t } = useTranslation();

  return (
    <>
      <a
        className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer mt-32
        lg:divide-x lg:divide-gray-300"
        href="https://pier.digital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={PierLogo}
          alt="pier"
          width={120}
          height={120}
          objectFit="cover"
          className="rounded"
        />
        <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
          <h3 className="font-bold text-xl">Software Engineer III</h3>
          <p className="text-sm">Pier (insurtech)</p>
          <p className="text-sm">ReactJS | React Native | Ruby on Rails</p>
          <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-auto px-3 mt-3">
            2025 -
          </label>
        </div>
      </a>
      <a
        className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer
        lg:divide-x lg:divide-gray-300"
        href="https://pier.digital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={PierLogo}
          alt="pier"
          width={120}
          height={120}
          objectFit="cover"
          className="rounded"
        />
        <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
          <h3 className="font-bold text-xl">Software Engineer II</h3>
          <p className="text-sm">Pier (insurtech)</p>
          <p className="text-sm">ReactJS | React Native | Ruby on Rails</p>
          <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-auto px-3 mt-3">
            2024 - 2025
          </label>
        </div>
      </a>
      <a
        className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer 
        lg:divide-x lg:divide-gray-300"
        href="https://deskmy.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={RD2Logo}
          alt="rd2"
          width={120}
          height={120}
          objectFit="cover"
          className="rounded"
        />
        <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
          <h3 className="font-bold text-xl">{t("fullstack-developer")}</h3>
          <p className="text-sm">deskmy (virtual office platform)</p>
          <p className="text-sm mb-3">
            ReactJS | Django | NodeJS | WebRTC | RabbitMQ
          </p>
          <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-auto px-3">
            2021 - 2024
          </label>
        </div>
      </a>
      <a
        className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer
          lg:divide-x lg:divide-gray-300"
        href="https://tunts.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={TuntsLogo}
          alt="tunts"
          width={120}
          height={120}
          objectFit="cover"
          className="rounded"
        />
        <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
          <h3 className="font-bold text-xl">{t("development-intern")}</h3>
          <p className="text-sm">Tunts Rocks (software house)</p>
          <p className="text-sm mb-3">
            Angular | Spring | Android | NodeJS | PostgreSQL
          </p>
          <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-14">
            2021
          </label>
        </div>
      </a>
      <a
        className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer
          lg:divide-x lg:divide-gray-300"
        href="https://www.ufpr.br/portalufpr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={UfprLogo}
          alt="ufpr"
          width={120}
          height={120}
          objectFit="cover"
          className="rounded"
        />
        <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
          <h3 className="font-bold text-xl">{t("backend-developer")}</h3>
          <p className="text-sm">UFPR - {t("projects.ufpr-extension")}</p>
          <p className="text-sm mb-3">React Native | NodeJS | MongoDB</p>
          <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-14">
            2020
          </label>
        </div>
      </a>
    </>
  );
}
