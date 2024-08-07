import React from 'react'
import navIcon from "../../../public/assets/algorand-algo-icon.svg";
import transaction2 from "../assets1/transaction-2.svg";
import transaction3 from "../assets1/transaction-3.svg";
import transaction4 from "../assets1/transaction-4.svg";

// md:border-l border-[#e9ecef]
const TransactionPriceSection = () => {
  return (
    <div className=" ">
      <div
        className="card py-10  mb-4 mt-[-3rem] rounded-[0.75rem] bg-[#121212]"
        style={{ boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)" }}
      >
        <div className="grid grid-cols-12 gap-4 md:gap-0">
          {/* first block */}
          <div className="md:col-span-6 lg:col-span-3 md:px-[2.5rem] col-span-12 px-[15px]">
            <div className="">
              <div className="flex-grow">
                <a
                  class="text-[#FFF] text-[20px] font-medium"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  1,073,935
                  <span class="text-[#46DB78]  text-[14px] font-normal">
                    {" "}
                    (05.69%)
                  </span>
                </a>
              </div>
              <span class="text-[#A5A5AB] font-normal text-[13px]">
                TRANSACTIONS (24H)
              </span>
            </div>
          </div>
          {/* end of first block */}
          {/* second block */}
          <div className="md:col-span-6 lg:col-span-3 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div className="">
              <div className="flex-grow">
                <a
                  class="text-[#FFF] text-[20px] font-medium"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  98,010
                  <span class=" text-[14px] font-normal"> (Average)</span>
                </a>
              </div>
              <span class="text-[#A5A5AB] font-normal text-[13px]">
                PENDING TRANSACTIONS (LAST 1H)
              </span>
            </div>
          </div>
          {/* end of second block */}
          {/* third section */}
          <div className="md:col-span-6 lg:col-span-3 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div className="">
              <div className="flex-grow">
                <a
                  class="text-[#FFF] text-[20px] font-medium"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  448.40 ETH
                  <span class="text-[#BC313E]  text-[14px] font-normal">
                    {" "}
                    (65.36%)
                  </span>
                </a>
              </div>
              <span class="text-[#A5A5AB] font-normal text-[13px]">
                NETWORK TRANSACTIONS FEE (24H)
              </span>
            </div>
          </div>
          {/* end of third section */}
          {/* fourth section */}
          <div className="md:col-span-6 lg:col-span-3 md:px-[2.5rem] col-span-12 px-[15px] md:border-l border-[#e9ecef]">
            <div className="">
              <div className="flex-grow">
                <a
                  class="text-[#FFF] text-[20px] font-medium"
                  href="#"
                  rel="tooltip"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                >
                  $2.58 USD
                  <span class="text-[#46DB78]  text-[14px] font-normal">
                    {" "}
                    (70.88%)
                  </span>
                </a>
              </div>
              <span class="text-[#A5A5AB] font-normal text-[13px]">
                AVG. TRANSACTION FEE (24H)
              </span>
            </div>
          </div>
          {/* end of fourth section */}
        </div>
      </div>
    </div>
  );
}

export default TransactionPriceSection
