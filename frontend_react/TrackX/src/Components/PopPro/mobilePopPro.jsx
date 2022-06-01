import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./popPro.scss";
import {
  extension,
  graph,
  alert,
  amazon,
  flipkart,
  chrome,
} from "../../constants/images";

const mobilePopPro = () => {
    
    const productArray = [
      {
        ProductPic:
          "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_QL65_.jpg",
        Title: "Apple iPhone 13 (128GB) - Starlight",
        Price: "₹ 69,900",
        Site: amazon,
      },
      {
        ProductPic:
          "https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UY327_QL65_.jpg",
        Title:
          "Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage) | Travel Adapter to be Purchased Separately",
        Price: "₹ 19,499",
        Site: flipkart,
      },
      {
        ProductPic:
          "https://rukminim1.flixcart.com/image/128/128/k1l1ea80/shoe/7/e/g/bq3204-001-7-nike-black-anthracite-original-imafh4ktdhqgtkaz.jpeg?q=70",
        Title: "REVOLUTION 5 Running Shoes For Men (Black)",
        Price: "₹ 1,981",
        Site: amazon,
      },
      {
        ProductPic: flipkart,
        Title: "Alert dimension 23 x 32 x 45",
      },
      {
        ProductPic: graph,
        Title: "Extensions dimension 23 x 32 x 45",
      },
      {
        ProductPic: chrome,
        Title: "Extensions dimension 23 x 32 x 45",
      },
    ];
    
    return (
      <div className="app__flex flex-col my-10">
        <strong className="my-20 app__flex text-5xl popular">
          Popular Products
        </strong>
        <div className="w-[85%] popContainer">
          <Slider
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={false}
            arrows={true}
            autoplaySpeed={3000}
          >
            {productArray.map((fadeImage, index) => (
              <div className="w-[500px] h-[700px]" key={index}>
                <div className="app__flex  h-[35%] image-container">
                  <img
                    src={fadeImage.ProductPic}
                    alt={fadeImage.Title}
                    className=" w-[33.3%] images"
                  />
                </div>
                <div className="h-[33.3%]">
                  <strong className="my-6 mx-6 px-[5px] text-xl font titlePop">
                    {fadeImage.Title}
                  </strong>
                  <h4 className="app__flex text-green-600 text-2xl font-bold font">
                    {fadeImage.Price} /-
                  </h4>
                  <div className="app__flex my-5">
                    <img className="h-[50px]" src={fadeImage.Site} alt="" />
                  </div>
                  <strong className="app__flex font font-bold text-lg">
                    BEST PRICE
                  </strong>
                </div>
                <div className="w-full flex items-center justify-center h-[25%]">
                  <button className=" w-[75%] text-xl items-center px-5 py-2 rounded-3xl font buyNow">
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
}
 
export default mobilePopPro;