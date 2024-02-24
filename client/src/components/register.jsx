import { ethers } from "ethers";
import "./register.css";
const register = ({ state }) => {
  const registerVisitor = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const contactDetails = document.querySelector("#contactDetails").value;
    const purpose = document.querySelector("#purpose").value;
    const amount = { value: ethers.parseEther("0.001") };
    const transaction = await contract.registerVisitor(name, contactDetails, purpose , amount);
    await transaction.wait();
    document.getElementById("form").reset();
    alert("Transaction is done");
  };
  return (
    <>
      <div className="container-md">
        <form id="form" onSubmit={registerVisitor}>
         <div className="main">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name : </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="contactDetails">ContactDetails : </label>
            <input
              type="text"
              className="form-control"
              id="contactDetails"
              placeholder="Enter Your Details"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="purpose">Purpose : </label>
            <input
              type="text"
              className="form-control"
              id="purpose"
              placeholder="Enter Your Purpose"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Register
          </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default register;
