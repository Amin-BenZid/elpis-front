import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import product from "../img/single.png";
import { errorMonitor } from "events";
import DropDown from "../components/DropDown";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const [show, setShow] = useState(false);
  const toBuy = JSON.parse(localStorage.getItem("toBuy"));

  const data = [
    {
      name: toBuy.productName,
      size: toBuy.size,
      qty: toBuy.qty,
      price: toBuy.price,
      image: toBuy.productimg,
      color: toBuy.color,
      placed: toBuy.placed,
    },
  ];
  const [clientName, setClientName] = useState();
  const [clientLoc, setClientLoc] = useState();
  const [clientPhoneNumber, setClientPhoneNumber] = useState();
  const [clientEmail, setClientEmail] = useState();
  const newOrder = {
    clientName: clientName,
    clientLoc: clientLoc,
    clientPhoneNumber: clientPhoneNumber,
    clientEmail: clientEmail,
    color: toBuy.color,
    size: toBuy.size,
    qty: toBuy.qty,
    price: toBuy.price,
    placed: true,
  };

  const notify = () => toast("Order Placed ! Thank you");
  const post = () => {
    axios
      .post("guest/order", newOrder)
      .then((response) => {
        localStorage.setItem("toBuy", JSON.stringify(newOrder));
        notify();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [size, setSize] = useState(toBuy.size);
  const [color, setColor] = useState(toBuy.color);
  const [qty, setQty] = useState(1);
  const editOrder = () => {
    const newOrder = {
      size: size,
      qty: qty,
      price: toBuy.price,
      color: color,
    };
    localStorage.setItem("toBuy", JSON.stringify(newOrder));
    window.location.reload();
  };
  return (
    <div>
      <NavBar />
      <ToastContainer />

      <div className={show ? "" : "hidden"}>
        <EditPopUp
          setShow={setShow}
          setColor={setColor}
          color={color}
          setSize={setSize}
          size={size}
          qty={qty}
          setQty={setQty}
          editOrder={editOrder}
        />
      </div>
      <h1 className=" pt-24 text-lg font-extrabold p-4 lg:px-52">MY SHOPPING BAG</h1>
      <div className="lg:flex">
        <Table
          data={data}
          setShow={setShow}
          setSize={setSize}
          size={size}
          color={color}
          setColor={setColor}
        />
        <div className="h-[1.2px] bg-gray-300  m-4"></div>
        <div className="p-4 mt-4 mx-4 bg-black text-white lg:w-96">
          <h1 className="uppercase font-extrabold text-medium">summary</h1>
          {devider}
          <div className="flex flex-col gap-3 lg:items-center">
            <input
              onChange={(e) => {
                setClientName(e.target.value);
              }}
              placeholder="Name"
              type="text"
              className="w-full lg:w-72 h-12 border border-white p-3 bg-transparent"
            />
            <input
              onChange={(e) => {
                setClientPhoneNumber(e.target.value);
              }}
              placeholder="Phone"
              type="number"
              className="w-full lg:w-72 h-12 border border-white p-3 bg-transparent"
            />
            <input
              onChange={(e) => {
                setClientEmail(e.target.value);
              }}
              placeholder="Email (Optional)"
              type="email"
              className="w-full lg:w-72 h-12 border border-white p-3 bg-transparent"
            />
            <input
              onChange={(e) => {
                setClientLoc(e.target.value);
              }}
              placeholder="Localisation"
              type="text"
              className="w-full lg:w-72 h-12 border border-white p-3 bg-transparent"
            />
          </div>
          {devider}
          <div className=" flex flex-col gap-4 py-4">
            <div className="flex gap-10">
              <h1 className="text-sm flex gap-2 ">
                SUB TOTAL<p className="text-[8px]">(Tax Included)</p>
              </h1>
              <p className="lg:pl-20">{data[0].price * data[0].qty} DT</p>
            </div>
            <div className="flex gap-32 lg:gap-52">
              <h1 className="text-sm flex gap-2">Shipping</h1>
              <p>7 DT</p>
            </div>
          </div>
          {devider}
          <div className="flex items-center gap-32 lg:gap-52">
            <h1 className="uppercase font-extrabold text-medium py-4">TOTAL</h1>
            <p>{data[0].price * data[0].qty + 7} DT</p>
          </div>
          {devider}
          <button
            disabled={!clientName || !clientPhoneNumber || !clientLoc}
            onClick={post}
            className="bg-white lg:w-full hover:bg-slate-900 transition-all duration-200 cursor-pointer h-11 text-black font-extrabold flex items-center justify-center text-xl pt-1 mt-4 "
          >
            CHECKOUT
          </button>
          <p className="text-sm w-full text-center pt-2">
            Need Help? Call us at : 50 732 964
          </p>
          {devider}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
const devider = <div className="h-[1.2px] bg-white my-2"></div>;

const Table = ({ data, setShow }) => {
  return (
    <div className="flex flex-col p-4 lg:px-52  lg:w-[70vw]">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8  lg:w-[60vw]">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 lg:text-sm text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PRODUCT
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 lg:text-sm text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PRICE
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-3 lg:text-sm text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((e) => (
                  <tr key={e.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex  flex-col  gap-2">
                        <div className="flex-shrink-0  w-20 lg:w-40">
                          <img
                            className="w-20 rounded-2xl lg:w-32"
                            src={e.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-[10px] lg:text-lg font-extrabold text-gray-900">
                            {e.name}
                          </div>
                          <div className="text-[10px] lg:text-sm text-gray-600">
                            Size : {e.size}
                          </div>
                          <div className="text-[10px] lg:text-sm text-gray-600">
                            Qty : {e.qty}
                          </div>
                          <div className="text-[10px] lg:text-sm text-gray-600">
                            Color : {e.color}
                          </div>
                          <div className="text-[10px] flex items-center gap-2 text-black lg:text-sm ">
                            CHECKED OUT :{" "}
                            {e.placed ? (
                              <p className="bg-green-500 h-full text p-1 rounded-2xl w-22 text-[10px]">
                                WAINTING FOR SHIPPING
                              </p>
                            ) : (
                              <p className="bg-red-500 h-full text p-1 rounded-2xl w-22 text-[10px]">
                                NOT ORDERED
                              </p>
                            )}
                          </div>
                          <div className=" text-[10px] lg:text-sm font-extrabold text-gray-900 flex gap-2">
                            <p
                              className="cursor-pointer hover:text-red-500 transition-all duration-100"
                              onClick={() => {
                                localStorage.removeItem("toBuy");
                                window.location.href = "/";
                              }}
                            >
                              Remove
                            </p>
                            <p>|</p>
                            <p
                              className="cursor-pointer hover:text-blue-500 transition-all duration-100"
                              onClick={() => {
                                setShow(true);
                              }}
                            >
                              Edit
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className=" py-4 px-4 whitespace-nowrap">
                      <div className="text-sm lg:text-lg text-gray-900 font-extrabold">
                        {e.price} DT
                      </div>
                    </td>
                    <td className=" py-4 px-4 whitespace-nowrap">
                      <div className="text-sm lg:text-lg text-gray-900 font-extrabold">
                        {e.price * e.qty} DT
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
const EditPopUp = ({
  setShow,
  size,
  setSize,
  color,
  setColor,
  qty,
  setQty,
  editOrder,
}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShow(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto flex flex-col gap-4">
              <DropDown size={size} setSize={setSize} />
              {/* <h1>Color : </h1> */}
              {/* <div className="flex gap-2">
                <div
                  onClick={() => setColor("black")}
                  className="h-7 w-7 bg-black rounded-xl cursor-pointer hover:blur-sm transition-all duration-150"
                ></div>
                <div
                  onClick={() => setColor("beige")}
                  className="h-7 w-7 bg-amber-200 rounded-xl cursor-pointer hover:blur-sm transition-all duration-150"
                ></div>
                {color}
              </div> */}
              <div className="flex gap-4">
                <h1>Quantitie :</h1>
                <input
                  onChange={(e) => setQty(e.target.value)}
                  type="number"
                  className="border w-10 border-black "
                  min={0}
                  max={5}
                />
                {qty}
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  editOrder();
                  setShow(false);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
