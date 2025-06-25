import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Item } from "../commons/Item";
import ItemCard from "../components/ItemCard";
import type { Container } from "../commons/Container";

const SingleItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [error, setError] = useState<string | null>("");
  const [containers, setContainers] = useState<Container []>([]);

  useEffect(() => {

    fetch(`/api/items/${id}`)
      .then((res) => {
        return res.json();
      })
      .then(setItem)
      .catch(setError);

    fetch(`/api/containers`)
    .then((res) => {
      return res.json()
    })
    .then(setContainers)
    .catch(setError);
  }, [id]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
 
  const container = containers.find((c)=> c.id === item?.containerId);

  return <div>
   {item && <ItemCard item={item} container={container} showLink={false}/> }
  </div>;
};

export default SingleItemPage;
