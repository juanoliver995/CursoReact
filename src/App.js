import Main from "./components/Main"
import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer";
import MiProvider from "./components/context/CartContext";

function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
                <Footer />
                <ToastContainer />
            </BrowserRouter>
        </MiProvider>
    )

}

export default App