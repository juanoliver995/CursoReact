import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { toast } from "react-toastify"
import { useParams } from "react-router-dom";

const ItemListConteiner = (nombre) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()

    useEffect(() => {

        toast.info("Cargando productos...")

        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json()
            })
            .then((respuesta) => {
                toast.dismiss()
                if (idCategoria) {
                    const filtrado = respuesta.filter((product) => product.category === idCategoria)
                    setItems(filtrado)
                } else {
                    setItems(respuesta)
                }
            })
            .catch((error) => {
                toast.error("Error al cargar producto")
            })
            .finally(() => {
                setLoading(false)
            })

    }, [idCategoria])


    return (

        <main>
            <div className="conteiner__main">
                <h1 className="conteiner__main-titulo">Bienvenido a nuestra tienda {nombre.nombre}</h1>
                <p className="conteiner__main-texto">Actualmente nuestro sitio se encuentra en construccion regresa luego </p>
            </div>
            <div >
                <>
                    <ItemList items={items} />
                </>
            </div>
        </main>

    )
}


export default ItemListConteiner