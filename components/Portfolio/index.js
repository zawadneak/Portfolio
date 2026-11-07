import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Footer from "../Footer";
import useProjects from "../../hooks/useProjects";
import portrait from "../../public/me.jpg";
const BASE_URL = "https://lucaszawadneak.com";
export function Page({ title, description, children }) {
  const { locale, pathname } = useRouter();
  const path = (locale === "pt" ? "/pt" : "") + (pathname === "/" ? "/" : pathname);
  const fullTitle = title ? title + " | Lucas Zawadneak" : "Lucas Zawadneak — Software Engineer";
  return <><Head>
    <title>{fullTitle}</title><meta name="description" content={description} /><meta name="author" content="Lucas Zawadneak" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" /><link rel="canonical" href={BASE_URL + path} />
    <link rel="alternate" hrefLang="en" href={BASE_URL + pathname} /><link rel="alternate" hrefLang="pt" href={BASE_URL + "/pt" + pathname} /><link rel="alternate" hrefLang="x-default" href={BASE_URL + pathname} />
    <meta property="og:type" content="website" /><meta property="og:url" content={BASE_URL + path} /><meta property="og:title" content={fullTitle} /><meta property="og:description" content={description} /><meta property="og:image" content={BASE_URL + "/me.jpg"} /><meta property="og:locale" content={locale === "pt" ? "pt_BR" : "en_US"} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={fullTitle} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={BASE_URL + "/me.jpg"} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Lucas Zawadneak",url:BASE_URL,jobTitle:"Software Engineer",sameAs:["https://github.com/zawadneak","https://www.linkedin.com/in/lucaszawadneak/"]}) }} />
  </Head><main className="shell" id="main" tabIndex={-1}>{children}</main><Footer /></>;
}
export function Intro() {
  const { t } = useTranslation();
  return <section className="intro"><div className="intro-copy"><p className="role">{t("redesign.role")}</p><h1>{t("redesign.headline")}</h1><p className="intro-description">{t("redesign.intro")}</p><div className="intro-actions"><Link className="button" href="/projects">{t("redesign.seeProjects")}</Link><a className="text-link" href="mailto:lucaszawadneak@gmail.com">{t("redesign.getInTouch")}</a></div><p className="current-role">{t("redesign.current")} <a href="https://sezzle.com">Sezzle</a><span>{t("redesign.location")}</span></p></div><figure className="portrait"><Image src={portrait} alt="Lucas Zawadneak" priority sizes="(max-width: 650px) 80px, 96px" /></figure></section>;
}
function ProjectArt({ title }) {
  return <div className={"project-art " + (title === "callvin" ? "call-art" : "games-art")} aria-hidden="true">{title === "callvin" ? <><div className="call-person person-one"><svg viewBox="0 0 100 100"><circle cx="50" cy="37" r="17" /><path d="M18 94c0-42 64-42 64 0" /></svg></div><div className="connection"><span /><span /><span /><span /><span /></div><div className="call-person person-two"><svg viewBox="0 0 100 100"><circle cx="50" cy="37" r="17" /><path d="M18 94c0-42 64-42 64 0" /></svg></div></> : <div className="game-library"><div className="game-cover cover-one"><span>✦</span></div><div className="game-cover cover-two"><span>◒</span></div><div className="game-cover cover-three"><span>⌁</span></div><div className="library-line" /></div>}</div>;
}
export function Projects({ all = false }) {
  const { t } = useTranslation();
  const projects = useProjects();
  const ProjectHeading = all ? "h2" : "h3";
  return <section className={all ? "projects-section" : "section"} aria-labelledby={all ? undefined : "projects-heading"}>
    {!all && <div className="section-heading"><h2 id="projects-heading">{t("redesign.selectedProjects")}</h2><Link className="text-link" href="/projects">{t("redesign.allProjects")}</Link></div>}
    <div className="project-grid">{projects.slice(0,2).map(project => <article className="project" key={project.title}><a className="project-image-link" href={project.web} aria-label={t("redesign.visit") + " " + project.title}><ProjectArt title={project.title} /></a><div className="project-title"><ProjectHeading><a href={project.web}>{project.title}</a></ProjectHeading><span>{project.year}</span></div><p className="project-description">{project.description}</p><p className="project-tech">{project.tech.split(" | ").join(" / ")}</p><a className="text-link" href={project.web}>{t("redesign.visitProject")}<svg className="external-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3h7v7M13 3 3 13" stroke="currentColor" strokeWidth="1.4" /></svg></a></article>)}</div>
    {all && <div className="other-projects">{projects.slice(2).map(project => <article className="small-project" key={project.title}><div><h2><a href={project.web || project.github}>{project.title}</a></h2><p>{project.description}</p></div><p className="project-tech">{project.tech}<span>{project.year}</span></p><a className="text-link" href={project.web || project.github}>{t(project.github ? "redesign.sourceCode" : "redesign.visitProject")}</a></article>)}</div>}
  </section>;
}
const jobs = [
  {company:"Sezzle",role:"Software Engineer II",period:"2026",current:true,domain:"fintech",href:"https://sezzle.com"},
  {company:"Pier",role:"Software Engineer III",period:"2025 – 2026",domain:"insurtech",tech:"React / React Native / Ruby on Rails / Kafka / Deno",href:"https://pier.digital"},
  {company:"Pier",role:"Software Engineer II",period:"2024 – 2025",domain:"insurtech",tech:"React / React Native / Ruby on Rails / Kafka / Deno",href:"https://pier.digital"},
  {company:"Deskmy",role:"fullstack-developer",period:"2021 – 2024",domain:"virtualOffice",tech:"React / Django / Node.js / WebRTC / RabbitMQ",href:"https://deskmy.com"},
  {company:"Tunts Rocks",role:"development-intern",period:"2021",domain:"softwareHouse",tech:"Angular / Spring / Android / Node.js / PostgreSQL",href:"https://tunts.com"}
];
export function Experience({ all = false }) {
  const { t } = useTranslation();
  const JobHeading = all ? "h2" : "h3";
  return <section className={all ? "" : "section experience"} aria-labelledby={all ? undefined : "experience-heading"}>{!all && <div className="section-heading"><h2 id="experience-heading">{t("redesign.experience")}</h2><Link className="text-link" href="/work">{t("redesign.fullExperience")}</Link></div>}<div className="jobs">{jobs.slice(0, all ? jobs.length : 3).map(job => <article className="job" key={job.company + job.period}><p className="job-period">{job.period}{job.current && " – " + t("present")}</p><div><JobHeading><a href={job.href}>{job.company}</a>{job.current && <span className="current-tag">{t("redesign.now")}</span>}</JobHeading><p className="job-role">{t(job.role, { defaultValue: job.role })}</p>{all && <><p className="job-domain">{t("redesign." + job.domain)}</p>{job.tech && <p className="project-tech">{job.tech}</p>}</>}</div></article>)}</div></section>;
}
export function ContactBlock() {
  const { t } = useTranslation();
  return <section className="contact-block"><div><h2>{t("redesign.contactHeading")}</h2><p>{t("redesign.contactText")}</p></div><a className="text-link contact-email" href="mailto:lucaszawadneak@gmail.com">lucaszawadneak@gmail.com</a></section>;
}
export function PageHeading({ title, children }) {
  return <div className="page-heading"><h1>{title}</h1><p>{children}</p></div>;
}
