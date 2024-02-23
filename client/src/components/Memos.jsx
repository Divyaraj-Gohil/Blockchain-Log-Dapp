import { useState, useEffect } from "react";
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

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}><big>Records</big></p>
      <table>
      <thead>
                <tr>
                    <td
                    style={{
                        backgroundColor: "#4ca8ff",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "100px",
                        color:"white",
                      }}><big>Name</big></td>

                    <td
                    style={{
                        backgroundColor: "#4ca8ff",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "300px",
                        color:"white",
                      }}
                    
                    ><big>ContactDetails</big></td>

                    <td
                    style={{
                        backgroundColor: "#4ca8ff",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "400px",
                        color:"white",
                      }}

                    ><big>WalletAddress</big></td>

                    <td
                    style={{
                        backgroundColor: "#4ca8ff",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "400px",
                        color:"white",
                      }}
                    ><big>Purpose</big></td>
                </tr>
                 </thead>
      </table>
      {visitors.map((memo) => {
        return (
          
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >     
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor:"#4cffa8",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  {/* <td
                    style={{
                      backgroundColor: "#4cffa8",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                   {new Date(BigInt(memo.timestamp * 1000)).toLocaleDateString()}
                  </td> */}
                  <td
                    style={{
                        backgroundColor: "#4cffa8",
                        border: "1px solid white",
                        borderCollapse: "collapse",
                        padding: "7px",
                        width: "300px",
                      }}
                  >
                    {memo.contactDetails}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#4cffa8",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.walletAddress}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#4cffa8",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.purpose}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};
export default Memos;
