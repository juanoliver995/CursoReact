import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/firebase";
import { getDoc, getDocs, where, query, collection } from "firebase/firestore";

const ItemDetailConteiner = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const productosCollection = collection(dataBase, "productos")
        const filtro = query(productosCollection, where("id", "==", Number(id)))
        const pedido = getDocs(filtro)
        pedido
            .then(res => setItem(res.docs[0].data()))
            .catch(() => toast.error("error al traer producto"))
            .finally(() => {

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