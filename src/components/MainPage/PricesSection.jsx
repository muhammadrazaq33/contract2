import React from 'react';
import navIcon from "../../../public/assets/algorand-algo-icon.svg";
import transaction2 from "../assets1/transaction-2.svg";
import transaction3 from "../assets1/transaction-3.svg";
import transaction4 from "../assets1/transaction-4.svg";

export const PricesSection = () => {
  return (
    <div className=" ">
      <div
        className="card py-10  mb-4 mt-[-3rem] rounded-[0.75rem] bg-[#121212]"
        style={{ boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)" }}
      >
        <div className="grid grid-cols-12 gap-3 md:gap-0 ">
          {/* first block */}
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] border-[#23262F] md:flex flex-col gap-8">
            {/* sub block */}
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={navIcon}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="lg:text-[14px] text-[12px] text-[#A5A5AB] mb-[1px]">
                  ALGO PRICE
                </div>
                <a
                  class="text-[white] lg:text-[16px] text-[14px]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $3,259.20
                  <span class="text-[white] text-[14px] lg:text-[16px]">
                    {" "}
                    @ 0.047952 BTC{" "}
                  </span>
                  <span class="text-[#dc3545]  lg:text-[16px] text-[14px]">
                    (-0.28%)
                  </span>
                </a>
              </div>
            </div>
            <hr className="border-[#23262F] md:hidden block py-3" />
            {/* sub block */}
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={transaction3}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="text-[14px] text-[#A5A5AB] mb-[1px]">
                  MARKET CAP
                </div>
                <a
                  class="text-[white] text-[16px] hover:text-[#066a9c]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $3,259.20{" "}
                  <span class="text-[white] text-[16px] ">
                    {" "}
                    @ 0.047952 BTC{" "}
                  </span>
                  <span class="text-[#46DB78] text-[.875em]">(-0.28%)</span>
                </a>
              </div>
            </div>
            <hr className="border-[#23262F] md:hidden block py-3" />
          </div>
          {/* second block */}
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#23262F] md:flex flex-col gap-8">
            {/* sub block */}
            <div className="flex items-start justify-between gap-2">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={transaction2}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="lg:text-[14px] text-[12px] text-[#A5A5AB] mb-[1px]">
                  TRANSACTIONS
                </div>
                <a
                  class="text-[white] hover:text-[#066a9c] lg:text-[16px] text-[14px]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  2,449.39 M
                  <span class="text-[white] lg:text-[16px] text-[14px]">
                    {" "}
                    (14.5 TPS)
                  </span>
                </a>
              </div>
              <div className="text-end">
                <div class="lg:text-[14px] text-[12px] text-[#A5A5AB] mb-[1px]">
                  MED GAS PRICE
                </div>
                <a
                  class="text-[white] lg:text-[16px] text-[12px]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  1 Gwei{" "}
                  <span class="text-[white] lg:text-[16px] text-[14px]">
                    {" "}
                    ($0.36)
                  </span>
                </a>
              </div>
            </div>
            <hr className="border-[#23262F] md:hidden block  py-3" />

            {/* sub block */}
            <div className="flex items-start">
              <div className="text-center me-3 p-[4px] bg-[#328332] rounded-[18px]">
                <img
                  src={transaction4}
                  className="w-[24px]  mx-auto max-w-full h-auto"
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <div class="lg:text-[14px] text-[12px] text-[#A5A5AB] mb-[1px]">
                  LAST FINALIZED BLOCK
                </div>
                <a
                  class="text-[white]  lg:text-[16px] text-[14px]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  20363522
                </a>
              </div>
              <div className="text-end">
                <div class="lg:text-[14px] text-[12px] text-[#A5A5AB] mb-[1px]">
                  LAST SAFE BLOCK
                </div>
                <a
                  class="text-[white] text-[16px] hover:text-[#066a9c]"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  20363553
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-4 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#23262F] mt-4">
            <div class="text-[#A5A5AB] lg:text-[14px] text-[12px] mb-[1px]">
              TRANSACTION HISTORY IN 14 DAYS
            </div>
            <div className="w-100 pt-2 h-[105px]">
              <img
                src="/assets/chart1.png"
                className="max-w-full h-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
