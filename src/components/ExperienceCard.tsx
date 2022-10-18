import { motion } from 'framer-motion'

const ExperienceCard = () => {
    return (
        <article className="snap-center bg-[#292929] p-10 flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] cursor-pointer transition-opacity duration-200 opacity-40 hover:opacity-100">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://images.unsplash.com/photo-1603208672506-9522a92ef451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Frontend Developer</h4>
                <p className="font-bold text-2xl mt-1">Kingdomverse</p>
                <div className="flex my-2 space-x-2">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                    />
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
                    />
                </div>
                <p className="uppercase py-5 text-gray-300">Started word ... Ended...</p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard

