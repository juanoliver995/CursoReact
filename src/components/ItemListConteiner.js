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


        if (!idCategoria) {
            const productosCollection = collection(dataBase, "productos")
            const pedido = getDocs(productosCollection)
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
            const productosCollection = collection(dataBase, "productos")
            const filtro = query(productosCollection, where("category", "==", idCategoria))
            const pedido = getDocs(filtro)
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
        }

    }, [idCategoria])


    return (
        <main>
            <div >
                <>
                    <ItemList items={items} />
                </>
            </div>
        </main>

    )
}


export default ItemListConteiner