import { useEffect, useState } from "react";
import products from "../products";
import ItemList from "./ItemList";

const ItemListConteiner = (nombre) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 3000)
        })
        pedido.then((resultado) => {
            setItems(resultado)
        })
            .catch((error) => {
                console.log("algo salio mal")
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