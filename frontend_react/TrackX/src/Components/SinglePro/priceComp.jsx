import { amazon, flipkart } from "../../constants/images";
import "./priceComp.scss"
const priceComp = () => {
  
  const details = [
    {
      Sites: amazon,
      CurrentPrice: "Rs 18900",
      LowestPrcie: "Rs 17000",
      HighestPrice: "Rs 19000",
      AveragePrice: "Rs 18300 ",
      imgSize: "mt-10",
      customCSS: "border-green-600",
    },

    {
      Sites: flipkart,
      CurrentPrice: "Rs 18945",
      LowestPrcie: "Rs 17050",
      HighestPrice: "Rs 19000",
      AveragePrice: "Rs 18331 ",
      tableMargin: "mt-12",
      customCSS: "border-indigo-600",
    },
  ];


    return (
    <>
    
      <div className="app__flex flex-col lg:flex-row compContainer">
        {details.map((detail, index)=>{
            return (
              <div className="px-5 my-8 mx-8 flex flex-col  tableBorder" key={index}>
                <div className="w-full app__flex">
                <div className={`w-[90%] h-[50px] ${detail.customCSS} upper__border`}></div>
                </div>
                <div className="mx-6 app__flex img">
                  <img
                    className={`w-[400px] ${detail.imgSize}`}
                    src={detail.Sites}
                    alt=""
                  />
                </div>
                <div className="app__flex priceComp">
                  <table className={`font ${detail.tableMargin}`}>
                    <tr className="text-center grayBack">
                      <th >Type</th>
                      <th>Price</th>
                      <th>Date</th>
                    </tr>
                    <tr className="cyanBack">
                      <td >Current</td>
                      <td>{detail.CurrentPrice}</td>
                      <td>28-05-2022</td>
                    </tr>
                    <tr className="grayBack">
                      <td>Highest</td>
                      <td>{detail.HighestPrice}</td>
                      <td>20-06-2021</td>
                    </tr>
                    <tr className="cyanBack">
                      <td>Lowest</td>
                      <td>{detail.LowestPrcie}</td>
                      <td>24-05-2022</td>
                    </tr>
                    <tr className="grayBack">
                      <td>Average</td>
                      <td>{detail.AveragePrice}</td>
                      <td>24-05-2022</td>
                    </tr>
                  </table>
    
                </div>
              </div>
            );
        })}
        
      </div>
    </>
  );
};

export default priceComp;
