import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { toast } from "react-toastify"
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";



const ItemListConteiner = () => {

    const [items, setItems] = useState([])
    const { idCategoria } = useParams()



    useEffect(() => {
        toast.info("Cargando productos...")
        const productosCollection = collection(dataBase, "productos")
        const pedido = getDocs(productosCollection)

        if (!idCategoria) {
            pedido
                .then((res) => {
                    toast.dismiss()
                    const resultadoProductos = res.docs.map((doc) => {
                        return doc.data()
                    })
                    setItems(resultadoProductos)
                })
                .catch((error) => {
                    toast.error("Error al cargar producto")
                })
                .finally(() => {

                })
        } else {
            const filtro = query(productosCollection, where("category", "==", idCategoria))
            const pedidoFiltrado = getDocs(filtro)

            pedidoFiltrado
                .then((res) => {
                    toast.dismiss()
                    const resultadoProductos = res.docs.map((doc) => {
                        return doc.data()
                    })
                    setItems(resultadoProductos)
                })
                .catch((error) => {
                    toast.error("Error al cargar producto")
                })
                .finally(() => {

                })
        }

    }, [idCategoria])


    return (
        <main>
            <div className="contenedor">
                <>
                    <ItemList items={items} />

                </>
            </div>
        </main>

    )
}


export default ItemListConteiner