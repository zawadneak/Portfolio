import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import PageLayout from '../../components/PageLayout'

import UfprLogo from '../../public/ufpr.jpg'
import RocketseatLogo from '../../public/rocketseat.jpeg'
import UdemyLogo from '../../public/udemy.png'

export default function Education() {
  return (
    <PageLayout>

      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Education | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center  max-w-6xl w-full">
          <a className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer mt-10
          lg:divide-x lg:divide-gray-300"
            href="https://www.ufpr.br/portalufpr/"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={UfprLogo} alt="ufpr"
              width={120} height={120}
              objectFit="cover"
              className="rounded" />
            <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl" >Universidade Federal do Paraná</h3>
              <p className="text-sm">Engenharia de Bioprocessos e Biotecnologia (2019)</p>
              <p className="text-sm mb-3">Tecnologia em Análise e Desenvolvimento de Sistemas (2020 - )</p>
              <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-14">2019 - </label>
            </div>
          </a>
          <a className="flex  flex-col lg:flex-row items-center bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer
          lg:divide-x lg:divide-gray-300"
            href="https://rocketseat.com.br/"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={RocketseatLogo} alt="ufpr"
              width={120} height={120}
              className="object-cover rounded" />
            <div className="flex flex-col  items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl" >Rocketseat GoStack</h3>
              <p className="text-sm">ReactJS | React Native | NodeJS</p>
              <p className="text-sm mb-3">Bootcamp</p>
              <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-12">2018</label>
            </div>
          </a>
          <a className="flex  flex-col lg:flex-row items-center bg-gray-100 p-5 rounded shadow-md w-full cursor-pointer
          lg:divide-x lg:divide-gray-300"
            href="https://www.udemy.com/"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={UdemyLogo} alt="ufpr"
              width={120} height={120}
              className="object-cover rounded" />
            <div className="flex flex-col  items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl" >Udemy</h3>
              <p className="text-sm">Angular | Android | Vue | Flutter</p>
              <p className="text-sm mb-3">Multiple courses</p>
              <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-24">2018 - 2021</label>
            </div>
          </a>
        </main>
        <Footer />
      </div>
    </PageLayout>
  )
}
