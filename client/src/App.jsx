import abi from "./contractJson/VisitorRecord.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/register";
import Memos from "./components/Memos";
import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
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
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <p
        className="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px" }}
      >
        <big>Connected Address - {account}</big>
      </p>
      <div className="container">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;