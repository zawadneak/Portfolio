import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoStackoverflow, IoLogoTwitter } from 'react-icons/io5'

export default function Footer({ absolute }) {

  let containerStyle = "flex flex-col items-center justify-center w-full p-10"

  if (absolute) {
    containerStyle = "flex flex-col items-center justify-center w-full p-10 absolute bottom-0"
  }

  return (

    <footer className={containerStyle}>
      <div className="m-2 flex">
        <a className="mr-4 cursor-pointer" href="https://twitter.com/lucascassilha">
          <IoLogoTwitter size={25} />
        </a>
        <a className="mr-4 cursor-pointer" href="https://www.linkedin.com/">
          <IoLogoLinkedin size={25} />
        </a>
        <a className="mr-4 cursor-pointer" href="https://www.instagram.com/_cassilha" >
          <IoLogoInstagram size={25} />
        </a>
        <a className="mr-4 cursor-pointer" href="https://github.com/lucaszawadneak" >
          <IoLogoGithub size={25} />
        </a>
        <a className="cursor-pointer" href="https://stackoverflow.com/users/12705405/lucas-zawadneak" >
          <IoLogoStackoverflow size={25} />
        </a>
      </div>
      <p className="text-sm">Lucas Cassilha Zawadneak - 2021</p>
    </footer>
  )
}
