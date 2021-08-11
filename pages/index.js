import Head from 'next/head'
import Image from 'next/image'
import ProfilePicture from '../public/profile.jpg'
import { IoBookOutline, IoLogoAngular, IoLogoCss3, IoLogoDocker, IoLogoFigma, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoSettingsOutline, IoStarOutline } from 'react-icons/io5'

const description = "I’m 20 years old and live in Curitiba, Brazil. My main goal as a developer is to build applications that can help people the best way possible. That's why I hope in the future to be a part of great projects!"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Lucas Zawadneak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center max-w-6xl w-full flex-1 px-20 text-center">
        <div className="flex mt-32 w-full items-center">
          <div className="flex flex-col items-start w-2/3">
            <h1 className="font-bold text-4xl">Hello there! I'm Lucas.</h1>
            <h1 className="font-bold text-4xl mt-2">Fullstack Developer</h1>
            <p className="mt-8 text-left text-justify mr-20">{description}</p>
            <button className="bg-red-400 p-3 shadow-lg
              rounded text-white font-bold mt-4 hover:opacity-70 transition duration-300 ">
              Download Resume
            </button>
          </div>
          <Image src={ProfilePicture} alt="me"
            width={350} height={350}
            className="rounded-full object-cover shadow-lg" />
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

        <div className="w-full mt-32">
          <span className="flex items-center mb-1">
            <IoBookOutline size={25} />
            <h3 className="text-lg text-left ml-1">Education</h3>
          </span>
        </div>
        <div className="flex w-full bg-gray-100  p-10 rounded shadow-lg">
          <div className="flex flex-col items-start mr-72">
          </div>
        </div>
      </main>

    </div>
  )
}
