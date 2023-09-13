import { motion } from "framer-motion"
import { fadeIn } from "../../utils/motion";

const AnimatedLetters = ({ strArray, idx }) => {
    const handleHover = (e) => {
        e.target.className += " animate purple-text-gradient"
        setTimeout(() => {
            e.target.className = " text-animate"
        }, 1000)
    }
    return(
        <span>
            {
                strArray.map(
                    (char, i)  => (
                        <motion.span
                            key={char + i}
                            className={`${char === ' ' ? "px-2" : "px-0"} text-animate`}
                            initial="hidden"
                            whileInView="show"
                            variants={fadeIn('left','spring',0.08*(idx + i) , 0.6)}
                            viewport={{ once:true, amount: 0.25}}
                            onMouseEnter={handleHover}
                        >
                            {char}
                        </motion.span>
                )
                )
            }
        </span>
    )
}

export default AnimatedLetters;