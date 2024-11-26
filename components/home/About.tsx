import Link from 'next/link'
import { motion } from 'framer-motion'

const data = [
    { count: 23, label: "Project Done" },
    { count: 4, label: "Years Of Experience" },
    { count: 12, label: "Clients Servered" },
  ];
const About = () => {
    
  return (
    <section id="about" className=" flex flex-col gap-12 py-16 px-6 max-w-7xl mx-auto text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-accent mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-primary dark:text-gray-200 font-figtree lg:text-xl md:text-md mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
      I'm Ebrar Tamer, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.
       </motion.p>
       <div className='flex flex-wrap justify-center items-center px-12'>
       {data.map((item, index) => (
      <motion.div 
        key={index} 
        className="flex flex-col items-center justify-center m-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <span className="text-4xl font-bold text-accent mb-2">{item.count}</span>
        <span className="text-lg text-gray-600 dark:text-gray-200">{item.label}</span>
      </motion.div>
    ))}
       </div>
    </section>
  );
};

export default About;
