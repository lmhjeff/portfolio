import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
    return (
        <motion.div className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over sa skill for currency profieciency
            </h3>

            <div className="grid grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}

export default Skills

