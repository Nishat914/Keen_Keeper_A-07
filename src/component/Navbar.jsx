import logoImg from "../assets/logo.png"
import homeImg from "../assets/home1.png"
import timelineImg from "../assets/Clock.png"
import chartImg from "../assets/ChartLine.png"
import { NavLink } from "react-router"
const Navbar = () => {
    const Links =  (
        <>
            <li>
                <NavLink to={"/"}
                className={({isActive}) => `font-semibold  mr-2 ${ isActive ? "text-white  bg-[#244D3F]" : " text-gray-400 bg-gray-100"}`}
                ><img src={homeImg} alt="" />Home</NavLink>
            </li>
            <li>
                <NavLink to={"/timeline"} 
                className={({isActive}) => `font-semibold  mr-2 ${ isActive ? "text-white  bg-[#244D3F]" : " text-gray-400 bg-gray-100"}`}
                ><img src={timelineImg} alt="" />Timeline</NavLink>
            </li>
            <li>
                <NavLink to={"/stats"}
                className={({isActive}) => `font-semibold  mr-2 ${ isActive ? "text-white  bg-[#244D3F]" : " text-gray-400 bg-gray-100"}`}
                ><img src={chartImg} alt="" />Stats</NavLink>
            </li>
        
        </>
    )
    return(
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><img src={logoImg} alt="" /></a>
                </div>
                 <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar