import React, { useEffect, useState } from "react";
import { useList } from "../dinamicList/ListContext"; // Importar el hook del contexto

const DynamicList = () => {
  const { items, newItem, setNewItem, addItem, removeItem } = useList();

  const [data, setData] = useState([]);

  useEffect(() => {
    // Función que hace la solicitud a la API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ); // URL de la API externa
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json(); // Convertimos la respuesta en JSON
        setData(result?.filter((e) => e?.userId == 2)); // Guardamos los datos en el estado
      } catch (error) {
        // Si ocurre un error, lo guardamos en el estado
      } finally {
      }
    };

    fetchData(); // Llamamos a la función cuando el componente se monta
  }, []);

  return (
    <div style={{ marginTop: 50 }}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul style={{ marginTop: 30 }}>
        {items?.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Get api externa</p>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>{item?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
