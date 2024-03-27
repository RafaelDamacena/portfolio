"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const bio = [
  {
    id: 11,
    data: [
      { id: 1, type: "Nome", value: "Rafael" },
      { id: 2, type: "Sobrenome", value: "Antonio" },
      { id: 3, type: "Idade", value: "20 Anos" },
      { id: 4, type: "Nacionalidade", value: "Brasileiro" },
      { id: 5, type: "Freelancer", value: "Disponível" },
    ],
  },
  {
    id: 12,
    data: [
      { id: 6, type: "Região", value: "Ipatinga-MG, Brasil" },
      { id: 7, type: "Telefone", value: "+55 31983754151" },
      { id: 8, type: "Email", value: "rafaeldamacena9304@icloud.com" },
      { id: 10, type: "Idiomas", value: "Inglês, Português" },
    ],
  },
];

const counters = [
  {
    id: 1,
    title: 'Comprometimento',
    value: "100",
  },
  {
    id: 2,
    title: 'Responsabilidade',
    value: "100",
  },
  {
    id: 3,
    title: 'Cordialidade',
    value: "100",
  },
  {
    id: 4,
    title: 'Profissionalismo',
    value: "100",
  },
];

const experiences = [
  {
    id: 1,
    date: "01-2024 - Atual",
    title: "Desenvolvedor Web",
    company: "Freelancer",
    desc: "Trabalho freelancer como desenvolvedor web, atendendo demandas de qualquer natureza",
  },
  {
    id: 2,
    date: "Em breve",
    title: "Em breve",
    company: "Em breve",
    desc: "Espero futuramente ter muito mais a contar!",
  },
  {
    id: 3,
    date: "Em breve",
    title: "Em breve",
    company: "Em breve",
    desc: "Espero futuramente ter muito mais a contar!",
  },
];

const educations = [
  {
    id: 1,
    date: "2024",
    title: "Flask Web Development",
    unv: "Teclado Code",
    desc: "Aprendizado especializado em python, com seu framework flask, desenvolvimento de todo o back-end, incluindo banco de dados MongoDB",
  },
  {
    id: 2,
    date: "2024",
    title: "Python RestAPIs",
    unv: "Teclado Code",
    desc: "Rest APIs em Python juntamente com banco de dados MySQL",
  },
  {
    id: 3,
    date: "2024",
    title: "Ui Design, Tipografia Web e Teoria das Cores",
    unv: "Interface.School",
    desc: "Aprendizados focados na comunicação não verbal e experiência visual do usuário, visando transmitir mensagens e sensações através da arte do design web",
  },
  
  {
  id: 4,
  date: "2024",
  title: "Bibliotecas de desenvolvimento front-end",
  unv: "Code Camp",
  desc: "Aperfeiçoamento de técnicas do desenvolvimento visual do website, visando o aprendizado de ferramentas mais poderosas, completas e atuais, como React, Bootstrap e Next.js",
  },
];

const skills = [
  { id: 1, name: "html", value: "100" },
  { id: 2, name: "javascript", value: "60" },
  { id: 3, name: "css", value: "85" },
  { id: 4, name: "Python", value: "100" },
  { id: 5, name: "wordpress", value: "50" },
  { id: 6, name: "jquery", value: "75" },
  { id: 8, name: "react", value: "65" },
];

const About = () => {
  const { dark } = useContext(TunisContext);
  return (
    <SectionContainer id="about">
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"Sobre"}
          colorTitle={"Mim"}
          normalTitle={"Sobre"}
        />
        {/* Section Title Ends */}
        <div className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
          <div className="flex flex-row down-lg:flex-col">
            {/* Personal Informations Starts */}
            <div className="xl:basis-1/2 lg:basis-5/12 down-lg:basis-full">
              <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-22 text-white font-semibold">
                Informações pessoais
              </h3>
              <img
                className="hidden xs:block rounded-full border-4 border-solid border-black-3 w-230 h-230 mb-25 mx-auto"
                src="assets/img/pp_mobile.png"
                alt=""
              />
              <div className="flex justify-between xs:justify-start font-Open-sans">
                {bio.map((item) => (
                  <div
                    className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
                    key={item.id}
                  >
                    {item.data.map((bio) => (
                      <div key={bio.id}>
                        <span className="opacity-80">{bio.type} : </span>
                        <span className="xs:block custom-md-2:block font-semibold">
                          {bio.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Personal Informations Ends */}
            {/* Facts Starts */}
            <div className="xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
              <div className="flex down-lg:-mx-15 flex-wrap">
                {counters.map((counter) => (
                  <div className="w-1/2 px-15" key={counter.id}>
                    <div
                      className={`pt-20 xs:pt-15 pr-30 xs:pr-20 pb-25 xs:pb-20 pl-40 xs:pl-25 border border-${
                        dark ? "black-3" : "grey"
                      } rounded-5 mb-30 xs:mb-25`}
                    >
                      <h3 className="relative inline-block font-bold text-fs-50 xs:text-fs-40 text-accent leading-lh-1.2 after:content-['+'] after:absolute after:-right-24 after:text-fs-33 after:font-light after:top-2">
                        {counter.value}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: counter.title,
                        }}
                        className="relative xs:text-fs-14 uppercase pl-45 xs:pl-0 xs:before:hidden font-Open-sans font-medium before:absolute before:left-0 before:top-13 before:w-30 before:h-1 before:bg-black-5"
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Facts Ends */}
          </div>
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-70 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            Minhas Habilidades
          </h3>
          {/* Skills Starts */}
          <div className="flex w-full flex-wrap">
            {skills.map((skill) => (
              <div
                className="w-1/4 mb-48 down-sm:w-1/2 xs:mb-16"
                key={skill.id}
              >
                <div
                  className={`c100 p${skill.value} float-none mx-auto ${
                    dark ? "bg-black-3" : "bg-light-grey after:!bg-white"
                  }`}
                >
                  <span className={dark ? "" : "!text-black-6"}>
                    {skill.value}%
                  </span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
                <h6 className="uppercase font-Open-sans text-center mt-24 xs:mt-8">
                  {skill.name}
                </h6>
              </div>
            ))}
          </div>
          {/* Skills Ends */}
          <hr
            className={`border-t border-solid border-t-${
              dark ? "black-3" : "grey"
            } mx-auto max-w-40prcent mt-35 mb-55`}
          />
          <h3 className="uppercase text-fs-26 xs:text-fs-21 pb-48 text-white font-semibold text-center">
            Experiência &amp; Formações
          </h3>
          {/* Resume Starts */}
          <div className="flex down-sm:flex-col from-sm:mb-40">
            {/* Experience Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {experiences.map((experience) => (
                  <li
                    key={experience.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {experience.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {experience.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {experience.company}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {experience.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="w-1/2 down-sm:w-full">
              <ul>
                {educations.map((education) => (
                  <li
                    key={education.id}
                    className={`relative pr-20 pl-60 mb-50 after:absolute after:top-0 after:left-20 after:bg-${
                      dark ? "black-4" : "grey"
                    } after:w-1 after:h-full`}
                  >
                    <div className="bg-accent w-40 h-40 absolute left-0 leading-lh-40 text-center z-10 rounded-full text-white">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span
                      className={`text-${
                        dark ? "white" : "black-6"
                      } text-fs-12 py-1 px-10 inline-block mb-12 rounded-20 font-semibold bg-${
                        dark ? "black-3" : "light-grey"
                      } opacity-80 font-Open-sans uppercase`}
                    >
                      {education.date}
                    </span>
                    <h5 className="uppercase text-fs-18 mt-7 mb-10">
                      {education.title}
                      <span
                        className={`opacity-80 font-semibold text-fs-15 relative pl-26 font-Open-sans before:absolute before:w-10 before:h-2 before:bg-${
                          dark ? "white" : "black-6"
                        } before:left-7 before:top-9 before:opacity-80`}
                      >
                        {education.unv}
                      </span>
                    </h5>
                    <p
                      className={`font-Open-sans ${
                        dark ? "text-light-grey" : ""
                      } text-fs-14`}
                    >
                      {education.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Education Ends */}
          </div>
          {/* Resume Ends */}
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
