import Head from 'next/head'
import Footer from '../../components/Footer'
import PageLayout from '../../components/PageLayout'

export default function Contact() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Contact me | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center max-w-6xl w-full flex-1 p-5 lg:px-20 text-center mt-5">
          <div className="w-full text-left">
            <h1 className="font-bold text-4xl">Fale comigo!</h1>
            <p className="mt-3">Você pode tentar entrar em contato pelo meu email</p>
            <p>ou por qualquer uma das redes sociais abaixo</p>
            <a href="https://www.figma.com/@tinjo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm italic mt-5 cursor-pointer">
              Design do portfolio inspirado por @tinjo
            </a>
            <span className="p-3 bg-red-400 mt-5 mb-5  flex w-64 items-center rounded justify-center">
              <p className="font-bold text-white">lucaszawadneak@gmail.com</p>
            </span>
          </div>
        </main>

        <Footer absolute />

      </div>
    </PageLayout>
  )
}
