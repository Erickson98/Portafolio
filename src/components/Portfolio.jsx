import React from "react";
import sil from "../assets/portfolio/sil.png";
import sv from "../assets/portfolio/sv.png";
import portafolio from "../assets/portfolio/portofolio.png";
import appcrud from "../assets/portfolio/appcrud.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sil,
      url: "https://prod-sistemalegislativo-frontend-dot-senadord-344916.ue.r.appspot.com/login?redirect=/dashboard",
      enable: false
    },
    {
      id: 2,
      src: sv,
      url: "https://votacionsvr.senado.com/Login",
      enable: false

    },
    {
      id: 3,
      src: appcrud,
      url: "https://votacionsvr.senado.com/Login",
      enable: true,
      source: "https://github.com/Erickson98/AppCrud.git"

    },
    {
      id: 4,
      src: portafolio,
      url: "https://votacionsvr.senado.com/Login",
      enable: true,
      source: "https://github.com/Erickson98/Portafolio.git"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, enable, source }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={url}>Demo</a>

                </button>
                {enable && <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">


                  <a href={source}>Code</a>
                </button>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
