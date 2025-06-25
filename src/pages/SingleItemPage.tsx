import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Item } from "../commons/Item";
import ItemCard from "../components/ItemCard";

const SingleItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Item | undefined>(undefined);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    fetch(`/api/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(setItem)
      .catch(setError)
  }, [id]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return <div>
   {item && <ItemCard item={item} />}
  </div>;
};

export default SingleItemPage;
