import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import AddCard from "./AddCard";

export default function Column({ column, cards, setData }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: { columnId: column.id },
  });

  return (
    <div
      ref={setNodeRef}
      className="w-72 bg-gray-100 rounded-lg p-4 flex flex-col"
    >
      <h2 className="font-semibold mb-3">{column.title}</h2>

      <div className="flex-1 space-y-3">
        {cards.map((card) => (
          <Card key={card.id} card={card} columnId={column.id} />
        ))}
      </div>

      <AddCard columnId={column.id} setData={setData} />
    </div>
  );
}
