import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoHomeOutline } from 'react-icons/io5';

export default function Navigator() {

  const router = useRouter();

  return (
    <nav className="flex flex-col items-center justify-center w-full pt-10">
      <div className="flex w-full max-w-6xl px-20 items-center justify-end">
        {router.pathname !== '/' ? (
          <Link href="/">
            <a className="animate-pulse transition duration-300 mr-4">
              <IoHomeOutline size={25} />
            </a>
          </Link>
        ) : (null)}
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
