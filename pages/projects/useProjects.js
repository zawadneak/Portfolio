import { useTranslation } from "react-i18next";

export default function useProjects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "The Krypt",
      tech: "React Native | NodeJS | ReactJS",
      year: "2021",
      description: t("projects.the-krypt.description"),
      image:
        "https://raw.githubusercontent.com/thekrypt/politicas-de-privacidade/main/banner.png",
      web: "https://thekrypt.com.br/",
      github: "https://github.com/thekrypt",
    },
    {
      title: "Maruska",
      tech: "React Native",
      year: "2019",
      description: t("projects.maruska.description"),
      image:
        "https://camo.githubusercontent.com/a56e38f835f0ac61df5a1659abe2d9c3de2cff1a53a690993808fe461a146308/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f595a4e456c50516b6e38634f44563935526c665f75414976736832614c4a304670306b456266685537337632324d337342745364456357644659487731553842554e5632",
      github: "https://github.com/lucaszawadneak/maruska",
    },
    {
      title: "Password",
      tech: "Flutter",
      year: "2020",
      description: t("projects.password.description"),
      image:
        "https://raw.githubusercontent.com/lucaszawadneak/pword/main/assets/icon/icon.png",
      github: "https://github.com/lucaszawadneak/pword",
    },
    {
      title: "Monster Hunt",
      tech: "VueJS",
      year: "2020",
      description: t("projects.monster-hunt.description"),
      image:
        "https://nimbus-screenshots.s3.amazonaws.com/s/1b17c3ee1528d585b1726dfb1f77f10e.png",
      github: "https://github.com/lucaszawadneak/monster-hunt",
      web: "https://lucaszawadneak.github.io/monster-hunt/",
    },
  ];

  return projects;
}
