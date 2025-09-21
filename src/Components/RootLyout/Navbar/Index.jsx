import React, { useState, useRef, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { FaBars, FaRegHeart, FaTimes, FaUser } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
      pathRoute: "/",
    },

    {
      id: 2,
      item: "Contact",
      pathRoute: "/contact",
    },

    {
      id: 3,
      item: "Product",
      pathRoute: "/product",
    },

    {
      id: 4,
      item: "SignUp",
      pathRoute: "/singup",
    },
  ];
  const [toggle, settoggle] = useState(false);
  const [account, setAccount] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };

  const handleToogleMenu = () => {
    settoggle(!toggle);
  };
  return (
    <div className="pt-10 pb-4  border-b-[2px] border-b-textMuted">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-bold font-inter text-textPrimary cursor-pointer hover:text-black_363738">
              Exclusive
            </h1>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center lg:gap-x-[36px] xl:gap-x-[60px]">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menuUnderLine">
                  <NavLink
                    to={`${nav.pathRoute}`}
                    className={({ isPending, isActive }) =>
                      isPending
                        ? "text-black text-[17px] font-normal font-poppins"
                        : isActive
                        ? "text-red-500 text-[17px] font-normal font-poppins"
                        : "text-black text-[17px] font-normal font-poppins"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-1/3   relative  flex items-center justify-between ">
            <div className="hidden sm:block sm:mr-6 lg:mr-0">
              <input
                type="text"
                className="py-2 bg-lightGray rounded px-8 md:w-[300px]  lg:w-fit lg:mr-5 xl:mr-0"
                placeholder="you looking for?"
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-xl sm:right-[39%]  md:right-[36%] lg:right-[38%] xl:right-[45%] ">
                <FcSearch />
              </span>
            </div>
            <div className="flex items-center gap-x-[20px] relative">
              <span className="text-textMuted text-2xl cursor-pointer">
                <FaRegHeart />
              </span>
              <span className="text-textMuted text-2xl amount cursor-pointer">
                <BsCart />
              </span>
              <span
                className="text-softWhite text-xl rounded-full bg-accentRed p-2 cursor-pointer relative"
                onClick={handleAccount}
              >
                <FaUser />
              </span>
              {account && (
                <div
                  className={`absolute right-[0%] top-[150%] z-30 bg-[rgba(0,0,0,0.68)] w-[300px] flex flex-col gap-y-5 py-7 rounded `}
                >
                  <div className="flex items-center gap-x-2 hover:bg-lightGray hover:py-3 transition-all hover:text-textPrimary text-lightGray pl-5 hover:cursor-pointer">
                    <span className=" text-3xl ">
                      <LuUser />
                    </span>
                    <h3 className="text-xl font-normal font-poppins ">
                      Manage My Account
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-lightGray hover:py-3 transition-all  hover:text-textPrimary text-softWhite pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <LuShoppingBag />
                    </span>
                    <h3 className="text-xl font-normal font-poppins">
                      My Order
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-lightGray hover:py-3 transition-all  hover:text-textPrimary text-softWhite pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <ImCancelCircle />
                    </span>
                    <h3 className=" text-xl font-normal font-poppins">
                      My Cancellations
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-lightGray hover:py-3 transition-all  hover:text-textPrimary text-softWhite pl-5 hover:cursor-pointer">
                    <span className=" text-3xl">
                      <IoMdStarOutline />
                    </span>
                    <h3 className="text-xl font-normal font-poppins">
                      My Reviews
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-2 hover:bg-lightGray hover:py-3 transition-all  hover:text-textPrimary text-softWhite pl-5 hover:cursor-pointer">
                    <span className="text-3xl">
                      <RiLogoutCircleLine />
                    </span>
                    <h3 className="text-xl font-normal font-poppins">Logout</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
          <span
            className="text-xl mr-3 cursor-pointer lg:hidden"
            onClick={handleToogleMenu}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </span>
        </div>

        {/* mobile menu */}
        {toggle && (
          <div className="lg:hidden bg-lightGray py-5 my-5">
            <ul className="flex flex-col gap-y-3 items-center">
              {navItem?.map((nav) => (
                <li key={nav.id}>
                  <NavLink
                    to={`${nav.pathRoute}`}
                    className={({ isPending, isActive }) =>
                      isPending
                        ? "text-black text-[17px] font-normal font-poppins"
                        : isActive
                        ? "text-red-500 text-[17px] font-normal font-poppins"
                        : "text-black text-[17px] font-normal font-poppins"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
