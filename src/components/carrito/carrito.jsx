import React, { useState } from 'react';

function Carrito() {
  // Estado para almacenar los items seleccionados
  const [items, setItems] = useState([]);
  // Función para añadir un item al carrito
  const addItem = (item) => {
    setItems([...items, item]);
  };
  // Función para eliminar un item del carrito
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // Función para modificar la cantidad de un item en el carrito
  const modifyItem = (index, newQuantity) => {
    const newItems = [...items];
    newItems[index].quantity = newQuantity;
    setItems(newItems);
  };

  // Calcular el total de la compra
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity}{' '}
            <button onClick={() => removeItem(index)}>Eliminar</button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => modifyItem(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Carrito;