import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify"
const MainLayout = () => {
    return(
        <>
            
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <ToastContainer />
        </>
    )
}
export default MainLayout