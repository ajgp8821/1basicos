import React from 'react';
import Producto from './Producto';
import './carrito.css';

const Carrito = ( {carrito, setProducto} ) => (
    <div className="carrito">
        <h2>Tu carrito de compra</h2>
        {carrito.length === 0
        ?
            <p>No hay elementos en el carrito</p>
        : carrito.map(producto =>(
            <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                setProducto={setProducto}
            />
        ))}
    </div>
);
 
export default Carrito;
