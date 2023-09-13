import { motion } from "framer-motion";
import { technologies } from "../constants";
import SectionWrapper from '../HOC/SectionWrapper'
import { fadeIn } from "../../utils/motion";
import { useState } from "react";


const TechnologieCard = ({ technologie, index }) => {
    
    const [visible, setVisible] = useState(false);
    
    return (
    <motion.div 
        className="tile w-28 h-28"
        initial="hidden"
        whileInView="show"
        variants={fadeIn('up','spring', 0.1* index , 1)}
        viewport={{ once:true, amount:0.25}}
        onMouseOver={() => {
            setVisible(true);
        }}
        onMouseLeave={() => {
            setVisible(false);
        }}
    >
        <img
            src={technologie.icon}
            alt={technologie.name}
            className="tech-img"
            draggable={false}
        />
        <figcaption className={`${visible ? "absolute bottom-0 z-10" : "hidden"}`}>{technologie.name}</figcaption>
        {/* <svg viewBox="0 0 512 512" width="50%" title="image">
            <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" />
        </svg> */}
    </motion.div>
    )
}

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-20"
        >
            {
                technologies.map(
                    (technologie, index) => (
                        <TechnologieCard 
                            key={index}
                            technologie={technologie}
                            index={index}
                        />
                    )
                )
            }
        </div>
 )
}

export default SectionWrapper(Tech, "Tech") ;