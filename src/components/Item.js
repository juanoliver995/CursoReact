const Item = ({ item }) => {
    return (
        <article className="conteiner__products-cards">
            <h2>{item.title}</h2>
            <img src={item.image}></img>
            <p>Precio: ${item.price}</p>
            <a> Ver detalle</a>
        </article>
    )
}

export default Item