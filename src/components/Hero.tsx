import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

const Hero = () => {
    const [text, count] = useTypewriter({
        words: ['Hi, The Name is Jeff Lam', 'Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://media.istockphoto.com/photos/building-in-shape-of-smiling-emoji-blinking-with-tongue-out-in-the-picture-id1313673729?k=20&m=1313673729&s=612x612&w=0&h=z7UPgjyUfaUMMhy4aCNF7_Doci3NC46iPfn97uFhoEY="
                alt=""
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="#048a81" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">ABOUT</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">EXPERIENCE</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">SKILLS</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">PROJECTS</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero

