import { useEffect, useState } from "react";

interface Container {
  id: string;
  color: string;
  name: string;
  description: string;
}

const ContainerList = () => {
  const [containers, setContainers] = useState<Container[]>([]);
  const [error, setError] = useState<Error|null>(null);
  const [message, setMessage] = useState<string|null>('');

  useEffect(() => {
    fetch("/api/containers")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(setContainers)
      .catch(setError);
  }, []);

    const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/containers/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Deletion error');
      }

      setContainers(prev => prev.filter(container => container.id !== id));
      setMessage('Container successfully deleted');
    } catch (err) {
      setMessage((err as Error).message);
    }
  };
    
 if (error)
    return <div className="text-red-500">Error loading containers.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Rubbish Containers</h2>
       {message && <p className="text-green-500">{message}</p>}
      <ul className="space-y-4">
        {containers.map((container: Container) => (
          <li
            key={container.id}
            className="p-4 rounded-lg shadow-md text-white"
            style={{ backgroundColor: container.color }}
          >
            <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{container.name}</h3>
            <button className="bg-red-600 hover:bg-red-700 px-2" onClick={()=>{handleDelete(container.id)}}>Remove</button>
            </div>
            <p>{container.description}</p>
            <div className="flex flex-col mt-4 space-y-2">
            <input aria-label="New item name" type="text" id="item_name" className="border rounded px-3 py-2"/>
            <button className="w-fit bg-gray-100 hover:bg-gray-200 text-black px-2 py-1 rounded" id="item_name" onClick={()=>{}}>Add Item</button>
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContainerList;


