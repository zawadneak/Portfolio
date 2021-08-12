import Head from 'next/head'
import Footer from '../../components/Footer'
import PageLayout from '../../components/PageLayout'

export default function Work() {
  return (
    <PageLayout>

      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Work | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <strong>work</strong>
        </main>
        <Footer />
      </div>
    </PageLayout>
  )
}
