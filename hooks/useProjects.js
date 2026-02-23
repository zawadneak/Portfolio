import { useTranslation } from "next-i18next";

export default function useProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "callvin",
      tech: "ReactJS | Ruby on Rails | WebRTC",
      year: "2025",
      description: t("projects.callvin.description"),
      web: "https://alpha.call.vin",
    },
    {
      title: "thatgaming.app",
      tech: "Astro + React | Ruby on Rails | Webscraping",
      year: "2024",
      description: t("projects.the-collection.description"),
      image: "/gamingvault-full.svg",
      web: "https://gamingapp.lucaszawadneak.me",
    },
    {
      title: "JustPoker",
      tech: "React",
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
      github: "https://github.com/lucaszawadneak/maruska",
    },
  ];

  return projects;
}
