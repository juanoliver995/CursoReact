import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailConteiner = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then((response) => {
                return response.json()

            })
            .then((respuesta) => {
                setItem(respuesta)
            })
            .catch((error) => {
                ("esto es un error")
            })
            .finally(() => {
                setLoading(false)
            })

    })
    return (
        <section>
            <div>
                <ItemDetail item={item} />
            </div>
        </section>

    )
}

export default ItemDetailConteiner