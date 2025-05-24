import Container from "../Container/Container";
import bannerBG from "../../assets/bannerBG.jpg";
import { BsPatchCheck } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Banner() {
  const bannerDes = [
    {
      icon: <BsPatchCheck />,
      pra: "Certified & Experienced Technicians",
    },
    {
      icon: <IoAlarmOutline />,
      pra: "Fast, Reliable Service",
    },
    {
      icon: <AiOutlineFire />,
      pra: "Transparent, Affordable Pricing",
    },
  ];
  return (
    <>
      <div className="bg-[url(assets/bannerBG.jpg)] bg-cover bg-center bg-no-repeat px-14">
        <Container>
          <div className="pt-[117px]">
            <div className="left">
              <div>
                <h1 className="w-[600px] font-primary font-bold text-[64px] leading-[72px] tracking-[.02%] text-white mt-[74px]">
                  Reliable HVAC for Every Season
                </h1>
                <div className="flex flex-col gap-y-[10px] mt-[20px] mb-[40px]">
                  {bannerDes.map((items) => (
                    <div className="flex items-center gap-x-2">
                      <span className="text-white">{items.icon}</span>
                      <p className="font-secondary font-normal text-[16px] leading-6 tracking-[.01%] text-white">
                        {items.pra}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-[10px]">
                <input
                  className="w-[180px] border-background rounded-[4px] border-[.5px] py-[10px] pl-[12px] placeholder:font-secondary placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:tracking-[.02%] placeholder:text-secondary placeholder:py-[10px] placeholder:pl-[12px] focus:outline-none"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-[180px] border-background rounded-[4px] border-[.5px] py-[10px] pl-[12px] placeholder:font-secondary placeholder:font-normal placeholder:text-[14px] placeholder:leading-[20px] placeholder:tracking-[.02%] placeholder:text-secondary placeholder:py-[10px] placeholder:pl-[12px] focus:outline-none"
                  type="number"
                  placeholder="Phone"
                />
                <div className="relative inline-block w-[180px]">
                  <select
                    className="appearance-none w-full border-background rounded-[4px] border-[.5px] py-[10px] pl-[12px] font-secondary font-normal text-[14px] leading-[24px] tracking-[.02%] text-secondary outline-none"
                    name=""
                    id="2"
                  >
                    <option
                      className="text-secondary bg-background font-secondary text-[14px]"
                      value="2"
                    >
                      Service
                    </option>
                    <option
                      className="text-secondary bg-background font-secondary text-[14px]"
                      value="2"
                    >
                      Product
                    </option>
                    <option
                      className="text-secondary bg-background font-secondary text-[14px]"
                      value="2"
                    >
                      Others
                    </option>
                  </select>
                  <div className="absolute top-1/2 -translate-1/2 right-[40%]">
                    <RiArrowDropDownLine className="text-secondary text-[30px]" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
}
