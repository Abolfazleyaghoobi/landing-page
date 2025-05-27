import Navbar from "../navBar/Navbar";
import imgHeader from "../../assets/img/imageHeader.png"
function Header() {
    return ( <>
    <Navbar/>
<div className="flex mt-5 rounded-[12px]
bg-linear-[var(--color-gradient-header)] 
dark:bg-linear-[var(--color-gradient-header-darkMode)] 
xxl:h-[515px]
xl:h-[515px]
lg:h-[470px]">
    <div className="w-[40%] flex  flex-col p-10">
        <p className="">welcome to Realstate</p>
        <h1 className="mt-4 text-[60px] leading-[68px]">Manage Your Property</h1>
        <p className="mt-4">
            your will have everything nearby supermarket,buses,station,the carmen neighborhood, etc
        </p>
        <div className="mt-4 rounded-full overflow-hidden bg-red-400 w-[380px] flex relative">
            <input className="bg-white p-3 w-[75%] focus:none outline-none" type="email" name="" id="" />
           <div className="bg-black text-white rounded-full absolute  right-[0px] xl:top-[0px] lg:top-[-3px]">
           <button className="  p-3">Get a Quote</button>
           </div>
        </div>
    </div>
    <div className="w-[60%] relative">
        <img className="absolute w-[650px] right-0 top-[-12px]" src={imgHeader} alt="" />

    </div>
</div>
    
    </> );
}

export default Header;