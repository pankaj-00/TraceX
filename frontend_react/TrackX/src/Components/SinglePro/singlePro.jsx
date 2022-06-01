import "./singlePro.scss"
import {
  amazon,
} from "../../constants/images";
import { PriceComp, Chart } from "..";

const singlePro = () => {
    return (
      <>
        <div className="app__flex flex-col md:flex-row my-8 proContainer">
          <div className="w-[25%] img">
            <img
              src="https://m.media-amazon.com/images/I/81I3w4J6yjL._SL1500_.jpg"
              alt="Image"
            />
          </div>
          <div className="flex w-[80%] md:w-[60%] flex-col md:items-center lg:flex-row justify-evenly">
            <div className="flex w-[100%] md:w-[60%] font mx-3 h-full flex-col title">
              <strong className="text-xl md:text-3xl px-3 my-3 productTitle">
                Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage) |
                Travel Adapter to be Purchased Separately
              </strong>
              <div className="w-[35%] my-4 font-bold text-2xl text-center proDetail">
                Product Details
              </div>
              <ul className="text-xl">
                <li>
                  <strong> Product Group</strong> : Electronics{" "}
                </li>
                <li>
                  <strong> Category</strong> : Mobile Phones
                </li>
                <li>
                  <strong> Manufacturer</strong> : Samsung
                </li>
                <li>
                  <strong> Model</strong> : DA29-00003G
                </li>
              </ul>
            </div>
            <div className="flex mt-8 font flex-col md:items-center">
              <strong className="text-4xl mb-2 text-green-600">₹ 19,499</strong>
              <div>
                <img className="h-[70px]" src={amazon} alt="" />
              </div>
              <h2 className="my-3"> As of 2022-05-16 20:46</h2>
              <div className="w-full flex items-center md:justify-center h-[25%]">
                <button className=" text-xl md:items-center px-5 py-2 rounded-3xl font buyNow">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <Chart/>
        <PriceComp/>
      </>
    );
}
 
export default singlePro;