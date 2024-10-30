import Image from "next/image";
import Check from "../../public/assets/check.svg";

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center text-[24px] font-medium text-2xl lg:text-[42px]">Flexible plans for you</h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">No Hiden Fees!</p>

      <div className="flex flex-col gap-x-[24px] gap-y-6 lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328eb] lg:text-xl">Free Trial</h3>
            <p className="pt-[12px] text-[#36485c] lg:text-[18px]">Perfect for testing waters</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              0$ <span className="text-[#5f7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5f7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Start Trial</button>
        </div>

        <div className="w-full rounded-[8px] bg-[#4328eb] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-white lg:text-xl">Business</h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">Perfect for small business</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-white">
              500$ <span className="text-[#F4F8FA]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>

              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit.
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328eb] lg:text-xl">Enterprise</h3>
            <p className="pt-[12px] text-[#36485c] lg:text-[18px]">Perfect for big companies</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Costum</h2>
            <p className="pt-4 text-[16px] text-[#36485c]">nulla necessitatibus adipisci error ratione iusto, cumque, eos iste. Quam, nobis qui.</p>
            <p className="pt-2 text-[16px] text-[#36485c]"> commodi sed provident facilis aperiam alias exercitationem ullam quibusdam eligendi. Nisi, ea deleniti!</p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
