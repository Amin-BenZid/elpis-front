import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const notify = () => toast("WRONG !");
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const loginData = {
    userName: userName,
    password: password,
  };
  const login = () => {
    axios
      .post("http://localhost:4000/api/admin/login", loginData)
      .then((response) => {
        localStorage.setItem("authorization", response.data.token);
        navigate("/admin");
      })
      .catch((error) => {
        console.error(error.response);
        notify();
      });
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-black w-96 h-96 rounded-lg flex flex-col  gap-8 items-center justify-center">
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="UsesrName"
          className="w-[70%] rounded-md h-12 border border-white p-3"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-[70%] rounded-md h-12 border border-white p-3"
        />
        <button
          onClick={login}
          className="bg-white hover:bg-slate-500 transition-all duration-200 cursor-pointer rounded-lg h-11 text-black font-extrabold flex items-center justify-center text-xl pt-1 mt-4 lg:w-60"
        >
          LoginIn
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
