import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"
const MainLayout = () => {
    return(
        <>
            <div className="text-4xl text-amber-700">Mainlayout</div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            
        </>
    )
}
export default MainLayout