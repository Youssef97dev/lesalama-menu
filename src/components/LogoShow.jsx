import Image from "next/image";

const LogoShow = () => {
  return (
    <div className="p-3 border-[2px] border-[#d7b173] rounded-3xl bg-primary shadow-lg flex justify-center items-center">
      <Image
        src="/logo-salama-humberger-insta.png"
        alt="le salama marrakech"
        width={1000}
        height={1000}
        className="w-20 lg:w-28"
      />
    </div>
  );
};

export default LogoShow;
