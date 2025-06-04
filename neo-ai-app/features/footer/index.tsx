import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  AppleIcon,
  StoreIcon,
} from "lucide-react";
import Link from "next/link";

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
          <div className="flex gap-3 items-center">
            <p>contact us :</p>
            <span>08139760048</span>
          </div>

          <p className="mt-4 mb-2 font-medium">Follow Us</p>

          <div className="flex gap-4 mt-2">
            <Link
              href="#"
              className="hover:text-gray-400 rounded-full border p-1 "
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 rounded-full border p-1"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 rounded-full border p-1"
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 rounded-full border p-1"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="space-y-2  flex  md:justify-center flex-col ">
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#features" className="hover:text-gray-300">
                About us
              </Link>
            </li>
            <li>
              <Link href="#benefits" className="hover:text-gray-300">
                Advantages
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#review" className="hover:text-gray-300">
                Review
              </Link>
            </li>
          </ul>
          <p className="text-sm text-gray-300 font-sora">
            Crafted with precision and passion by <strong>DelyteTech💡</strong>.
            Delivering sleek, responsive, and intelligent web experiences
            powered by GSAP, Next.js, and Tailwind CSS. <br />
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Download and Simplify!</h4>
          <p className="text-sm text-gray-300 mb-4">
            A smart app for shopping, delivery, and travel — available on the
            App Store and Google Play.
          </p>
          <div className="flex flex-wrap gap-3 ">
            <Link
              href={
                "https://www.bing.com/search?q=apple%20store%20download&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=apple%20store%20download&sc=12-20&sk=&cvid=604832AC0F35459EABE3948E155B61F6"
              }
              className="flex items-center gap-2  rounded-md px-3 py-2 h-17 w-45 bg-white"
            >
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748941307/apple_1-removebg-preview_nfkiqr.png"
                alt=""
              />
            </Link>
            <Link
              href={
                "https://www.bing.com/search?qs=AS&pq=google+play+&sk=CSYN1&sc=15-12&pglt=41&q=google+play+store&cvid=332718646cb749739c95d2068a00b2aa&gs_lcrp=EgRlZGdlKgYIARAAGEAyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQLhhAMgYIBRAuGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDzSAQkxNTU2MWowajGoAgCwAgA&FORM=ANNTA1&PC=U531"
              }
              className="flex items-center gap-2  rounded-md px-3 py-2 bg-white h-17 w-45"
            >
              <img
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1748941307/google_play-removebg-preview_xnygej.png"
                alt=""
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
