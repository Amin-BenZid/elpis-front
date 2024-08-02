import insta from "../img/instagram (1).png";
import fb from "../img/facebook.png";
import tk from "../img/tik-tok.png";
import wh from "../img/whatsapp.png";

const Footer = () => {
  return (
    <div>
      <div className="h-[1px] bg-black w-full "> </div>
      <div className=" flex  flex-col gap-2 p-8 lg:flex-row  lg:justify-center  ">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-96">
          <div className="flex flex-col gap-2 lg:w-80 pt-8">
            {/* <p>Get your exclusive emails</p>
            <input type="text" className="w-full h-8 border border-black" /> */}
            <p>official.elpis24@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex gap-2">
              <a target="_blank" href="https://www.instagram.com/elpis.tn/">
                <img alt="insta" className="w-10 lg:w-7" src={insta} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61561713000995"
                target="_blank"
              >
                <img alt="fb" className="w-10 lg:w-7" src={fb} />
              </a>
              <a href="https://www.tiktok.com/@elpis.24" target="_blank">
                <img alt="tiktok" className="w-10 lg:w-7" src={tk} />
              </a>
            </div>
            <p className="pt-2">+216 50 732 964</p>
          </div>
        </div>
      </div>
      <div className=" flex items justify-center h-[1px] bg-black w-full text-sm text-gray-500 ">
        <p className="p-2">© 2024, ELPIS</p>
      </div>
    </div>
  );
};

export default Footer;
