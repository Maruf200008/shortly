import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF, FaPinterestP } from "react-icons/fa"
import logo from "../images/footer-logo.svg"
const Footer = () => {
  return (
    <div className=" bg-[#232027]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="grid lg:grid-cols-5 gap-5 py-20 w-full text-center lg:text-left space-y-5 lg:space-y-0">
          <div className=" flex items-center justify-center lg:items-start lg:justify-start">
            <img src={logo} alt="logo" />
          </div>
          <div className=" text-white space-y-5">
            <p className=" text-3xl font-bold">Features</p>
            <ul className=" space-y-3 text-lg text-gray-400 font-medium">
              <li className=" hover:text-secondary transition">
                <a href="/">Link Shortening</a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">Branded Links</a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">Analytics</a>
              </li>
            </ul>
          </div>
          <div className=" text-white space-y-5">
            <p className=" text-3xl font-bold">Resources</p>
            <ul className=" space-y-3 text-lg text-gray-400 font-medium">
              <li className=" hover:text-secondary transition">
                <a href="/">Blog</a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">Developers</a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className=" text-white space-y-5">
            <p className="text-3xl font-bold">Company</p>
            <ul className="space-y-3 text-lg text-gray-400 font-medium">
              <li className=" hover:text-secondary transition">
                <a href="/">About</a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">Our Team</a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-center lg:items-start lg:justify-start">
            <ul className=" flex items-center gap-10   text-white">
              <li className=" hover:text-secondary transition">
                <a href="/">
                  {" "}
                  <FaFacebookF size={30} />
                </a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">
                  {" "}
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">
                  {" "}
                  <FaPinterestP size={30} />
                </a>
              </li>
              <li className=" hover:text-secondary transition">
                <a href="/">
                  {" "}
                  <BsInstagram size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
