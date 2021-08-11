import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoHomeOutline } from 'react-icons/io5';

export default function Navigator() {

  const router = useRouter();

  return (
    <nav className="flex flex-col items-end justify-center w-full pr-20 pt-10">
      <div className="m-2 flex">
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
          <a className="mr-4 cursor-pointer flex font-semibold">
            Contact
          </a>
        </Link>
        {router.pathname !== '/' ? (
          <Link href="/">
            <a className="animate-pulse transition duration-300">
              <IoHomeOutline size={25} />
            </a>
          </Link>
        ) : (
          <a className="opacity-0 transition duration-300">
            <IoHomeOutline size={25} />
          </a>
        )}
      </div>
    </nav>
  )
}
