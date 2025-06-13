import { useEffect, useState } from "react";

interface Item {
  id: string;
  name: string;
  containerId: string;
}

interface Container {
  id: string;
  color: string;
  name: string;
  description: string;
}

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
          const container = containers.find(c => c.id === item.containerId);
          return (
            <li
              key={item.id}
              style={{ backgroundColor: container?.color}}
              className="text-white p-4 rounded mb-2 w-150"
            >
              <h5 className="text-black font-bold">{item.name}</h5>
              {container && (
                <h6 className="text-sm italic text-black">Container: {container.name}</h6>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
 
};

export default ItemList;
