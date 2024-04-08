"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Speak Ocean",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.jpg",
    project: "Trabalho atualmente",
    client: "Sócio",
    langages: "HTML, CSS, Javascript, Python, MongoDB",
    previewLink: "Uma rede social anônima - Prévia em breve",
  },
  {
    id: 2,
    title: "Página Odontológica",
    type: "img",
    src: "",
    img: "assets/img/projects/project-2.jpg",
    project: "Website",
    client: "Projeto Pessoal",
    langages: "Html, CSS, JavaScript",
    previewLink: "https://odontologia-orpin.vercel.app/",
  },
  {
    id: 3,
    title: "Em Breve",
    type: "img",
    src: "",
    img: "assets/img/projects/project-3.jpg",
    project: "Website",
    client: "Em Breve",
    langages: "",
    previewLink: "Em breve",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"Trabalhos"}
          colorTitle={"Portfólio"}
          normalTitle={"Meu"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
