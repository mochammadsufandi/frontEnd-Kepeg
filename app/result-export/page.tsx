import { Navbar } from "../components/navbar";
import TableResult from "../components/tableResult";

const ResultExport = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[5rem] py-[2rem] bg-navbarText">
        <div className="w-full flex flex-wrap items-center justify-center">
          <button
            type="button"
            className="text-white font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
          >
            Export Result to Word
          </button>
        </div>
        <TableResult />
      </div>
    </div>
  );
};

export default ResultExport;
