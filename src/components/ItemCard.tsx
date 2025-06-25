import type { Container } from "../commons/Container";
import type { Item } from "../commons/Item";

interface Props {
  item: Item;
  container?: Container;
}

export default function ItemCard({ item, container }: Props) {
  return (
    <li
      key={item.id}
      style={{ backgroundColor: container?.color }}
      className="text-white p-4 rounded mb-2 w-150"
    >
      <h5 className="text-black font-bold">Name: {item.name}</h5>
      {container && (
        <h6 className="text-sm italic text-black">
          Container: {container.name}
        </h6>
      )}
    </li>
  );
}
