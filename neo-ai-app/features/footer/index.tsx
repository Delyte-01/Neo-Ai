import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  AppleIcon,
  StoreIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-12 px-6 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  p-2">
        {/* Left */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4">
            Intelligent solutions for effortless <br /> shopping, delivery, and
            travel planning.
          </h3>
          <p className="mt-4 mb-2 font-medium">Follow Us</p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="hover:text-gray-400 rounded-full border p-1 "
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-400 rounded-full border p-1">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-400 rounded-full border p-1">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-400 rounded-full border p-1">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="space-y-2  flex  md:justify-center ">
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Advantages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Download and Simplify!</h4>
          <p className="text-sm text-gray-300 mb-4">
            A smart app for shopping, delivery, and travel — available on the
            App Store and Google Play.
          </p>
          <div className="flex flex-wrap gap-3 ">
            <a
              href="#"
              className="flex items-center gap-2  rounded-md px-3 py-2 h-17 w-45 bg-white"
            >
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748941307/apple_1-removebg-preview_nfkiqr.png"
                alt=""
              />
            </a>
            <a
              href="#"
              className="flex items-center gap-2  rounded-md px-3 py-2 bg-white h-17 w-45"
            >
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748941307/google_play-removebg-preview_xnygej.png"
                alt=""
                className=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
