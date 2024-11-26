import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
id='hero'
     className="flex flex-col md:flex-row items-center justify-between pt-32 px-6 max-w-7xl mx-auto gap-8">
      {/* Sol Kısım - Tanıtım */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="flex flex-col lg:text-5xl gap-4 text-4xl font-bold text-secondary">
          <span>Hi There, I'm</span>
          <span> <span className="text-accent">Ebrar Tamer</span></span>
        </h1>
        
        <p className="text-primary dark:text-gray-300 font-figtree lg:text-xl md:text-md space-y-12">
          Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.
        </p>

        <div className="flex gap-4">
          <Link 
            href="/iletisim" 
            className="bg-primary text-white px-4 py-2 rounded-lg hover:hover:bg-primary/90 transition lg:px-12 md:px-6 md:py-3 lg:text-xl md:text-md"
          >
            Hire Me
          </Link>
          <Link 
            href="/projeler" 
            className="border border-accent dark:border-accent text-accent dark:text-accent px-4 py-2 rounded-lg hover:bg-accent dark:hover:text-white hover:text-white transition lg:px-12 md:px-6 md:py-3 lg:text-xl md:text-md"
          >
            Portfolio
          </Link>
        </div>
      </motion.div>

      {/* Sağ Kısım - Profil Resmi */}
      <motion.div 
        className="flex-1 hidden md:flex items-center justify-center w-full h-full relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Arka plan katmanı */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          style={{zIndex: 0}}
        >
          <Image
            src="/assets/profile-layer2.svg"
            alt="Profil Arka Plan"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Profil resmi */}
        <div className="relative md:w-[390px] md:h-[390px] lg:w-[490px] lg:h-[490px] z-10 -mt-16">
          <Image
            src="/images/profile.png"
            alt="Profil Fotoğrafı"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
