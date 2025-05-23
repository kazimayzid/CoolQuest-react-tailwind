import Container from "../Container/Container";
import logo from "../../assets/logo.png";
export default function Navba() {
  const navItem = ["About Us", "Services", "Past Work", "Reviews"];

  return (
    <>
      <div className="fixed w-full">
        <Container>
          <div>
            <div className="flex justify-between items-center bg-white mt-[26px] py-[7px] pr-[13px] pl-[27px] rounded-[35px]">
              <div>
                <a href="#">
                  <img src={logo} alt="#logo" />
                </a>
              </div>
              <div className="flex gap-x-[20px]">
                {navItem.map((items) => (
                  <a
                    className="text-primary font-primary font-semibold text-lg leading-6 tracking-[.02%] "
                    href="#"
                  >
                    {items}
                  </a>
                ))}
              </div>
              <div className="">
                <a
                  className="block font-primary font-semibold text-lg leading-6 tracking-[.02%] text-white px-[24px] py-[16px] bg-background rounded-[28px]"
                  href="#"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
