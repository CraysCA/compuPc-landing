import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <>
      <div className="w-full bg-[#161618] flex flex-row shrink-0 justify-between items-center px-32 h-20">
        <img src={Logo} alt="logo" />

        <nav>
          <ul className="flex flex-row text-white gap-12 ">
            <li>Navegation 1</li>
            <li>Navegation 2</li>
            <li>Navegation 3</li>
            <li>Navegation 4</li>
            <li>Navegation 4</li>
            <li>
              <a href="#" className="p-3 bg-[#F72585] rounded-sm">
                See Propierties
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
