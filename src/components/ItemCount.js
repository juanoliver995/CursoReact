import { useState } from "react"

const ItemCount = ({ initial, stock }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock)
            setCount(count + 1)
    }
    const restar = () => {
        if (count != 1)
            setCount(count - 1)
    }


    return (
        <div className="contador">
            <div>
                <h2 className="count">{count}</h2>
            </div>
            <div>
                <button className="botones" onClick={restar} >-</button>
                <button className="botones" onClick={sumar}>+</button>
                <button >Agregar al carrito</button>
            </div>
        </div >
    );
}

export default ItemCount