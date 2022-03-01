import Footer from "./components/Footer"
import ItemListConteiner from "./components/ItemListConteiner"
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListConteiner nombre="Juan" />
            <Footer />
        </>
    )
}

export default App