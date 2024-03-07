import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import pcIcon from "../assets/pc-icon.png";

function ProductSection() {
  return (
    <>
      <section className=" h-[648px] flex flex-col items-center px-[150px] mt-[300px]">
        <div>
          <article className="flex items-center justify-center gap-2">
            <img src={Product1} alt="" className="w-[471px] h-auto" />
            <div className="max-w-[600px]">
              <h3 className="font-bold text-3xl  pb-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </article>
          <article className="flex items-center justify-center gap-2">
            <div className="max-w-[600px]">
              <h3 className="font-bold text-3xl pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun
              </h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src={Product2} alt="" className="w-[471px] h-auto" />
          </article>
        </div>
        <div className="pt-32">
          <div className="text-center flex flex-col items-center pb-16">
            <h2 className="font-bold text-3xl pb-5">
              Lorem ipsum
              <span className="text-[#F72585]"> dolor sit amet,</span>
            </h2>
            <p className="text-sm w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex gap-4 pb-10">
            <article className="w-[320px] h-[340px] border border-white rounded-xl flex flex-col items-center justify-center gap-3">
              <img src={pcIcon} alt="" className="h-[100px] w-[50px]" />
              <h3 className="font-bold text-3xl">Lorem Ipsum</h3>
            </article>
            <article className="w-[320px] h-[340px] border border-white rounded-xl flex flex-col items-center justify-center gap-3">
              <img src={pcIcon} alt="" className="h-[100px] w-[50px]" />
              <h3 className="font-bold text-3xl">Lorem Ipsum</h3>
            </article>
            <article className="w-[320px] h-[340px] border border-white rounded-xl flex flex-col items-center justify-center gap-3">
              <img src={pcIcon} alt="" className="h-[100px] w-[50px]" />
              <h3 className="font-bold text-3xl">Lorem Ipsum</h3>
            </article>
            <article className="w-[320px] h-[340px] bg-[#4CC9F0] border border-white rounded-xl flex flex-col items-center justify-center gap-3">
              <h3 className="font-bold text-3xl">Lorem Ipsum</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <button className="p-3 bg-[#F72585] rounded-sm">
                See Propierties
              </button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSection;
