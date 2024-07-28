const Memos = ({ visitors }) => {
  return (
    <>
      <div className="w-full bg-white mt-10">
        <p className="font-semibold text-center">Records</p>
        <div className="relative shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 pl-14 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Time-stamp</th>
                <th scope="col" className="py-3">WalletAddress</th>
              </tr>
            </thead>
          </table>
          <div className="h-[250px] overflow-x-auto">
            {visitors.toReversed().map((memo) => {
              const timestamp = BigInt(memo.timestamp);
              const dateobj = new Date(Number(timestamp * 1000n)).toString();
              return (
                <div
                  key={Math.random()}>
                  <table className="w-screen text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <td scope="row" className="px-6 py-4">{memo.name}</td>
                        <td scope="row" className="px-6 py-4">{dateobj}</td>
                        <td scope="row" className="px-6 py-4">{memo.walletAddress}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Memos;