import { useState, useEffect } from "react";
import "./memo.css";
const Memos = ({ state }) => {
  const [visitors, setvisitors] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const visitors = await contract.getVisitor();
      setvisitors(visitors);
    };
    contract && memosMessage();
  }, [contract]);
  const obj = visitors;

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}><big>Records</big></p>
      <table>
        <thead>
          <tr>
            <td className="tablename" style={{backgroundColor:"#4ca8ff"}}><big>Name</big></td>
            {/* <td style={{width:"15%",backgroundColor:"#4ca8ff"}}><big>ContactDetails</big></td>
            <td style={{width:"15%",backgroundColor:"#4ca8ff"}}><big>Purpose</big></td> */}
            <td className="tabletime" style={{backgroundColor:"#4ca8ff"}}><big>Time-stamp</big></td>
            <td className="tableadd" style={{backgroundColor:"#4ca8ff"}}><big>WalletAddress</big></td>
          </tr>
        </thead>
      </table>
      <div className="scroll">
      {visitors.toReversed().map((memo) => {
        const timestamp = BigInt(memo.timestamp);
        const dateobj = new Date(Number(timestamp * 1000n)).toString();
        return (
          <div
          key={Math.random()}>
            <table>
              <tbody>
              <tr>
                <td className="tablename" id="nametable">{memo.name}</td>
                {/* <td id="detail">{memo.contactDetails}</td>
                <td id="pur">{memo.purpose}</td> */}
                <td className="tabletime" id="timestamp">{dateobj}</td>
                <td className="tableadd" id="Address">{memo.walletAddress}</td>
              </tr>
              </tbody>
            </table>
          </div>
        );
      })}
      </div>
    </>
  );
};
export default Memos;
