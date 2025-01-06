import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[100] w-[100%] h-[80px] bg-navbar flex items-center">
      <div className="bg-logoBox w-[200px] h-[100%] flex items-center justify-center">
        <Link href={"/"} className="hover:opacity-50">
          <Image
            src={"/images/Kejaksaan_Agung_Republik_Indonesia_new_logo.png"}
            alt="aboutProfile"
            width={60}
            height={60}
          ></Image>
        </Link>
      </div>

      <h1 className="text-navbarText font-semibold text-[18px] ml-[8rem]">
        <a href={"/"}>HOME</a>
      </h1>
      <h1 className="text-navbarText font-semibold text-[18px] ml-[8rem]">
        <a href={"/result-export"}>RESULT & EXPORT </a>
      </h1>
      <h1 className="text-navbarText font-semibold text-[18px] ml-[8rem]">
        <a href={"/edit"}>EDIT</a>
      </h1>
    </nav>
  );
};
