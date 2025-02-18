import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";

export function Cta() {
  return (
    <div className="w-full rounded-[16px] bg-gradient-to-r from-red-500 to-orange-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px lg:py-[89px]">
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px]">Monitor your website like A PRO</h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">Join over 800+ happy site owners boosting productivity and efficiency</p>
      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium">Try For Free</button>
        <button className="flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0">
          Contact Sales
          <span>
            <Image src={Arrow} alt="learn more" />
          </span>
        </button>
      </div>
    </div>
  );
}
