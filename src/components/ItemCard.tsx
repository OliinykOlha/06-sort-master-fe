import { Link } from "react-router-dom";
import type { Container } from "../commons/Container";
import type { Item } from "../commons/Item";

interface Props {
  item: Item;
  container?: Container;
  showLink?: boolean;
}

export default function ItemCard({ item, container, showLink = true}: Props) {
  return (
    <li
      key={item.id}
      style={{ backgroundColor: container?.color }}
      className="text-white p-4 rounded mb-2 w-150"
    >
      <div className="flex justify-between items-center">
        <h5 className="text-black font-bold">Name: {item.name}</h5>
        {showLink && <Link to={`/items/${item.id}`} >To item page</Link>}
      </div>
      {container && (
        <h6 className="text-sm italic text-black">
          Container: {container.name}
        </h6>
      )}
    </li>
  );
}
