import { useEffect, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imge from "../img/single.png";

const AdminPage = () => {
  const [link, setLink] = useState(""); // adnou route wahdou
  const [num, setNum] = useState(0);
  const [dis, setDis] = useState(0);
  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();
  console.log(img);

  const newProduct = {
    productName: productName,
    description: description,
    price: price,
    productimg: img,
    quantitie: num,
  };
  const notify = () => toast("WRONG !");
  const done = () => toast("Product Added !");
  const [data, setData] = useState([]);
  console.log(newProduct.productimg);

  useEffect(() => {
    axios.get("guest/products").then((res) => {
      setData(res.data.result);
    });
  }, []);
  const Post = () => {
    axios
      .post("admin/product", newProduct, {
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        console.log(response);
        done();
      })
      .catch((error) => {
        notify();
      });
  };

  return (
    <div>
      {/* <input
        onChange={(e) => {
          setLink(e.target.value);
        }}
        placeholder="Video Link"
        type="text"
        className="w-full h-10 border border-black p-3"
      /> 
       <input
          onChange={(e) => {
            setDis(e.target.value);
          }}
          placeholder="Discount %"
          type="number"
          className="w-full h-10 border border-black p-3"
        />*/}
      <AdminNavBar />
      <div className="flex w-full pt-40 gap-8">
        <SecOne
          setProductName={setProductName}
          setDescription={setDescription}
          setNum={setNum}
          setPrice={setPrice}
          setImg={setImg}
          Post={Post}
        />
        <div className="w-[30%]">
          <h1 className="pb-4">Edit Product</h1>
          <div>
            {data.map((e, key) => {
              return (
                <div
                  key={key}
                  className="border border-black p-2 w-full h-full rounded-2xl "
                >
                  <div className=" gap-4 flex">
                    <div className="w-32 flex flex-col gap-2">
                      <img className="w-28 h-28" src={imge} />
                      <input type="file" className=" border border-black w-28" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-lg font-bold flex gap-4 items-center">
                        {e.productName}
                        <input type="text" className="border w-32 h-8" />
                      </div>
                      <div className="text-sm flex  items-center">
                        {e.description} <input type="text" className="border w-32 h-8" />
                      </div>
                      <div className="text-sm flex gap-4 items-center">
                        QTY : {e.quantitie}
                        <input type="text" className="border w-12 h-8" />
                      </div>
                      <div className="text-sm flex gap-4 items-center">
                        Price : {e.price} DT{" "}
                        <input type="text" className="border w-12 h-8" />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={Post}
                    className=" mb-8 bg-black hover:bg-slate-900 transition-all duration-200 cursor-pointer h-11 text-white font-extrabold flex items-center justify-center text-xl pt-1 mt-4 lg:w-60"
                  >
                    Edit
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;

function SecOne({ setProductName, setDescription, setNum, setPrice, setImg, Post }) {
  return (
    <div className=" pl-8 w-[30%]">
      <h1 className="pb-4">Add Product</h1>
      <div className="flex flex-col gap-4">
        <input
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          placeholder="productName"
          type="text"
          className="w-full h-10 border border-black p-3"
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="description"
          type="text"
          className="w-full h-10 border border-black p-3"
        />
        <input
          onChange={(e) => {
            setNum(e.target.value);
          }}
          placeholder="Number Of T-shirts Left"
          type="number"
          className="w-full h-10 border border-black p-3"
        />

        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Price"
          type="number"
          className="w-full h-10 border border-black p-3"
        />
        <input
          onChange={(e) => {
            setImg(e.target.files);
          }}
          type="file"
          name="files"
          className="w-full h-40 border border-black p-3"
        />
        <input
          value={"Add"}
          type="submit"
          onClick={Post}
          className=" mb-8 bg-black hover:bg-slate-900 transition-all duration-200 cursor-pointer h-11 text-white font-extrabold flex items-center justify-center text-xl pt-1 mt-4 lg:w-60"
        ></input>
      </div>
    </div>
  );
}
