import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
    experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
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
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 
            justify-evenly mex-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scroll-track-gray-400/20 scrollbar-thumb-[#048a81]">
                {experiences.map((experience, id) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    )
}

export default WorkExperience






