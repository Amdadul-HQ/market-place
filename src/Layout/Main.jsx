import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Fotter/Footer";

const Main = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Main;