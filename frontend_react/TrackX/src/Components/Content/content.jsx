import "./content.scss";

import {
  extension,
  graph,
  alert,
  amazon,
  flipkart,
} from "../../constants/images";

const content = () => {
  const content = [
    {
      Title: "Price Drop Alerts",
      logo: alert,
    },

    {
      Title: "Price History Charts",
      logo: graph,
    },

    {
      Title: "Browser Extension",
      logo: extension,
    },
  ];

  const sites = [amazon, flipkart];

  return (
    <>
      <div className="app__flex p-[100px] contentContainer">
        {content.map((element, index) => {
          return (
            <div
              className={`app__flex flex-col font-bold text-lg mx-[3.5em] content`}
              key={index}
            >
              <img className="w-[50px] mb-3" src={element.logo} alt="PIC" />
              <strong className="w-[100px] text-center">{element.Title}</strong>
            </div>
          );
        })}
      </div>
      <strong className="app__flex text-2xl font-bold">
        We compare prices on mulitple shopping sites at once...
      </strong>
      <div className="app__flex font-bold text-2xl">
        {sites.map((site, index) => {
          return (
            <div key={site + index}>
              <img className="w-[250px] my-6 mx-4" src={site} alt="" />
            </div>
          );
        })}
        and many more
      </div>
    </>
  );
};

export default content;
