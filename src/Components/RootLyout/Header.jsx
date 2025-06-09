import React from "react";

const Header = () => {
  return (
    <div className="bg-textPrimary py-3 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div></div>
          <div>
            <h2 className="text-white font-popins text-[15px]   font-normal hidden  sm:block">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>

            <h2 className="text-white font-popins text-[15px]   font-normal sm:hidden">
              {new String(`Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!`)
                .slice(0, 30)
                .concat("  ....")}
            </h2>
          </div>
          <div>
            <select
              name=""
              id=""
              className="bg-transparent text-white font-popins text-[15px] font-normal"
            >
              <option value="#">English</option>
              <option value="">Bangla</option>
              <option value="#">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
