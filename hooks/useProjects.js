import { useTranslation } from "next-i18next";

export default function useProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "thatgaming.app",
      tech: "Astro | React | Golang",
      year: "2023 -",
      description: t("projects.the-collection.description"),
      image: "/gamingvault-full.svg",
      web: "https://thatgaming.app",
    },
    {
      title: "JustPoker",
      tech: "React | Supabase",
      year: "2023",
      description: t("projects.just-poker.description"),
      image:
        "https://justpoker.netlify.app/assets/assets/branding/just-poker.png",
      web: "https://justpoker.netlify.app/",
    },
    // {
    //   title: "The Krypt",
    //   tech: "React Native | NodeJS | ReactJS",
    //   year: "2021",
    //   description: t("projects.the-krypt.description"),
    //   image:
    //     "https://raw.githubusercontent.com/thekrypt/politicas-de-privacidade/main/banner.png",
    //   github: "https://github.com/thekrypt",
    // },
    {
      title: "Maruska",
      tech: "React Native",
      year: "2019",
      description: t("projects.maruska.description"),
      image:
        "https://camo.githubusercontent.com/ae83bc5f471d52f4280deb83b93acc328b1bc539badefc54b3965a1bc582f6e3/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f595a4e456c50516b6e38634f44563935526c665f75414976736832614c4a304670306b456266685537337632324d337342745364456357644659487731553842554e5632",
      github: "https://github.com/lucaszawadneak/maruska",
    },
  ];

  return projects;
}
