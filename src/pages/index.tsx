import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'

const Home: NextPage = () => {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen snap snap-mandatory overflow-y-scroll 
        overflow-x-hidden z-0 scrollbar scroll-track-gray-400/20 scrollbar-thumb-[#048a81]">
            <Head>
                <title>Jeff Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <section id="hero" className="snap-center">
                <Hero />
            </section>

            {/* about */}
            <section id="about" className="snap-start">
                <About />
            </section>
            {/* Experience */}
            <section id="experience" className="snap-center">
                <Experience />
            </section>

            {/* skills */}
            <section id="skills" className="snap-start">
                <Skills />
            </section>

            {/* project */}
            <section id="projects" className="snap-start">
                <Projects />
            </section>

            {/* contact me */}
            <section id="contact">
                <Contact />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-10 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <ChevronDoubleUpIcon className="w-7 h-7 rounded-full cursor-pointer filter text-gray-300 hover:text-white" />
                    </div>
                </footer>
            </Link>
        </div>
    )
}

export default Home




















