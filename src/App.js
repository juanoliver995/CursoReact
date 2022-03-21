import Main from "./components/Main"
import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Main />
                <Footer />
                <ToastContainer />
            </BrowserRouter>
        </>
    )

}

export default App