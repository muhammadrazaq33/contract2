import React, { useState } from "react";
import Table from "./TransactionTable";
import { Pagination } from "./Pagination";
import method from "../assets1/method.svg"
import eyeIcon from "../assets1/eye-icon.svg"
// import documentIcon from "../assets1/document-icon.svg"
import noteIcon from "../assets1/note-icon.svg"

const tableHeading = [
  {
    id: 1,
    name: "Transaction Hash",
    color: "white",
  },
  {
    id: 2,
    name: "Method",
    color: "white",
    img: method,
  },
  {
    id: 3,
    name: "Block",
    color: "white",
  },
  {
    id: 4,
    name: "Age",
    color: "#46DB78",
  },
  {
    id: 5,
    name: "From",
    color: "white",
  },
  {
    id: 6,
    name: "To",
    color: "white",
    img:method
  },
  {
    id: 7,
    name: "Amount",
    color: "#46DB78",
  },
  {
    id: 8,
    name: "Txn Fee",
    color: "#46DB78",
  },
];

export const TransactionAll = () => {
  const [data, setData] = useState([
    {
      col1: {
        img: eyeIcon,
        value: "0x5ca348623be...",
        img1: "/assets/document-icon",
        color: "#46DB78",
      },
      col2: "Transfer",
      col3: {
        color: "#46DB78",
        value: "20402437",
      },
      col4: "2 secs ago",
      col5: {
        value: "0x9Dd44195...DFa2Ddd15",
        color: "#46DB78",
        img: "/assets/document-icon",
      },
      col6: {
        img: noteIcon,
        value: "Lido: Execution Layer Rew..",
        img1: "/assets/document-icon",
        color: "#46DB78",
      },
      col7: "0.012603628 Algo",

      col8: "0.00003207",
    },

    // Add more rows as needed
  ]);
  return (
    <div className="mt-10 ">
      <div
        className="card py-5    mb-4   rounded-[0.75rem] bg-[#121212]"
        style={{ boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)" }}
      >
        <div className="p-5 flex items-center justify-center md:justify-between md:flex-row flex-col gap-4 text-center md:text-start">
          <div>
            <h1 className="text-white font-semibold text-[20px]">
              More than 2,455,540,271 transactions found.
            </h1>
            <p className="text-[#A5A5AB] font-normal text-[16px] mt-2">
              Displaying the most recent 500,000 records.
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className="text-white bg-[#FF0F0F]  flex items-center gap-1 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-[20px] py-[10px]   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <img src="/assets/file-download.png" alt="" />
              Download Page Data
            </button>
          </div>
        </div>
        <div className="overflow-hidden overflow-x-auto">
          <Table tableHeading={tableHeading} data={data} />
        </div>
        <div className="py-3 px-5 flex justify-between items-center flex-col md:flex-row ">
          <Pagination />
          <div className="flex items-center gap-3 ">
            <div>
              <p className="text-sm text-white">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
