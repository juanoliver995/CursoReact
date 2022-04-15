# Free Market

Hola mi nombre es Juan Oliver y este es mi *Proyecto de React* llamado _Free Market_, este proyecto consta de un ecommerce sencillo, con funcionalidades basicas.

## Funcionalidades

1. Los productos son traidos desde *Firestore* y mostrados en el home a tarves del componente ItemListConteiner que a su vez tiene la capacidad de mostrar los productos filtrados por categoria segun lo que desee el usuario.
2. Cada producto posee un boton para ver los detalles del producto, el cual los dirige hacia la url del producto en cuestion, en esta se renderiza el *ItemDetail* que es el componenete que posee toda la informacion detallada del producto seleccionado por el usuario.
3. Dentro de este componente se renderiza otro llamado *ItemCount* que es el contador para que el usuario elija la cantidad de productos que desee seleccionar y agregarlos al carrito.
4. Luego de haber elegido la cantidad el usuario tiene 2 opciones, la primera es ir al home y seguir comprando los productos que desee y la segunda es ir al carrito.
5. Cuando el usuario se dirige al carrito se renderiza otro componenete llamado *ShoppingCart* este es el encargado de recibir toda la informacion sobre los productos que el usuario a escogido previamente y mostrarlos en pantalla, ademas de esto el componenete *ShoppingCart* es el encargado de toda la logica de compra de la pagina, consume esta logica del *Contexto creado* para tener las funcionalidades necesarias como agregar productos, borrarlo o finalizar la compra.
6. Una vez presionado el boton para finalizar la compra se abrirar otro componente que es el encargado de tomar todos los datos del cliente y enviarlos a la base de datos este componente lo llame *Form*.
7. Una vez llenado el formulario con los datos del usuario se renderiza el ultimo componente del proceso de compra que es el *InfoCompra* este componenete capta toda la informacion del usuario que recaudo el Form para mostrar un mensaje en pantalla agreadeciendo por la compra y mostrando detalles sobre la entrega de su pedido.

## Dependencias Utilizadas

- *firebase*: ^9.6.10,
- *rc-rate*: ^2.9.1,
- *react*: ^17.0.2,
- *react-dom*: ^17.0.2,
- *react-router-dom*: ^6.2.2,
- *react-scripts*: 5.0.0,
- *react-toastify*: "^8.2.0",

### Uso de las depencias 

- Firebase es utilizada como base de datos donde contenemos los productos por un lado y por el otro los datos de los usuarios que ya han realizado compras
- Rc rate es utilizado para las valoraciones (stars) que se encuntran em el ItemDetail
- React y React-dom es la libreria utilizada para el proyecto
- React-router-dom es utilizada para la creacion de los links y rutas dentro del sitio, esta libreria proporciona las herramientas para transformar la platadorma en una SPA en simples pasos
- React-toostify es utilizado para los mensajes de error o succes en el caso que sea necesario en la mayoria de las promesas y peticiones a la base de datos.

## Descarga e instalacion del proyecto 

1. Para descargar mi proyecto deberas entrar a mi perfil de [gitHub](https://github.com/juanoliver995/CursoReact)
2. Descargar el proyecto e instalarlo con npm instal
3. Luego lo inicias con npm init
4. Recuerda chequear que todas las dependencias esten instaladas correctamente
5. Para finalizar npm start y ya tiene el proyecto corriendo en tu navegador
