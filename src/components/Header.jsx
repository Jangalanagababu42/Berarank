import lovdlogo from '../assets/lovdlogo.svg';

function Header() {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 h-24 py-0 px-[160px] gap-x-24 ">
        <div className="col-start-1  w-[136px] h-[45px] gap-x-[12px] py-[23.5px]">
          <img src={lovdlogo} alt="lovdlogo" />
          <span className="w-[74px] h-[45px] font-poppins font-semibold text-[30px]">Lovd</span>
        </div>
        <div>search</div>
        <div>buttons</div>
      </div>
    </>
  );
}

export default Header;
