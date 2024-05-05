import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Fotter/Footer";

const Main = () => {
    return (
        <>
        <Header/>
        <section className="min-h-[calc(100vh-306px)]">
        <Outlet/>
        </section>
        <Footer/>
        </>
    );
};

export default Main;