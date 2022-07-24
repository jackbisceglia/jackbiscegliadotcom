import Image from "next/Image";

function Footer() {
  return (
    <>
      {/* <div
        className={` hover:transition-all hover:duration-200 hover:ease-in h-10  ${
          showGopher ? "relative item-detail" : "hidden"
        }`}
      >
        <Image
          src={"/images/gopher.png"}
          alt="gopher"
          layout={"fill"}
          objectFit={"contain"}
        />
      </div> */}
      <footer className="w-full py-1 text-sm font-normal text-center text-purple-400 ">
        <h3 className="pb-4">jack bisceglia - 2022 🙏</h3>
      </footer>
    </>
  );
}

export default Footer;
