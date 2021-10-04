import Head from 'next/head'
import Image from 'next/image'
import ProfilePicture from '../public/profile.jpg'
import UfprLogo from '../public/ufpr.jpg'
import TuntsLogo from '../public/tunts.png'
import { IoBookOutline, IoLogoAngular, IoLogoFigma, IoLogoJavascript, IoLogoNodejs, IoLogoReact } from 'react-icons/io5'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'

const description = "Tenho 20 anos e moro em Curitiba. Desenvolvo aplicações front, back e mobile em Javascript e Typescript (ocasionalmente Dart e Java). Programo desde os meus 16 e me apaixonei pelo desenvolvimento fullstack, onde posso criar coisas que amo e fazer a diferença! Meu principal objetivo como desenvolvedor é construir produtos que ajudem as pessoas o melhor possível. Por isso estou sempre disposto a fazer parte de grandes projetos!"

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
              <h1 className="font-bold text-5xl">Olá! Sou o Lucas.</h1>
              <h1 className="font-bold text-5xl mt-2">Desenvolvedor Fullstack</h1>
              <p className="mt-8 text-justify lg:mr-20">{description}</p>
              <a className="bg-red-400 p-3 shadow-lg cursor-pointer
              rounded text-white font-bold mt-4 hover:opacity-70 transition duration-300 mb-10 lg:mb-0"
                href="https://drive.google.com/file/d/17QNfZpxvPrBpDD5gKGB2ki-1rRnGjWdO/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Baixar currículo
              </a>
            </div>
            <Image src={ProfilePicture} alt="me"
              width={300} height={300}
              className="rounded-full object-cover shadow-lg bg-gray-300" />
          </div>


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
            href="https://tunts.com/"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={TuntsLogo} alt="tunts"
              width={120} height={120}
              objectFit="cover"
              className="rounded" />
            <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl">Estagiário de Desenvolvimento</h3>
              <p className="text-sm">Tunts</p>
              <p className="text-sm mb-3">Angular | Spring | Android | NodeJS | PostgreSQL</p>
              <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-14">2021 - </label>
            </div>
          </a>
          <a className="flex flex-col lg:flex-row items-center  bg-gray-100 p-5 rounded shadow-md w-full mb-4 cursor-pointer mt-2
          lg:divide-x lg:divide-gray-300"

            href="https://www.ufpr.br/portalufpr/"
            target="_blank" rel="noopener noreferrer"
          >
            <Image src={UfprLogo} alt="ufpr"
              width={120} height={120}
              objectFit="cover"
              className="rounded" />
            <div className="flex flex-col items-center lg:items-start mt-1 lg:mt-0 lg:ml-5 lg:pl-5">
              <h3 className="font-bold text-xl" >Desenvolvedor Backend & Mobile</h3>
              <p className="text-sm">Sistema Lojinha UFPR - Projeto de Extensão</p>
              <p className="text-sm mb-3">React Native | NodeJS | MongoDB</p>
              <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-14">2020</label>
            </div>
          </a>
        </main>
        <Footer />
      </div>
    </PageLayout>
  )
}
