'use client'
import  { useEffect, useState } from 'react'
// import Logo from './logo'
// import NavBar from './navBar'
import Image from 'next/image'
import Link from 'next/link'
import { AlignJustify, X } from 'lucide-react'
import { navbarItems } from '@/lib/nav'
import { Button } from '@/components/ui/button'

const HeaderSection = () =>
{
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScroll(window.scrollY > 20);
      };
      if (typeof window !== "undefined") {
        setIsScroll(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);
  
  return (
    <section
      className={`fixed left-[50%] -translate-x-[50%] w-[95%] flex justify-between items-center z-30   py-2.5 px-4 transition-all font-sora duration-500  bg-white/5  rounded-4xl backdrop-blur-md   text-white shadow-lg shadow-[#52398a] ${
        isScroll
          ? "md:max-w-[876px] max-w-[90%]  shadow-nav top-9 bg-white/5 rounded-4xl backdrop-blur-md "
          : "md:max-w-[1200px] max-w-full   shadow-none top-3 md:rounded-none  md:bg-transparent md:backdrop-blur-none"
      }`}
    >
      <Link href={"/"}>
        <div className="w-[130px]  h-[50px] flex  items-center ">
          <Image
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1747752970/neo-logo-removebg-preview_m51guf.png"
            alt="logo"
            width={100}
            height={70}
          />
        </div>
      </Link>
      <section className="items-center justify-center hidden gap-9 px-4 py-3 text-base font-normal  md:flex flex-1 md:mx-3 ">
        {navbarItems.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="whitespace-nowrap text-[16px]"
          >
            {link.title}
          </Link>
        ))}
      </section>
      <section className="items-center justify-center hidden gap-6 md:flex">
        <Link href={"/"}>
          <Button className="text-sm font-normal text-white  rounded-full inset-ring-2 inset-ring-[#bbb5c8] bg-transparent py-4 px-4 whitespace-nowrap cursor-pointer ">
            Download Now
          </Button>
        </Link>
      </section>
      <div
        className="flex cursor-pointer md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <X className="sm:size-7 size-5" />
        ) : (
          <AlignJustify className="sm:size-7 size-5" />
        )}
      </div>
      <NavMobile isOpen={isOpen} />
    </section>
  );
}

export default HeaderSection
interface NavMobileProps {
  isOpen: boolean;
}
const NavMobile = ({ isOpen }: NavMobileProps) => {
  return (
    <section
      className="absolute md:hidden flex flex-col items-start justify-start px-2 py-6 top-20 w-full  rounded-[12px] shadow-card transition-all duration-300 "
      style={{ right: isOpen ? 0 : "-200%" }}
    >
      {navbarItems.map((link, index) => (
        <Link
          href={link.link}
          key={index}
          className="whitespace-nowrap px-5 py-3.5 border-b-[0.5px] border-b-light-grey-02/50 w-full text-base text-white"
        >
          {link.title}
        </Link>
      ))}
      <section className="flex flex-col items-start justify-start w-full gap-4">
        <Link href={"/"}>
          <Button className="text-sm font-normal text-white bg-primary border border-primary rounded-lg py-2.5 px-4 whitespace-nowrap cursor-pointer">
            Download Now
          </Button>
        </Link>
      </section>
    </section>
  );
};