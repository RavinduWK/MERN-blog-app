import Footer from "./components/Footer";
import Header from "./components/Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <main>
                <Header/>
                <div className="content">
                    <Outlet />
                </div>
            </main>
            <Footer/>
        </div>
        
    );
}