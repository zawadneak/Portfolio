import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

export default function Footer() {
  return (

    <footer className="flex flex-col items-center justify-center w-full absolute bottom-0 pb-10">
      <div className="m-2 flex">
        <a className="mr-4 cursor-pointer" href="https://twitter.com/lucascassilha">
          <IoLogoTwitter size={25} />
        </a>
        <a className="mr-4 cursor-pointer" href="https://www.linkedin.com/">
          <IoLogoLinkedin size={25} />
        </a>
        <a className="cursor-pointer" href="https://www.instagram.com/_cassilha" >
          <IoLogoInstagram size={25} />
        </a>
      </div>
      <p className="text-sm">Lucas Cassilha Zawadneak - 2021</p>
    </footer>
  )
}
