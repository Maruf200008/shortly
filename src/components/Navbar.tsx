import { useState } from "react"
import logo from "../images/logo.svg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={handleClick}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "hidden" : ""} w-full lg:block lg:w-auto`}
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border  border-gray-100 rounded-lg bg-primary lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white ">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white lg:text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 sm:text-[20px] "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/edit"
                  className="block py-2 pl-3 pr-4 text-white lg:text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 sm:text-[20px] "
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="/Link"
                  className="block py-2 pl-3 pr-4 text-white lg:text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-700 lg:p-0 sm:text-[20px] "
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
