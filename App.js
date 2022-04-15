import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom"
import MiProvider from "./components/context/CartContext";
import Home from "./components/Home";

function App() {

    return (
        <>
            <MiProvider>
                <BrowserRouter>
                    <Home />
                    <ToastContainer />
                </BrowserRouter>
            </MiProvider>
        </>
    )

}

export default App