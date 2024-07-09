import { motion } from "framer-motion";
import { IoLink, IoLogoGithub } from "react-icons/io5";

export default function Project({
  image,
  title,
  description,
  year,
  tech,
  github,
  web,
  index,
}) {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ type: "tween", delay: index * 0.3 }}
      className="w-full my-5 grid lg:grid-cols-4 items-center"
    >
      <img
        src={image}
        className="h-40 rounded w-40 object-fit shadow-md lg:col-span-1"
      />
      <div className="flex flex-col items-start lg:col-span-3 text-center">
        <span className="flex items-center">
          <h1 className="font-bold text-3xl mr-2">{title}</h1>
          {github && (
            <a href={github} class="cursor-pointer mr-1">
              <IoLogoGithub size={25} />
            </a>
          )}
          {web && (
            <a href={web} class="cursor-pointer">
              <IoLink size={25} />
            </a>
          )}
        </span>
        <div className="my-2">
          <label className="bg-blue-900 rounded p-1 text-white font-bold text-sm w-14">
            {year}
          </label>
          <label className="bg-red-400 rounded p-1 text-white font-bold text-sm w-14 m-2">
            {tech}
          </label>
        </div>
        <p className="text-left">{description}</p>
      </div>
    </motion.div>
  );
}
