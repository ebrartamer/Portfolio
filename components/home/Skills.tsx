import { Code2, Database, Link, Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion } from 'framer-motion';

const Skills = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Design",
      description:
        "I craft user-centered designs that are visually appealing and functionally efficient, ensuring an exceptional user experience.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-accent" />,
      title: "Frontend",
      description:
        "Bringing designs to life with clean, responsive, and efficient code using modern web technologies.",
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Backend",
      description:
        "Building scalable, secure, and robust server-side solutions to power seamless user experiences.",
    },
    {
      icon: <Link className="w-8 h-8 text-accent" />,
      title: "Blockchain",
      description:
        "Exploring decentralized systems and creating innovative blockchain-based applications for a smarter future.",
    },
  ];

  return (
    <section id="skills" className="flex flex-col gap-12 py-16 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Skills</h2>
      <p className="text-primary dark:text-gray-200 font-figtree lg:text-xl md:text-md">
        Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.
      </p>
  
      {/* Skills Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="border border-gray-100 shadow-md hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-accent flex justify-center gap-4">
                  {service.icon}
                  <h3 className="text-xl font-volkorn font-bold italic text-accent mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
