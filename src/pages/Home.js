import NavBar from "../components/NavBar";
import VideoPLayer from "../components/VideoPLayer";
import img from "../img/Product.png";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import banner from "../img/Untitled design (8).png";
import { getByPlaceholderText } from "@testing-library/react";

function Home() {
  const data = [
    {
      productName: "Elpis T-shirt",
      productimg: img,
      description: `Own an exclusive Limited Edition
    T-Shirt .
    Crafted from premium materials
    with a unique design. Act fast to
    get yours before they're gone
    forever!`,
      size: [{ S: 2 }, { M: 6 }, { L: 6 }, { XL: 4 }, { Sshort: 2 }, { Mshort: 10 }],
      price: 59,
      quantitie: 30,
      colors: ["black", "beige"],
    },
  ];

  const [size, setSize] = useState("Size");
  const [color, setColor] = useState("black");
  const [imge, SetImg] = useState(
    "https://i.pinimg.com/736x/f7/29/36/f72936823ce5ead191e0a25218667073.jpg"
  );
  const toBuy = {
    productName: "Elpis T-shirt",
    productimg: imge,
    size: size,
    color: color,
    price: data[0].price,
    qty: 1,
    placed: false,
  };
  const setToCord = () => {
    localStorage.setItem("toBuy", JSON.stringify(toBuy));
    window.location.href = "/cart";
  };
  return (
    <div className="">
      <NavBar />
      <div className="bg-[#AD8B71] pt-20 text-white flex items-center justify-center">
        <p className="uppercase text-xs tracking-widest text-center px-4 py-3">
          NEW DROP
        </p>
      </div>
      <div>
        <div className="bg-red-600 ">
          <img src={banner} className="w-full h-full" />
        </div>
        <div className="bg-[#AD8B71] text-white flex items-center justify-center">
          <p className="uppercase text-xs tracking-widest text-center px-4 py-3">
            NEW DROP
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* <h1 className="font-extrabold text-[2.5rem] uppercase pt-4 flex gap-1">
            Only
            <p className="text-red-500">60</p>
            left !
          </h1> */}
        </div>
        <Card
          size={size}
          setSize={setSize}
          data={data}
          color={color}
          setColor={setColor}
          setToCord={setToCord}
        />
      </div>
      <Footer />
    </div>
  );
}
const Card = ({ setToCord, size, setSize, data, color, setColor }) => {
  const slides = [
    {
      url: "https://i.pinimg.com/736x/f7/29/36/f72936823ce5ead191e0a25218667073.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/0a/4d/3a/0a4d3af3060a44cd483bb93d1bcc5f65.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/6b/2f/89/6b2f890c59f70e63b20dd78632974202.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/c5/cc/2c/c5cc2c848c07e170d139233733d2a097.jpg",
    },
    { url: "https://i.pinimg.com/736x/67/f4/2b/67f42b3aec2c741fb954ef43fdcf73dd.jpg" },
    { url: "https://i.pinimg.com/736x/6f/ad/66/6fad66dd747a94ef271c6158cfcb54dd.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      {data.map((e, key) => {
        return (
          <div
            key={key}
            className="flex flex-col px-1 py-8 lg:flex-row lg:gap-40 lg:justify-center lg:items-center"
          >
            <div className="flex flex-col items-center justify-center h-[600px] w-full lg:w-[400px] ">
              <Slider
                slides={slides}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-80 px-4">
              <h1 className="font-extrabold text-[2rem] uppercase pt-4 text-left">
                {e.productName}
              </h1>
              <p>{e.description}</p>
              <h1 className="font-extrabold text-[2rem]">{e.price} DT</h1>
              <DropDown size={size} setSize={setSize} />
              <div className="flex gap-2 items-center mt-2 ">
                <h1>Color : </h1>
                <div className="flex gap-2">
                  <div
                    onClick={() => {
                      setColor("black");
                      setCurrentIndex(1);
                    }}
                    className="h-7 w-7 bg-black rounded-xl cursor-pointer hover:blur-sm transition-all duration-150"
                  ></div>
                  <div
                    onClick={() => {
                      setColor("beige");
                      setCurrentIndex(3);
                    }}
                    className="h-7 w-7 bg-amber-200 rounded-xl cursor-pointer hover:blur-sm transition-all duration-150"
                  ></div>
                </div>
                {color}
              </div>
              <button
                onClick={setToCord}
                className="bg-black h-11 hover:bg-slate-900 transition-all duration-200 cursor-pointer text-white font-extrabold flex items-center justify-center text-xl pt-1 mt-4"
              >
                ADD TO CART
              </button>
              <ToastContainer />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
const Slider = ({ slides, currentIndex, setCurrentIndex }) => {
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" h-full w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-100"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <img
              src={slide.url}
              alt="img"
              className="w-10 h-14 rounded-lg ml-2 hover:blur-sm transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
