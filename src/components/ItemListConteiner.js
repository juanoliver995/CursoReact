const ItemListConteiner = (nombre) => {
    return (
        <main>
            <div className="conteiner__main">
                <h1 className="conteiner__main-titulo">Bienvenido a nuestra tienda {nombre.nombre}</h1>
                <p className="conteiner__main-texto">Actualmente nuestro sitio se encuentra en construccion regresa luego </p>
            </div>
        </main>
    )
}

export default ItemListConteiner