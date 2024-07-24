import abi from "./contractJson/VisitorRecord.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Register from "./components/Register.jsx"
import Memos from "./components/Memos.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected")
  const [visitors, setvisitors] = useState([])
  const [update, setupdate] = useState()
  const { contract } = state;
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x089E18E69ac03885110Cfd875EEA788f90EC0ACF";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          let useracc = account[0];

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.BrowserProvider(ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(useracc);
          setState({ provider, signer, contract });
        } else {
          alert("Please install web3 Wallet i.e.(Metamask)");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, [account]);
  useEffect(() => {
    const memosMessage = async () => {
      const visitorscon = await contract.getVisitor();
      setvisitors(visitorscon);
    };
    contract && memosMessage();
  }, [contract, update])

  const updatefun = (name) => {
    setupdate(name)
  }
  return (<>
    <div className="lg:w-[80%] w-[350px] max-h[100vh] mx-auto">
      <p className="text-center my-2 text-gray-400">
        <big className="font-semibold">Connected Address - {account}</big>
      </p>
      <Register state={state} updatefun={updatefun} />
      <Memos visitors={visitors} />
      <ToastContainer position="top-center" theme="dark" />
    </div>
  </>
  );
}

export default App;