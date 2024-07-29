import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="p-8 pt-40 px-14">
        <h1 className="font-extrabold text-2xl ">Contact</h1>
        <p>
          We’re here to help! Whether you have a question about our products, need
          assistance with your order, or just want to share your feedback, we’d love to
          hear from you. Your satisfaction is our top priority, and we’re committed to
          providing you with the best possible service.
        </p>
      </div>
      <div className="flex flex-col p-8 px-[20vw] gap-8 lg:items-center">
        <div className=" flex flex-col gap-8 w-full">
          <div className=" flex flex-col gap-8 lg:flex-row md:flex-row">
            <input
              placeholder="First Name"
              type="text"
              className="w-full h-12 border border-black p-3"
            />
            <input
              placeholder="Last Name"
              type="text"
              className="w-full h-12 border border-black p-3"
            />
          </div>
          <div className=" flex flex-col gap-8 lg:flex-row md:flex-row">
            <input
              placeholder="Email"
              type="email"
              className="w-full h-12 border border-black p-3"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full h-12 border border-black p-3"
            />
          </div>
        </div>
        <input
          placeholder="Message"
          type="text"
          className="w-full h-20 border border-black p-3"
        />
        <div className="bg-black hover:bg-slate-900 transition-all duration-200 cursor-pointer h-11 text-white font-extrabold flex items-center justify-center text-xl pt-1 mt-4 lg:w-60">
          Submit
        </div>
        <p>You Can call us at 50 732 964 </p>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
