import React from 'react';

const Dropdown = ({ label, items, isOpen, toggleDropdown }) => {
  return (
    <div className="dropdown relative">
      <div
        onClick={toggleDropdown}
        className="flex gap-[.25rem] cursor-pointer items-center bg-[#0784c3] px-[.5rem] py-[.25rem] text-[0.78515625rem] text-white rounded-[0.375rem] transition-all hover:bg-[#0670a6]"
      >
        {label} <img src="/assets/down-arrow.png" alt="" />
      </div>
      {isOpen && (
        <div
          className="min-w-[18rem] z-[99] right-0 bg-white absolute mt-3 text-[.78515625rem] p-4 rounded-[0.5rem]"
          style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'}}
        >
          <div className="text-end text-[10.05px] text-[#6c757d] mt-n2 mb-1">Sponsored</div>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[#6c757d]">
                <a href="#" className="text-dark">
                  <div className="inline-flex items-center gap-2 mt-2">
                    <img width="24" src={item.imgSrc} alt="ads" />
                    <span className="text-[.9062rem] font-medium">{item.title}</span>
                  </div>
                  <div className="text-[#0784c3] font-medium mb-2 inline-block">
                    {item.description}
                    <span className="rounded-[50rem] py-1 px-2 text-[9.42188px] border border-[#e9ecef] text-[#0784c3] bg-opacity-10 bg-[#0784c31a]">
                      {item.cta}
                    </span>
                  </div>
                  <p className="mb-0 text-[12.5625px] font-normal">{item.details}</p>
                </a>
              </span>
              {index < items.length - 1 && <hr className="hr-space" />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
