import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import AnimatedLetters from "./AnimatedLetters";
const helloArray = ['H','i',','];
const imArray = ['I','\u2019','m',' ']
const nameArray = ['M','a','x','i', 'm', 'e'];
const frenchArray = ['A',' ','F','r', 'e', 'n','c','h']
const jobArray = ['W', 'e','b',' ','D','e','v','e','l','o','p','e','r'];

const Hero = () => {
    
    return (
        <motion.div 
            className="w-full h-screen flex items-center relative px-10 lg:px-20 xl:px-60 "
            initial="hidden"
            whileInView="show"
            variants={fadeIn('right', 'spring', 1, 1)}
            viewport={{ once:true, amount: 0.25}}
            >
                <div className="w-full z-10 xl:w-3/4">
                    <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    <AnimatedLetters 
                        strArray={helloArray}
                        idx={7}
                    />
                    <br />
                    <AnimatedLetters 
                        strArray={imArray}
                        idx={10}
                    />
                    <AnimatedLetters
                        strArray={nameArray}
                        idx={14}
                    />
                    <br />
                    <AnimatedLetters
                        strArray={frenchArray}
                        idx={20}
                    />
                    <br />
                    <AnimatedLetters
                        strArray={jobArray}
                        idx={28}
                    />
                    </h1>
                    <h2 className="mb-5 text-secondary py-5 tracking-[0.2em]">Fullstack Developer / Javascript / PHP</h2>
                    <button className="custom-btn btn-3">
                        <a href="#contact">Contact Me</a>
                    </button>
                    
                </div>
                <div className="box hidden lg:w-[500px] lg:block"></div>
        </motion.div>
    )
}
export default Hero;