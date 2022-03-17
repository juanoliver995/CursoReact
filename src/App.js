import Main from "./components/Main"
import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Main />
                <ToastContainer />
            </BrowserRouter>
        </>
    )

}

export default App