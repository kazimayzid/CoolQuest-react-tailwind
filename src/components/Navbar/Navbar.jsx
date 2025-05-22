import Container from "../Container/Container";
import logo from "../../assets/logo.png";
export default function Navba() {
  const navItem = ["About Us", "Services", "Past Work", "Reviews"];

  return (
    <>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              <img src={logo} alt="#logo" />
            </a>
          </div>
          <div className="flex gap-x-[20px]">
            {navItem.map((items) => (
              <a className="text-primary font-primary font-semibold text-lg leading-6 tracking-[.02%] " href="#">{items}</a>
            ))}
          </div>
          <div>
            <a className="" href="#">Get Free Quote</a>
          </div>
        </div>
      </Container>
    </>
  );
}
