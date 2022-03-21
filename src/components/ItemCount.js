import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)
    const sumar = () => {
        if (count < stock)
            setCount(count + 1)
    }
    const restar = () => {
        if (count != 1)
            setCount(count - 1)
    }
    const agregar = () => {
        onAdd(count)
    }

    return (
        <div>
            <div className="contador">
                <button className="botones buttonDecrement" onClick={restar} >-</button>
                <p className="count">{count}</p>
                <button className="botones buttonIncrement" onClick={sumar}>+</button>
            </div>
            <div>
                <button className="buttonAdd" onClick={agregar}>Agregar al carrito</button>
            </div>
        </div >
    );
}

export default ItemCount