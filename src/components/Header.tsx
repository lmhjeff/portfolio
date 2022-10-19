import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="sticky top-0 p-5 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}>
                <SocialIcon
                    url="https://linkedin.com/in/lmhjeff"
                    fgColor="gray"
                    bgColor="transparent"
                    target="_blank"
                    className="cursor-pointer"
                />
            </motion.div>
            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer">
                    <SocialIcon
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                        href="mailto: lmh.jeff@gmail.com"
                        className="cursor-pointer"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header




