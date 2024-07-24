import { ethers } from "ethers";
import { useState } from "react";
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
      <div className="md:w-[50%] h-[40%] mx-auto mt-10 shadow-2xl border border-t-[#3c3c3c66] bg-[#F7F9F2] rounded-md">
        <form id="form" onSubmit={registerVisitor}>
          <div className="mx-2 p-3 flex flex-col">
            <div className="m-2">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                className="lg:w-[50%] w-[100%] outline-none border border-b-[#3c3c3c66] px-5 py-1 rounded-2xl"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="m-2">
              <label htmlFor="contactDetails">ContactDetail : </label>
              <input
                type="text"
                className="lg:w-[50%] w-[100%] outline-none border border-b-[#3c3c3c66] px-5 py-1 rounded-2xl"
                id="contactDetails"
                placeholder="Enter Your Details"
                required
              />
            </div>
            <div className="m-2">
              <label htmlFor="purpose">Purpose : </label>
              <input
                type="text"
                className="lg:w-[50%] w-[100%] outline-none border border-b-[#3c3c3c66] px-5 py-1 rounded-2xl"
                id="purpose"
                placeholder="Enter Your Purpose"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mb-2 mt-5 p-2 text-zinc-800 rounded-lg bg-green-200"
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
