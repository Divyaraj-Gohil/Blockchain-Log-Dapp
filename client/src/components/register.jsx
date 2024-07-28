import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Register = ({ state, updatefun }) => {

  const [load, setload] = useState(false)
  const registerVisitor = async (event) => {
    setload(true)
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const contactDetails = document.querySelector("#contactDetails").value;
    const purpose = document.querySelector("#purpose").value;
    const amount = { value: ethers.parseEther("0.001") };
    const transaction = await contract.registerVisitor(name, contactDetails, purpose, amount);
    await transaction.wait();
    setload(false)
    toast.success("Transaction Done Successfully.")
    document.getElementById("form").reset();
    updatefun(name)
  };
  return (
    <>
      <div className="md:w-[40%] w-full bg-white flex justify-center items-center mt-3 shadow-2xl shadow-cyan-200 border border-t-[#3c3c3c66] rounded-xl">
        <form id="form" className="w-full" onSubmit={registerVisitor}>
          <div className="w-full mx-2 p-3 flex flex-col">
            <div className="m-2">
              <fieldset className="border border-[#3c3c3c66] px-4 rounded-xl ">
                <legend className="text-[#8f8f90]">Name</legend>
                <input
                  type="text"
                  className="w-full text-center outline-none"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                /></fieldset>
            </div>
            <div className="m-2">
              <fieldset className="border border-[#3c3c3c66] px-4 rounded-xl">
                <legend className="text-[#8f8f90]">ContactDetails</legend>
                <input
                  type="text"
                  className="w-full text-center outline-none"
                  id="contactDetails"
                  placeholder="Enter Your ContactDetails"
                  required
                /></fieldset>
            </div>
            <div className="m-2">
              <fieldset className="border border-[#3c3c3c66] px-4 rounded-xl">
                <legend className="text-[#8f8f90]">Purpose</legend>
                <input
                  type="text"
                  className="w-full text-center outline-none"
                  id="purpose"
                  placeholder="Enter Your Purpose"
                  required
                /></fieldset>
            </div>
            <button
              type="submit"
              className="w-[30%] mx-auto mb-2 mt-5 p-2 text-zinc-800 rounded-lg bg-green-200"
              disabled={!state.contract}
            >{
                load ? 'Please wait...' : 'Register'
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
