import React, { useState } from "react";
import sortAsc from "../assets1/Vector.png";
import sortDesc from "../assets1/Vector.png";

const TransactionTable = ({ tableHeading, data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full bg-transparent">
        <thead>
          <tr>
            {tableHeading.map((header, index) => (
              <th
                key={index}
                className={`py-6 px-4 bg-[#262626] border-none text-left text-[14px] font-medium cursor-pointer`}
                style={{ color: header.color }}
                onClick={() => requestSort(`col${index + 1}`)}
              >
                <div className="flex items-center justify-between">
                  {header.name}
                  {header.img ? (
                    <img src={header.img} alt="" className="ml-1" />
                  ) : (
                    ""
                  )}
                  <img
                    src={
                      sortConfig.key === `col${index + 1}`
                        ? sortConfig.direction === "ascending"
                          ? sortAsc
                          : sortDesc
                        : sortAsc
                    }
                    alt="Sort Icon"
                    className="ml-2 w-[7px] h-[9px] object-contain"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} className="hover:bg-[#262626]">
              <td className="py-5 px-4 border-none text-white text-sm flex items-end gap-1">
                <img src={row.col1.img} alt="" className="cursor-pointer" />
                <span style={{ color: row.col1.color }}>{row.col1.value}</span>
                <img src={row.col1.img1} alt="" className="cursor-pointer" />
              </td>
              <td className="py-5 px-4 border-none text-white text-sm">
                {row.col2}
              </td>
              <td className="py-5 px-4 border-none text-[#46DB78] text-sm">
                {row.col3.value}
              </td>
              <td className="py-5 px-4 border-none text-white text-sm">
                {row.col4}
              </td>
              <td className="py-5 px-4 border-none flex items-center gap-1 text-[#46DB78] text-sm">
                {row.col5.value}
                <img src={row.col5.img} alt="" />
              </td>
              <td className="py-5 px-4 border-none text-sm flex items-center gap-1">
                <img src={row.col6.img} alt="" />
                <p className={`${row.col6.color}`}> {row.col6.value}</p>
                <img src={row.col6.img1} alt="" />
              </td>
              <td className="py-5 px-4 border-none text-white text-sm ">
                <span>{row.col7}</span>
              </td>
              <td className="py-5 px-4 border-none text-white">
                <span >{row.col8}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
