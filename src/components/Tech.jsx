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