import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";

import { motion } from "framer-motion";
import AnimatedLetters from "./AnimatedLetters";
import { navVariants, slideIn } from "../../utils/motion";
import SectionWrapper from "../HOC/SectionWrapper";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {

  const [isSent, setIsSent] = useState(false);
  const [incomplete, setIncomplete] = useState(false);
  const [error, setError] = useState(false)
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
    
  const [loading, setLoading] = useState(false);
    
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    
    setForm({
      ...form,
      [name]: value,
    });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if(form.name && form.email && form.message !== ""){
      emailjs.send(
        'service_1romc23',
        'template_rdreqqo',
        {
          from_name: form.name,
          to_name: 'Maxime',
          from_email: form.email,
          to_email:'lgmaximemlg@gmail.com',
          message:form.message,
        },
        'U2te9qEnp1dTOPjFz'
        )
        .then(
          () => {
          setLoading(false);
          setIsSent(true);
          setTimeout(
            () => {
              setIsSent(false);
            }, 4000
          ) 
  
          setForm({
            name:'',
            email:'',
            message:'',
          })
        }, (error) => {
          console.log(error);
          setError(true);
          setLoading(false);
          setTimeout(
            () => {
              setError(false);
            }, 4000
          ) 
        }
    )
    } else {
        setIncomplete(true);
        setTimeout(
          () => {
            setLoading(false);
          },1000
        )
      }
      setTimeout(
        () => {
          setIncomplete(false);
        }, 4000
      ) 
  }
return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        <AnimatedLetters 
                        strArray={['C', 'o', 'n','t', 'a','c','t','.']}
                        idx={1}
                    />
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className="relative">
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          { isSent && (
            <motion.p
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="absolute bottom-10 left-0 -translate-x-1/2 translate-y-1/2 bg-success py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary"
          >
          Email successfully sent
          </motion.p>
          )}
          { error && (
            <motion.p
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="absolute bottom-10 left-0 -translate-x-1/2 translate-y-1/2 bg-alert py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary"
          >
          An error Occurred
          </motion.p>
          )}
          { incomplete && (
            <motion.p
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="absolute bottom-10 left-0 -translate-x-1/2 translate-y-1/2 bg-alert py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary"
          >
          Please fill out all required fields
          </motion.p>
          )}
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      <div className="hidden md:block absolute top-4 right-2 z-20 width-[267px] p-[20px] text-white bg-primary rounded-lg leading-8">
            Le Goff Maxime,
            <br />
            France,
            <br />
            4 chemin des guinguettes, 92350 <br />
            Le Plessis-Robinson
            <br />
            <span
              className="mt-2.5 purple-text-gradient"
            >
            mlgwebdev@gmail.com</span>
      </div>
        <MapContainer 
          center={[48.780991, 2.260808]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[48.780991, 2.260808]}
          >
          </Marker>
        </MapContainer>
      </motion.div>
    </div>

)
}

export default SectionWrapper(Contact, 'contact');