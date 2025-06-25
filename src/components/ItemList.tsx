import { useEffect, useState } from "react";
import type { Item } from "../commons/Item";
import type { Container } from "../commons/Container";
import ItemCard from "./ItemCard";

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState(null);
  const [containers, setContainers] = useState<Container[]>([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(setItems)
      .catch(setError);

    fetch('/api/containers')
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then(setContainers)
    .catch(setError);
  }, []);

  if (error)
    return <div className="text-red-500">Error loading items.</div>;

   return (
    <div>
     <ul>
      {items.map((item) => {
        const container = containers.find((c) => c.id===item.containerId)
        return <ItemCard key={item.id} item={item} container={container}/>
      })}
     </ul>
    </div>
  );
 
};

export default ItemList;
