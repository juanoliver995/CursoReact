import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListConteiner = (nombre) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json()

            })
            .then((respuesta) => {
                setItems(respuesta)
            })
            .catch((error) => {
                ("esto es un error")
            })
            .finally(() => {
                setLoading(false)
            })

    })


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