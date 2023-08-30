import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import PageLayout from "../../components/PageLayout";

import UfprLogo from "../../public/ufpr.jpg";
import RocketseatLogo from "../../public/rocketseat.jpeg";
import UdemyLogo from "../../public/udemy.png";
import { motion } from "framer-motion";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default function Education() {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Education | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center  max-w-6xl">
          <motion.a
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ type: "tween", delay: 0 }}
            className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer mt-5
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
              <h3 className="font-bold text-xl">
                Universidade Federal do Paraná
              </h3>
              <p className="text-sm">
                Engenharia de Bioprocessos e Biotecnologia (2019)
              </p>
              <p className="text-sm mb-3">
                Tecnologia em Análise e Desenvolvimento de Sistemas (2020 -
                2023)
              </p>
              <label className="bg-blue-900 rounded p-1 px-3 text-white font-bold text-sm w-auto">
                2019 - 2023
              </label>
            </div>
          </motion.a>
          <motion.a
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ type: "tween", delay: 0.3 }}
            className="flex  flex-col lg:flex-row items-center bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer
          lg:divide-x lg:divide-gray-300"
            href="https://rocketseat.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={RocketseatLogo}
              alt="ufpr"
              width={120}
              height={120}
              className="object-cover rounded"
            />
            <div className="flex flex-col  items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl">Rocketseat GoStack</h3>
              <p className="text-sm">ReactJS | React Native | NodeJS</p>
              <p className="text-sm mb-3">Bootcamp</p>
              <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-12">
                2018
              </label>
            </div>
          </motion.a>
          <motion.a
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ type: "tween", delay: 0.6 }}
            className="flex  flex-col lg:flex-row items-center bg-gray-100 p-5 rounded shadow-md w-full cursor-pointer
            lg:divide-x lg:divide-gray-300"
            href="https://www.udemy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={UdemyLogo}
              alt="ufpr"
              width={120}
              height={120}
              className="object-cover rounded"
            />
            <div className="flex flex-col  items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl">Udemy</h3>
              <p className="text-sm">Angular | Android | Vue | Flutter</p>
            </div>
          </motion.a>
        </main>
        <Footer />
      </div>
    </PageLayout>
  );
}
