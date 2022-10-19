import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5]

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#048a81]">
                {projects.map((project, id) => (
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center p-20 md:p-44 h-screen">
                        <motion.img
                            initial={{
                                opacity: 0,
                                y: -300,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            viewport={{ once: true }}
                            src="https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span>
                                    Case study {id + 1} of {projects.length}:{' '}
                                </span>
                                UPS clone
                            </h4>
                            <p>description</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#048a81]/10 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    )
}

export default Projects

