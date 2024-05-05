import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Fotter/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <>
        <Header/>
        <section className="min-h-[calc(100vh-306px)] font-lato">
        <Outlet/>
        </section>
        <Footer/>
        <Toaster />
        </>
    );
};

export default Main;