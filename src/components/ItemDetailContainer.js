import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                return response.json()

            })
            .then((respuesta) => {
                setItem(respuesta)
            })
            .catch((error) => {
                toast.error("Error al traer los Productos")
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])
    return (
        <section>
            <div>
                <ItemDetail item={item} />
            </div>
        </section>

    )
}


export default ItemDetailConteiner