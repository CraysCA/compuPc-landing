import mainImage from "../assets/main-image.png";
import gforce from "../assets/gforce.png";
import intel from "../assets/intel.png";
import nvidia from "../assets/nvidia.png";
import ryzen from "../assets/ryzen.png";
function Main() {
  return (
    <>
      <section className=" h-[648px] flex items-center px-[150px] gap-6">
        <article className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <p className="max-w-[670px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex  gap-3">
            <button className="p-3 bg-[#F72585] rounded-sm">
              See Propierties
            </button>
            <button className="p-3 bg-[rgba(49, 54, 58, 0.00)] rounded-sm border border-black">
              See Propierties
            </button>
          </div>
          <footer className="flex">
            <ul className="flex relative w-36">
              <li className="w-10 h-10 rounded-full bg-slate-600 "></li>
              <li className="w-10 h-10 rounded-full bg-slate-700 absolute left-6"></li>
              <li className="w-10 h-10 rounded-full bg-slate-800 absolute left-12"></li>
              <li className="w-10 h-10 rounded-full bg-slate-900 absolute left-[70px] ">
                <p className="flex justify-center pt-2">+200</p>
              </li>
            </ul>
            <div>
              <h4 className="font-bold">+250 Clientes</h4>
              <p>Satisfechos</p>
            </div>
          </footer>
        </article>
        <img src={mainImage} alt="main-image" className="w-[600px] h-[600px]" />
      </section>
      <footer className="h-[100px] bg-[#4CC9F0] flex justify-center items-center gap-8">
        <img src={gforce} alt="" className=" rounded-sm w-[174px] h-[70px]" />
        <img src={intel} alt="" className=" rounded-sm w-[174px] h-[70px]" />
        <img src={nvidia} alt="" className=" rounded-sm w-[174px] h-[70px]" />
        <img src={ryzen} alt="" className=" rounded-sm w-[174px] h-[70px]" />
      </footer>
    </>
  );
}

export default Main;
