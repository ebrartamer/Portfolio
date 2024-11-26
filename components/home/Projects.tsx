import {ArrowUpRight} from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "SelcukChain Website",
    description: "Full-stack",
    link: "https://selcukchain.com",
    image: "/images/selcukchain.png",
  },
  {
    title: "TugTek Webite",
    description: "Full-stack",
    link: "https://tugtek.com",
    image: "/images/tugtek.png",
  },
  {
    title: "Blog Website",
    description: "UI/UX",
    link: "https://proje3.com",
    image: "/images/post.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-12 py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-6">Projects</h2>
      <p className="text-primary font-figtree lg:text-xl text-center dark:text-gray-200 md:text-md space-y-12">Here ideas become code. Each project tells a story where creativity and technology meet. Explore the projects I've realized and discover what I've achieved.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="shadow-md rounded-lg p-6 mt-12 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={`Proje ${index + 1} Resmi`} className="mb-4 w-full rounded-lg" />
            <div className="flex items-center justify-between ">
              <h3 className="text-xl font-semibold dark:text-gray-200 text-primary mb-2">{project.title}</h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary dark:text-gray-100  px-4 py-2"
              >
                <ArrowUpRight />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-100  mb-4">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
