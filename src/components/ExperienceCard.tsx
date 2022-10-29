import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'
import { Experience } from '../../typings'

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
    console.log(
        'experience',
        experience.technologies.map((tech) => console.log(tech.image)),
    )
    return (
        <article className="snap-center bg-[#292929] p-10 flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] cursor-pointer transition-opacity duration-200 opacity-40 hover:opacity-100">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
                src={urlFor(experience?.companyImage).url()}
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-2xl mt-1">{experience.company}</p>
                <div className="flex my-2 space-x-2">
                    {experience.technologies.map(
                        (tech) =>
                            tech.image && (
                                <img key={tech._id} className="w-10 h-10 rounded-full" src={urlFor(tech.image).url()} />
                            ),
                    )}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} -{' '}
                    {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className="list-disc list-inside space-y-4 ml-5 text-lg h-96 w-4/5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#048a81]">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard


































