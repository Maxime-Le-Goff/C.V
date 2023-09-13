import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import SectionWrapper from "../HOC/SectionWrapper";
import AnimatedLetters from "./AnimatedLetters";

const ServiceCard = ({ title, icon, index}) => {
    return (
        <Tilt 
            className="xs:w-[250px] w-full"
             options={{
                max:45,
                scale:1,
                speed:450,
             }}
        >
            <motion.div
            variants={fadeIn('right','spring', 0.5* index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
            <div
                className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col "
            >
                <img 
                    src={icon}
                    alt={title}
                    className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>

            </motion.div>
        </Tilt>
    )
}

const About = () => {

    return(
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    <AnimatedLetters 
                        strArray={['O', 'v', 'e','r', 'v','i','e','w','.']}
                        idx={1}
                    />
                </h2>
            </motion.div>
            <motion.p
                variants={fadeIn('up','spring',0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Hello and welcome to my web developer portfolio! I'm passionate about crafting digital experiences that not only look great but also function seamlessly.
                <br />
                 With expertise in JavaScript, React, PHP, and Symfony, I have the skills to bring your web projects to life.

               Throughout my portfolio, you'll find examples of my work, showcasing my commitment to clean code, user-friendly interfaces, and innovative solutions.
                <br />
                I'm excited to share my journey as a web developer with you. Explore my projects, and feel free to reach out if you'd like to collaborate or have any questions.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {
                    services.map(
                        (service, index) => (
                            <ServiceCard 
                                key={service.title}
                                index={index}
                                {... service}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");