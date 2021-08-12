import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoHomeOutline } from 'react-icons/io5';
import { motion } from "framer-motion"


export default function Navigator() {

  const router = useRouter();

  return (
    <nav className="flex flex-col items-center justify-center w-full pt-10">
      <div className="flex w-full max-w-6xl px-20 items-center justify-center lg:justify-end">
        <Link href="/">
          <motion.a className="mr-4" animate={{
            opacity: router.pathname !== '/' ? 1 : 0,
            display: router.pathname !== '/' ? 'flex' : 'hidden',
            cursor: router.pathname !== '/' ? 'pointer' : 'default'
          }}>
            <IoHomeOutline size={25} />
          </motion.a>
        </Link>
        <Link href="/work">
          <a className="mr-4 cursor-pointer font-semibold">
            Work
          </a>
        </Link>
        <Link href="/projects">
          <a className="mr-4 cursor-pointer font-semibold">
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a className=" cursor-pointer flex font-semibold">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  )
}
