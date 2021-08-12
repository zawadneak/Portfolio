import Head from 'next/head'
import Image from 'next/image'
import ProfilePicture from '../public/profile.jpg'
import UfprLogo from '../public/ufpr.jpg'
import RocketseatLogo from '../public/rocketseat.jpeg'
import UdemyLogo from '../public/udemy.png'
import { IoBookOutline, IoLogoAngular, IoLogoFigma, IoLogoJavascript, IoLogoNodejs, IoLogoReact } from 'react-icons/io5'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'

const description = "I’m 20 years old and live in Curitiba, Brazil. My main goal as a developer is to build applications that can help people the best way possible. That's why I hope in the future to be a part of great projects!"

export default function Home() {
  return (
    <PageLayout>

      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center max-w-6xl w-full flex-1 p-5 lg:px-20 text-center">
          <div className="flex flex-col lg:flex-row mt-32 w-full items-center">
            <div className="flex flex-col lg:items-start w-full  lg:p-0">
              <h1 className="font-bold text-5xl">Hello there! I'm Lucas.</h1>
              <h1 className="font-bold text-5xl mt-2">Fullstack Developer</h1>
              <p className="mt-8 text-left text-justify lg:mr-20">{description}</p>
              <button className="bg-red-400 p-3 shadow-lg
              rounded text-white font-bold mt-4 hover:opacity-70 transition duration-300 mb-10 lg:mb-0">
                Download Resume
              </button>
            </div>
            <Image src={ProfilePicture} alt="me"
              width={300} height={300}
              className="rounded-full object-cover shadow-lg bg-gray-300" />
          </div>

          {/* <div className="w-full mt-32">
          <span className="flex items-center mb-1">
          <IoSettingsOutline size={25} />
          <h3 className="text-lg text-left ml-1">Technologies</h3>
          </span>
        </div> */}
          <div className="flex flex-wrap w-full items-center justify-evenly mt-32">
            <a className="cursor-pointer hover:opacity-50 transition duration-300" target="_blank" rel="noopener noreferrer"
              href="https://reactjs.org/" >
              <IoLogoReact size={120} color="darkblue" />
            </a>
            <a className="cursor-pointer hover:opacity-50 transition duration-300" target="_blank" rel="noopener noreferrer"
              href="https://nodejs.org">
              <IoLogoNodejs size={120} color="green" />
            </a>
            <a className="cursor-pointer hover:opacity-50 transition duration-300" target="_blank" rel="noopener noreferrer"
              href="https://angular.io/">
              <IoLogoAngular size={120} color="darkred" />
            </a>
            <a className="cursor-pointer hover:opacity-50 transition duration-300" target="_blank" rel="noopener noreferrer"
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <IoLogoJavascript size={120} color="gold" />
            </a>
            <a className="cursor-pointer hover:opacity-50 transition duration-300" target="_blank" rel="noopener noreferrer"
              href="https://figma.com">
              <IoLogoFigma size={120} color="blue" />
            </a>
          </div>

          <a className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer mt-32
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
