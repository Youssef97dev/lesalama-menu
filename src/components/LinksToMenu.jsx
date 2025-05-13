import React from "react";
import Link from "next/link";

const LinksToMenu = () => {
  return (
    <div className="w-full flex flex-col justify-normal items-center text-center gap-5">
      <Link
        href="/lunch"
        className="w-full p-5 lg:p-8 bg-[#d7b173] text-background rounded-md text-lg uppercase"
      >{`Lunch`}</Link>
      <Link
        href="/drinks"
        className="w-full p-5 lg:p-8 bg-[#d7b173] text-background rounded-md text-lg uppercase"
      >{`Drinks`}</Link>
      <Link
        href="/breakfast"
        className="w-full p-5 lg:p-8 bg-[#d7b173] text-background rounded-md text-lg uppercase"
      >{`Breakfast`}</Link>
    </div>
  );
};

export default LinksToMenu;
