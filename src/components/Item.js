const Item = ({ item }) => {
    return (
        <div className="conteiner__products-card">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <h2>{item.price}</h2>
        </div>
    )
}

export default Item