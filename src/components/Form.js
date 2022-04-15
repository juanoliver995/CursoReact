import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { dataBase } from "../firebase/firebase"
import { contexto } from "./context/CartContext"
import InfoCompra from "./InfoCompra"


const Form = () => {

    const { carrito, total } = useContext(contexto)

    const [infoUsuario, setInfoUsuario] = useState({})
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [form, setForm] = useState(false)

    const terminarCompra = (e) => {
        e.preventDefault()
        const orden = {
            buyer: {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email,
                direccion: direccion,
            },
            producto: carrito,
            date: serverTimestamp(),
            total: total

        }
        const ordenesCollection = collection(dataBase, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)
        pedido
            .then(res => {
                toast.success(`Finalizando Compra ID: ${res.id}`)
            }).catch(error => {
                toast.error("error")
            }).finally(() => {
                setForm(true)
                estadoBuyer()

            })

    }

    const estadoBuyer = () => {
        setInfoUsuario({ nombre, apellido, telefono, email, direccion })
    }

    return (

        <div className="contenedorFormulario">
            {form == false ?
                <form className="formulario" >
                    <h1>Formulario de Compra</h1>
                    <label htmlFor="nombre">Nombre</label>
                    <input className="inputs" type="text" id="nombre" defaultValue={nombre} onChange={(e) => setNombre(e.target.value)} />
                    <label htmlFor="apellido">Apellido</label>
                    <input className="inputs" type="text" id="apellido" defaultValue={apellido} onChange={(e) => setApellido(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input className="inputs" type="email" id="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="telefono">Telefono</label>
                    <input className="inputs" type="tel" id="telefono" defaultValue={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <label htmlFor="direccion">Direccion</label>
                    <input className="inputs" type="text" id="direccion" defaultValue={direccion} onChange={(e) => setDireccion(e.target.value)} />
                    <button type="submit" onClick={terminarCompra}>Terminar Compra</button>
                </form>
                : <InfoCompra usuario={infoUsuario} />}
        </div>

    )
}

export default Form