import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

function NavbarComponent() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full relative z-10 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="rounded full px-[.5rem] py-[1rem]">
          <nav className="flex justify-between items-center px-[.5rem]">
            <div className="font-extrabold text-[2rem]">
              <Link className=" text-[#fff] hover:bg-[rgba(0, 183, 181, 0.1)]">
                Clipzap
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-4 px-4 py-2">
              <Link
                className=" transition-colors text-[1rem] text-white hover:text-[#00B7B5]"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className=" transition-colors text-[1rem] text-white hover:text-[#00B7B5]"
                to={"/features"}
              >
                Features
              </Link>
              <Link
                className=" transition-colors text-[1rem] text-white hover:text-[#00B7B5]"
                to={"/links"}
              >
                Links
              </Link>
              <Link
                className=" transition-colors text-[1rem] text-white hover:text-[#00B7B5]"
                to={"/account"}
              >
                Account
              </Link>
            </div>
            <Link
              className="hidden md:block  transition-transform text-[1rem] text-white hover:bg-[#00B7B5] px-4 py-2 rounded-full
             border
             border-[rgba(0, 183, 181, 0.1)] hover:bg-[rgba(0, 183, 181, 0.1)] hover:border-none"
              to={"/sign-in"}
            >
              Sign In
            </Link>
            <button
              className="text-white cursor-pointer md:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <RiCloseLargeFill size={30} />
              ) : (
                <HiOutlineMenuAlt2 size={30} />
              )}
            </button>
          </nav>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#000080] absolute top-full left-0 min-h-screen w-full transition transition-300 px-6 py-2 ease-in-out flex gap-6 flex-col text-2xl backdrop-blur-xl">
            <Link className=" text-[#fff] px-2 block" to={"/"}>
              Home
            </Link>
            <Link className="text-[#fff] px-2 block" to={"/features"}>
              Features
            </Link>
            <Link className="text-[#fff] px-2 block" to={"/links"}>
              Links
            </Link>
            <Link className="text-[#fff] px-2 block" to={"/account"}>
              Account
            </Link>
            <Link
              className="transition-transform text-[1.5rem] text-center  text-white hover:bg-[#00B7B5] px-4 py-2 rounded-full
             border
             border-[rgba(0, 183, 181, 0.1)] hover:bg-[rgba(0, 183, 181, 0.1)] hover:border-none"
              to={"/sign-in"}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarComponent;
