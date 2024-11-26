import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-12 dark:bg-primary/90 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Tagline */}
        <div className="flex flex-rows gap-8">
        <div className="flex-shrink-0 flex items-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="dark:invert"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-medium dark:text-gray-200 text-gray-800">Your ideas matter</h2>
              <p className="text-2xl dark:text-gray-200 text-gray-700">Let&apos;s bring them to life!</p>
            </div>
            <Link
              href="/contact"
              className="mt-4 px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

          {/* Navigation and Social */}
          <div className="flex flex-col  items-center gap-6">
            {/* Navigation */}
            <nav>
              <ul className="flex gap-8 justify-center">
                <li>
                  <Link href="/about" className="dark:text-gray-200 text-gray-800 hover:text-gray-600">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="dark:text-gray-200 text-gray-800 hover:text-gray-600">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="dark:text-gray-200 text-gray-800 hover:text-gray-600">
                    Skills
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Media */}
            <div className="flex flex-col items-center gap-4">
              <p className="dark:text-gray-200 text-gray-800">Follow me on social media:</p>
              <div className="flex gap-6 justify-center">
                <Link href="#" className="dark:text-gray-200 text-gray-800 hover:text-gray-600">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="dark:text-gray-200  text-gray-800 hover:text-gray-600">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="dark:text-gray-200 text-gray-800 hover:text-gray-600">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

