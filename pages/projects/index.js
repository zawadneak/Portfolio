import Head from 'next/head'
import Footer from '../../components/Footer'
import PageLayout from '../../components/PageLayout'
import Project from '../../components/Project'

import projects from './projects.json';

export default function Projects() {

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Projects | Lucas Zawadneak</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-5 lg:px-20 text-center  max-w-6xl w-full">
          {projects.map((item, index) => (
            <Project {...item} index={index} />
          ))}
        </main>
        <Footer />
      </div>
    </PageLayout>
  )
}
