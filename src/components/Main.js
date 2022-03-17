import { Route, Routes } from "react-router-dom";
import ItemDetailConteiner from "./ItemDetailContainer";
import ItemListConteiner from "./ItemListConteiner";
import ShoppingCart from "./ShoppingCart";

const main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ItemListConteiner />} />
                <Route path="/ShoppingCart" element={<ShoppingCart />} />
                <Route path="/categoria/:idCategoria" element={<ItemListConteiner />} />
                <Route path="/producto/:id" element={<ItemDetailConteiner />} />
            </Routes>
        </>

    )
}
export default main