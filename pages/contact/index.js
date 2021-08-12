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

        <main className="flex flex-col items-center justify-center max-w-6xl w-full flex-1 p-5 lg:px-20 text-center mt-32 mb-32">
          <div className="w-full text-left">
            <h1 className="font-bold text-4xl">Contact me!</h1>
            <p className="mt-3">You can try to reach me by email (lucaszawadneak@gmail.com)</p>
            <p>or by any of my social media links below.</p>
            <a href="https://www.figma.com/@tinjo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm italic mt-5 cursor-pointer">
              Porfolio design inspired by @tinjo work!
            </a>
          </div>
        </main>

        <Footer absolute />

      </div>
    </PageLayout>
  )
}
